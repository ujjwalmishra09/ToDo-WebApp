function TodoCtrl($scope) {
  
  $scope.todos = [
     {text:'Learn AngularJS', done:false,date:"09/04/2016",time:"04.15"},         
    {text: 'Build an app', done:false,date:"08/04/2016",time:"09.15"}
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
   var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

var date= mm+"/"+dd+"/"+yyyy;
var hr = today.getHours();
var mi = today.getMinutes();
if(hr<10)
  {
    hr='0'+hr;
  }
    if(mi<10)
      {
        mi='0'+mi;
      }
 var ti = hr+":"+mi;
    if($scope.formTodoText==null||$scope.formTodoText=="")
      {
        $scope.formTodoText="Task"+($scope.todos.length+1)
      }
 $scope.todos.push({text:$scope.formTodoText, done:false,date:date,time:ti});
   
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
         
    };
}

