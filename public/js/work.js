/* ---------- Post work (validated) ---------- */
function submitPostWork(e){
  e.preventDefault(); clearFormErrors("postWorkForm");
  const type=$("postWorkType").value, loc=$("postWorkLocation").value.trim();
  const district=$("postDistrict").value.trim(), block=$("postBlock").value.trim();
  const date=$("postWorkDate").value, mobile=normalizeMobile($("postWorkMobile").value);
  const description=$("postWorkDescription").value.trim();
  const exact=($("exactWorkName")?.value||"").trim();
  const urgency=$("postUrgency")?.value||"normal";
  let valid=!!loc&&!!district&&!!block&&!!date&&mobile.length===10&&!!description;
  if(type==="otherService"&&!exact) valid=false;
  if(!loc)markFieldError("postLocationField",true);
  if(!date)markFieldError("postDateField",true);
  if(mobile.length!==10)markFieldError("postMobileField",true);
  if(!description)markFieldError("postDescField",true);
  if(!valid){toast(t("errDescription"),true);return}
  const submitBtn=$("postSubmitBtn");submitBtn.disabled=true;
  const jobs=read(STORAGE.jobs);
  const job={id:makeId("JOB"),photoName:($("postWorkPhoto")?.files?.[0]?.name)||"",type,exactWorkName:exact||typeLabel(type),location:loc,district,block,date,mobile,description,urgency,status:"Open",lat:$("postLat")?.value||"",lng:$("postLng")?.value||"",createdAt:new Date().toISOString()};
  jobs.unshift(job);write(STORAGE.jobs,jobs);
  e.target.reset();$("postWorkPhotoPreview")?.classList.remove("show");clearFormErrors("postWorkForm");toggleExactWorkField();closeModal("postWorkModal");
  refreshDashboard();renderEmergencyJobs();addResult(typeLabel(job.type),job.location,job.description);
  toast(t("toastRequestSaved")+job.id);submitBtn.disabled=false;window.location.hash="jobs";
}
function waShareLink(message){return "https://wa.me/?text="+encodeURIComponent(message)}
function addResult(type,loc,description){
  const wrap=$("searchResults");wrap.classList.remove("hidden");
  const item=document.createElement("div");item.className="resultitem";
  const shareText=t("waShareTemplate").replace("{type}",type).replace("{location}",loc);
  item.innerHTML='<div><b>'+safe(type)+'</b><div class="muted">'+safe(loc)+' • '+safe(description||"")+'</div></div>'
    +'<div class="resultActions">'
    +'<span class="status"><span class="dot"></span>'+safe(t("statusOpen"))+'</span>'
    +'<a class="waBtn" href="'+waShareLink(shareText)+'" target="_blank" rel="noopener">💬 '+safe(t("waShareBtn"))+'</a>'
    +'</div>';
  wrap.prepend(item);
}

