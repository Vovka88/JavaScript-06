const refs = {
  output: document.querySelector(".js-output"),
  clearBtn: document.querySelector(".js-clear"),
};
// keypress | keydown | keyup \\
window.addEventListener("keypress", onKeypress);
console.log(refs.output);

function onKeypress(e) {
  console.log(e)
  refs.output.innerText += e.key 
}

refs.clearBtn.addEventListener("click", (e) => {
    refs.output.innerText = ""
})