var values = document.querySelectorAll("button");

values.forEach((button) => {
  button.addEventListener("click", action);
});


var remove = document.getElementById('delete');

remove.addEventListener('click', () => {
  let displayed = document.getElementById("display");
  displayed.value = displayed.value.substring(0, displayed.value.length - 1);
});
function action(event) {
  console.log("clicked");
  let displayed = document.getElementById("display");
  displayed.value += event.target.value;
}

let clear = document.getElementById('clear');

clear.addEventListener('click', () => {
  let displayed = document.getElementById("display");
  displayed.value = '';
});


