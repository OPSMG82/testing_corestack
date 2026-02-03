const map = document.querySelector(".systems-map");
const layers = document.querySelectorAll(".map-layer");

layers.forEach((layer) => {
  layer.addEventListener("mouseenter", () => {
    layers.forEach((item) => item.classList.remove("active"));
    layer.classList.add("active");
  });
});

map.addEventListener("mouseleave", () => {
  layers.forEach((item) => item.classList.remove("active"));
});

window.addEventListener("scroll", () => {
  const mapRect = map.getBoundingClientRect();
  const inView = mapRect.top < window.innerHeight * 0.6 && mapRect.bottom > 0;
  map.classList.toggle("zoomed", inView);
});
