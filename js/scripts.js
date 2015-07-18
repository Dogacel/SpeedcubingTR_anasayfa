function displaynone(){
    $(".content").children("p").slideUp('slow');
}
function anasayfa(){  
    $(".content").children("p.anasayfa").slideDown('slow',displaynone());}
function cevirici(){
    displaynone();
    $(".content").children(".ceviriciler").slideDown('slow',displaynone());}
function comez(){
    displaynone();
    $(".content").children("p.comez").slideDown('slow',displaynone());}
function boll(){
    displaynone();
    $(".content").children("p.basitoll").slideDown('slow',displaynone());}
function keyhole(){
    displaynone();
    $(".content").children("p.keyhole").slideDown('slow',displaynone());}
function a444(){
    displaynone();
    $(".content").children("p.444").slideDown('slow',displaynone());}
function bld(){
    displaynone();
    $(".content").children("p.bld").slideDown('slow',displaynone());}
function a222(){
    displaynone();
    $(".content").children("p.222").slideDown('slow',displaynone());}
function f2l(){
    displaynone();
    $(".content").children("p.f2l").slideDown('slow',displaynone());}
function oll(){
    displaynone();
    $(".content").children("p.oll").slideDown('slow',displaynone());}
function pll(){
    displaynone();
    $(".content").children("p.pll").slideDown('slow',displaynone());}
function forum(){
    $("html").fadeOut();                  
    window.location.replace("http://www.speedcubingtr.com/forum/");
}
function goback(){
    $("html").fadeOut();  
    history.go(-1);
}
function giris(){
    $("html").fadeOut();
    window.location.replace("http://www.speedcubingtr.com/forum/index.php?action=login");
}