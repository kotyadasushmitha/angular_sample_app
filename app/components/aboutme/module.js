let myapp= angular.module("Myapp",[]);
//create a model
let mycontroller = function($scope){
    $scope.message = "Hello World";
}

//binding controller to app
myapp.controller("MyController",mycontroller);

let JSONController = function($scope){
    let Student= {
        FirstName : "Susmitha",
        LastName : "Kotyada",
        Email : "kotyadasushmithad@gmail.com"
    }
    $scope.Student=Student;
}
angular.module("myapp").controller("Student",JSONController);