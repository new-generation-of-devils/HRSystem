var courseArray = [];

function toggleView(idx) {

    var bName = document.getElementById("newClose").innerText;
    if (bName == "New") {//table is on the page
        drawInput(idx);
        document.getElementById("newClose").innerText = "Close";
    }
    else {
        drawGrid();
        document.getElementById("newClose").innerText = "New";
    }
}

function save(idx) {
    var serialCourses = localStorage.getItem("courses");
    if (serialCourses == null) courseArray = [];
    else courseArray = JSON.parse(serialCourses);
    var code, title, desc;
    code = document.getElementById("code").value;
    title = document.getElementById("title").value;
    desc = document.getElementById("desc").value;
    var course = {};
    course.code = code;
    course.title = title;
    course.desc = desc;

    if (idx == undefined) { //new
        courseArray.push(course);
        serialCourses = JSON.stringify(courseArray);
        localStorage.setItem("courses", serialCourses)

    }
    else {  //edit
        courseArray[idx] = course;
        serialCourses = JSON.stringify(courseArray);
        localStorage.setItem("courses", serialCourses)
    }

    toggleView();
}

function drawInput(idx) {
    var htmlContent = "";
    if (idx == undefined) {
        var code = "";
        var title = "";
        var desc = "";
    }
    else {
        var code = courseArray[idx].code;
        var title = courseArray[idx].title;
        var desc = courseArray[idx].desc;
    }
    htmlContent += '<form>';
    htmlContent += '<label for="code">Course code:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>';
    htmlContent += '<input type="text" id="code" value="' + code + '"/>';
    htmlContent += '<br />';
    htmlContent += '<label for="title">Course Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>';
    htmlContent += '<input type="text" id="title" value="' + title + '"/>';
    htmlContent += '<br />';
    htmlContent += '<label for="desc">Course Description:</label>';
    htmlContent += '<input type="text" id="desc" value="' + desc + '" />';
    htmlContent += '<br />';
    htmlContent += ' <input type="button" id="saveNew" onclick="save(' + idx + ')" value="Save" />';
    htmlContent += '</form>';
    document.getElementById('myDiv').innerHTML = htmlContent;
}




function drawGrid() {
    var serialCourses = localStorage.getItem("courses");
    if (serialCourses == null) courseArray = [];
    else courseArray = JSON.parse(serialCourses);
    var htmlContent = "";
    htmlContent += '<table>';
    htmlContent += '<tr>';
    htmlContent += '<th>#</th>';
    htmlContent += '<th>Code</th>';
    htmlContent += '<th>Title</th>';
    htmlContent += ' <th>Discription</th>';
    htmlContent += '<th>operations</th>';
    htmlContent += '</tr>';

    for (var i in courseArray) {
        htmlContent += '<tr>';
        htmlContent += '<td>' + (Number(i) + 1) + '</td>';
        htmlContent += '<td>' + courseArray[i].code + '</td>';
        htmlContent += '<td>' + courseArray[i].title + '</td>';
        htmlContent += '<td>' + courseArray[i].desc + '</td>';
        htmlContent += '<td>';
        htmlContent += '<a onclick="deleteCourse(' + i + ')"> <img src="imgs/delete.png" /></a>';
        htmlContent += '<a onclick="editCourse(' + i + ')"> <img src="imgs/edit.png" /></a>';
        htmlContent += '</td>';
        htmlContent += '</tr>';
    }
    htmlContent += '</table>';
    document.getElementById('myDiv').innerHTML = htmlContent;
}

function editCourse(idx) {

    toggleView(idx);

}


function deleteCourse(idx) {
    var result = confirm("Are you sure to delete ?");
    if (result) {
        courseArray.splice(idx, 1);

        localStorage.setItem("courses", JSON.stringify(courseArray));
        drawGrid();
    }
}

drawGrid();
