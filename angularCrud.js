angular.module('myapp', [])
    .controller('myctrl', ['$scope', StudentController]);
var empid = 0;

function StudentController($scope) {
    $scope.newStudent = null;
    $scope.students = [];

    $scope.saveRecord = function() {
        if ($scope.newStudent.id == null) {
            // empid = empid + 1;
            $scope.newStudent.id = empid++;

            $scope.students.push($scope.newStudent);

        } else {

            for (i in $scope.students) {

                if ($scope.students[i].id == $scope.newStudent.id) {

                    $scope.students[i] = $scope.newStudent;

                }

            }

        }

        $scope.newStudent = {};


    }


    $scope.delete = function(id) {

        for (i in $scope.students) {

            if ($scope.students[i].id == id) {

                $scope.students.splice(i, 1);

                $scope.newStudent = {};

            }

        }

    }

    $scope.edit = function(id) {

        for (i in $scope.students) {

            if ($scope.students[i].id == id) {

                $scope.newStudent = angular.copy($scope.students[i]);

            }

        }

    }
}