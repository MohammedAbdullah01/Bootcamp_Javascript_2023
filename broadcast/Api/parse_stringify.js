/*
JSON
    - JSON.parse => Convert Text Data To JS Object 
    - JSON.stringify => Convert JS Object To JSON
*/

let myJson_object_from_server = '{"Username":"Mohamed" , "Age": 26}';
console.log(typeof myJson_object_from_server); // String
console.log(myJson_object_from_server);

let my_object = JSON.parse(myJson_object_from_server);
console.log(typeof my_object); // Object
console.log(my_object); // {Username: 'Mohamed', Age: 26}

my_object["Username"] = "Ahmed";
my_object["Age"] = 30;

let myJson_object_to_server = JSON.stringify(my_object);
console.log(typeof myJson_object_to_server); // string
console.log(myJson_object_to_server); // {"Username":"Ahmed","Age":30}
