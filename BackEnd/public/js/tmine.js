var vh = window.innerHeight ;
var vw =window.innerWidth ;

/////////////////////////////////////////////////////////
function AddPage(){
    var htmlContent = '';
    htmlContent += '<div class="container text-center"><div class="Dad"><h4>Add Employee</h4><form action="/Task/add" method="POST"><div class="row pt-2 px-3"><div class="col-md-6"><div class="form-group"><label> Name : </label><input type="text" class="form-control" name="EmployeeName" id="EmployeeName" /></div><div class="form-group">   <label> Age : </label> <input type="number" class="form-control" id="EmployeeAge" name="EmployeeAge" /></div><div class="form-group"><label> Department : </label><input type="text" class="form-control" id="EmployeeDep" name="EmployeeDep" /></div><div class="form-group"> <label> State : </label><input type="text" class="form-control" id="EmployeeState" name="EmployeeState" /></div> <div class="form-group"><label> Role : </label><input type="text" class="form-control" name="EmployeeRole" id="EmployeeRole" /></div></div><div class="col-md-6"><div class="form-group"> <label> Id : </label><input type="text" class="form-control" name="id" id="id" /></div><div class="form-group">  <label> City : </label><input type="text" class="form-control" name="EmployeeCity" id="EmployeeCity" /></div><div class="form-group"><label> Mobile : </label><input type="text" class="form-control" name="EmployeeMobile" id="EmployeeMobile" /></div><div class="form-group"><label> E-mail : </label><input type="text" class="form-control" name="EmployeeEmail" id="EmployeeEmail"/></div><div class="form-group"><label> Image : </label><input type="text" class="form-control" name="EmployeeImage" id="EmployeeImage"/></div></div></div><div class="px-3"><div class="form-group text-center"><input type="submit" class="btn border rounded mt-2 px-5 py-2 btn-success" id="SavEmp" value="Add"/></div></form></div></div>';
    document.getElementById("EmpInfo").innerHTML = htmlContent;
}

AddPage();
$("#AddDark").fadeOut(0);
$("#EmpInfo").css({"height" : 5*vh/6});
$("#OpenEmpInfo").click(function(){
    $("#AddDark").fadeIn(50);
})
$("#viewerclose").click(function(){
    $("#AddDark").fadeOut(100);
})
$("#close0").click(function(){
    $("#AddDark").fadeOut(0);
})


////////////////////////////////////////////////
function DelPage(){
    var htmlContent = '';
    htmlContent += '<div class="Dad container"><form action="/Task/delete"><div class="form-group"><label> Enter ID : </label><input type="text" class="form-control" name="term2" id="id"/></div><div class="px-3"><div class="form-group text-center"><input  type="submit" class="btn border rounded mt-2 px-5 py-2 btn-success" value="Delete"/></div></form></div>';
    document.getElementById("FindIdD").innerHTML = htmlContent;
}
DelPage();
$("#FindIdDDark").fadeOut(0);
$(" #FindIdD").css({"height" : 1.2*vh/5});
$("#Delete").click(function(){
    $("#FindIdDDark").fadeIn(100);
})
$("#viewerclose3").click(function(){
    $("#FindIdDDark").fadeOut(100);
})
$("#close").click(function(){
    $("#FindIdDDark").fadeOut(0);
})


///////////////////////////////////

function UpdPage(){
    var htmlContent = '';
    htmlContent += '<div class="Dad container"><form action="/Task/check"><div class="form-group"><label> Enter ID : </label><input type="text" class="form-control" name="term3"/></div><div class="px-3"><div class="form-group text-center"><input  type="submit" class="btn border rounded mt-2 px-5 py-2 btn-success" value="Find" id="Go"/></div></form></div>';
    document.getElementById("FindIdU").innerHTML = htmlContent;
    var htmlContent1 ='';
    htmlContent1 +='<div class="container text-center"><div class="Dad"><h4>Add Employee</h4><form action="/Task/update" method="POST"><div class="row pt-2 px-3"><div class="col-md-6"><div class="form-group"><label> Name : </label><input type="text" class="form-control" name="EmployeeName" /></div><div class="form-group">   <label> Age : </label> <input type="number" class="form-control" name="EmployeeAge" /></div><div class="form-group"><label> Department : </label><input type="text" class="form-control" name="EmployeeDep" /></div><div class="form-group"> <label> State : </label><input type="text" class="form-control"  name="EmployeeState" /></div> <div class="form-group"><label> Role : </label><input type="text" class="form-control" name="EmployeeRole"  /></div></div><div class="col-md-6"><div class="form-group"> <label> Id : </label><input type="text" class="form-control" name="id"  /></div><div class="form-group">  <label> City : </label><input type="text" class="form-control" name="EmployeeCity"  /></div><div class="form-group"><label> Mobile : </label><input type="text" class="form-control" name="EmployeeMobile"  /></div><div class="form-group"><label> E-mail : </label><input type="text" class="form-control" name="EmployeeEmail" /></div><div class="form-group"><label> Image : </label><input type="text" class="form-control" name="EmployeeImage" /></div></div></div><div class="px-3"><div class="form-group text-center"><input type="submit" class="btn border rounded mt-2 px-5 py-2 btn-success" value="update"/></div></form></div></div>';
    document.getElementById("EmpInfo1").innerHTML = htmlContent1;
}
UpdPage();
$("#EditDark").fadeOut(0);
$("#FindIdUDark").fadeOut(0);
$("#FindIdU").css({"height" : 1*vh/5});
$("#EmpInfo1").css({"height" : 3*vh/5});
$("#EditEmpInfo").click(function(){
    $("#FindIdUDark").fadeIn(100);
})
$("#close1").click(function(){
    $("#FindIdUDark").fadeOut(0);
    $("#EditDark").fadeOut(0);
    
})
$("#close2").click(function(){
    $("#EditDark").fadeOut(0);
    
})
$("#Go").click(function(){
    $("#EditDark").fadeIn(100);
    $("#FindIdUDark").fadeOut(0);
})


