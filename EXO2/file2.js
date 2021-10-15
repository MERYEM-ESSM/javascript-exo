let input=document.getElementById("input1").value;
let button=document.querySelector("#btn");
button.addEventListener("click",function(){
    let input=document.getElementById("input1").value;
    let result=eval(input);
    let a=document.getElementsByTagName("a")[0];
    let body=document.getElementsByTagName("body");
    a.innerText=result;
})
