var firstname = prompt("Hey! What's your name?");

var birthYear = prompt("What year were you born in?");

var age = 2021 - birthYear



if (confirm("Press a button!")) 
{
    alert("You pressed OK!");
} 
else 
{
    alert("You pressed Cancel!");
}



var element1 = document.getElementById("greeting");
element1.textContent = "Welcome " + firstname + "!";

var element2 = document.getElementById("years");
element2.textContent = "Happy " + age + " Years!";