function getTrackText(key){const z={en:{},hi:{},or:{}};return (z[currentLang]&&z[currentLang][key])||TRACK_TEXT.en[key]}
const TRACK_TEXT={en:{heading:"🛠️ Daily Work Tracking & Confirmation",sub:"Start work, send progress, record problems, complete the day and keep a date-wise confirmation history.",workerTitle:"👷 Worker / Service Update",workerSub:"The worker can record the starting photo, work details, completion photo and problems for each working day.",workId:"Work ID",ownerMobile:"Owner / Contractor Mobile",workDate:"Work Date",workStatus:"Update Type",workPhoto:"Work Photo",workDetails:"Work Details",problem:"Problem / Delay / Material Need",saveUpdate:"💾 Save & Send to Owner / Contractor",sendUpdate:"💬 Send to Owner / Contractor",confirmationRule:"A response is not treated as confirmation unless the recipient actively confirms it.",historyTitle:"📅 Date-wise Attendance & Confirmation",historySub:"Each update keeps its date, time, sender and confirmation status. Pending means not confirmed.",emptyHistory:"No work updates yet.",confirmTitle:"Owner / Contractor Confirmation",confirmSub:"Use the Work ID and date from the message to confirm receipt and work status.",confirmId:"Work ID",confirmDate:"Date",confirmBtn:"✅ Confirm Received / Work",problemBtn:"⚠️ Report Problem",nav:"My Work",myWork:"📋 My Work",started:"▶️ Start Work",progress:"📸 Daily Progress",completed:"✅ Complete Work",problemStatus:"⚠️ Report Problem"},hi:{heading:"🛠️ दैनिक काम ट्रैकिंग और पुष्टि",sub:"काम शुरू करें, प्रगति भेजें, समस्या दर्ज करें, दिन का काम पूरा करें और तारीखवार पुष्टि रखें।",workerTitle:"👷 कामगार / सेवा अपडेट",workerSub:"हर कार्य-दिन की शुरुआत की फोटो, काम का विवरण, पूरा होने की फोटो और समस्या दर्ज करें।",workId:"काम ID",ownerMobile:"मालिक / ठेकेदार मोबाइल",workDate:"काम की तारीख",workStatus:"अपडेट प्रकार",workPhoto:"काम की फोटो",workDetails:"काम का विवरण",problem:"समस्या / देरी / सामग्री की जरूरत",saveUpdate:"💾 काम सेव करें और मालिक / ठेकेदार को भेजें",sendUpdate:"💬 मालिक / ठेकेदार को भेजें",confirmationRule:"जब तक प्राप्तकर्ता खुद पुष्टि नहीं करता, जवाब को पुष्टि नहीं माना जाएगा।",historyTitle:"📅 तारीखवार उपस्थिति और पुष्टि",historySub:"हर अपडेट में तारीख, समय, भेजने वाला और पुष्टि की स्थिति रहेगी। Pending का अर्थ पुष्टि नहीं हुई है।",emptyHistory:"अभी कोई काम अपडेट नहीं है।",confirmTitle:"मालिक / ठेकेदार की पुष्टि",confirmSub:"मैसेज में दिए Work ID और तारीख से प्राप्ति और काम की पुष्टि करें।",confirmId:"काम ID",confirmDate:"तारीख",confirmBtn:"✅ प्राप्ति / काम की पुष्टि",problemBtn:"⚠️ काम ट्रैकिंग",nav:"मेरा काम",myWork:"📋 मेरा काम",started:"▶️ काम शुरू",progress:"📸 दैनिक प्रगति",completed:"✅ काम पूरा",problemStatus:"⚠️ समस्या दर्ज"},or:{heading:"🛠️ ଦୈନିକ କାମ ଟ୍ରାକିଂ ଓ ନିଶ୍ଚିତକରଣ",sub:"କାମ ଆରମ୍ଭ, ପ୍ରଗତି, ସମସ୍ୟା, ଦିନର କାମ ସମାପ୍ତି ଓ ତାରିଖ ଅନୁସାରେ ନିଶ୍ଚିତକରଣ ରଖନ୍ତୁ।",workerTitle:"👷 ଶ୍ରମିକ / ସେବା ଅପଡେଟ୍",workerSub:"ପ୍ରତ୍ୟେକ କାମ ଦିନର ଆରମ୍ଭ ଫଟୋ, କାମ ବିବରଣୀ, ସମାପ୍ତି ଫଟୋ ଓ ସମସ୍ୟା ରେକର୍ଡ କରନ୍ତୁ।",workId:"କାମ ID",ownerMobile:"ମାଲିକ / କଣ୍ଟ୍ରାକ୍ଟର ମୋବାଇଲ୍",workDate:"କାମ ତାରିଖ",workStatus:"ଅପଡେଟ୍ ପ୍ରକାର",workPhoto:"କାମ ଫଟୋ",workDetails:"କାମ ବିବରଣୀ",problem:"ସମସ୍ୟା / ବିଳମ୍ବ / ସାମଗ୍ରୀ ଆବଶ୍ୟକତା",saveUpdate:"💾 କାମ ସେଭ୍ କରି ମାଲିକ / କଣ୍ଟ୍ରାକ୍ଟରଙ୍କୁ ପଠାନ୍ତୁ",sendUpdate:"💬 ମାଲିକ / କଣ୍ଟ୍ରାକ୍ଟରଙ୍କୁ ପଠାନ୍ତୁ",confirmationRule:"ପ୍ରାପ୍ତକର୍ତ୍ତା ନିଜେ ନିଶ୍ଚିତ କରିନଥିଲେ ଉତ୍ତରକୁ ନିଶ୍ଚିତକରଣ ଭାବେ ଗଣାଯିବ ନାହିଁ।",historyTitle:"📅 ତାରିଖ ଅନୁସାରେ ଉପସ୍ଥିତି ଓ ନିଶ୍ଚିତକରଣ",historySub:"ପ୍ରତ୍ୟେକ ଅପଡେଟ୍‌ରେ ତାରିଖ, ସମୟ, ପଠାଇଥିବା ବ୍ୟକ୍ତି ଓ ନିଶ୍ଚିତକରଣ ଅବସ୍ଥା ରହିବ। Pending ଅର୍ଥ ନିଶ୍ଚିତ ହୋଇନାହିଁ।",emptyHistory:"ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି କାମ ଅପଡେଟ୍ ନାହିଁ।",confirmTitle:"ମାଲିକ / କଣ୍ଟ୍ରାକ୍ଟର ନିଶ୍ଚିତକରଣ",confirmSub:"ମେସେଜ୍‌ର Work ID ଓ ତାରିଖ ବ୍ୟବହାର କରି ପ୍ରାପ୍ତି ଓ କାମ ନିଶ୍ଚିତ କରନ୍ତୁ।",confirmId:"କାମ ID",confirmDate:"ତାରିଖ",confirmBtn:"✅ ପ୍ରାପ୍ତି / କାମ ନିଶ୍ଚିତ କରନ୍ତୁ",problemBtn:"⚠️ କାମ ଟ୍ରାକିଂ",nav:"ମୋ କାମ",myWork:"📋 ମୋ କାମ",started:"▶️ କାମ ଆରମ୍ଭ",progress:"📸 ଦୈନିକ ପ୍ରଗତି",completed:"✅ କାମ ସମାପ୍ତ",problemStatus:"⚠️ ସମସ୍ୟା ରିପୋର୍ଟ"}};
function openMyWork(){
  const sec=$("workTracking");
  if(!sec)return;
  sec.classList.remove("hidden");
  const date=$("trackDate");
  if(date&&!date.value)date.value=new Date().toISOString().slice(0,10);
  renderWorkHistory();
  sec.scrollIntoView({behavior:"smooth",block:"start"});
}
function closeMyWork(){
  const sec=$("workTracking");
  if(sec)sec.classList.add("hidden");
  $("home")?.scrollIntoView({behavior:"smooth",block:"start"});
}

