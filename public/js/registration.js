/* ---------- Premium role registration ---------- */
const ROLE_TEXT={
 en:{Worker:{hint:"For skilled workers and Mistri: skill, experience, service area, availability and optional character certificate.",skill:"Primary Skill / Work Type",service:"Service Area",availability:"Availability",cert:"Character Certificate (optional)",notes:"Work Notes / Additional Details",placeholderSkill:"e.g. Mason, Painter, Electrician",placeholderService:"Areas where you can work",placeholderNotes:"Anything else about your work",photoNote:"Profile photo helps customers identify you."},Contractor:{hint:"For contractors and builders: project size, floors, budget, team and experience help match the right work.",business:"Company / Contractor Name",project:"Project / Work Type",plot:"Plot / Project Size",floors:"Number of Floors",budget:"Approximate Budget",team:"Team / Workforce Size",experience:"Experience",cert:"Character Certificate (optional)",notes:"Project / Business Details"},Customer:{hint:"For customers and homeowners: tell us about the project so suitable workers, contractors or builders can be matched.",project:"Project / Work Type",plot:"Plot Size",floors:"Number of Floors",budget:"Approximate Budget",requirement:"Work Requirement / Details",notes:"Additional Requirements"},Driver:{hint:"For Driver / Taxi: vehicle, licence, experience, service area and optional character certificate are recorded.",vehicle:"Vehicle Type",vehicleNo:"Vehicle Number",license:"Driving Licence Number",experience:"Driving Experience",service:"Service Area",availability:"Availability",cert:"Character Certificate (optional)",notes:"Vehicle / Service Details"},Property:{hint:"For property owners: property type, size, floors, price/budget, location and property details.",propertyType:"Property Type",size:"Plot / Property Size",floors:"Number of Floors",budget:"Expected Price / Approx. Budget",photos:"Property Photos",notes:"Property Description"},OtherService:{hint:"For other work and services: describe the service, experience, area and availability.",serviceName:"Service Name",skill:"Work / Service Type",experience:"Experience",service:"Service Area",availability:"Availability",cert:"Character Certificate (optional)",notes:"Service Details"}},
 hi:{Worker:{hint:"कामगार/मिस्त्री के लिए कौशल, अनुभव, सेवा क्षेत्र, उपलब्धता और वैकल्पिक चरित्र प्रमाणपत्र दर्ज करें।",skill:"मुख्य कौशल / काम",service:"सेवा क्षेत्र",availability:"उपलब्धता",cert:"चरित्र प्रमाणपत्र (वैकल्पिक)",notes:"काम की अतिरिक्त जानकारी",placeholderSkill:"जैसे मिस्त्री, पेंटर, इलेक्ट्रीशियन",placeholderService:"जहाँ आप काम कर सकते हैं",placeholderNotes:"काम के बारे में अतिरिक्त जानकारी",photoNote:"प्रोफाइल फोटो पहचान में मदद करती है।"},Contractor:{hint:"ठेकेदार/बिल्डर के लिए प्रोजेक्ट आकार, मंजिल, बजट, टीम और अनुभव दर्ज करें।",business:"कंपनी / ठेकेदार का नाम",project:"प्रोजेक्ट / काम का प्रकार",plot:"प्लॉट / प्रोजेक्ट आकार",floors:"मंजिलों की संख्या",budget:"अनुमानित बजट",team:"टीम / कामगार संख्या",experience:"अनुभव",cert:"चरित्र प्रमाणपत्र (वैकल्पिक)",notes:"प्रोजेक्ट / व्यवसाय विवरण"},Customer:{hint:"ग्राहक/गृहस्वामी के लिए प्रोजेक्ट की जानकारी दें ताकि सही कामगार, ठेकेदार या बिल्डर मिल सके।",project:"प्रोजेक्ट / काम का प्रकार",plot:"प्लॉट का आकार",floors:"मंजिलों की संख्या",budget:"अनुमानित बजट",requirement:"काम की आवश्यकता / विवरण",notes:"अतिरिक्त आवश्यकता"},Driver:{hint:"ड्राइवर/टैक्सी के लिए वाहन, लाइसेंस, अनुभव, सेवा क्षेत्र और वैकल्पिक चरित्र प्रमाणपत्र दर्ज करें।",vehicle:"वाहन का प्रकार",vehicleNo:"वाहन नंबर",license:"ड्राइविंग लाइसेंस नंबर",experience:"ड्राइविंग अनुभव",service:"सेवा क्षेत्र",availability:"उपलब्धता",cert:"चरित्र प्रमाणपत्र (वैकल्पिक)",notes:"वाहन / सेवा विवरण"},Property:{hint:"प्रॉपर्टी मालिक के लिए प्रॉपर्टी प्रकार, आकार, मंजिल, कीमत/बजट और विवरण दर्ज करें।",propertyType:"प्रॉपर्टी प्रकार",size:"प्लॉट / प्रॉपर्टी आकार",floors:"मंजिलों की संख्या",budget:"अपेक्षित कीमत / अनुमानित बजट",photos:"प्रॉपर्टी फोटो",notes:"प्रॉपर्टी विवरण"},OtherService:{hint:"अन्य काम/सेवा के लिए सेवा, अनुभव, क्षेत्र और उपलब्धता दर्ज करें।",serviceName:"सेवा का नाम",skill:"काम / सेवा का प्रकार",experience:"अनुभव",service:"सेवा क्षेत्र",availability:"उपलब्धता",cert:"चरित्र प्रमाणपत्र (वैकल्पिक)",notes:"सेवा विवरण"}},
 or:{Worker:{hint:"ଶ୍ରମିକ/ମିସ୍ତ୍ରୀଙ୍କ ପାଇଁ କୌଶଳ, ଅଭିଜ୍ଞତା, ସେବା ଅଞ୍ଚଳ, ଉପଲବ୍ଧତା ଓ ବୈକଳ୍ପିକ ଚରିତ୍ର ପ୍ରମାଣପତ୍ର ଦିଅନ୍ତୁ।",skill:"ମୁଖ୍ୟ କୌଶଳ / କାମ",service:"ସେବା ଅଞ୍ଚଳ",availability:"ଉପଲବ୍ଧତା",cert:"ଚରିତ୍ର ପ୍ରମାଣପତ୍ର (ବୈକଳ୍ପିକ)",notes:"କାମର ଅତିରିକ୍ତ ବିବରଣୀ",placeholderSkill:"ଯେପରିକି ମିସ୍ତ୍ରୀ, ପେଣ୍ଟର, ଇଲେକ୍ଟ୍ରିସିଆନ",placeholderService:"ଆପଣ କେଉଁଠାରେ କାମ କରିପାରିବେ",placeholderNotes:"କାମ ବିଷୟରେ ଅତିରିକ୍ତ ସୂଚନା",photoNote:"ପ୍ରୋଫାଇଲ୍ ଫଟୋ ପରିଚୟରେ ସାହାଯ୍ୟ କରେ।"},Contractor:{hint:"କଣ୍ଟ୍ରାକ୍ଟର/ବିଲ୍ଡର ପାଇଁ ପ୍ରକଳ୍ପ ଆକାର, ମହଲା, ବଜେଟ୍, ଟିମ୍ ଓ ଅଭିଜ୍ଞତା ଦିଅନ୍ତୁ।",business:"କମ୍ପାନୀ / କଣ୍ଟ୍ରାକ୍ଟର ନାମ",project:"ପ୍ରକଳ୍ପ / କାମ ପ୍ରକାର",plot:"ପ୍ଲଟ୍ / ପ୍ରକଳ୍ପ ଆକାର",floors:"ମହଲା ସଂଖ୍ୟା",budget:"ଆନୁମାନିକ ବଜେଟ୍",team:"ଟିମ୍ / ଶ୍ରମିକ ସଂଖ୍ୟା",experience:"ଅଭିଜ୍ଞତା",cert:"ଚରିତ୍ର ପ୍ରମାଣପତ୍ର (ବୈକଳ୍ପିକ)",notes:"ପ୍ରକଳ୍ପ / ବ୍ୟବସାୟ ବିବରଣୀ"},Customer:{hint:"ଗ୍ରାହକ/ଘର ମାଲିକଙ୍କ ପାଇଁ ପ୍ରକଳ୍ପ ବିବରଣୀ ଦିଅନ୍ତୁ ଯାହାଦ୍ୱାରା ଠିକ୍ ଶ୍ରମିକ, କଣ୍ଟ୍ରାକ୍ଟର କିମ୍ବା ବିଲ୍ଡର ମିଳିପାରିବେ।",project:"ପ୍ରକଳ୍ପ / କାମ ପ୍ରକାର",plot:"ପ୍ଲଟ୍ ଆକାର",floors:"ମହଲା ସଂଖ୍ୟା",budget:"ଆନୁମାନିକ ବଜେଟ୍",requirement:"କାମର ଆବଶ୍ୟକତା / ବିବରଣୀ",notes:"ଅତିରିକ୍ତ ଆବଶ୍ୟକତା"},Driver:{hint:"ଡ୍ରାଇଭର/ଟ୍ୟାକ୍ସି ପାଇଁ ଯାନ, ଲାଇସେନ୍ସ, ଅଭିଜ୍ଞତା, ସେବା ଅଞ୍ଚଳ ଓ ବୈକଳ୍ପିକ ଚରିତ୍ର ପ୍ରମାଣପତ୍ର ଦିଅନ୍ତୁ।",vehicle:"ଯାନ ପ୍ରକାର",vehicleNo:"ଯାନ ନମ୍ବର",license:"ଡ୍ରାଇଭିଂ ଲାଇସେନ୍ସ ନମ୍ବର",experience:"ଡ୍ରାଇଭିଂ ଅଭିଜ୍ଞତା",service:"ସେବା ଅଞ୍ଚଳ",availability:"ଉପଲବ୍ଧତା",cert:"ଚରିତ୍ର ପ୍ରମାଣପତ୍ର (ବୈକଳ୍ପିକ)",notes:"ଯାନ / ସେବା ବିବରଣୀ"},Property:{hint:"ପ୍ରପର୍ଟି ମାଲିକଙ୍କ ପାଇଁ ପ୍ରପର୍ଟି ପ୍ରକାର, ଆକାର, ମହଲା, ମୂଲ୍ୟ/ବଜେଟ୍ ଓ ବିବରଣୀ ଦିଅନ୍ତୁ।",propertyType:"ପ୍ରପର୍ଟି ପ୍ରକାର",size:"ପ୍ଲଟ୍ / ପ୍ରପର୍ଟି ଆକାର",floors:"ମହଲା ସଂଖ୍ୟା",budget:"ଆଶାକରା ମୂଲ୍ୟ / ଆନୁମାନିକ ବଜେଟ୍",photos:"ପ୍ରପର୍ଟି ଫଟୋ",notes:"ପ୍ରପର୍ଟି ବିବରଣୀ"},OtherService:{hint:"ଅନ୍ୟ କାମ/ସେବା ପାଇଁ ସେବା, ଅଭିଜ୍ଞତା, ଅଞ୍ଚଳ ଓ ଉପଲବ୍ଧତା ଦିଅନ୍ତୁ।",serviceName:"ସେବା ନାମ",skill:"କାମ / ସେବା ପ୍ରକାର",experience:"ଅଭିଜ୍ଞତା",service:"ସେବା ଅଞ୍ଚଳ",availability:"ଉପଲବ୍ଧତା",cert:"ଚରିତ୍ର ପ୍ରମାଣପତ୍ର (ବୈକଳ୍ପିକ)",notes:"ସେବା ବିବରଣୀ"}}
};
function roleText(role){return (ROLE_TEXT[currentLang]||ROLE_TEXT.en)[role]||ROLE_TEXT.en[role]}
function escAttr(v){return safe(v).replace(/`/g,"&#96;")}
function renderRoleFields(){
 const role=document.querySelector('#registrationModal input[name="role"]:checked')?.value||"Worker";
 const x=roleText(role),box=$("roleFields");
 if(!box)return;

 const lang=currentLang;
 const L={
   en:{
     chooseExp:"Select experience",y01:"0–1 year",y25:"2–5 years",y610:"6–10 years",y10:"10+ years",
     chooseAvail:"Select availability",full:"Full time",part:"Part time",request:"On request",
     optional:"Optional at launch. Secure upload will be connected later.",
     workerSkill:"Primary Skill / Work Type",workerService:"Service Area",workerAvail:"Availability",workerCert:"Character Certificate (optional)",workerNotes:"Work Notes / Additional Details",
     contractorBusiness:"Company / Contractor Name",contractorProject:"Project / Work Type",contractorPlot:"Plot / Project Size",contractorFloors:"Number of Floors",contractorBudget:"Approximate Budget",contractorTeam:"Team / Workforce Size",contractorExp:"Experience",contractorCert:"Character Certificate (optional)",contractorNotes:"Project / Business Details",
     customerProject:"Project / Work Type",customerPlot:"Plot Size",customerFloors:"Number of Floors",customerBudget:"Approximate Budget",customerReq:"Work Requirement / Details",customerNotes:"Additional Requirements",
     driverVehicle:"Vehicle Type",driverVehicleNo:"Vehicle Number",driverLicense:"Driving Licence Number",driverExp:"Driving Experience",driverService:"Service Area",driverAvail:"Availability",driverRC:"Motor / Vehicle RC Copy",driverDL:"Driving Licence (DL) Copy",driverPhoto:"Present Motor / Vehicle Photo",driverCert:"Character Certificate (optional)",driverNotes:"Vehicle / Service Details",
     propertyType:"Property Type",propertySize:"Plot / Property Size",propertyFloors:"Number of Floors",propertyBudget:"Expected Price / Approx. Budget",propertyPhotos:"Property Photos",propertyNotes:"Property Description",
     serviceName:"Service Name",serviceType:"Work / Service Type",serviceExp:"Experience",serviceArea:"Service Area",serviceAvail:"Availability",serviceCert:"Character Certificate (optional)",serviceNotes:"Service Details",
     placeholders:{company:"Company / Contractor name",project:"Residential, commercial, renovation...",plot:"e.g. 1200 sq ft",floors:"e.g. 2",budget:"e.g. ₹10 lakh",team:"e.g. 12",customerBudget:"e.g. ₹8 lakh",vehicle:"Auto, Taxi, Car, Van",vehicleNo:"Vehicle number",license:"Driving licence number",driverArea:"Areas where you can drive",propertySize:"e.g. 1500 sq ft",propertyBudget:"e.g. ₹25 lakh",serviceName:"e.g. Plumber, Carpenter, Cleaning",serviceType:"Work / service type",serviceArea:"Areas where you can work"}
   },
   hi:{
     chooseExp:"अनुभव चुनें",y01:"0–1 वर्ष",y25:"2–5 वर्ष",y610:"6–10 वर्ष",y10:"10+ वर्ष",
     chooseAvail:"उपलब्धता चुनें",full:"पूर्ण समय",part:"पार्ट टाइम",request:"आवश्यकता पर",
     optional:"लॉन्च के समय वैकल्पिक। सुरक्षित अपलोड बाद में जोड़ा जाएगा।",
     workerSkill:"मुख्य कौशल / काम",workerService:"सेवा क्षेत्र",workerAvail:"उपलब्धता",workerCert:"चरित्र प्रमाणपत्र (वैकल्पिक)",workerNotes:"काम की अतिरिक्त जानकारी",
     contractorBusiness:"कंपनी / ठेकेदार का नाम",contractorProject:"प्रोजेक्ट / काम का प्रकार",contractorPlot:"प्लॉट / प्रोजेक्ट आकार",contractorFloors:"मंजिलों की संख्या",contractorBudget:"अनुमानित बजट",contractorTeam:"टीम / कामगार संख्या",contractorExp:"अनुभव",contractorCert:"चरित्र प्रमाणपत्र (वैकल्पिक)",contractorNotes:"प्रोजेक्ट / व्यवसाय विवरण",
     customerProject:"प्रोजेक्ट / काम का प्रकार",customerPlot:"प्लॉट का आकार",customerFloors:"मंजिलों की संख्या",customerBudget:"अनुमानित बजट",customerReq:"काम की आवश्यकता / विवरण",customerNotes:"अतिरिक्त आवश्यकता",
     driverVehicle:"वाहन का प्रकार",driverVehicleNo:"वाहन नंबर",driverLicense:"ड्राइविंग लाइसेंस नंबर",driverExp:"ड्राइविंग अनुभव",driverService:"सेवा क्षेत्र",driverAvail:"उपलब्धता",driverRC:"गाड़ी की RC कॉपी",driverDL:"ड्राइविंग लाइसेंस (DL) कॉपी",driverPhoto:"गाड़ी की वर्तमान फोटो",driverCert:"चरित्र प्रमाणपत्र (वैकल्पिक)",driverNotes:"वाहन / सेवा विवरण",
     propertyType:"प्रॉपर्टी प्रकार",propertySize:"प्लॉट / प्रॉपर्टी आकार",propertyFloors:"मंजिलों की संख्या",propertyBudget:"अपेक्षित कीमत / अनुमानित बजट",propertyPhotos:"प्रॉपर्टी फोटो",propertyNotes:"प्रॉपर्टी विवरण",
     serviceName:"सेवा का नाम",serviceType:"काम / सेवा का प्रकार",serviceExp:"अनुभव",serviceArea:"सेवा क्षेत्र",serviceAvail:"उपलब्धता",serviceCert:"चरित्र प्रमाणपत्र (वैकल्पिक)",serviceNotes:"सेवा विवरण",
     placeholders:{company:"कंपनी / ठेकेदार का नाम",project:"आवासीय, व्यावसायिक, मरम्मत...",plot:"जैसे 1200 वर्ग फुट",floors:"जैसे 2",budget:"जैसे ₹10 लाख",team:"जैसे 12",customerBudget:"जैसे ₹8 लाख",vehicle:"ऑटो, टैक्सी, कार, वैन",vehicleNo:"वाहन नंबर",license:"ड्राइविंग लाइसेंस नंबर",driverArea:"जहाँ आप ड्राइव कर सकते हैं",propertySize:"जैसे 1500 वर्ग फुट",propertyBudget:"जैसे ₹25 लाख",serviceName:"जैसे प्लंबर, कारपेंटर, सफाई",serviceType:"काम / सेवा का प्रकार",serviceArea:"जहाँ आप काम कर सकते हैं"}
   },
   or:{
     chooseExp:"ଅଭିଜ୍ଞତା ବାଛନ୍ତୁ",y01:"୦–୧ ବର୍ଷ",y25:"୨–୫ ବର୍ଷ",y610:"୬–୧୦ ବର୍ଷ",y10:"୧୦+ ବର୍ଷ",
     chooseAvail:"ଉପଲବ୍ଧତା ବାଛନ୍ତୁ",full:"ପୂର୍ଣ୍ଣ ସମୟ",part:"ପାର୍ଟ ଟାଇମ୍",request:"ଆବଶ୍ୟକତା ଅନୁସାରେ",
     optional:"ଲଞ୍ଚ ସମୟରେ ବୈକଳ୍ପିକ। ସୁରକ୍ଷିତ ଅପଲୋଡ୍ ପରେ ଯୋଡାଯିବ।",
     workerSkill:"ମୁଖ୍ୟ କୌଶଳ / କାମ",workerService:"ସେବା ଅଞ୍ଚଳ",workerAvail:"ଉପଲବ୍ଧତା",workerCert:"ଚରିତ୍ର ପ୍ରମାଣପତ୍ର (ବୈକଳ୍ପିକ)",workerNotes:"କାମର ଅତିରିକ୍ତ ବିବରଣୀ",
     contractorBusiness:"କମ୍ପାନୀ / କଣ୍ଟ୍ରାକ୍ଟର ନାମ",contractorProject:"ପ୍ରକଳ୍ପ / କାମ ପ୍ରକାର",contractorPlot:"ପ୍ଲଟ୍ / ପ୍ରକଳ୍ପ ଆକାର",contractorFloors:"ମହଲା ସଂଖ୍ୟା",contractorBudget:"ଆନୁମାନିକ ବଜେଟ୍",contractorTeam:"ଟିମ୍ / ଶ୍ରମିକ ସଂଖ୍ୟା",contractorExp:"ଅଭିଜ୍ଞତା",contractorCert:"ଚରିତ୍ର ପ୍ରମାଣପତ୍ର (ବୈକଳ୍ପିକ)",contractorNotes:"ପ୍ରକଳ୍ପ / ବ୍ୟବସାୟ ବିବରଣୀ",
     customerProject:"ପ୍ରକଳ୍ପ / କାମ ପ୍ରକାର",customerPlot:"ପ୍ଲଟ୍ ଆକାର",customerFloors:"ମହଲା ସଂଖ୍ୟା",customerBudget:"ଆନୁମାନିକ ବଜେଟ୍",customerReq:"କାମର ଆବଶ୍ୟକତା / ବିବରଣୀ",customerNotes:"ଅତିରିକ୍ତ ଆବଶ୍ୟକତା",
     driverVehicle:"ଯାନ ପ୍ରକାର",driverVehicleNo:"ଯାନ ନମ୍ବର",driverLicense:"ଡ୍ରାଇଭିଂ ଲାଇସେନ୍ସ ନମ୍ବର",driverExp:"ଡ୍ରାଇଭିଂ ଅଭିଜ୍ଞତା",driverService:"ସେବା ଅଞ୍ଚଳ",driverAvail:"ଉପଲବ୍ଧତା",driverRC:"ଗାଡ଼ିର RC କପି",driverDL:"ଡ୍ରାଇଭିଂ ଲାଇସେନ୍ସ (DL) କପି",driverPhoto:"ଗାଡ଼ିର ବର୍ତ୍ତମାନ ଫଟୋ",driverCert:"ଚରିତ୍ର ପ୍ରମାଣପତ୍ର (ବୈକଳ୍ପିକ)",driverNotes:"ଯାନ / ସେବା ବିବରଣୀ",
     propertyType:"ପ୍ରପର୍ଟି ପ୍ରକାର",propertySize:"ପ୍ଲଟ୍ / ପ୍ରପର୍ଟି ଆକାର",propertyFloors:"ମହଲା ସଂଖ୍ୟା",propertyBudget:"ଆଶାକରା ମୂଲ୍ୟ / ଆନୁମାନିକ ବଜେଟ୍",propertyPhotos:"ପ୍ରପର୍ଟି ଫଟୋ",propertyNotes:"ପ୍ରପର୍ଟି ବିବରଣୀ",
     serviceName:"ସେବା ନାମ",serviceType:"କାମ / ସେବା ପ୍ରକାର",serviceExp:"ଅଭିଜ୍ଞତା",serviceArea:"ସେବା ଅଞ୍ଚଳ",serviceAvail:"ଉପଲବ୍ଧତା",serviceCert:"ଚରିତ୍ର ପ୍ରମାଣପତ୍ର (ବୈକଳ୍ପିକ)",serviceNotes:"ସେବା ବିବରଣୀ",
     placeholders:{company:"କମ୍ପାନୀ / କଣ୍ଟ୍ରାକ୍ଟର ନାମ",project:"ଆବାସିକ, ବାଣିଜ୍ୟିକ, ମରାମତି...",plot:"ଯେପରି ୧୨୦୦ ବର୍ଗ ଫୁଟ୍",floors:"ଯେପରି ୨",budget:"ଯେପରି ₹୧୦ ଲକ୍ଷ",team:"ଯେପରି ୧୨",customerBudget:"ଯେପରି ₹୮ ଲକ୍ଷ",vehicle:"ଅଟୋ, ଟ୍ୟାକ୍ସି, କାର, ଭ୍ୟାନ୍",vehicleNo:"ଯାନ ନମ୍ବର",license:"ଡ୍ରାଇଭିଂ ଲାଇସେନ୍ସ ନମ୍ବର",driverArea:"ଆପଣ କେଉଁଠାରେ ଡ୍ରାଇଭ୍ କରିପାରିବେ",propertySize:"ଯେପରି ୧୫୦୦ ବର୍ଗ ଫୁଟ୍",propertyBudget:"ଯେପରି ₹୨୫ ଲକ୍ଷ",serviceName:"ଯେପରି ପ୍ଲମ୍ବର, କାର୍ପେଣ୍ଟର, ସଫାଇ",serviceType:"କାମ / ସେବା ପ୍ରକାର",serviceArea:"ଆପଣ କେଉଁଠାରେ କାମ କରିପାରିବେ"}
   }
 }[lang] || L.en;

 const exp=`<select id="regExperience"><option value="">${safe(L.chooseExp)}</option><option value="0-1">${safe(L.y01)}</option><option value="2-5">${safe(L.y25)}</option><option value="6-10">${safe(L.y610)}</option><option value="10+">${safe(L.y10)}</option></select>`;
 const availability=`<select id="regAvailability"><option value="">${safe(L.chooseAvail)}</option><option value="Full time">${safe(L.full)}</option><option value="Part time">${safe(L.part)}</option><option value="On request">${safe(L.request)}</option></select>`;
 let h=`<div class="roleHint">${safe(x.hint)}</div>`;
 const field=(id,label,placeholder='',type='text',full=false)=>`<div class="field${full?' full':''}"><label>${safe(label)}</label><input id="${id}" type="${type}" maxlength="300" placeholder="${escAttr(placeholder)}"></div>`;
 const select=(id,label,opts)=>`<div class="field"><label>${safe(label)}</label><select id="${id}">${opts.map(o=>`<option value="${escAttr(o)}">${safe(o)}</option>`).join('')}</select></div>`;
 const cert=(label)=>`<div class="field"><label>${safe(label)}</label><input id="regCharacterCertificate" type="file" accept=".pdf,.jpg,.jpeg,.png"><div class="smallNote">${safe(L.optional)}</div></div>`;
 const experience=(label)=>`<div class="field"><label>${safe(label)}</label>${exp}</div>`;
 const avail=(label)=>`<div class="field"><label>${safe(label)}</label>${availability}</div>`;

 if(role==='Worker'){
   h+=field('regSkill',L.workerSkill,x.placeholderSkill||"")+experience(L.contractorExp)+field('regServiceArea',L.workerService,x.placeholderService||"")+avail(L.workerAvail)+cert(L.workerCert)+field('regNotes',L.workerNotes,x.placeholderNotes||'', 'text',true);
 }
 if(role==='Contractor'){
   h+=field('regBusinessName',L.contractorBusiness,L.placeholders.company)+field('regProjectType',L.contractorProject,L.placeholders.project)+field('regPlotSize',L.contractorPlot,L.placeholders.plot)+field('regFloors',L.contractorFloors,L.placeholders.floors)+field('regBudget',L.contractorBudget,L.placeholders.budget)+field('regTeamSize',L.contractorTeam,L.placeholders.team)+experience(L.contractorExp)+cert(L.contractorCert)+field('regNotes',L.contractorNotes,"",'text',true);
 }
 if(role==='Customer'){
   h+=field('regProjectType',L.customerProject,L.placeholders.project)+field('regPlotSize',L.customerPlot,L.placeholders.plot)+field('regFloors',L.customerFloors,L.placeholders.floors)+field('regBudget',L.customerBudget,L.placeholders.customerBudget)+field('regRequirement',L.customerReq,"",'text',true)+field('regNotes',L.customerNotes,"",'text',true);
 }
 if(role==='Driver'){
   h+=field('regVehicleType',L.driverVehicle,L.placeholders.vehicle)+field('regVehicleNo',L.driverVehicleNo,L.placeholders.vehicleNo)+field('regLicenseNo',L.driverLicense,L.placeholders.license)+experience(L.driverExp)+field('regServiceArea',L.driverService,L.placeholders.driverArea)+avail(L.driverAvail)+`<div class="field"><label>${safe(L.driverRC)}</label><input id="regRcCopy" type="file" accept=".pdf,.jpg,.jpeg,.png"></div><div class="field"><label>${safe(L.driverDL)}</label><input id="regDlCopy" type="file" accept=".pdf,.jpg,.jpeg,.png"></div><div class="field"><label>${safe(L.driverPhoto)}</label><input id="regVehiclePhoto" type="file" accept="image/*"><img id="regVehiclePhotoPreview" class="photoPreview" alt="Vehicle preview"></div>`+cert(L.driverCert)+field('regNotes',L.driverNotes,"",'text',true);
 }
 if(role==='Property'){
   h+=select('regPropertyType',L.propertyType,lang==='hi'?['प्लॉट / जमीन','घर','अपार्टमेंट','व्यावसायिक','अन्य']:lang==='or'?['ପ୍ଲଟ୍ / ଜମି','ଘର','ଆପାର୍ଟମେଣ୍ଟ','ବାଣିଜ୍ୟିକ','ଅନ୍ୟାନ୍ୟ']:['Plot / Land','House','Apartment','Commercial','Other']);
   h+=field('regPropertySize',L.propertySize,L.placeholders.propertySize)+field('regFloors',L.propertyFloors,L.placeholders.floors)+field('regBudget',L.propertyBudget,L.placeholders.propertyBudget)+`<div class="field"><label>${safe(L.propertyPhotos)}</label><input id="regPropertyPhotos" type="file" accept="image/*" multiple></div>`+field('regNotes',L.propertyNotes,"",'text',true);
 }
 if(role==='OtherService'){
   h+=field('regServiceName',L.serviceName,L.placeholders.serviceName)+field('regSkill',L.serviceType,L.placeholders.serviceType)+experience(L.serviceExp)+field('regServiceArea',L.serviceArea,L.placeholders.serviceArea)+avail(L.serviceAvail)+cert(L.serviceCert)+field('regNotes',L.serviceNotes,"",'text',true);
 }
 box.innerHTML=h;
}
function captureLiveLocation(){
 if(!navigator.geolocation){toast(currentLang==='hi'?'यह डिवाइस लाइव लोकेशन सपोर्ट नहीं करता।':currentLang==='or'?'ଏହି ଡିଭାଇସ୍ ଲାଇଭ୍ ଲୋକେସନ୍ ସମର୍ଥନ କରେନାହିଁ।':'Live location is not supported on this device.',true);return}
 const status=$("locationStatus");status.textContent=currentLang==='hi'?'लोकेशन ली जा रही है…':currentLang==='or'?'ଲୋକେସନ୍ ନିଆଯାଉଛି…':'Getting location…';
 navigator.geolocation.getCurrentPosition(pos=>{const lat=pos.coords.latitude.toFixed(6),lng=pos.coords.longitude.toFixed(6);$("regLat").value=lat;$("regLng").value=lng;getPlaceName(lat,lng,'regLocation','locationStatus');status.textContent=`✓ ${lat}, ${lng}`; if(!$('regLocation').value.trim())$('regLocation').value=`${lat}, ${lng}`;},()=>{status.textContent=currentLang==='hi'?'लोकेशन की अनुमति नहीं मिली।':currentLang==='or'?'ଲୋକେସନ୍ ଅନୁମତି ମିଳିଲା ନାହିଁ।':'Location permission was not granted.'},{enableHighAccuracy:true,timeout:10000,maximumAge:60000});
}
function capturePostLocation(){
 if(!navigator.geolocation){toast('Live location is not supported on this device.',true);return}
 const s=$("postLocStatus");s.textContent='Getting location…';
 navigator.geolocation.getCurrentPosition(p=>{
  const lat=p.coords.latitude.toFixed(6),lng=p.coords.longitude.toFixed(6);
  $("postLat").value=lat;$("postLng").value=lng;s.textContent='✓ '+lat+', '+lng;
  getPlaceName(lat,lng,'postWorkLocation','postLocStatus');
  if(!$("postWorkLocation").value.trim())$("postWorkLocation").value=lat+', '+lng;
 },()=>{s.textContent='Location permission was not granted.'},{enableHighAccuracy:true,timeout:10000,maximumAge:60000});
}
async function getPlaceName(lat,lng,inputId,statusId){
 try{
  const r=await fetch('https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=14&addressdetails=1&accept-language=en&lat='+lat+'&lon='+lng);
  const d=await r.json();const a=d.address||{};
  const name=[a.village||a.town||a.city||a.hamlet||a.suburb,a.state_district||a.county,a.state].filter(Boolean).join(', ');
  if(!name)return;
  $(statusId).textContent='✓ '+name+' ('+lat+', '+lng+')';
  const inp=$(inputId);
  if(inp&&(!inp.value.trim()||/^-?\d+\.\d+,\s*-?\d+\.\d+$/.test(inp.value.trim())))inp.value=name;
 }catch(e){}
}
function previewImage(input,previewId){const f=input?.files?.[0],img=$(previewId);if(!img)return;if(!f){img.classList.remove('show');return}const u=URL.createObjectURL(f);img.src=u;img.classList.add('show');img.onload=()=>URL.revokeObjectURL(u)}
function readFileNames(id){const el=$(id);return el?.files?Array.from(el.files).map(f=>f.name):[]}

/* ---------- Registration (hardened) ---------- */
function submitRegistration(e){
 e.preventDefault();clearFormErrors("registrationForm");
 const role=document.querySelector('#registrationModal input[name="role"]:checked')?.value||"Worker";
 const name=$("regName").value.trim(),mobile=normalizeMobile($("regMobile").value),locationText=$("regLocation").value.trim();
 let valid=true;if(!name){markFieldError("regNameField",true);valid=false}if(mobile.length!==10){markFieldError("regMobileField",true);$("regMobile").value=mobile;valid=false}if(!locationText){markFieldError("regLocationField",true);valid=false}if(!valid){toast(t("errName"),true);return}
 const members=read(STORAGE.members);if(members.some(m=>m.mobile===mobile&&m.role===role)){markFieldError("regMobileField",true);toast(t("toastDuplicateMobile"),true);return}
 const photo=$("regPhoto")?.files?.[0];const cert=$("regCharacterCertificate")?.files?.[0];
 const member={id:makeId("MEM"),name,mobile,location:locationText,role,photoName:photo?.name||"",characterCertificateName:cert?.name||"",latitude:$("regLat")?.value||"",longitude:$("regLng")?.value||"",createdAt:new Date().toISOString()};
 const address=document.querySelector("#regAddress")?.value.trim()||"";
const idProofType=document.querySelector("#regIdProofType")?.value||"";
const idProofLast4=document.querySelector("#regIdProofLast4")?.value.trim()||"";

member.address=address;
member.idProofType=idProofType;
member.idProofLast4=idProofLast4;
 const ids=['regSkill','regServiceArea','regAvailability','regExperience','regBusinessName','regProjectType','regPlotSize','regFloors','regBudget','regTeamSize','regRequirement','regVehicleType','regVehicleNo','regLicenseNo','regPropertyType','regPropertySize','regServiceName','regNotes'];
 ids.forEach(id=>{const el=$(id);if(el)member[id.replace(/^reg/,'').replace(/^[A-Z]/,c=>c.toLowerCase())]=el.value.trim()});
 member.propertyPhotoNames=readFileNames('regPropertyPhotos');
 if(role==='Driver'){member.rcCopyName=readFileNames('regRcCopy')[0]||'';member.dlCopyName=readFileNames('regDlCopy')[0]||'';member.vehiclePhotoName=readFileNames('regVehiclePhoto')[0]||'';}
 members.unshift(member);write(STORAGE.members,members);lastRegisteredMember=member;
 e.target.reset();document.querySelector('#registrationModal input[value="Worker"]').checked=true;clearFormErrors("registrationForm");renderRoleFields();
 closeModal("registrationModal");refreshDashboard();openMembershipCard(member);toast(t("toastProfileCreated")+member.id);
}

