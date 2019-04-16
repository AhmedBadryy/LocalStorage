


var usersData;

if(localStorage.getItem("myData") == null)   // هنا ف الجزء دة لو هنفتح الموقع من متصفح تاني 
{
    usersData = [];                         // هيدينا error عشان كدة بنسخدم ال if 
}
else
{
    usersData = JSON.parse(localStorage.getItem("myData"));
}




var userNameInp = document.getElementById("userName");
var userPhoneInp = document.getElementById("userPhone");
var userAgeInp = document.getElementById("userAge");
var userEmailInp = document.getElementById("userEmail");


var inps = document.getElementsByTagName("input"); // خاص بال clear


function clearForm()
{
    for (var i = 0 ; i<inps.length ; i++)
    {
        inps[i].value="";
    }
}





function addUser()
{
    var user = {name:userNameInp.value , age:userAgeInp.value , phone:userPhoneInp.value , email:userEmailInp.value};
    usersData.push(user);
    localStorage.setItem("myData" , JSON.stringify(usersData) ); // عشان اعرض الداتا بتاعتى و اخزنها 
    displayData();
    clearForm();
     
}


function displayData()
{
    var tamp = "";
    for( var i = 0 ; i<usersData.length ; i++)
    {
       tamp+="<tr><td>"+ usersData[i].name+"</td> <td> "+ usersData[i].phone+"</td><td> "+ usersData[i].age+"</td><td> "+usersData[i].email +"</td></tr>"
    }
    document.getElementById("tableBody").innerHTML = tamp;  
}
displayData();