function updateTrackText(){document.querySelectorAll('[data-track]').forEach(el=>{const k=el.dataset.track;if(TRACK_TEXT[currentLang]?.[k])el.textContent=TRACK_TEXT[currentLang][k]});const s=$('trackStatus');if(s){s.options[0].text=TRACK_TEXT[currentLang].started;s.options[1].text=TRACK_TEXT[currentLang].progress;s.options[2].text=TRACK_TEXT[currentLang].completed;s.options[3].text=TRACK_TEXT[currentLang].problemStatus}}
async function fileToCompressedDataURL(file,maxSize=1000,quality=0.72){
  if(!file||!file.type.startsWith("image/"))return "";
  return await new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=()=>{
      const img=new Image();
      img.onload=()=>{
        const scale=Math.min(1,maxSize/Math.max(img.width,img.height));
        const c=document.createElement("canvas");
        c.width=Math.max(1,Math.round(img.width*scale));
        c.height=Math.max(1,Math.round(img.height*scale));
        c.getContext("2d").drawImage(img,0,0,c.width,c.height);
        resolve(c.toDataURL("image/jpeg",quality));
      };
      img.onerror=reject; img.src=reader.result;
    };
    reader.onerror=reject; reader.readAsDataURL(file);
  });
}

async function saveWorkUpdate(){
 const id=$("trackWorkId").value.trim(),mobile=normalizeMobile($("trackOwnerMobile").value),date=$("trackDate").value||new Date().toISOString().slice(0,10),status=$("trackStatus").value,details=$("trackDetails").value.trim(),problem=$("trackProblem").value.trim(),photo=$("trackPhoto")?.files?.[0];
 if(!id||mobile.length!==10||!details){toast(currentLang==='hi'?'Work ID, मोबाइल और काम का विवरण भरें।':currentLang==='or'?'କାମ ID, ମୋବାଇଲ୍ ଓ କାମ ବିବରଣୀ ଦିଅନ୍ତୁ।':'Please enter Work ID, mobile and work details.',true);return}
 let photoData="";
 try{if(photo)photoData=await fileToCompressedDataURL(photo)}catch(e){toast(currentLang==='hi'?'फोटो पढ़ी नहीं जा सकी।':currentLang==='or'?'ଫଟୋ ପଢ଼ାଯାଇ ପାରିଲା ନାହିଁ।':'The photo could not be read.',true);return}
 const records=read(STORAGE.work);
 const rec={id:makeId('UPD'),workId:id,ownerMobile:mobile,date,status,details,problem,photoName:photo?.name||"",photoData,attendance:"Present",createdAt:new Date().toISOString(),confirmed:false,confirmedAt:""};
 records.unshift(rec);
 try{write(STORAGE.work,records)}catch(e){toast(currentLang==='hi'?'रिकॉर्ड बहुत बड़ा है। फोटो छोटी करके फिर भेजें।':currentLang==='or'?'ରେକର୍ଡ ବହୁତ ବଡ଼। ଛୋଟ ଫଟୋ ସହିତ ପୁଣି ପଠାନ୍ତୁ।':'The record is too large. Please use a smaller photo.',true);return}
 renderWorkHistory();
 const msg=`aajseKaam.in Work Update\nWork ID: ${id}\nDate: ${date}\nStatus: ${status}\nAttendance: Present\nDetails: ${details}\nProblem: ${problem||'None'}\nConfirmation: Please actively confirm receipt/work. No reply = Pending, not confirmed.`;
 window.open(waLink(mobile,msg),'_blank','noopener');
 toast(currentLang==='hi'?'काम सेव हुआ और WhatsApp संदेश तैयार किया गया।':currentLang==='or'?'କାମ ସେଭ୍ ହେଲା ଏବଂ WhatsApp ବାର୍ତ୍ତା ପ୍ରସ୍ତୁତ ହେଲା।':'Work update saved and WhatsApp message prepared.');
}

