function dis(val) {
   document.getElementById("u_screen").value+=val;
}
function squar() {
  let a= document.getElementById("u_screen").value;
  let b= a*a;
     document.getElementById("l_screen").value=b;
}
function equal() {
   let x= document.getElementById("u_screen").value;
   let y = eval(x);
   document.getElementById("l_screen").value=y;
}
function clr() {
   document.getElementById("u_screen").value="";
   document.getElementById("l_screen").value="";
}