
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let allquestion = document.querySelectorAll(".que");
allquestion.forEach((v, index) => {
    console.log(v)
  v.addEventListener("click", () => {
    v.nextElementSibling.classList.toggle("h-[auto]");
    v.nextElementSibling.classList.toggle("scale-y-100");
    v.nextElementSibling.classList.toggle("p-[20px]");
    v.nextElementSibling.classList.toggle("m-[20px]");
    v.children[1].classList.toggle("rotate-70");
    

    allquestion.forEach((el, i) => {
      if (i != index)
        el.nextElementSibling.classList.remove(
          "h-[auto]",
          "scale-y-100",
          "p-[20px]",
          "m-[20px]"
        );
      el.children[1].classList.remove("rotate-45");
    });
  });
});
