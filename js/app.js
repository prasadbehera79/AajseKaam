/* js/pricing.js — EDIT FEES HERE ONLY
   Registration fee is shown only inside the Register form (not on the home page).
   Service charges are not shown as a number: they follow the job terms & conditions. */
const CONFIG={
  CURRENCY:"₹",
  FEES:{Worker:99,Contractor:149,Driver:149,OtherService:149,Property:149,Customer:0}
};

Object.assign(translations.en,{
 s1B:"Premium Local Platform",s1T:"Find work. Find people. Find services.",s1P:"Workers, contractors, homeowners and property users connect on one trusted platform.",
 s2B:"Construction & Mistri",s2T:"Skilled hands for every building.",s2P:"Masons, painters, electricians and labour, matched to your location.",
 s3B:"Home Services",s3T:"Repairs and renovation, done right.",s3P:"Post your requirement and connect with suitable service providers.",
 s4B:"Driver & Taxi",s4T:"Reliable rides, agreed directly.",s4P:"Auto, taxi, car and van, booked by route, date and time.",
 trustLang:"Three Languages",trustDirectB:"Direct",trustDirect:"Person-to-Person",trustContactB:"Contact",trustContact:"WhatsApp & Call",trustLocalB:"Local",trustLocal:"Platform",
 presentPhotoLabel:"Present Photo (optional)",regFeeLabel:"Registration fee",regFeeFree:"Registration is free",
 regFeeTerms:"Service charges are applicable as per the job terms and conditions.",
 photoLabel:"Pass Photo",liveLocationLabel:"Live Location",getLiveLocation:"Use Current Location"});

Object.assign(translations.hi,{
 s1B:"प्रीमियम लोकल प्लेटफ़ॉर्म",s1T:"काम खोजें। लोग खोजें। सेवाएँ खोजें।",s1P:"कामगार, ठेकेदार, घर मालिक और प्रॉपर्टी उपयोगकर्ता एक भरोसेमंद प्लेटफ़ॉर्म पर जुड़ते हैं।",
 s2B:"निर्माण और मिस्त्री",s2T:"हर इमारत के लिए कुशल हाथ।",s2P:"राजमिस्त्री, पेंटर, इलेक्ट्रीशियन और मज़दूर, आपके इलाके में।",
 s3B:"घरेलू सेवाएँ",s3T:"मरम्मत और रीनोवेशन, सही तरीके से।",s3P:"अपनी ज़रूरत पोस्ट करें और उपयुक्त सेवा प्रदाता से जुड़ें।",
 s4B:"ड्राइवर और टैक्सी",s4T:"भरोसेमंद सवारी, सीधे तय।",s4P:"ऑटो, टैक्सी, कार और वैन, रूट, तारीख और समय से बुक करें।",
 trustLang:"तीन भाषाएँ",trustDirectB:"सीधा",trustDirect:"आपस में संपर्क",trustContactB:"संपर्क",trustContact:"व्हाट्सऐप और कॉल",trustLocalB:"स्थानीय",trustLocal:"प्लेटफ़ॉर्म",
 presentPhotoLabel:"वर्तमान फोटो (वैकल्पिक)",regFeeLabel:"पंजीकरण शुल्क",regFeeFree:"पंजीकरण निःशुल्क है",
 regFeeTerms:"सेवा शुल्क जॉब की नियम व शर्तों के अनुसार लागू होगा।",
 photoLabel:"पासपोर्ट फ़ोटो",liveLocationLabel:"लाइव लोकेशन",getLiveLocation:"वर्तमान लोकेशन का उपयोग करें"});