async function shareWorkUpdate(){const id=$('trackWorkId').value.trim(),mobile=normalizeMobile($('trackOwnerMobile').value),date=$('trackDate').value||new Date().toISOString().slice(0,10),status=$('trackStatus').value,details=$('trackDetails').value.trim(),problem=$('trackProblem').value.trim(),file=$('trackPhoto')?.files?.[0];if(!id||mobile.length!==10||!details){toast(currentLang==='hi'?'पहले Work ID, मोबाइल और विवरण भरें।':currentLang==='or'?'ପ୍ରଥମେ କାମ ID, ମୋବାଇଲ୍ ଓ ବିବରଣୀ ଦିଅନ୍ତୁ।':'Enter Work ID, mobile and details first.',true);return}const msg=`aajseKaam.in Work Update\nWork ID: ${id}\nDate: ${date}\nStatus: ${status}\nDetails: ${details}\nProblem: ${problem||'None'}\nConfirmation: Please actively confirm receipt/work. No reply = Pending, not confirmed.`;try{if(file&&navigator.share&&navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({title:'aajseKaam.in Work Update',text:msg,files:[file]});return}if(navigator.share){await navigator.share({title:'aajseKaam.in Work Update',text:msg});return}window.open(waLink(mobile,msg),'_blank','noopener')}catch(e){if(e.name!=='AbortError')window.open(waLink(mobile,msg),'_blank','noopener')}}
function renderWorkHistory(){
 const wrap=$("workHistory");if(!wrap)return;
 const list=read(STORAGE.work);
 if(!list.length){wrap.innerHTML='<div class="empty">'+safe(TRACK_TEXT[currentLang].emptyHistory)+'</div>';return}
 wrap.innerHTML=list.slice(0,50).map(r=>{
  const st=r.confirmed?'Confirmed':r.status==='problem'?'Problem':'Pending';
  const photo=(r.photoData&&r.photoData.startsWith('data:image/'))?`<img src="${r.photoData}" alt="Work photo" style="width:100%;max-width:220px;max-height:150px;object-fit:cover;border-radius:12px;margin-top:10px;border:1px solid #dce5f0">`:'';
  return `<div class="updateItem"><div class="updateItemHead"><b>${safe(r.workId)} • ${safe(r.date)}</b><span class="trackPill ${r.confirmed?'active':r.status==='problem'?'problem':'pending'}">${safe(st)}</span></div><div class="updateMeta">${safe(new Date(r.createdAt).toLocaleString())} • ${safe(r.status)} • ${safe(r.attendance||'Present')}</div><div style="margin-top:7px">${safe(r.details)}</div>${r.problem?`<div class="danger" style="margin-top:6px">⚠️ ${safe(r.problem)}</div>`:''}${r.photoName?`<div class="smallNote" style="margin-top:6px">📷 ${safe(r.photoName)}</div>`:''}${photo}</div>`
 }).join('')
}

