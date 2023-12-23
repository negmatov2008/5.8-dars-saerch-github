let son = 0;

function light() {
  son++;
  if (son == 1) {
    html.classList.add("bg-[#F6F8FF]");
    body.classList.add("text-[#222731]");
    cont.classList.remove("bg-[#1E2A47]");
    cont.classList.add("bg-[#fff]");
    hero.classList.remove("bg-[#1E2A47]");
    hero.classList.add("bg-[#fff]");
    inp.classList.remove("bg-[#1E2A47]");
    inp.classList.add("bg-[#fff]");
    about.classList.remove("bg-[#141D2F]");
    about.classList.add("bg-[#F6F8FF]");
    img[0].setAttribute("src", "./images/back1.svg");
    img[1].setAttribute("src", "./images/back2.svg");
    img[2].setAttribute("src", "./images/back3.svg");
    img[3].setAttribute("src", "./images/back4.svg");
    dark.setAttribute("src", "./images/moon.svg");
    nik.textContent = "dark";
  } else {
    html.classList.remove("bg-[#F6F8FF]");
    body.classList.remove("text-[#222731]");
    cont.classList.add("bg-[#1E2A47]");
    cont.classList.remove("bg-[#fff]");
    hero.classList.add("bg-[#1E2A47]");
    hero.classList.remove("bg-[#fff]");
    inp.classList.add("bg-[#1E2A47]");
    inp.classList.remove("bg-[#fff]");
    about.classList.remove("bg-[#141D2F]");
    about.classList.remove("bg-[#F6F8FF]");
    img[0].setAttribute("src", "../images/003-pin.svg");
    img[1].setAttribute("src", "./images/002-url.svg");
    img[2].setAttribute("src", "./images/004-twitter.svg");
    img[3].setAttribute("src", "./images/001-office-building.svg");
    dark.setAttribute("src", "./images/002-sun.svg");
    nik.textContent = "light";
  }
  if (son == 2) {
    son = son - 2;
  }
}