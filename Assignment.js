//Onclick Button display div of Update
$(document).ready(function(){
	$("#StudentUpdateFill").hide();
	$("#StudentDivIns").hide();
	$("#StudentDivDel").hide();
	$("#StudentDivUpdate").hide();
    $("#DisplayInsDelUpdate").hide();
	
	$("#Add1").click(function(){
		$("#DisplayInsDelUpdate").show();
		$("#StudentDivIns").show();
		$("#StudentDivDel").hide();
		$("#StudentDivUpdate").hide();
		$("#StudentUpdateFill").hide();
	});
	
	$("#Delete1").click(function(){
		$("#DisplayInsDelUpdate").show();
		$("#StudentDivDel").show();
		$("#StudentDivIns").hide();
		$("#StudentDivUpdate").hide();
		$("#StudentUpdateFill").hide();
	});
	
	$("#update1").click(function(){
		$("#DisplayInsDelUpdate").show();
		$("#StudentDivUpdate").show();
		$("#StudentDivIns").hide();
		$("#StudentDivDel").hide();
		$("#StudentUpdateFill").hide();
	});
	
});

//Onload Display data from Json

function StudentInfo(){
	studentList(stud);
}

function studentList(arr){
	var out = "<table border=5 width=100%><tr><th>Roll Number</th><th>First Name</th><th>Last Name</th> <th>Subjects</th></tr>";
    var row;
	for(row = 0; row < arr.length; row++) {
        out += "<tr><td>" + arr[row].rollNo + "</td><td >" + 
			  arr[row].firstName + "</td><td >" +
			  arr[row].lastName + "</td><td >" +
			  arr[row].subjects +"</td></tr>" ;
	}
	out +="</table>";
	document.getElementById("StudentDivDis").innerHTML = out;
}


//Add New Student and display it to table

function addStudentInfo(){
	var newStudFirstName=document.getElementById("newFirstNameId").value;
	var newStudLastName=document.getElementById("newLastNameId").value;
	var newStudRollNo=document.getElementById("newRollNoId").value;
	var newStudSubjects=document.getElementById("newSubjectName").value;
	
	var StudNew={"firstName":newStudFirstName ,
			"lastName":newStudLastName ,
			"rollNo":newStudRollNo ,
			"subjects":newStudSubjects
			};
	
	stud.push(StudNew);
	studentList(stud);
	
	document.getElementById("newFirstNameId").value="";
	document.getElementById("newLastNameId").value="";
	document.getElementById("newRollNoId").value="";
	document.getElementById("newSubjectName").value="";
	
	alert("Record Successfully Added..");
	
	$("#DisplayInsDelUpdate").hide();
	$("#StudentDivIns").hide();
	
}

//Delete Of Student Information

function deleteStudentInfo(){
	var delStudFirstName=document.getElementById("deleteByName").value;
	delStudData(stud,delStudFirstName);
}

function delStudData(arr,DName){
	var i;
	for(i=0;i<arr.length;i++)
	{
		if(arr[i].firstName==DName)
		{
			stud.splice(i,1);
			studentList(stud);
			document.getElementById("deleteByName").value="";
		}
	}
	alert("Record Successfully Deleted..");
	$("#DisplayInsDelUpdate").hide();
	$("#StudentDivDel").hide();
	$("#StudentUpdateFill").hide();
}

//For Updating the records

var upindex=999;
function updateStudentInfo()
{
	var flag=0;
	var upName=document.getElementById("UpdateByName").value;
	for(i=0;i<stud.length;i++)
	{
		if(stud[i].firstName==upName)
		{
			upindex=i;
			flag=1;
			$("#StudentUpdateFill").show();
			break;
		}
		
	}
	if(flag==0)
	{
		alert("Name is not present in Database");
		document.getElementById("UpdateByName").value="";
	}

	//alert("In UpdateStudentInfo="+upindex);
}

function updateStudentTable()
{
	//alert("In UpdateStudenttable="+upindex);
	
	var oldFname=stud[upindex].firstName;
	var oldLname=stud[upindex].lastName;
	var oldRollno=stud[upindex].rollNo;
	var oldSubjects=stud[upindex].subjects;
	
	stud[upindex].firstName=document.getElementById("UpdateFirstName").value;
	stud[upindex].lastName=document.getElementById("UpdateLastName").value;
	stud[upindex].rollNo=document.getElementById("UpdateRollNo").value;
	stud[upindex].subjects=document.getElementById("UpdateSubjectName").value;
			
	//alert(stud[upindex].firstName);
	studentList(stud);
	
	document.getElementById("UpdateByName").value="";
	document.getElementById("UpdateFirstName").value="";
	document.getElementById("UpdateLastName").value="";
	document.getElementById("UpdateRollNo").value="";
	document.getElementById("UpdateSubjectName").value="";
	
	alert("Record Successfully Updated");
	/*alert("Old FirstName="+oldFname+"   New FirstName="+stud[upindex].firstName+"<br>"+"Old LastName="+oldLname+"   New 	LastName="+stud[upindex].lastName+"<br>"+"Old Rollno="+oldRollno+"   New RollNo="+stud[upindex].rollNo+"<br>"+"Old 	Subjects="+oldSubjects+" New Students="+stud[upindex].subjects);*/	
	$("#DisplayInsDelUpdate").hide();
	$("#StudentDivUpdate").hide();
}