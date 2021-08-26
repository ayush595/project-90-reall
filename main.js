function adduser() {
name1= document.getElementById("name1").value;
name2= document.getElementById("name2").value;
localStorage.setItem("name1", name1);
localStorage.setItem("name2", name2);
window.location= "index.html";

}