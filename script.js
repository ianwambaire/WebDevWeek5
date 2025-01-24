//1Variables and datatypes
//Declare variables of different types: string, number, boolean, array, and object.
//Use console.log() to print their values and types in the browser console.
let name="John Doe";//String
let age=25;//number
let is_student=true;//boolean
const cars=["BMW","TOYOTA","HARRIER","MERCEDES"];//array but using type of shows it as an object
const person={//object
    fname:"Ian",
    lname:"Nganga",
    theage:21,
    fullname: function(){
        return this.fname +" "+ this.lname;
    }
}
console.log("Name: "+name+" "+"("+"Type:"+typeof(name)+")");
console.log("Age: "+age+" "+"("+"Type:"+typeof(age)+")");
console.log("Is student: "+is_student+" "+"("+"Type:"+typeof(is_student)+")");
console.log("Car is: "+cars[1]+" "+"("+"Type:"+typeof(cars)+")");
console.log("Person is: "+person.fullname()+" "+"("+"Type: "+typeof(person)+")");
//2.Operators:
function performingcalculations(){
    let result;
    //I converted the string inserted by the user to a float
    //  to be able to perform arithmetic operations on them
    const firstnumber=parseFloat(prompt("Enter the first number: ",""));
    const secondnumber=parseFloat(prompt("Enter the second number: ",""));
    //I validated the user input to check if the input in a number or not
    if(isNaN(firstnumber)||isNaN(secondnumber)){
        document.getElementById("p").innerHTML="Please enter a valid number";
        return;
    }
    const operation=prompt("Choose an operation: ","(+,-,*,/)");
    //used a switch case to enable the user choose an operation
    switch(operation){
        case "+":
            result=firstnumber+secondnumber;
            break;
        case "-":
                result=firstnumber-secondnumber;
                break;
        case "*":
            result=firstnumber*secondnumber;
            break;
         case "/":
                result=firstnumber/secondnumber;
                break;
        default:
            //is to notify the user incase he inputs an invalid operation
          result="Please enter a valid operation(+,-,*,/)";
          return;

    }
    //displays the result on the webpage
    document.getElementById("p").innerHTML=result;
}
