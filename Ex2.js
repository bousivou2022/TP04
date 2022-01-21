
 
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btns = document.querySelectorAll(".btn");
const color = document.querySelector(".color");


btns.forEach(function(btn){
btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    let hexColor = "#";
for (let i = 0; i < 6; i++) {
if (styles.contains("generate")){
    hexColor += hex[getRandomNumber()];
}else {
    hexColor = "#2336FB";
}
 }
 
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
function getRecord(){

}