function passVar()
{
    id_update = document.getElementById("in_1").value;
    document.getElementById("id_emp").value = parseInt(id_update, 10);
    console.log(id_update);
}
/////////////////////////////////////////////////////

function TskPage()
{
    var htmlContent = '';
    htmlContent += `<div class="Dad container"><div class="form-group"><label> Enter ID : </label>
    <input type="text" class="form-control" id="in_1"/></div><div class="px-3">
    <div class="form-group text-center"><button class="btn border rounded mt-2 px-5 py-2" id="Go2" onclick="passVar()">Go</button>
    <button class="btn border rounded mt-2 px-5 py-2" id="viewerclose6">Close</button></div></div></div>`;
    document.getElementById("FindIdT").innerHTML = htmlContent;
    var htmlContent1 ='';
    htmlContent1 +=`<div class="container"><div class="Dad"><form action="/Task/addTask" method="POST"><div class="row p-3"><div class="col-md-6">
    <div class="form-group"><label> TaskName : </label><input type="text" class="form-control" name="TaskName" id="TaskName"></div><div class="form-group">
    <label> Start : </label><input type="date" class="form-control" name="TaskStart" id="TaskStart"/></div></div>
    <div class="col-md-6"><div class="form-group">
    <label> Supervisor : </label><input type="text" class="form-control" name="TaskSupv" id="TaskSupv"/>
    <input type="hidden" name="id_emp" id="id_emp">
    </div><div class="form-group">
    <label> DeadLine : </label><input type="date" class="form-control" name="TaskDead" id="TaskDead"/></div></div></div>
    <div class="p-3"><div class="form-group">
    <label> Description : </label><textarea type="text" class="form-control" name="Description" id="Description"></textarea></div><div class="form-group text-center">
    <input type="submit" class="btn border rounded mt-5 px-5 py-2" value="Add">
    <button class="btn border rounded mt-5 px-5 py-2" id="viewerclose1">Close</button></div></div></form></div></div>`;
    document.getElementById("TaskInfo").innerHTML = htmlContent1;
}
TskPage();
$("#TaskDark").fadeOut(0);
$("#FindIdTDark").fadeOut(0);
$("#FindIdT").css({"height" : 1*vh/5});
$("#TaskInfo").css({"height" : 2.5*vh/5});
$("#AddTask").click(function(){
    $("#FindIdTDark").fadeIn(100);
})
$("#viewerclose6").click(function(){
    $("#FindIdTDark").fadeOut(100);
})
$("#Go2").click(function(){
    $("#TaskDark").fadeIn(100);
    $("#FindIdTDark").fadeOut(0);
})
$("#viewerclose1").click(function(){
    $("#TaskDark").fadeOut(100);
})


////////////////////////////////////////////////////

function PerPage(){
    var htmlContent = '';
    htmlContent += '<div class="Dad container"><form action="/personal"><div class="form-group"><label> Enter ID : </label><input type="text" class="form-control" name="term"/></div><div class="px-3"><div class="form-group text-center"><input type="submit" class="btn border rounded mt-2 px-5 py-2 btn-success" value="Go" id="Go3"/></div></form></div>';
    document.getElementById("FindIdP").innerHTML = htmlContent;
    /*var htmlContent1 ='';
    htmlContent1 +='';
    document.getElementById("PerInfo").innerHTML = htmlContent1;*/
}
PerPage();
$("#FindIdPDark").fadeOut(0);
$("#PerDark").fadeOut(0);
$("#FindIdP").css({"height" : 1*vh/5});
$("#PerInfo").css({"height" : 3*vh/5});
$("#OpenPerInfo").click(function(){
    $("#FindIdPDark").fadeIn(100);
})
$("#viewerclose7").click(function(){
    $("#FindIdPDark").fadeOut(100);
})
$("#Go3").click(function(){
    $("#PerDark").fadeIn(100);
    $("#FindIdPDark").fadeOut(0);
})
$("#viewerclose2").click(function(){
    $("#PerDark").fadeOut(100);
})


//////////////////////////////////////////


/* Section 3 JS */



var empArray = [];
var searcharr = [];
drawSearch();

function drawSearch() {
    var htmlContent = '';
    htmlContent += "<form action='/Task/search' class='search-form'><input type='search' name='term' value='' id='term'>";
    htmlContent += '<input type="submit" class="btn btn-success py-2 m-2" value="Search"/></form>';
    document.getElementById("SearchD").innerHTML = htmlContent;
}

//////////////////////


