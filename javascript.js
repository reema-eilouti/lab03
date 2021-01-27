var name = prompt("Hey! What's your name?");

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



document.getElementById("greeting").innerText("Welcome " + name + "!");

document.write("Happy " + age + " Years!");

