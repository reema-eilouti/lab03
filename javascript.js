
function greeting(){

    var firstname = prompt("Hey! What's your name?");

    var element1 = document.getElementById("greeting");
    
    element1.textContent = "Welcome " + firstname + "!";

}


function calculateAge(){

    var birthYear = prompt("What year were you born in?");

    var age = 2021 - birthYear

    var element2 = document.getElementById("years");

    element2.textContent = "Happy " + age + " Years!";

}


function confirmation(){

    if (confirm("Press a button!")) {
        alert("You pressed OK!");
    } 
    else {
        alert("You pressed Cancel!");
    }

}


function validateUserInput(){

    var userInput = prompt("Please type 'Hi' here: ");

    while(userInput !== 'Hi'){
        userInput = prompt("Please type 'Hi' here: ");
    }

    alert("You typed 'Hi'! Thank you :)");

}


function imageRequest(){

    var number = prompt("How many images do you like to view at the bottom of this page?");

    var image = '<img src="image.png"/>';

    for(var i = 0 ; i < number ; i++){
        document.write(image);
    }

}

greeting();
calculateAge();
confirmation();
validateUserInput();
imageRequest();