function confirmWorkUpdate(){const id=$('confirmWorkId').value.trim(),date=$('confirmDate').value;if(!id||!date){toast(currentLang==='hi'?'Work ID और तारीख भरें।':currentLang==='or'?'କାମ ID ଓ ତାରିଖ ଦିଅନ୍ତୁ।':'Enter Work ID and date.',true);return}const list=read(STORAGE.work);let found=false;list.forEach(r=>{if(r.workId===id&&r.date===date){r.confirmed=true;r.confirmedAt=new Date().toISOString();found=true}});write(STORAGE.work,list);renderWorkHistory();toast(found?(currentLang==='hi'?'काम की पुष्टि दर्ज हो गई।':currentLang==='or'?'କାମ ନିଶ୍ଚିତକରଣ ରେକର୍ଡ ହେଲା।':'Work confirmation recorded.'):(currentLang==='hi'?'इस ID और तारीख का अपडेट नहीं मिला।':currentLang==='or'?'ଏହି ID ଓ ତାରିଖର ଅପଡେଟ୍ ମିଳିଲା ନାହିଁ।':'No update found for this ID and date.'),!found)}
function reportWorkProblem(){const id=$('confirmWorkId').value.trim(),date=$('confirmDate').value;if(!id||!date){toast(currentLang==='hi'?'Work ID और तारीख भरें।':currentLang==='or'?'କାମ ID ଓ ତାରିଖ ଦିଅନ୍ତୁ।':'Enter Work ID and date.',true);return}const list=read(STORAGE.work);list.forEach(r=>{if(r.workId===id&&r.date===date){r.status='problem';r.confirmed=false}});write(STORAGE.work,list);renderWorkHistory();toast(currentLang==='hi'?'समस्या दर्ज हुई।':currentLang==='or'?'ସମସ୍ୟା ରେକର୍ଡ ହେଲା।':'Problem recorded.')}


