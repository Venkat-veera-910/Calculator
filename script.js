let out = document.getElementById("output");
console.log(out.innerText);

function valueAppend(value) {
  if (out.innerText === 0 || out.innerText === "Error") {
    out.innerText = value;
  } else {
    out.innerText += value;
  }
}
function valueClear() {
  out.innerText = out.innerText.slice(0, -1);
}
function valueEval() {
  out.innerText = eval(out.innerText);
}
