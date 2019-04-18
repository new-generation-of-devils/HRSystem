var vh = window.innerHeight ;
var vw =window.innerWidth ;

/////////////////////////////////////////////////////////
function AddPage(){
    var htmlContent = '';
    htmlContent += '<div class="container"><div class="Dad"><div class="row pt-2 px-3"><div class="col-md-6"><div class="form-group"><label> Name : </label><input type="text" class="form-control" id="EmpName"/></div><div class="form-group">   <label> Age : </label> <input type="number" class="form-control" id="EmpAge"/></div><div class="form-group"><label> Department : </label><input type="text" class="form-control" id="EmpDep"/></div><div class="form-group"> <label> State : </label><input type="text" class="form-control" id="EmpSt"/></div> <div class="form-group"><label> Role : </label><input type="text" class="form-control"/></div></div><div class="col-md-6"><div class="form-group"> <label> Id : </label><input type="text" class="form-control"/></div><div class="form-group">  <label> City : </label><input type="number" class="form-control"/></div><div class="form-group"><label> Mobile : </label><input type="text" class="form-control"/></div><div class="form-group"><label> E-mail : </label><input type="text" class="form-control"/></div><div class="form-group"><label> Image : </label><input type="file" class="form-control"/></div></div></div><div class="px-3"><div class="form-group text-center"><button class="btn border rounded mt-2 px-5 py-2" id="SavEmp">Add</button><button class="btn border rounded mt-2 px-5 py-2" id="viewerclose">Close</button></div></div></div></div>';
    document.getElementById("EmpInfo").innerHTML = htmlContent;
}

AddPage();
$("#AddDark").fadeOut(0);
$("#EmpInfo").css({"height" : 3*vh/5});
$("#OpenEmpInfo").click(function(){
    $("#AddDark").fadeIn(50);
})
$("#viewerclose").click(function(){
    $("#AddDark").fadeOut(100);
})


////////////////////////////////////////////////
function DelPage(){
    var htmlContent = '';
    htmlContent += '<div class="Dad container"><div class="form-group"><label> Enter ID : </label><input type="text" class="form-control"/></div><div class="px-3"><div class="form-group text-center"><button class="btn border rounded mt-2 px-5 py-2">Delete</button><button class="btn border rounded mt-2 px-5 py-2" id="viewerclose3">Close</button></div></div></div>';
    document.getElementById("FindIdD").innerHTML = htmlContent;
}
DelPage();
$("#FindIdDDark").fadeOut(0);
$(" #FindIdD").css({"height" : 1*vh/5});
$("#Delete").click(function(){
    $("#FindIdDDark").fadeIn(100);
})
$("#viewerclose3").click(function(){
    $("#FindIdDDark").fadeOut(100);
})


///////////////////////////////////

