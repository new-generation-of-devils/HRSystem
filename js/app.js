//emp.html/////////////////////////
var empArray = [];
var searcharr = [];
drawGrid();
function toggleView() {
    var btn = document.getElementById("btnNew").innerText;
    if (btn == "Close") {
        drawGrid();

    } else {
        drawForm();
        document.getElementById("searchDiv").innerHTML = "";
    }

}


function saveNewEmp() {
    var emp = {};
    emp.firstname = document.getElementById('fname').value;
    emp.lastname = document.getElementById('lname').value;
    emp.salary = document.getElementById('sal').value;
    empArray.push(emp);
    drawGrid();

}

function drawGrid(specialArry) {
    if (specialArry == undefined) {
        specialArry = empArray;
        drawSearch();
    }



    document.getElementById("btnNew").innerText = "New";
    var htmlContent = "";

    htmlContent += "<table>";
    htmlContent += "<tr>";
    htmlContent += "<th>#</th>";
    htmlContent += "<th> First Name</th>";
    htmlContent += "<th>Last Name</th>";
    htmlContent += "<th>Salary</th>";
    htmlContent += "<th>Operation</th>";
    htmlContent += "</tr>";

    for (var i = 0; i < specialArry.length; i++) {
        htmlContent += "<tr>";
        htmlContent += "<td>" + (i + 1) + "</td>";
        htmlContent += "<td>" + specialArry[i].firstname + "</td>";
        htmlContent += "<td>" + specialArry[i].lastname + "</td>";
        htmlContent += "<td>" + specialArry[i].salary + "</td>";
        htmlContent += "</tr>";
    }

    htmlContent += "</table>";
    htmlContent += "No of Employees is : " + specialArry.length;
    document.getElementById("myDiv").innerHTML = htmlContent;

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

function drawForm(idx) {
    document.getElementById("btnNew").innerText = "Close";
    var htmlContent = "";
    htmlContent += '<div>';
    htmlContent += '<form>';
    htmlContent += '<label for="fname">First Name</label>';
    htmlContent += '<input type="text" id="fname" name="firstname" placeholder="Your name..">';
    htmlContent += '<br>';
    htmlContent += '<label for="lname">Last Name</label>';
    htmlContent += '<input type="text" id="lname" name="lastname" placeholder="Your last name..">';
    htmlContent += '<br>';
    htmlContent += '<label for="lname">Salary</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    htmlContent += '<input type="text" id="sal" name="salary" placeholder="Your Salary..">';
    htmlContent += '<br><br>';
    if (idx != undefined) {
        htmlContent += '<input type="button" value="Save"  id="editSave" onclick="saveEditEmp(' + idx + ')">';
    }
    else {
        htmlContent += '<input type="button" value="Save" id="newSave" onclick="saveNewEmp()">';
    }
    htmlContent += '</form>';
    htmlContent += '</div>';

    document.getElementById("myDiv").innerHTML = htmlContent;
}
function drawSearch() {
    var htmlContent = '';
    htmlContent += "<input type='search' value='' id='txtSearch'>";
    htmlContent += '<button type="button" class="btn btn-success" onclick="searchTable()">Success</button>'
    document.getElementById("searchDiv").innerHTML = htmlContent;
}
function searchTable() {
    var newArr = [];
    var key = document.getElementById("txtSearch").value;
    for (var emp of empArray) {
        if (emp.firstname.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
            emp.lastname.toLowerCase().indexOf(key.toLowerCase()) > -1 ||
            emp.salary.toLowerCase().indexOf(key.toLowerCase()) > -1
        ) {
            newArr.push(emp);
        }
    }
    if (newArr.length > 0)
        drawGrid(newArr);
    else
        drawGrid();

}