function renderEmergencyJobs(){
  const wrap=$("emergencyList"); if(!wrap)return;
  const today=new Date().toISOString().slice(0,10);
  const jobs=read(STORAGE.jobs).filter(j=>j.urgency==="today"&&String(j.date||"").slice(0,10)===today&&j.status!=="Completed");
  wrap.innerHTML=jobs.length?jobs.slice(0,20).map(j=>`<div class="emergencyItem"><div><b>🚨 ${safe(j.exactWorkName||typeLabel(j.type))}</b><div class="muted">${safe(j.district||"")} • ${safe(j.block||"")} • ${safe(j.location||"")}</div><div>${safe(j.description||"")}</div></div><button class="btn post" onclick="openPostWork('${safe(j.type)}')">${safe(t("postWorkCardBtn"))}</button></div>`).join(""):'<div class="empty">'+safe(t("noEmergency"))+'</div>';
}
function doSearch(silent=false){
  const role=$("searchRole").value,loc=$("searchLocation").value.trim(),req=$("searchRequirement").value.trim();
  if(!loc){if(!silent){toast(t("toastEnterLocation"),true);$("searchLocation").focus()}return}
  const members=read(STORAGE.members),jobs=read(STORAGE.jobs);
  const roleToMemberRole={workerMistri:"Worker",driverTaxi:"Driver"};
  const results=[
    ...members.filter(m=>m.location.toLowerCase().includes(loc.toLowerCase())&&(roleToMemberRole[role]?m.role===roleToMemberRole[role]:true)).map(m=>({title:roleLabel(m.role)+" • "+m.name,location:m.location,note:m.skill||t("profileRegistration"),mobile:m.mobile,waMsg:t("waMsgMember").replace("{role}",roleLabel(m.role)).replace("{location}",m.location)})),
    ...jobs.filter(j=>{
      const label=typeLabel(j.type).toLowerCase();
      const matchesLoc=j.location.toLowerCase().includes(loc.toLowerCase());
      const matchesReq=!req||j.description.toLowerCase().includes(req.toLowerCase())||label.includes(req.toLowerCase());
      return matchesLoc&&matchesReq;
    }).map(j=>({title:typeLabel(j.type),location:j.location,note:j.description,mobile:j.mobile,waMsg:t("waMsgJob").replace("{type}",typeLabel(j.type)).replace("{location}",j.location)}))
  ];
  const wrap=$("searchResults");wrap.classList.remove("hidden");wrap.innerHTML="";
  if(!results.length){wrap.innerHTML='<div class="empty">'+safe(t("toastNoMatches"))+'</div>'}
  else results.slice(0,20).forEach(r=>{
    const item=document.createElement("div");item.className="resultitem";
    const waHref=waLink(r.mobile,r.waMsg);
    const telHref="tel:+"+toWaNumber(r.mobile);
    item.innerHTML='<div><b>'+safe(r.title)+'</b><div class="muted">'+safe(r.location)+' • '+safe(r.note)+'</div></div>'
      +'<div class="resultActions">'
      +'<a class="waBtn" href="'+waHref+'" target="_blank" rel="noopener">💬 '+safe(t("waChatBtn"))+'</a>'
      +'<a class="callBtn" href="'+telHref+'">📞 '+safe(t("callBtn"))+'</a>'
      +'</div>';
    wrap.appendChild(item)
  });
  if(!silent){$("jobs").scrollIntoView({behavior:"smooth",block:"start"});toast(t("toastSearchCompleted")+loc)}
}

