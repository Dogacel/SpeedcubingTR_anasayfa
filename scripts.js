function cozumdown(){$(".navbar-cozumler").slideDown();}
function cozumup(){$(".navbar-cozumler").slideUp();}
function fridrichdown(){$(".subfridrich").slideDown();}
function fridrichup(){$(".subfridrich").slideUp();}
function displaynone(){
    $(".content").children("p").css('display','none');
}
function anasayfa(){
    cozumup();
    fridrichup();
    displaynone();
        $(".content").children("p.anasayfa").css('display','block');
}
function cevirici(){
    cozumup();
    fridrichup();
    displaynone();
    $(".content").children(".ceviriciler").css('display','block');}
function comez(){
    fridrichup();
    displaynone();
    $(".content").children("p.comez").css('display','block');}
function boll(){
    fridrichup();
    displaynone();
    $(".content").children("p.basitoll").css('display','block');}
function keyhole(){
    fridrichup();
    displaynone();
    $(".content").children("p.keyhole").css('display','block');}
function a444(){
    fridrichup();
    displaynone();
    $(".content").children("p.444").css('display','block');}
function bld(){
    fridrichup();
    displaynone();
    $(".content").children("p.bld").css('display','block');}
function a222(){
    fridrichup();
    displaynone();
    $(".content").children("p.222").css('display','block');}
function f2l(){
    displaynone();
    $(".content").children("p.f2l").css('display','block');}
function oll(){
    displaynone();
    $(".content").children("p.oll").css('display','block');}
function pll(){
    displaynone();
    $(".content").children("p.pll").css('display','block');}

anasayfa();