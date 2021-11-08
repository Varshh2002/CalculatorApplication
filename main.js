const user=document.getElementById("userinput");
let expression='';
function press(num){
  expression+=num;
  user.value=expression
}

function equal(){
  user.value=eval(expression);
  expression='';
}
function erase(){
  expression='';
  user.value=expression;
}