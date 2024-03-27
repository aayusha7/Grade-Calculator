// clear is not working
// incomplete information is not working
// hide is not working





var sum=0;
var counter=0;
let list=[];
function submitForm(ev){
    ev.preventDefault();
    const course=document.getElementById("course").value;
    const credits=document.getElementById("credits").value;
    const grade=document.getElementById("grade").value;
 
    
// calculates the grade value from given grade
// grade value means if the grade is A, it will return 4
 calculatedGrade=gradeValue(grade);
 // calculate total of each sub i.e gradevalue *credits
  var total=courseTotal(calculatedGrade,credits);
  console.log(total)
 
 

    courseList={
        course:course,
        credits:credits,
        grade:grade,
        total:total


    }
    let result=true;

    // result=validateCredits(course)
    // if(!result){
    //     return;
    // }
result=validateInput(course)
if(!result){
    return;
}
result=checkEmpty(course,credits,grade)
if(!result){
    return;
}

    list.push(courseList);
    addToDiv()
    counter++;
    showTabs("calculator");
//total=calculateTotal();



   
}
function calculateGrade(ev){
   var total = calculateIndividualGradeTotal();
   var totalCredits=calculateTotalCredits()
   var rawGrade = total/totalCredits;
   var roundedGrade = Math.round(rawGrade * 10000) / 10000; // rounding to four decimal places
  // var grade=Math.round(total/totalCredits,2);
   //var grade=total/totalCredits.toFixed(2);

    document.getElementById('result').innerHTML=`Your GPA is ${roundedGrade.toFixed(2)}`;
   
   
    //return grade;

 }
function calculateIndividualGradeTotal() {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    var total = 0;

    // Start from 1 to skip the header row
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var totalCell = row.cells[3]; // Assuming item.total is in the fourth cell

        // Parse the totalCell.innerHTML to a number and add it to the total
        total += parseFloat(totalCell.innerHTML);
    }

    return total;
}

function calculateTotalCredits() {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    var totalGrade = 0;

    // Start from 1 to skip the header row
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var totalCell = row.cells[1]; // Assuming item.credit is in the second cell

        // Parse the totalCell.innerHTML to a number and add it to the total
        totalGrade += parseFloat(totalCell.innerHTML);
    }

    return totalGrade;
}
function addToDiv(){
    var listItems= list[list.length-1];
    addToTable(listItems,list.length)

}
function addToTable(item,i){
    var table = document .getElementById("myTable");

    var row = table.insertRow(i);
    var cell1=row.insertCell(0)
    var cell2=row.insertCell(1)
    var cell3=row.insertCell(2)
    var cell4=row.insertCell(3)

    cell1.innerHTML =item.course;
    cell2.innerHTML =item.credits;
    cell3.innerHTML =item.grade;
    cell4.innerHTML =item.total;

    //sum(item.total);
    //counter++;
}
function showTabs(tab) {
    var ele = document.getElementById(tab);
    ele.classList.remove("hide");

    let hide = tab === "courseView" ? "add" : "courseView";
    let hideEle = document.getElementById(hide);
    hideEle.classList.add("hide");
}
function checkEmpty(course,credits,grade){
    if (course.length==0 || credits.length==0 || grade.length==0
       ){
        alert("Input complete information")
        return false;
    }
    return true;

}
function validateInput(course){
    
    for (var i = 0; i < list.length; i++) {
        if (list[i].course === course) {
            alert("Duplicate entry");
            return false;
        }
    }
    return true;

}

//  function validateCredits(credits){
//     let numbers =[]
//     numbers.push(1,2,3,4)
//     if ( credits!=numbers
//         ){
//          alert("Enter a number in credits!")
//          return false;
//      }
//      return true;

//  }
// function validateCredits(credits) {
//     if (credits !== "1" && credits !== 2 && credits !== 3 && credits !== 4) {
//         alert("Must input numbers 1, 2, 3, or 4");
//         return false;
//     }
//     return true;
// }
//  function validateCredits(credits)
// {
//   //var x=parseInt(credits);
//   if (credits!=1 || credits!=2|| credits!=3|| credits!=4) 
//   {
//     alert("Must input numbers");
//     return false;
//   }
// }
//  function validateCredits(credits) {
//     if (isNaN(credits)) {
//         alert("Enter a valid number in credits!");
//         return false;
//     }
//     return true;
// }
// function clearTable() {
//     var table = document.getElementById("myTable");
//     table.innerHTML = "<tr><th>Course</th><th>Credits</th><th>Grade</th><th id='total' class='total'>Total</th></tr>";
// }
// calculates the grade value from given grade
function gradeValue(grade){
    gradeEquivalentValue=0;
    switch(grade){
        case "A":{
            gradeEquivalentValue=4;
            break;
        }
        case "B":{
            gradeEquivalentValue=3;
            break;
        }
        case "C":{
            gradeEquivalentValue=2;
            break;
        }
        case "D":{
            gradeEquivalentValue=1;
            break;
        }
        case "E":{
            gradeEquivalentValue=0;
            break;
        }
        
    }
    return gradeEquivalentValue;
    

};
// calculate total of each sub i.e grade *credits
function courseTotal(calculatedGrade,credits){
    return calculatedGrade*credits;

};
 
//  function sum(total){
//     sum=sum+total;
//    // counter++;
//     return total;
    
//  }




// clear is not working
// incomplete information is not working
// hide is not working