Object.assign(translations.or,{
 s1B:"ପ୍ରିମିୟମ ସ୍ଥାନୀୟ ପ୍ଲାଟଫର୍ମ",s1T:"କାମ ଖୋଜନ୍ତୁ। ଲୋକ ଖୋଜନ୍ତୁ। ସେବା ଖୋଜନ୍ତୁ।",s1P:"ଶ୍ରମିକ, ଠିକାଦାର, ଘର ମାଲିକ ଓ ସମ୍ପତ୍ତି ଉପଭୋକ୍ତା ଗୋଟିଏ ଭରସାଯୋଗ୍ୟ ପ୍ଲାଟଫର୍ମରେ ଯୋଡ଼ି ହୁଅନ୍ତି।",
 s2B:"ନିର୍ମାଣ ଓ ମିସ୍ତ୍ରୀ",s2T:"ପ୍ରତ୍ୟେକ ଘର ପାଇଁ ଦକ୍ଷ ହାତ।",s2P:"ରାଜମିସ୍ତ୍ରୀ, ପେଣ୍ଟର, ଇଲେକ୍ଟ୍ରିସିଆନ ଓ ଶ୍ରମିକ, ଆପଣଙ୍କ ଅଞ୍ଚଳରେ।",
 s3B:"ଘରୋଇ ସେବା",s3T:"ମରାମତି ଓ ନବୀକରଣ, ସଠିକ ଭାବରେ।",s3P:"ଆପଣଙ୍କ ଆବଶ୍ୟକତା ପୋଷ୍ଟ କରନ୍ତୁ ଏବଂ ଉପଯୁକ୍ତ ସେବାଦାତାଙ୍କ ସହ ଯୋଡ଼ି ହୁଅନ୍ତୁ।",
 s4B:"ଡ୍ରାଇଭର ଓ ଟ୍ୟାକ୍ସି",s4T:"ଭରସାଯୋଗ୍ୟ ଯାତ୍ରା, ସିଧାସଳଖ ଠିକ୍ ହୁଏ।",s4P:"ଅଟୋ, ଟ୍ୟାକ୍ସି, କାର ଓ ଭ୍ୟାନ୍, ରୁଟ୍, ତାରିଖ ଓ ସମୟ ଅନୁସାରେ ବୁକ୍ କରନ୍ତୁ।",
 trustLang:"ତିନୋଟି ଭାଷା",trustDirectB:"ସିଧା",trustDirect:"ପରସ୍ପର ଯୋଗାଯୋଗ",trustContactB:"ଯୋଗାଯୋଗ",trustContact:"ହ୍ୱାଟ୍ସଆପ୍ ଓ କଲ୍",trustLocalB:"ସ୍ଥାନୀୟ",trustLocal:"ପ୍ଲାଟଫର୍ମ",
 presentPhotoLabel:"ବର୍ତ୍ତମାନ ଫଟୋ (ଇଚ୍ଛାଧୀନ)",regFeeLabel:"ପଞ୍ଜୀକରଣ ଶୁଳ୍କ",regFeeFree:"ପଞ୍ଜୀକରଣ ମାଗଣା",
 regFeeTerms:"କାମର ନିୟମ ଓ ସର୍ତ୍ତ ଅନୁସାରେ ସେବା ଶୁଳ୍କ ଲାଗୁ ହେବ।",
 photoLabel:"ପାସ୍ ଫଟୋ",liveLocationLabel:"ଲାଇଭ୍ ଲୋକେସନ୍",getLiveLocation:"ବର୍ତ୍ତମାନର ଲୋକେସନ୍ ବ୍ୟବହାର କରନ୍ତୁ"});

function applyConfig(){
 const box=document.getElementById('regFeeBox');if(!box)return;
 const role=document.querySelector('#registrationModal input[name="role"]:checked')?.value||'Worker';
 const fee=CONFIG.FEES[role];
 const line=fee>0?t('regFeeLabel')+': <b>'+CONFIG.CURRENCY+fee+'/-</b>':'<b>'+t('regFeeFree')+'</b>';
 box.innerHTML=line+'<br><span class="smallNote">'+t('regFeeTerms')+'</span>';
}

const STORAGE={members:"aajsekaam_members_v4",jobs:"aajsekaam_jobs_v4",work:"aajsekaam_work_v2",lang:"aajsekaam_lang_v4"};
const $=id=>document.getElementById(id);
let toastTimer=null;
let currentLang="en";

/* ===== WhatsApp / conversion config =====
   Replace SUPPORT_WHATSAPP with the real official support number (with country code, no + or spaces)
   before going live, e.g. "919876543210". This one number is used only for the floating
   general-support button. Per-worker / per-job WhatsApp buttons use the mobile number the
   worker/customer entered when they registered or posted their request, with "91" auto-prefixed. */
const SUPPORT_WHATSAPP="";
function openSupportWhatsApp(){
  if(!SUPPORT_WHATSAPP){
    toast(currentLang==="hi"?"आधिकारिक WhatsApp नंबर अभी सेट नहीं है।":currentLang==="or"?"ଅଧିକୃତ WhatsApp ନମ୍ବର ଏପର୍ଯ୍ୟନ୍ତ ସେଟ୍ ହୋଇନାହିଁ।":"Official WhatsApp support number is not configured yet.",true);
    return;
  }
  openWhatsApp(SUPPORT_WHATSAPP,t("waSupportMessage"));
}
function toWaNumber(mobile){const digits=normalizeMobile(mobile);return digits.length===10?"91"+digits:digits}
function waLink(mobile,message){return "https://wa.me/"+toWaNumber(mobile)+"?text="+encodeURIComponent(message)}
function openWhatsApp(mobile,message){window.open(waLink(mobile,message),"_blank","noopener")}
function callNumber(mobile){window.location.href="tel:+"+toWaNumber(mobile)}
function read(key){try{return JSON.parse(localStorage.getItem(key)||"[]")}catch(e){return[]}}
function write(key,value){localStorage.setItem(key,JSON.stringify(value))}
function toast(message,isError){const el=$("toast");el.textContent=message;el.classList.toggle("danger",!!isError);el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),3400)}
function openModal(id){$(id).classList.add("show");document.body.style.overflow="hidden"}
function closeModal(id){$(id).classList.remove("show");document.body.style.overflow=""}
function toggleMobileNav(){$("mobileNav").style.display=$("mobileNav").style.display==="flex"?"none":"flex"}
document.addEventListener("click",e=>{if(e.target.classList.contains("modal"))closeModal(e.target.id)})
document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".modal.show").forEach(m=>closeModal(m.id))})

