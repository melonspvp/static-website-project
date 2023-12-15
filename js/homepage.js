function openMenu() {
  menuClose = document.getElementById("sobreposto");
  menuClose.style.display = "grid";
}

function closeMenu() {
  menuClose = document.getElementById("sobreposto");
  menuClose.style.display = "none";
}

function btn1() {
  const image1 = document.getElementById("menu-img-link1");
  image1.style.display =
    image1.style.display === "flex" || image1.style.display === ""
      ? "none"
      : "flex";

  let btnActive1 = document.getElementById("home-img-btn1");

  if (image1.style.display === "flex") {
    btnActive1.classList.remove("home-img-btn");
    btnActive1.classList.add("home-img-btn-active");
  } else {
    btnActive1.classList.add("home-img-btn");
    btnActive1.classList.remove("home-img-btn-active");
  }

  const image2 = document.getElementById("menu-img-link2");
  image2.style.display =
    image2.style.display === "none" || image2.style.display === ""
      ? "none"
      : "none";

  let btnActive2 = document.getElementById("home-img-btn2");

  if (image2.style.display === "none") {
    btnActive2.classList.remove("home-img-btn-active");
    btnActive2.classList.add("home-img-btn");
  } else {
    btnActive2.classList.remove("home-img-btn");
    btnActive2.classList.add("home-img-btn-active");
  }

  const image3 = document.getElementById("menu-img-link3");
  image3.style.display =
    image3.style.display === "none" || image3.style.display === ""
      ? "none"
      : "none";

  let btnActive3 = document.getElementById("home-img-btn3");

  if (image3.style.display === "none") {
    btnActive3.classList.add("home-img-btn");
    btnActive3.classList.remove("home-img-btn-active");
  } else {
    btnActive3.classList.remove("home-img-btn");
    btnActive3.classList.add("home-img-btn-active");
  }

  const image4 = document.getElementById("menu-img-link4");
  image4.style.display =
    image4.style.display === "none" || image4.style.display === ""
      ? "none"
      : "none";

  let btnActive4 = document.getElementById("home-img-btn4");

  if (image4.style.display === "none") {
    btnActive4.classList.add("home-img-btn");
    btnActive4.classList.remove("home-img-btn-active");
  } else {
    btnActive4.classList.remove("home-img-btn");
    btnActive4.classList.add("home-img-btn-active");
  }

  const image5 = document.getElementById("menu-img-link5");
  image5.style.display =
    image5.style.display === "none" || image5.style.display === ""
      ? "none"
      : "none";

  let btnActive5 = document.getElementById("home-img-btn5");

  if (image5.style.display === "none") {
    btnActive5.classList.add("home-img-btn");
    btnActive5.classList.remove("home-img-btn-active");
  } else {
    btnActive5.classList.remove("home-img-btn");
    btnActive5.classList.add("home-img-btn-active");
  }

  const image6 = document.getElementById("menu-img-link6");
  image6.style.display =
    image6.style.display === "none" || image6.style.display === ""
      ? "none"
      : "none";

  let btnActive6 = document.getElementById("home-img-btn6");

  if (image6.style.display === "none") {
    btnActive6.classList.add("home-img-btn");
    btnActive6.classList.remove("home-img-btn-active");
  } else {
    btnActive6.classList.remove("home-img-btn");
    btnActive6.classList.add("home-img-btn-active");
  }
}