function refreshDashboard(){
  const members=read(STORAGE.members),jobs=read(STORAGE.jobs);
  $("memberCount").textContent=members.length;
  $("jobCount").textContent=jobs.length;
  $("driverCount").textContent=members.filter(m=>m.role==="Driver").length;
  $("propertyCount").textContent=jobs.filter(j=>j.type==="property").length;
  const rows=[
    ...jobs.map(j=>({title:j.description,location:j.location,type:typeLabel(j.type),status:statusLabel(j.status)})),
    ...members.map(m=>({title:m.name,location:m.location,type:roleLabel(m.role),status:statusLabel("Registered")}))
  ];
  const body=$("dashboardBody");body.innerHTML="";
  if(!rows.length){body.innerHTML='<tr><td colspan="4" class="empty">'+safe(t("emptyTable"))+'</td></tr>';return}
  rows.slice(0,50).forEach(r=>{const tr=document.createElement("tr");tr.innerHTML='<td>'+safe(r.title)+'</td><td>'+safe(r.location)+'</td><td>'+safe(r.type)+'</td><td>'+safe(r.status)+'</td>';body.appendChild(tr)})
}
function printSite(){window.print()}
function printDashboard(){
  window.print()
}
function saveSite(){
  try{
    const html="<!DOCTYPE html>\n"+document.documentElement.outerHTML;
    const blob=new Blob([html],{type:"text/html;charset=utf-8"});
    const url=URL.createObjectURL(blob),a=document.createElement("a");
    a.href=url;a.download="aajseKaam-final.html";document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
    toast(t("toastPageSaved"))
  }catch(e){toast(t("toastPageSaveError"),true)}
}
async function shareSite(){
  const data={title:"aajseKaam.in",text:"Work, workers, services, transport and property in one local platform.",url:location.href};
  try{
    if(navigator.share){await navigator.share(data);toast(t("toastShareOpened"))}
    else if(navigator.clipboard){await navigator.clipboard.writeText(data.title+"\n"+data.text+"\n"+data.url);toast(t("toastLinkCopied"))}
    else{const area=document.createElement("textarea");area.value=data.url;document.body.appendChild(area);area.select();document.execCommand("copy");area.remove();toast(t("toastLinkCopied"))}
  }catch(e){if(e.name!=="AbortError")toast(t("toastSharingIncomplete"),true)}
}
function exportRecords(){
  const data={members:read(STORAGE.members),jobs:read(STORAGE.jobs),exportedAt:new Date().toISOString()};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="aajseKaam-local-records.json";document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);toast(t("toastRecordsExported"))
}
function clearLocalRecords(){
  if(!confirm(t("confirmClearRecords")))return;
  localStorage.removeItem(STORAGE.members);localStorage.removeItem(STORAGE.jobs);refreshDashboard();$("searchResults").classList.add("hidden");toast(t("toastRecordsCleared"))
}

document.addEventListener("change",e=>{if(e.target&&e.target.id==="regPhoto")previewImage(e.target,"regPhotoPreview");if(e.target&&e.target.id==="postWorkPhoto")previewImage(e.target,"postWorkPhotoPreview");if(e.target&&e.target.id==="regVehiclePhoto")previewImage(e.target,"regVehiclePhotoPreview");if(e.target&&e.target.id==="trackPhoto")previewImage(e.target,"trackPhotoPreview");if(e.target&&e.target.id==="postWorkType")toggleExactWorkField()});
(function init(){
  $("year").textContent=new Date().getFullYear();
  if(officeAccessRequested()) setTimeout(openOfficeAccess,50);
  let lang="en";try{lang=localStorage.getItem(STORAGE.lang)||"en"}catch(e){}
  setLanguage(lang);
})();

/* js/slider.js - hero slider */
(function(){
 const bg=[...document.querySelectorAll('.slideBg')],tx=[...document.querySelectorAll('.slideTxt')],dots=document.getElementById('sDots');
 if(!bg.length||!dots)return;let i=0,timer=null;
 bg.forEach((_,n)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(n+1));b.onclick=()=>{go(n);restart()};dots.appendChild(b)});
 function go(n){i=(n+bg.length)%bg.length;bg.forEach((e,k)=>e.classList.toggle('active',k===i));tx.forEach((e,k)=>e.classList.toggle('active',k===i));[...dots.children].forEach((d,k)=>d.classList.toggle('on',k===i))}
 function restart(){clearInterval(timer);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(()=>go(i+1),6000)}
 document.getElementById('sPrev').onclick=()=>{go(i-1);restart()};document.getElementById('sNext').onclick=()=>{go(i+1);restart()};
 const h=document.getElementById('home');let x0=null;h.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});
 h.addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50){go(i+(d<0?1:-1));restart()}x0=null});
 h.addEventListener('mouseenter',()=>clearInterval(timer));h.addEventListener('mouseleave',restart);
 go(0);restart();
 ['setLanguage','renderRoleFields','openRegistration'].forEach(n=>{const o=window[n];if(typeof o!=='function')return;window[n]=function(){const r=o.apply(this,arguments);applyConfig();return r}});
})();


