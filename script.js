
let str='';
function add(a){
    str+=a;
    document.getElementById("result").value=str;
}
function clearResult() {
    str='';
    document.getElementById("result").value= '';
}
function calculateResult(){
    str = eval(str);
    document.getElementById('result').value = str;
}