function openRegistration(role){clearFormErrors("registrationForm");if(role){const radio=document.querySelector('#registrationModal input[name="role"][value="'+CSS.escape(role)+'"]');if(radio)radio.checked=true}renderRoleFields();openModal("registrationModal")}
function openPostWork(typeCode){
  clearFormErrors("postWorkForm");
  if(typeCode){const select=$("postWorkType");const option=[...select.options].find(o=>o.value===typeCode);if(option)select.value=typeCode}
  toggleExactWorkField();
  openModal("postWorkModal")
}
function toggleExactWorkField(){
  const type=$("postWorkType")?.value;
  const box=$("exactWorkField");
  if(box)box.style.display=type==="otherService"?"block":"none";
}
function quickCategory(typeCode){openPostWork(typeCode)}
function makeId(prefix){return prefix+"-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).slice(2,7).toUpperCase()}
function safe(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

/* ---------- Translation dictionaries ---------- */

function t(key){const cur=translations[currentLang]||translations.en;return (cur[key]??translations.en[key])||""}

function setLanguage(lang){
  if(!translations[lang])lang="en";
  currentLang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;const val=t(key);
    if(val)el.textContent=val;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key=el.dataset.i18nPlaceholder;const val=t(key);
    if(val)el.placeholder=val;
  });
  try{localStorage.setItem(STORAGE.lang,lang)}catch(e){}
  document.documentElement.lang=lang;
  if($("language"))$("language").value=lang;
  refreshDashboard();renderRoleFields();updateTrackText();renderWorkHistory();renderEmergencyJobs();toggleExactWorkField();
  if(!$("searchResults").classList.contains("hidden")){doSearchFromCurrentInputs()}
}

/* ---------- Lookup helpers so stored data stays language-independent ---------- */
const jobTypeKeyMap={houseWork:"jobTypeHouseWork",paintingWork:"jobTypePaintingWork",electricalWork:"jobTypeElectricalWork",masonConstruction:"jobTypeMasonConstruction",driverTaxi:"jobTypeDriverTaxi",property:"jobTypeProperty",otherService:"jobTypeOtherService"};
const roleKeyMap={Worker:"roleNameWorker",Contractor:"roleNameContractor",Customer:"roleNameCustomer",Driver:"roleNameDriver",Property:"roleNameProperty",OtherService:"roleNameOtherService"};
function typeLabel(code){return t(jobTypeKeyMap[code])||code}
function roleLabel(code){return t(roleKeyMap[code])||code}
function statusLabel(code){return code==="Open"?t("statusOpen"):code==="Registered"?t("statusRegistered"):code}

const infoKeyMap={
  aboutUs:["infoAboutUsTitle","infoAboutUsText"],contact:["infoContactTitle","infoContactText"],help:["infoHelpTitle","infoHelpText"],
  terms:["infoTermsTitle","infoTermsText"],privacy:["infoPrivacyTitle","infoPrivacyText"],refund:["infoRefundTitle","infoRefundText"],
  facebook:["infoSocialTitle","infoSocialText"],instagram:["infoSocialTitle","infoSocialText"],whatsapp:["infoSocialTitle","infoSocialText"],youtube:["infoSocialTitle","infoSocialText"]
};
function showInfo(key){
  const pair=infoKeyMap[key];
  if(!pair)return;
  $("infoTitle").textContent=t(pair[0]);
  $("infoText").textContent=t(pair[1]);
  openModal("infoModal");
}

/* ---------- Form validation helpers ---------- */
function clearFormErrors(formId){
  document.querySelectorAll("#"+formId+" .field").forEach(f=>f.classList.remove("errored"));
}
function markFieldError(fieldId,invalid){
  const el=$(fieldId);
  if(!el)return;
  el.classList.toggle("errored",!!invalid);
}
function normalizeMobile(value){return String(value||"").replace(/\D/g,"").slice(0,10)}

let lastRegisteredMember=null;

