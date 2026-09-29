/* ===== PRIVATE OFFICE DAILY OPERATIONS =====
   IMPORTANT: This frontend gate is NOT real authentication.
   Production must verify OTP, role/permission, session expiry and authorization server-side.
*/
const OFFICE_STORAGE="aajsekaam_office_daily_v1";
let officeOtp={code:null,expires:0,mobile:null,role:null};
let officeSession=false;

function todayISO(){return new Date().toISOString().slice(0,10)}
function officeRecords(){return read(OFFICE_STORAGE)}
function writeOfficeRecords(list){write(OFFICE_STORAGE,list)}
function officeAccessRequested(){
  return new URLSearchParams(location.search).get("office")==="1";
}
function openOfficeAccess(){
  document.body.classList.add("office-mode");
  $("officeOperations").setAttribute("aria-hidden","false");
  window.scrollTo({top:0,behavior:"smooth"});
}
function requestOfficeOTP(){
  const mobile=normalizeMobile($("officeMobile").value);
  if(mobile.length!==10){toast("Enter a valid 10-digit authorized mobile number.",true);return}
  const role=$("officeRole").value;
  const a=new Uint32Array(1);crypto.getRandomValues(a);
  const code=String(100000+(a[0]%900000));
  officeOtp={code,expires:Date.now()+5*60*1000,mobile,role};
  $("officeOtpArea").classList.remove("hidden");
  $("officeOtpStatus").textContent="Verification request prepared. Production OTP must be issued and verified by the secure backend.";
  $("officeOTP").value="";
  // Local fallback remains for development only; never treat this browser-generated value as production authentication.
  $("officeOtpStatus").dataset.devCode=code;
  toast("Verification request prepared.");
}
function verifyOfficeOTP(){
  const entered=$("officeOTP").value.trim();
  if(!officeOtp.code||Date.now()>officeOtp.expires){toast("Verification expired. Request a new code.",true);return}
  if(entered!==officeOtp.code){toast("Verification failed.",true);return}
  officeSession=true;
  $("officeLoginPanel").classList.add("hidden");
  $("officeWorkspace").classList.remove("hidden");
  $("officeDate").value=todayISO();
  renderOfficeRecords();
  toast("Authorized office session opened.");
}
function officeLogout(){
  officeSession=false;officeOtp={code:null,expires:0,mobile:null,role:null};
  $("officeWorkspace").classList.add("hidden");
  $("officeLoginPanel").classList.remove("hidden");
  $("officeOTP").value="";
}
function requireOfficeSession(){if(!officeSession){toast("Authorized office login required.",true);return false}return true}
function saveOfficeWork(e){
  e.preventDefault();if(!requireOfficeSession())return;
  const date=$("officeDate").value||todayISO();
  const existing=officeRecords().find(r=>r.date===date&&r.closed);
  if(existing){toast("This day is locked. Use Authorized Correction.",true);return}
  const name=$("officeWorkName").value.trim();
  if(!name){toast("Enter Exact Work / Service Name.",true);return}
  const list=officeRecords();
  const r={id:makeId("DWR"),date,district:$("officeDistrict").value.trim(),block:$("officeBlock").value.trim(),
    status:$("officeWorkStatus").value,workName:name,workers:+$("officeWorkers").value||0,mistri:+$("officeMistri").value||0,
    payment:+$("officePayment").value||0,reference:$("officeReference").value.trim(),note:$("officeNote").value.trim(),
    closed:false,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
  list.unshift(r);writeOfficeRecords(list);renderOfficeRecords();$("officeWorkForm").reset();$("officeDate").value=date;
  toast("Daily work entry saved: "+r.id);
}
function renderOfficeRecords(){
  if(!officeSession)return;
  const list=officeRecords();
  const today=todayISO(),todayRows=list.filter(r=>r.date===today);
  $("officeOpenCount").textContent=todayRows.filter(r=>!r.closed).length;
  $("officeCompleteCount").textContent=list.filter(r=>r.status==="completed").length;
  $("officePendingCount").textContent=list.filter(r=>r.status==="pending").length;
  $("officeLockedCount").textContent=new Set(list.filter(r=>r.closed).map(r=>r.date)).size;
  const wrap=$("officeRecordsList");
  if(!list.length){wrap.innerHTML='<div class="empty">No Daily Work Records yet.</div>';return}
  wrap.innerHTML=list.slice(0,100).map(r=>`
    <div class="officeRecord ${r.closed?"locked":""}">
      <div class="updateItemHead"><strong>${safe(r.date)} — ${safe(r.workName)}</strong>${r.closed?'<span class="lockBadge">🔒 CLOSED / LOCKED</span>':'<span class="officeStatus">● OPEN</span>'}</div>
      <div class="smallNote">${safe(r.district)} • ${safe(r.block)} • ${safe(r.status)} • Workers ${r.workers} • Mistri ${r.mistri} • Payment ₹${Number(r.payment||0).toFixed(2)}</div>
      ${r.reference?'<div class="smallNote">Reference: '+safe(r.reference)+'</div>':''}
      ${r.note?'<div class="smallNote">'+safe(r.note)+'</div>':''}
      <div class="smallNote">Created: ${safe(new Date(r.createdAt).toLocaleString())}</div>
    </div>`).join("");
}
function closeOfficeDay(){
  if(!requireOfficeSession())return;
  const date=$("officeDate").value||todayISO(),list=officeRecords();
  if(!list.some(r=>r.date===date)){toast("Add at least one daily entry before closing.",true);return}
  if(list.some(r=>r.date===date&&r.closed)){toast("This day is already locked.");return}
  if(!confirm("Close "+date+"? After closing, normal editing/deleting will be disabled."))return;
  const now=new Date().toISOString();
  const updated=list.map(r=>r.date===date?{...r,closed:true,closedAt:now,closedByRole:officeOtp.role||"authorized"}:r);
  writeOfficeRecords(updated);renderOfficeRecords();toast("Daily Work Record "+date+" is now LOCKED.");
}
function requestOfficeCorrection(){
  if(!requireOfficeSession())return;
  const date=$("officeDate").value||todayISO();
  const reason=prompt("Enter correction reason for the authorized audit trail:");
  if(!reason||!reason.trim())return;
  const key="aajsekaam_office_corrections_v1",logs=read(key);
  logs.unshift({id:makeId("COR"),date,reason:reason.trim(),requestedAt:new Date().toISOString(),requestedByRole:officeOtp.role||"authorized",status:"PENDING_APPROVAL"});
  write(key,logs);toast("Correction request recorded for authorized approval.");
}
function printOfficeRecords(){
  if(!requireOfficeSession())return;
  const list=officeRecords();
  if(!list.length){toast("No office records to print.",true);return}
  const rows=list.slice(0,100).map(r=>`<tr><td>${safe(r.date)}</td><td>${safe(r.district)}</td><td>${safe(r.block)}</td><td>${safe(r.workName)}</td><td>${safe(r.status)}</td><td>${r.workers}</td><td>${r.mistri}</td><td>₹${Number(r.payment||0).toFixed(2)}</td><td>${r.closed?"LOCKED":"OPEN"}</td></tr>`).join("");
  const w=window.open("","_blank","width=1200,height=800");
  if(!w){toast("Please allow pop-ups for printing.",true);return}
  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>aajseKaam.in — Office Daily Operations &amp; Closing</title><style>body{font-family:Arial;padding:24px;color:#12233f}table{width:100%;border-collapse:collapse;font-size:11px}th,td{border:1px solid #bbb;padding:7px;text-align:left}th{background:#eef3f9}h1{font-size:22px}@media print{body{padding:0}}</style></head><body><h1>aajseKaam.in — Office Daily Operations &amp; Closing</h1><table><thead><tr><th>Date</th><th>District</th><th>Block</th><th>Work / Service</th><th>Status</th><th>Workers</th><th>Mistri</th><th>Payment</th><th>Security Status</th></tr></thead><tbody>${rows}</tbody></table><p>Printed: ${safe(new Date().toLocaleString())}</p><script>window.onload=()=>window.print()<\/script></body></html>`);
  w.document.close();
}

