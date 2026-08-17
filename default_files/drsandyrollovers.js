bAllImagesLoaded = 0;
br = 0;

function imgAct(imgName) { 
if (bAllImagesLoaded != 0) {

if (br == "n3") { document[imgName].src = eval(imgName + "on.src"); } } }

function imgInact(imgName) { 
if (bAllImagesLoaded != 0) {

if ( br == "n3") { document[imgName].src = eval(imgName + "off.src"); } } }

function imgActSq(imgName) { 
if (bAllImagesLoaded != 0) {
 if (br == "n3") { document[imgName].src = eval(imgName + "on.src"); 
				  document["square"].src = eval(imgName + "sq.src"); } } }

function imgInactSq(imgName, sqOffsrc) { 
if (bAllImagesLoaded != 0) {
if (br == "n3") { document[imgName].src = eval(imgName + "off.src"); 
				  document["square"].src = sqOffsrc; } } }
				  
function StartDrSandy()
{
//	DoTheCookieStuff();
//	MM_preloadImages('/images/l_menu/l_mn_new_products_on.gif','/images/l_menu/l_mn_video_on.gif','/images/l_menu/l_mn_dvd_on.gif','/images/l_menu/l_mn_vibrators_on.gif','/images/l_menu/l_mn_sex_toys_on.gif','/images/l_menu/l_mn_slip_sensations_on.gif','/images/l_menu/l_mn_playwear_on.gif','/images/l_menu/l_mn_novelties_on.gif','/images/l_menu/l_mn_condoms_on.gif','/images/l_menu/l_mn_clearance_on.gif','/images/l_menu/l_mn_shop_guide_on.gif','/images/r_menu_hm/r_mn_hm_contact_us_on.gif','/images/r_menu_hm/r_mn_hm_cust_reg_on.gif','/images/r_menu_hm/r_mn_hm_request_cat_on.gif','/images/r_menu_hm/r_mn_hm_specialty_on.gif','/images/r_menu_hm/r_mn_hm_comp_info_on.gif','/images/r_menu_hm/r_mn_hm_cust_serv_on.gif','/images/r_menu_hm/r_mn_hm_contact_us_on.gif','/images/r_menu_hm/r_mn_hm_cust_reg_on.gif','/images/r_menu_hm/r_mn_hm_request_cat_on.gif','/images/r_menu_hm/r_mn_hm_specialty_on.gif','/images/r_menu_hm/r_mn_hm_comp_info_on.gif','/images/r_menu_hm/r_mn_hm_cust_serv_on.gif');
bName = navigator.appName;bVer = parseInt(navigator.appVersion); 
if ((bName == "Netscape" && bVer >= 3) || (bName == "Microsoft Internet Explorer" && bVer >= 4)) br = "n3"; 
else br = "n2"; 
if (br== "n3") 

{
imgAboutUson = new Image();imgAboutUson.src = "images/doctor/drsandy_about_on.jpg"; imgAboutUsoff = new Image(); imgAboutUsoff.src = "images/doctor/drsandy_about_off.jpg"; 
imgContactUson = new Image();imgContactUson.src = "images/doctor/drsandy_contact_on.jpg"; imgContactUsoff = new Image(); imgContactUsoff.src = "images/doctor/drsandy_contact_off.jpg"; 
imgIntimacyDron = new Image();imgIntimacyDron.src = "images/doctor/drsandy_intdr_on.jpg"; imgIntimacyDroff = new Image(); imgIntimacyDroff.src = "images/doctor/drsandy_intdr_off.jpg"; 
imgSexEncycon = new Image();imgSexEncycon.src = "images/doctor/drsandy_sexencyc_on.jpg"; imgSexEncycoff = new Image(); imgSexEncycoff.src = "images/doctor/drsandy_sexencyc_off.jpg"; 
imgShopon = new Image();imgShopon.src = "images/doctor/drsandy_shop_on.jpg"; imgShopoff = new Image(); imgShopoff.src = "images/doctor/drsandy_shop_off.jpg"; 
imgDrsandySIQon = new Image();imgDrsandySIQon.src = "images/doctor/drsandy_SIQ_on.jpg"; imgDrsandySIQoff = new Image(); imgDrsandySIQoff.src = "images/doctor/drsandy_SIQ_off.jpg"; 

imgloveprgrmon = new Image();imgloveprgrmon.src = "images/doctor/loveprgrm-on.gif"; imgloveprgrmoff = new Image(); imgloveprgrmoff.src = "images/doctor/loveprgrm-off.gif"; 
imgloveprgrmsq = new Image();imgloveprgrmsq.src = "images/doctor/loveprogram_sq.jpg";
imglovelessonson = new Image();imglovelessonson.src = "images/doctor/lovelessons-on.gif"; imglovelessonsoff = new Image(); imglovelessonsoff.src = "images/doctor/lovelessons-off.gif"; 
imglovelessonssq = new Image();imglovelessonssq.src = "images/doctor/lovelessons_sq.jpg";
imglovetoolson = new Image();imglovetoolson.src = "images/doctor/lovetools-on.gif"; imglovetoolsoff = new Image(); imglovetoolsoff.src = "images/doctor/lovetools-off.gif"; 
imglovetoolssq = new Image();imglovetoolssq.src = "images/doctor/lovetools_sq.jpg";
imgprgrmtipson = new Image();imgprgrmtipson.src = "images/doctor/prgrmtips-on.gif"; imgprgrmtipsoff = new Image(); imgprgrmtipsoff.src = "images/doctor/prgrmtips-off.gif"; 
imgprgrmtipssq = new Image();imgprgrmtipssq.src = "images/doctor/programtips_sq.jpg";
imgintimacyqaon = new Image();imgintimacyqaon.src = "images/doctor/intimacyqa-on.gif"; imgintimacyqaoff = new Image(); imgintimacyqaoff.src = "images/doctor/intimacyqa-off.gif"; 
imgintimacyqasq = new Image();imgintimacyqasq.src = "images/doctor/intimacyqa_sq.jpg";
imgsexandhealthon = new Image();imgsexandhealthon.src = "images/doctor/sexandhealth-on.gif"; imgsexandhealthoff = new Image(); imgsexandhealthoff.src = "images/doctor/sexandhealth-off.gif"; 
imgsexandhealthsq = new Image();imgsexandhealthsq.src = "images/doctor/sexandhealth_sq.jpg";
imglovestyleson = new Image();imglovestyleson.src = "images/doctor/lovestyles-on.gif"; imglovestylesoff = new Image(); imglovestylesoff.src = "images/doctor/lovestyles-off.gif"; 
imglovestylessq = new Image();imglovestylessq.src = "images/doctor/lovestyles_sq.jpg";
imgaboutdrsandyon = new Image();imgaboutdrsandyon.src = "images/doctor/aboutdrsandy-on.gif"; imgaboutdrsandyoff = new Image(); imgaboutdrsandyoff.src = "images/doctor/aboutdrsandy-off.gif"; 
imgaboutdrsandysq = new Image();imgaboutdrsandysq.src = "images/doctor/aboutdrsandy_sq.jpg";
imgherbookon = new Image();imgherbookon.src = "images/doctor/herbook-on.gif"; imgherbookoff = new Image(); imgherbookoff.src = "images/doctor/herbook-off.gif"; 
imgherbooksq = new Image();imgherbooksq.src = "images/doctor/herbook_sq.jpg";
imghervideoon = new Image();imghervideoon.src = "images/doctor/hervideo-on.gif"; imghervideooff = new Image(); imghervideooff.src = "images/doctor/hervideo-off.gif"; 
imghervideosq = new Image();imghervideosq.src = "images/doctor/hervideo_sq.jpg";
imgdrsandysayson = new Image();imgdrsandysayson.src = "images/doctor/drsandysays-on.gif"; imgdrsandysaysoff = new Image(); imgdrsandysaysoff.src = "images/doctor/drsandysays-off.gif"; 
imgdrsandysayssq = new Image();imgdrsandysayssq.src = "images/doctor/sandysays_sq.jpg";
imgAddToCarton = new Image();imgAddToCarton.src = "images/addtocartbtn_on.gif"; imgAddToCartoff = new Image(); imgAddToCartoff.src = "images/addtocartbtn_off.gif"; 

bAllImagesLoaded = 1;
} 
}