function experienceLabel(code){
  const map={"0-1":"experience01","2-5":"experience25","6-10":"experience610","10+":"experience10plus"};
  return code?t(map[code]||code):t("notProvided");
}
function openMembershipCard(member){
  if(!member)return;
  lastRegisteredMember=member;
  $("cardMemberId").textContent=member.id;
  $("cardMemberRole").textContent=roleLabel(member.role);
  $("cardMemberName").textContent=member.name;
  $("cardMemberMobile").textContent=member.mobile;
  $("cardMemberLocation").textContent=member.location;
  $("cardMemberSkill").textContent=member.skill||t("notProvided");
  $("cardMemberExperience").textContent=experienceLabel(member.experience);
  $("cardMemberCertificate").textContent=member.characterCertificateName||t("notProvided");
  setLanguage(currentLang);
  openModal("membershipModal");
}
function membershipText(member){
  return ["aajseKaam.in",t("membershipCardTitle"),t("memberIdLabel")+": "+member.id,t("memberRoleLabel")+": "+roleLabel(member.role),t("memberNameLabel")+": "+member.name,t("memberMobileLabel")+": "+member.mobile,t("memberLocationLabel")+": "+member.location,t("memberSkillLabel")+": "+(member.skill||t("notProvided")),t("memberExperienceLabel")+": "+experienceLabel(member.experience)].join("\n");
}
async function shareRegistration(){
  if(!lastRegisteredMember){toast(t("noMembership"),true);return}
  const text=membershipText(lastRegisteredMember);
  try{
    if(navigator.share){await navigator.share({title:"aajseKaam.in",text});toast(t("toastShareOpened"))}
    else if(navigator.clipboard){await navigator.clipboard.writeText(text);toast(t("toastLinkCopied"))}
    else{const area=document.createElement("textarea");area.value=text;document.body.appendChild(area);area.select();document.execCommand("copy");area.remove();toast(t("toastLinkCopied"))}
  }catch(e){if(e.name!=="AbortError")toast(t("toastSharingIncomplete"),true)}
}
function saveRegistration(){
  if(!lastRegisteredMember){toast(t("noMembership"),true);return}
  const blob=new Blob([JSON.stringify(lastRegisteredMember,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=lastRegisteredMember.id+"-membership.json";document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);toast(t("toastMembershipSaved"));
}
function printRegistration(){
  if(!lastRegisteredMember){toast(t("noMembership"),true);return}
  const m=lastRegisteredMember;
  const w=window.open("","_blank","width=850,height=700");
  if(!w){toast(t("toastPopupBlocked"),true);return}
  w.document.write(`<!doctype html><html lang="${currentLang}"><head><meta charset="utf-8"><title>${safe(t("membershipCardTitle"))} - ${safe(m.id)}</title><style>body{font-family:Arial,sans-serif;padding:30px;color:#12233f}.card{max-width:700px;margin:auto;border:2px solid #071a3a;border-radius:18px;padding:30px}.brand{font-size:28px;font-weight:900;text-align:center}.sub{text-align:center;color:#64748b}.grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:25px}.label{font-size:12px;color:#64748b;font-weight:700}.value{font-size:16px;font-weight:800;margin-top:3px}@media print{body{padding:0}}</style></head><body><div class="card"><div class="brand">aajseKaam.in</div><h1 style="text-align:center">${safe(t("membershipCardTitle"))}</h1><p class="sub">${safe(t("membershipCardSub"))}</p><div class="grid"><div><div class="label">${safe(t("memberIdLabel"))}</div><div class="value">${safe(m.id)}</div></div><div><div class="label">${safe(t("memberRoleLabel"))}</div><div class="value">${safe(roleLabel(m.role))}</div></div><div><div class="label">${safe(t("memberNameLabel"))}</div><div class="value">${safe(m.name)}</div></div><div><div class="label">${safe(t("memberMobileLabel"))}</div><div class="value">${safe(m.mobile)}</div></div><div><div class="label">${safe(t("memberLocationLabel"))}</div><div class="value">${safe(m.location)}</div></div><div><div class="label">${safe(t("memberSkillLabel"))}</div><div class="value">${safe(m.skill||t("notProvided"))}</div></div><div><div class="label">${safe(t("memberExperienceLabel"))}</div><div class="value">${safe(experienceLabel(m.experience))}</div></div><div><div class="label">${safe(t("memberCertificateLabel"))}</div><div class="value">${safe(m.characterCertificateName||t("notProvided"))}</div></div></div><p class="sub" style="margin-top:25px">${safe(t("membershipDemoNote"))}</p></div><script>window.onload=()=>{window.print()}<\/script></body></html>`);
  w.document.close();
}

function doSearchFromCurrentInputs(){
  const loc=$("searchLocation").value.trim();
  if(loc)doSearch(true);
}

