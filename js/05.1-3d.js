const imgContainer = document.querySelector(".img-container");
const img = document.querySelector("img");

imgContainer.addEventListener("mousemove", (e) => {
  const containerWidth = imgContainer.clientWidth;
  const containerHeight = imgContainer.clientHeight;
  // Позиція куросра миші
  const mouseX = e.clientX - imgContainer.offsetLeft;
  const mouseY = e.clientY - imgContainer.offsetTop;
  // Поворот зображення в залежность від положення курсора
  const rotateY = 40 * (mouseX / containerWidth - 0.5);
  const rotateX = 40 * (mouseY / containerHeight - 0.5);
  img.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});
