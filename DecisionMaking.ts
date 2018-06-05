var _name = "foo";
var age = 10 ;
var wage = 100.0 ;


if(_name == "foo" && age == 10 && wage == 100.0) {
    console.log("logged in as admin.");
} else if(_name == "bar" && age == 10 && wage == 100.0) {
    console.log("logged in as user.");
} else {
    console.log("login errors");
}



switch(_name) {
    case "foo":
        console.log("your name is foo.");
        break;
    case "bar":
        console.log("your name is bar.");
        break;
    case "bim":
        console.log("your name is bim.");
        break;
    default:
        console.log("your name is unknown to the system.");
}