function btn2() {
  const image1 = document.getElementById("menu-img-link1");
  image1.style.display =
    image1.style.display === "flex" || image1.style.display === ""
      ? "none"
      : "none";

  let btnActive1 = document.getElementById("home-img-btn1");

  if (image1.style.display === "none") {
    btnActive1.classList.add("home-img-btn");
    btnActive1.classList.remove("home-img-btn-active");
  } else {
    btnActive1.classList.remove("home-img-btn");
    btnActive1.classList.add("home-img-btn-active");
  }

  const image2 = document.getElementById("menu-img-link2");
  image2.style.display =
    image2.style.display === "none" || image2.style.display === ""
      ? "flex"
      : "none";

  let btnActive2 = document.getElementById("home-img-btn2");

  if (image2.style.display === "flex") {
    btnActive2.classList.remove("home-img-btn");
    btnActive2.classList.add("home-img-btn-active");
  } else {
    btnActive2.classList.add("home-img-btn");
    btnActive2.classList.remove("home-img-btn-active");
  }

  const image3 = document.getElementById("menu-img-link3");
  image3.style.display =
    image3.style.display === "none" || image3.style.display === ""
      ? "none"
      : "none";

  let btnActive3 = document.getElementById("home-img-btn3");

  if (image3.style.display === "none") {
    btnActive3.classList.add("home-img-btn");
    btnActive3.classList.remove("home-img-btn-active");
  } else {
    btnActive3.classList.remove("home-img-btn");
    btnActive3.classList.add("home-img-btn-active");
  }

  const image4 = document.getElementById("menu-img-link4");
  image4.style.display =
    image4.style.display === "none" || image4.style.display === ""
      ? "none"
      : "none";

  let btnActive4 = document.getElementById("home-img-btn4");

  if (image4.style.display === "none") {
    btnActive4.classList.add("home-img-btn");
    btnActive4.classList.remove("home-img-btn-active");
  } else {
    btnActive4.classList.remove("home-img-btn");
    btnActive4.classList.add("home-img-btn-active");
  }

  const image5 = document.getElementById("menu-img-link5");
  image5.style.display =
    image5.style.display === "none" || image5.style.display === ""
      ? "none"
      : "none";

  let btnActive5 = document.getElementById("home-img-btn5");

  if (image5.style.display === "none") {
    btnActive5.classList.add("home-img-btn");
    btnActive5.classList.remove("home-img-btn-active");
  } else {
    btnActive5.classList.remove("home-img-btn");
    btnActive5.classList.add("home-img-btn-active");
  }

  const image6 = document.getElementById("menu-img-link6");
  image6.style.display =
    image6.style.display === "none" || image6.style.display === ""
      ? "none"
      : "none";

  let btnActive6 = document.getElementById("home-img-btn6");

  if (image6.style.display === "none") {
    btnActive6.classList.add("home-img-btn");
    btnActive6.classList.remove("home-img-btn-active");
  } else {
    btnActive6.classList.remove("home-img-btn");
    btnActive6.classList.add("home-img-btn-active");
  }
}

function btn3() {
  const image1 = document.getElementById("menu-img-link1");
  image1.style.display =
    image1.style.display === "flex" || image1.style.display === ""
      ? "none"
      : "none";

  let btnActive1 = document.getElementById("home-img-btn1");

  if (image1.style.display === "none") {
    btnActive1.classList.add("home-img-btn");
    btnActive1.classList.remove("home-img-btn-active");
  } else {
    btnActive1.classList.remove("home-img-btn");
    btnActive1.classList.add("home-img-btn-active");
  }

  const image2 = document.getElementById("menu-img-link2");
  image2.style.display =
    image2.style.display === "none" || image2.style.display === ""
      ? "none"
      : "none";

  let btnActive2 = document.getElementById("home-img-btn2");

  if (image2.style.display === "none") {
    btnActive2.classList.add("home-img-btn");
    btnActive2.classList.remove("home-img-btn-active");
  } else {
    btnActive2.classList.remove("home-img-btn");
    btnActive2.classList.add("home-img-btn-active");
  }

  const image3 = document.getElementById("menu-img-link3");
  image3.style.display =
    image3.style.display === "none" || image3.style.display === ""
      ? "flex"
      : "none";

  let btnActive3 = document.getElementById("home-img-btn3");

  if (image3.style.display === "flex") {
    btnActive3.classList.remove("home-img-btn");
    btnActive3.classList.add("home-img-btn-active");
  } else {
    btnActive3.classList.add("home-img-btn");
    btnActive3.classList.remove("home-img-btn-active");
  }

  const image4 = document.getElementById("menu-img-link4");
  image4.style.display =
    image4.style.display === "none" || image4.style.display === ""
      ? "none"
      : "none";

  let btnActive4 = document.getElementById("home-img-btn4");

  if (image4.style.display === "none") {
    btnActive4.classList.add("home-img-btn");
    btnActive4.classList.remove("home-img-btn-active");
  } else {
    btnActive4.classList.remove("home-img-btn");
    btnActive4.classList.add("home-img-btn-active");
  }

  const image5 = document.getElementById("menu-img-link5");
  image5.style.display =
    image5.style.display === "none" || image5.style.display === ""
      ? "none"
      : "none";

  let btnActive5 = document.getElementById("home-img-btn5");

  if (image5.style.display === "none") {
    btnActive5.classList.add("home-img-btn");
    btnActive5.classList.remove("home-img-btn-active");
  } else {
    btnActive5.classList.remove("home-img-btn");
    btnActive5.classList.add("home-img-btn-active");
  }

  const image6 = document.getElementById("menu-img-link6");
  image6.style.display =
    image6.style.display === "none" || image6.style.display === ""
      ? "none"
      : "none";

  let btnActive6 = document.getElementById("home-img-btn6");

  if (image6.style.display === "none") {
    btnActive6.classList.add("home-img-btn");
    btnActive6.classList.remove("home-img-btn-active");
  } else {
    btnActive6.classList.remove("home-img-btn");
    btnActive6.classList.add("home-img-btn-active");
  }
}

