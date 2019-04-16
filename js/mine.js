var vh = window.innerHeight ;
var vw =window.innerWidth ;

$("#EmpInfo").fadeOut(1);
$("#TaskInfo").fadeOut(1);
$("#PerInfo").fadeOut(1);
$("#EmpInfo,#PerInfo").css({"height" : 3*vh/5});
$("#TaskInfo").css({"height" : 2.5*vh/5});

$("#OpenEmpInfo").click(function(){
    $("#EmpInfo").fadeIn(100);
})
$("#EditEmpInfo").click(function(){
    $("#EmpInfo").fadeIn(100);
})

$("#AddTask").click(function(){
    $("#TaskInfo").fadeIn(100);
})

$("#OpenPerInfo").click(function(){
    $("#PerInfo").fadeIn(100);
})

$("#viewerclose").click(function(){
    $("#EmpInfo").fadeOut(100);
})

$("#viewerclose1").click(function(){
    $("#TaskInfo").fadeOut(100);
})
$("#viewerclose2").click(function(){
    $("#PerInfo").fadeOut(100);
})