function UpdPage(){
    var htmlContent = '';
    htmlContent += '<div class="Dad container"><div class="form-group"><label> Enter ID : </label><input type="text" class="form-control"/></div><div class="px-3"><div class="form-group text-center"><button class="btn border rounded mt-2 px-5 py-2" id="Go">Find</button><button class="btn border rounded mt-2 px-5 py-2" id="viewerclose5">Close</button></div></div></div>';
    document.getElementById("FindIdU").innerHTML = htmlContent;
    var htmlContent1 ='';
    htmlContent1 +='<div class="container"><div class="Dad"><div class="row pt-2 px-3"><div class="col-md-6"><div class="form-group"><label> Name : </label><input type="text" class="form-control"/></div><div class="form-group"><label> Age : </label><input type="number" class="form-control"/></div><div class="form-group"><label> Department : </label><input type="text" class="form-control"/></div><div class="form-group"><label> State : </label><input type="text" class="form-control"/></div><div class="form-group"><label> Role : </label><input type="text" class="form-control"/></div></div><div class="col-md-6"><div class="form-group"><label> Id : </label><input type="text" class="form-control"/></div><div class="form-group"><label> City : </label><input type="number" class="form-control"/></div><div class="form-group"><label> Mobile : </label><input type="text" class="form-control"/></div><div class="form-group"><label> E-mail : </label><input type="text" class="form-control"/></div><div class="form-group"><label> Image : </label><input type="file" class="form-control"/></div></div></div><div class="px-3"><div class="form-group text-center"><button class="btn border rounded mt-2 px-5 py-2">Add</button><button class="btn border rounded mt-2 px-5 py-2" id="viewerclose4">Close</button></div></div></div></div>';
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
$("#viewerclose5").click(function(){
    $("#FindIdUDark").fadeOut(100);
})
$("#Go").click(function(){
    $("#EditDark").fadeIn(100);
    $("#FindIdUDark").fadeOut(0);
})
$("#viewerclose4").click(function(){
    $("#EditDark").fadeOut(100);
})

/////////////////////////////////////////////////////

function TskPage(){
    var htmlContent = '';
    htmlContent += '<div class="Dad container"><div class="form-group"><label> Enter ID : </label><input type="text" class="form-control"/></div><div class="px-3"><div class="form-group text-center"><button class="btn border rounded mt-2 px-5 py-2" id="Go2">Go</button><button class="btn border rounded mt-2 px-5 py-2" id="viewerclose6">Close</button></div></div></div>';
    document.getElementById("FindIdT").innerHTML = htmlContent;
    var htmlContent1 ='';
    htmlContent1 +='<div class="container"><div class="Dad"><div class="row p-3"><div class="col-md-6"><div class="form-group"><label> TaskName : </label><input type="text" class="form-control"/></div><div class="form-group"><label> Start : </label><input type="date" class="form-control"/></div></div><div class="col-md-6"><div class="form-group"><label> Supervisor : </label><input type="text" class="form-control"/></div><div class="form-group"><label> DeadLine : </label><input type="date" class="form-control"/></div></div></div><div class="p-3"><div class="form-group"><label> Description : </label><textarea type="text" class="form-control"></textarea></div><div class="form-group text-center"><button class="btn border rounded mt-5 px-5 py-2">Add</button><button class="btn border rounded mt-5 px-5 py-2" id="viewerclose1">Close</button></div></div></div></div>';
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
    htmlContent += '<div class="Dad container"><div class="form-group"><label> Enter ID : </label><input type="text" class="form-control"/></div><div class="px-3"><div class="form-group text-center"><button class="btn border rounded mt-2 px-5 py-2" id="Go3">Find</button><button class="btn border rounded mt-2 px-5 py-2" id="viewerclose7">Close</button></div></div></div>';
    document.getElementById("FindIdP").innerHTML = htmlContent;
    var htmlContent1 ='';
    htmlContent1 +='<div class="container"><div class="Dad p-3"><div class="Image text-center"><img src="images/apple-desk-laptop-macbook.jpg" class="py-2"/><h6>Gnana</h6></div><div class="S"><h5> </h5></div><div class="Info p-4 container text-center"><table class="table table-striped"><thead><th>property</th><th>Info</th></thead><tbody id="result"><tr><td style="width:40%">Name</td><td>Mohamed Gnana</td> </tr><tr><td style="width:40%">Department</td><td>Computer Science</td> </tr></tbody></table></div><div class="form-group text-right"><button class="btn border rounded mt-5 px-5 py-2" id="viewerclose2">Close</button></div></div></div>';
    document.getElementById("PerInfo").innerHTML = htmlContent1;
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
drawGrid();

$("#SavEmp").click(function() {
    var emp = {};
    emp.firstname = document.getElementById('EmpName').value;
    emp.Age = document.getElementById('EmpAge').value;
    emp.Dep = document.getElementById('EmpDep').value;
    empArray.push(emp);
    drawGrid();

})

function drawGrid(specialArry) {
    if (specialArry == undefined) {
        specialArry = empArray;
        drawSearch();
    }

    var htmlContent = "";

    
    htmlContent += "<tr>";
    htmlContent += "<th>id</th>";
    htmlContent += "<th> Name </th>";
    htmlContent += "<th>Age</th>";
    htmlContent += "<th>Dep</th>";
    htmlContent += "</tr>";

    /*for (var i = 0; i < specialArry.length; i++) {
        htmlContent += "<tr>";
        htmlContent += "<td>" + (i + 1) + "</td>";
        htmlContent += "<td>" + specialArry[i].firstname + "</td>";
        htmlContent += "<td>" + specialArry[i].lastname + "</td>";
        htmlContent += "<td>" + specialArry[i].salary + "</td>";
        htmlContent += "</tr>";
    }*/

    htmlContent += "No of Employees is : " + specialArry.length;
    document.getElementById("Handle").innerHTML = htmlContent;

}
//----------------------------------------------------





function deleteEmp(idx) {

    var result = confirm("Are you sure you want to delete ?");
    if (result == true) {
        empArray.splice(idx, 1);
        drawGrid(true);
        alert('A record is deleted successfully.');
    }

}


function EditEmp(idx) {
    drawForm(idx);
    document.getElementById('fname').value = empArray[idx].firstname;
    document.getElementById('lname').value = empArray[idx].lastname;
    document.getElementById('sal').value = empArray[idx].salary;

}

function saveEditEmp(idx) {
    empArray[idx].firstname = document.getElementById('fname').value;
    empArray[idx].lastname = document.getElementById('lname').value;
    empArray[idx].salary = document.getElementById('sal').value;
    drawGrid();
}

function drawSearch() {
    var htmlContent = '';
    htmlContent += "<input type='search' value='' id='txtSearch'>";
    htmlContent += '<button type="button" class="btn btn-success py-2 m-2" id="Serch" onclick="searchTable()">Search</button>'
    document.getElementById("searchDiv").innerHTML = htmlContent;
}
function searchTable() {
    var newArr = [];
    var key = document.getElementById("txtSearch").value;
  /*  for (var emp of empArray) {
        if (emp.firstname.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
            emp.salary.toLowerCase().indexOf(key.toLowerCase()) > -1
        ) {
            newArr.push(emp);
        }
    }*/
    if (newArr.length > 0)
        drawGrid(newArr);
    else
        drawGrid();

}