function btn4() {
  const image1 = document.getElementById("menu-img-link1");
  image1.style.display =
    image1.style.display === "flex" || image1.style.display === ""
      ? "none"
      : "none";

  let btnActive1 = document.getElementById("home-img-btn1");

  if (image1.style.display === "none") {
    btnActive1.classList.add("home-img-btn");
    btnActive1.classList.remove("home-img-btn-active");
  } else {
    btnActive1.classList.remove("home-img-btn");
    btnActive1.classList.add("home-img-btn-active");
  }

  const image2 = document.getElementById("menu-img-link2");
  image2.style.display =
    image2.style.display === "none" || image2.style.display === ""
      ? "none"
      : "none";

  let btnActive2 = document.getElementById("home-img-btn2");

  if (image2.style.display === "none") {
    btnActive2.classList.add("home-img-btn");
    btnActive2.classList.remove("home-img-btn-active");
  } else {
    btnActive2.classList.remove("home-img-btn");
    btnActive2.classList.add("home-img-btn-active");
  }

  const image3 = document.getElementById("menu-img-link3");
  image3.style.display =
    image3.style.display === "none" || image3.style.display === ""
      ? "none"
      : "none";

  let btnActive3 = document.getElementById("home-img-btn3");

  if (image3.style.display === "none") {
    btnActive3.classList.add("home-img-btn");
    btnActive3.classList.remove("home-img-btn-active");
  } else {
    btnActive3.classList.remove("home-img-btn");
    btnActive3.classList.add("home-img-btn-active");
  }

  const image4 = document.getElementById("menu-img-link4");
  image4.style.display =
    image4.style.display === "none" || image4.style.display === ""
      ? "flex"
      : "none";

  let btnActive4 = document.getElementById("home-img-btn4");

  if (image4.style.display === "flex") {
    btnActive4.classList.remove("home-img-btn");
    btnActive4.classList.add("home-img-btn-active");
  } else {
    btnActive4.classList.add("home-img-btn");
    btnActive4.classList.remove("home-img-btn-active");
  }

  const image5 = document.getElementById("menu-img-link5");
  image5.style.display =
    image5.style.display === "none" || image5.style.display === ""
      ? "none"
      : "none";

  let btnActive5 = document.getElementById("home-img-btn5");

  if (image5.style.display === "none") {
    btnActive5.classList.add("home-img-btn");
    btnActive5.classList.remove("home-img-btn-active");
  } else {
    btnActive5.classList.remove("home-img-btn");
    btnActive5.classList.add("home-img-btn-active");
  }

  const image6 = document.getElementById("menu-img-link6");
  image6.style.display =
    image6.style.display === "none" || image6.style.display === ""
      ? "none"
      : "none";

  let btnActive6 = document.getElementById("home-img-btn6");

  if (image6.style.display === "none") {
    btnActive6.classList.add("home-img-btn");
    btnActive6.classList.remove("home-img-btn-active");
  } else {
    btnActive6.classList.remove("home-img-btn");
    btnActive6.classList.add("home-img-btn-active");
  }
}

