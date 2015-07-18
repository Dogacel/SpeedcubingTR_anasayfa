function displaynone(){
    $("div.content").children("div").slideUp('slow');
}
function anasayfa(){  
    $("div.content").children("div.anasayfa").slideDown('slow',displaynone());}
function cevirici(){
    displaynone();
    $("div.content").children("div.ceviriciler").slideDown('slow',displaynone());}
function comez(){
    displaynone();
    $("div.content").children("div.comez").slideDown('slow',displaynone());}
function boll(){
    displaynone();
    $("div.content").children("div.basitoll").slideDown('slow',displaynone());}
function keyhole(){
    displaynone();
    $("div.content").children("div.keyhole").slideDown('slow',displaynone());}
function a444(){
    displaynone();
    $("div.content").children("div.444").slideDown('slow',displaynone());}
function bld(){
    displaynone();
    $("div.content").children("div.bld").slideDown('slow',displaynone());}
function a222(){
    displaynone();
    $("div.content").children("div.222").slideDown('slow',displaynone());}
function f2l(){
    displaynone();
    $("div.content").children("div.f2l").slideDown('slow',displaynone());}
function oll(){
    displaynone();
    $("div.content").children("div.oll").slideDown('slow',displaynone());}
function pll(){
    displaynone();
    $("div.content").children("div.pll").slideDown('slow',displaynone());}
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