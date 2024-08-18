let UserName="pavan"
let email=1
let age="22"

let typeOfName= typeof UserName;
if(typeOfName != "string"){
    console.log("Name should be a string");
}
let typeOfEmail= typeof email;
if(typeOfEmail != "string"){
    console.log("email should be a string");
}
let typeOfAge= typeof age;
if(typeOfAge != "number"){
    console.log("age should be a number");
}

// output :
// email should be a string
// age should be a number