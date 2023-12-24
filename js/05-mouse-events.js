// mouseover | mouseenter | mouseleave | mouseout | mousemove

const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseenter", onMouseEnter);
boxRef.addEventListener("mouseleave", onMouseLeave);
// window.addEventListener("mousemove", onMouseMove);

function onMouseEnter(e) {
  const box = e.currentTarget;
  box.classList.add("box--active");
}

function onMouseLeave(e) {
  const box = e.currentTarget;
  box.classList.remove("box--active");
}

function onMouseMove(e) {
  console.log(e);
}


const imgRef = document.querySelector(".img-rotate");

imgRef.addEventListener("mouseenter", onImageHover);
imgRef.addEventListener("mouseleave", onImageLeave);

function onImageHover(e) {
    imgRef.classList.add("animate-rotate");
  }
  
  function onImageLeave(e) {
    imgRef.classList.remove("animate-rotate");
  }
  