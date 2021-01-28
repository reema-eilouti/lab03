var firstname = prompt("Hey! What's your name?");

var birthYear = prompt("What year were you born in?");



// if (confirm("Press a button!")) 
// {
//     alert("You pressed OK!");
// } 
// else 
// {
//     alert("You pressed Cancel!");
// }



var userInput = prompt("Please type 'Hi' here: ");

while(userInput !== 'Hi')
{
    userInput = prompt("Please type 'Hi' here: ");
}
alert("You typed 'Hi'! Thank you :)")



var number = prompt("How many puppies do you like to see?");

var image = "";

image = <img style="width:200px;" src="puppy.png" alt="cute golden retriever"/>;

var view = "";

for(var i = 0 ; i < number ; i++)
{
    view = view + image;
}




var element1 = document.getElementById("greeting");
element1.textContent = "Welcome " + firstname + "!";

var age = 2021 - birthYear

var element2 = document.getElementById("years");
element2.textContent = "Happy " + age + " Years!";

document.write(view);