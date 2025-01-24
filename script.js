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
    const firstnumber=parseFloat(prompt("Enter the first number: ",""));
    const secondnumber=parseFloat(prompt("Enter the second number: ",""));
    if(isNaN(firstnumber)||isNaN(secondnumber)){
        document.getElementById("p").innerHTML="Please enter a valid number";
        return;
    }
    const operation=prompt("Choose an operation: ","(+,-,*,/)");
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
        detault;
          result="Please enter a valid operation(+,-,*,/)";
          return;

    }
    document.getElementById("p").innerHTML=result;
}