function btn5() {
  const image1 = document.getElementById("menu-img-link1");
  image1.style.display =
    image1.style.display === "flex" || image1.style.display === ""
      ? "none"
      : "none";

  let btnActive1 = document.getElementById("home-img-btn1");

  if (image1.style.display === "none") {
    btnActive1.classList.add("home-img-btn");
    btnActive1.classList.remove("home-img-btn-active");
  } else {
    btnActive1.classList.remove("home-img-btn");
    btnActive1.classList.add("home-img-btn-active");
  }

  const image2 = document.getElementById("menu-img-link2");
  image2.style.display =
    image2.style.display === "none" || image2.style.display === ""
      ? "none"
      : "none";

  let btnActive2 = document.getElementById("home-img-btn2");

  if (image2.style.display === "none") {
    btnActive2.classList.remove("home-img-btn-active");
    btnActive2.classList.add("home-img-btn");
  } else {
    btnActive2.classList.remove("home-img-btn");
    btnActive2.classList.add("home-img-btn-active");
  }

  const image3 = document.getElementById("menu-img-link3");
  image3.style.display =
    image3.style.display === "none" || image3.style.display === ""
      ? "none"
      : "none";

  let btnActive3 = document.getElementById("home-img-btn3");

  if (image3.style.display === "none") {
    btnActive3.classList.add("home-img-btn");
    btnActive3.classList.remove("home-img-btn-active");
  } else {
    btnActive3.classList.remove("home-img-btn");
    btnActive3.classList.add("home-img-btn-active");
  }

  const image4 = document.getElementById("menu-img-link4");
  image4.style.display =
    image4.style.display === "none" || image4.style.display === ""
      ? "none"
      : "none";

  let btnActive4 = document.getElementById("home-img-btn4");

  if (image4.style.display === "none") {
    btnActive4.classList.add("home-img-btn");
    btnActive4.classList.remove("home-img-btn-active");
  } else {
    btnActive4.classList.remove("home-img-btn");
    btnActive4.classList.add("home-img-btn-active");
  }

  const image5 = document.getElementById("menu-img-link5");
  image5.style.display =
    image5.style.display === "none" || image5.style.display === ""
      ? "flex"
      : "none";

  let btnActive5 = document.getElementById("home-img-btn5");

  if (image5.style.display === "flex") {
    btnActive5.classList.remove("home-img-btn");
    btnActive5.classList.add("home-img-btn-active");
  } else {
    btnActive5.classList.add("home-img-btn");
    btnActive5.classList.remove("home-img-btn-active");
  }

  const image6 = document.getElementById("menu-img-link6");
  image6.style.display =
    image6.style.display === "none" || image6.style.display === ""
      ? "none"
      : "none";

  let btnActive6 = document.getElementById("home-img-btn6");

  if (image6.style.display === "none") {
    btnActive6.classList.add("home-img-btn");
    btnActive6.classList.remove("home-img-btn-active");
  } else {
    btnActive6.classList.remove("home-img-btn");
    btnActive6.classList.add("home-img-btn-active");
  }
}

function btn6() {
  const image1 = document.getElementById("menu-img-link1");
  image1.style.display =
    image1.style.display === "flex" || image1.style.display === ""
      ? "none"
      : "none";

  let btnActive1 = document.getElementById("home-img-btn1");

  if (image1.style.display === "none") {
    btnActive1.classList.add("home-img-btn");
    btnActive1.classList.remove("home-img-btn-active");
  } else {
    btnActive1.classList.remove("home-img-btn");
    btnActive1.classList.add("home-img-btn-active");
  }

  const image2 = document.getElementById("menu-img-link2");
  image2.style.display =
    image2.style.display === "none" || image2.style.display === ""
      ? "none"
      : "none";

  let btnActive2 = document.getElementById("home-img-btn2");

  if (image2.style.display === "none") {
    btnActive2.classList.remove("home-img-btn-active");
    btnActive2.classList.add("home-img-btn");
  } else {
    btnActive2.classList.remove("home-img-btn");
    btnActive2.classList.add("home-img-btn-active");
  }

  const image3 = document.getElementById("menu-img-link3");
  image3.style.display =
    image3.style.display === "none" || image3.style.display === ""
      ? "none"
      : "none";

  let btnActive3 = document.getElementById("home-img-btn3");

  if (image3.style.display === "none") {
    btnActive3.classList.add("home-img-btn");
    btnActive3.classList.remove("home-img-btn-active");
  } else {
    btnActive3.classList.remove("home-img-btn");
    btnActive3.classList.add("home-img-btn-active");
  }

  const image4 = document.getElementById("menu-img-link4");
  image4.style.display =
    image4.style.display === "none" || image4.style.display === ""
      ? "none"
      : "none";

  let btnActive4 = document.getElementById("home-img-btn4");

  if (image4.style.display === "none") {
    btnActive4.classList.add("home-img-btn");
    btnActive4.classList.remove("home-img-btn-active");
  } else {
    btnActive4.classList.remove("home-img-btn");
    btnActive4.classList.add("home-img-btn-active");
  }

  const image5 = document.getElementById("menu-img-link5");
  image5.style.display =
    image5.style.display === "none" || image5.style.display === ""
      ? "none"
      : "none";

  let btnActive5 = document.getElementById("home-img-btn5");

  if (image5.style.display === "none") {
    btnActive5.classList.add("home-img-btn");
    btnActive5.classList.remove("home-img-btn-active");
  } else {
    btnActive5.classList.remove("home-img-btn");
    btnActive5.classList.add("home-img-btn-active");
  }

  const image6 = document.getElementById("menu-img-link6");
  image6.style.display =
    image6.style.display === "none" || image6.style.display === ""
      ? "flex"
      : "none";

  let btnActive6 = document.getElementById("home-img-btn6");

  if (image6.style.display === "flex") {
    btnActive6.classList.remove("home-img-btn");
    btnActive6.classList.add("home-img-btn-active");
  } else {
    btnActive6.classList.add("home-img-btn");
  }
}

