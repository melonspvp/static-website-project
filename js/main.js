function toggleMenu() {
  var menu = document.getElementById("menu-sobreposto");
  menu.classList.remove("menu-sobreposto-close");
  menu.classList.add("menu-sobreposto");
  menu.style.display = menu.style.display = "block";
  var item1 = document.getElementById("imagem1porra");
  item1.style.display = "flex";
  var coloritem1 = document.getElementById("button-menu-item1");
  coloritem1.classList.remove("menu-items-buttons-styles");
  coloritem1.classList.add("menu-items-buttons-styles-active");
}

function closeMenu() {
  var close = document.getElementById("menu-sobreposto");
  close.classList.remove("menu-sobreposto");
  close.classList.add("menu-sobreposto-close");
  close.style.display = "none";
  var item1 = document.getElementById("imagem1porra");
  item1.style.display = "flex";
  var item2 = document.getElementById("imagem2porra");
  item2.style.display = "none";
  var item3 = document.getElementById("imagem3porra");
  item3.style.display = "none";
  var item4 = document.getElementById("imagem4porra");
  item4.style.display = "none";
  var item5 = document.getElementById("imagem5porra");
  item5.style.display = "none";
  var item6 = document.getElementById("imagem6porra");
  item6.style.display = "none";
  console.log(close.classList);
  var coloritem2 = document.getElementById("button-menu-item2");
  coloritem2.classList.remove("menu-items-buttons-styles-active");
  coloritem2.classList.add("menu-items-buttons-styles");

  var coloritem3 = document.getElementById("button-menu-item3");
  coloritem3.classList.remove("menu-items-buttons-styles-active");
  coloritem3.classList.add("menu-items-buttons-styles");

  var coloritem4 = document.getElementById("button-menu-item4");
  coloritem4.classList.remove("menu-items-buttons-styles-active");
  coloritem4.classList.add("menu-items-buttons-styles");

  var coloritem5 = document.getElementById("button-menu-item5");
  coloritem5.classList.remove("menu-items-buttons-styles-active");
  coloritem5.classList.add("menu-items-buttons-styles");

  var coloritem6 = document.getElementById("button-menu-item6");
  coloritem6.classList.remove("menu-items-buttons-styles-active");
  coloritem6.classList.add("menu-items-buttons-styles");
}

function menuItem1() {
  var item1 = document.getElementById("imagem1porra");
  item1.style.display = "flex";

  var coloritem1 = document.getElementById("button-menu-item1");
  coloritem1.classList.remove("menu-items-buttons-styles");
  coloritem1.classList.add("menu-items-buttons-styles-active");

  var coloritem2 = document.getElementById("button-menu-item2");
  coloritem2.classList.remove("menu-items-buttons-styles-active");
  coloritem2.classList.add("menu-items-buttons-styles");

  var coloritem3 = document.getElementById("button-menu-item3");
  coloritem3.classList.remove("menu-items-buttons-styles-active");
  coloritem3.classList.add("menu-items-buttons-styles");

  var coloritem4 = document.getElementById("button-menu-item4");
  coloritem4.classList.remove("menu-items-buttons-styles-active");
  coloritem4.classList.add("menu-items-buttons-styles");

  var coloritem5 = document.getElementById("button-menu-item5");
  coloritem5.classList.remove("menu-items-buttons-styles-active");
  coloritem5.classList.add("menu-items-buttons-styles");

  var coloritem6 = document.getElementById("button-menu-item6");
  coloritem6.classList.remove("menu-items-buttons-styles-active");
  coloritem6.classList.add("menu-items-buttons-styles");

  var item2 = document.getElementById("imagem2porra");
  item2.style.display = "none";
  var item3 = document.getElementById("imagem3porra");
  item3.style.display = "none";
  var item4 = document.getElementById("imagem4porra");
  item4.style.display = "none";
  var item5 = document.getElementById("imagem5porra");
  item5.style.display = "none";
  var item6 = document.getElementById("imagem6porra");
  item6.style.display = "none";
}

function menuItem2() {
  var item1 = document.getElementById("imagem1porra");
  item1.style.display = "none";
  var item2 = document.getElementById("imagem2porra");
  item2.style.display = "flex";

  var coloritem1 = document.getElementById("button-menu-item1");
  coloritem1.classList.remove("menu-items-buttons-styles-active");
  coloritem1.classList.add("menu-items-buttons-styles");

  var coloritem2 = document.getElementById("button-menu-item2");
  coloritem2.classList.remove("menu-items-buttons-styles");
  coloritem2.classList.add("menu-items-buttons-styles-active");

  var coloritem3 = document.getElementById("button-menu-item3");
  coloritem3.classList.remove("menu-items-buttons-styles-active");
  coloritem3.classList.add("menu-items-buttons-styles");

  var coloritem4 = document.getElementById("button-menu-item4");
  coloritem4.classList.remove("menu-items-buttons-styles-active");
  coloritem4.classList.add("menu-items-buttons-styles");

  var coloritem5 = document.getElementById("button-menu-item5");
  coloritem5.classList.remove("menu-items-buttons-styles-active");
  coloritem5.classList.add("menu-items-buttons-styles");

  var coloritem6 = document.getElementById("button-menu-item6");
  coloritem6.classList.remove("menu-items-buttons-styles-active");
  coloritem6.classList.add("menu-items-buttons-styles");

  var item3 = document.getElementById("imagem3porra");
  item3.style.display = "none";
  var item4 = document.getElementById("imagem4porra");
  item4.style.display = "none";
  var item5 = document.getElementById("imagem5porra");
  item5.style.display = "none";
  var item6 = document.getElementById("imagem6porra");
  item6.style.display = "none";
}

function menuItem3() {
  var item1 = document.getElementById("imagem1porra");
  item1.style.display = "none";
  var item2 = document.getElementById("imagem2porra");
  item2.style.display = "none";
  var item3 = document.getElementById("imagem3porra");
  item3.style.display = "flex";

  var coloritem1 = document.getElementById("button-menu-item1");
  coloritem1.classList.remove("menu-items-buttons-styles-active");
  coloritem1.classList.add("menu-items-buttons-styles");

  var coloritem2 = document.getElementById("button-menu-item2");
  coloritem2.classList.remove("menu-items-buttons-styles-active");
  coloritem2.classList.add("menu-items-buttons-styles");

  var coloritem3 = document.getElementById("button-menu-item3");
  coloritem3.classList.remove("menu-items-buttons-styles");
  coloritem3.classList.add("menu-items-buttons-styles-active");

  var coloritem4 = document.getElementById("button-menu-item4");
  coloritem4.classList.remove("menu-items-buttons-styles-active");
  coloritem4.classList.add("menu-items-buttons-styles");

  var coloritem5 = document.getElementById("button-menu-item5");
  coloritem5.classList.remove("menu-items-buttons-styles-active");
  coloritem5.classList.add("menu-items-buttons-styles");

  var coloritem6 = document.getElementById("button-menu-item6");
  coloritem6.classList.remove("menu-items-buttons-styles-active");
  coloritem6.classList.add("menu-items-buttons-styles");

  var item4 = document.getElementById("imagem4porra");
  item4.style.display = "none";
  var item5 = document.getElementById("imagem5porra");
  item5.style.display = "none";
  var item6 = document.getElementById("imagem6porra");
  item6.style.display = "none";
}

function menuItem4() {
  var item1 = document.getElementById("imagem1porra");
  item1.style.display = "none";
  var item2 = document.getElementById("imagem2porra");
  item2.style.display = "none";
  var item3 = document.getElementById("imagem3porra");
  item3.style.display = "none";
  var item4 = document.getElementById("imagem4porra");
  item4.style.display = "flex";

  var coloritem1 = document.getElementById("button-menu-item1");
  coloritem1.classList.remove("menu-items-buttons-styles-active");
  coloritem1.classList.add("menu-items-buttons-styles");

  var coloritem2 = document.getElementById("button-menu-item2");
  coloritem2.classList.remove("menu-items-buttons-styles-active");
  coloritem2.classList.add("menu-items-buttons-styles");

  var coloritem3 = document.getElementById("button-menu-item3");
  coloritem3.classList.remove("menu-items-buttons-styles-active");
  coloritem3.classList.add("menu-items-buttons-styles");

  var coloritem4 = document.getElementById("button-menu-item4");
  coloritem4.classList.remove("menu-items-buttons-styles");
  coloritem4.classList.add("menu-items-buttons-styles-active");

  var coloritem5 = document.getElementById("button-menu-item5");
  coloritem5.classList.remove("menu-items-buttons-styles-active");
  coloritem5.classList.add("menu-items-buttons-styles");

  var coloritem6 = document.getElementById("button-menu-item6");
  coloritem6.classList.remove("menu-items-buttons-styles-active");
  coloritem6.classList.add("menu-items-buttons-styles");

  var item5 = document.getElementById("imagem5porra");
  item5.style.display = "none";
  var item6 = document.getElementById("imagem6porra");
  item6.style.display = "none";
}

function menuItem5() {
  var item1 = document.getElementById("imagem1porra");
  item1.style.display = "none";
  var item2 = document.getElementById("imagem2porra");
  item2.style.display = "none";
  var item3 = document.getElementById("imagem3porra");
  item3.style.display = "none";
  var item4 = document.getElementById("imagem4porra");
  item4.style.display = "none";
  var item5 = document.getElementById("imagem5porra");
  item5.style.display = "flex";

  var coloritem1 = document.getElementById("button-menu-item1");
  coloritem1.classList.remove("menu-items-buttons-styles-active");
  coloritem1.classList.add("menu-items-buttons-styles");

  var coloritem2 = document.getElementById("button-menu-item2");
  coloritem2.classList.remove("menu-items-buttons-styles-active");
  coloritem2.classList.add("menu-items-buttons-styles");

  var coloritem3 = document.getElementById("button-menu-item3");
  coloritem3.classList.remove("menu-items-buttons-styles-active");
  coloritem3.classList.add("menu-items-buttons-styles");

  var coloritem4 = document.getElementById("button-menu-item4");
  coloritem4.classList.remove("menu-items-buttons-styles-active");
  coloritem4.classList.add("menu-items-buttons-styles");

  var coloritem5 = document.getElementById("button-menu-item5");
  coloritem5.classList.remove("menu-items-buttons-styles");
  coloritem5.classList.add("menu-items-buttons-styles-active");

  var coloritem6 = document.getElementById("button-menu-item6");
  coloritem6.classList.remove("menu-items-buttons-styles-active");
  coloritem6.classList.add("menu-items-buttons-styles");

  var item6 = document.getElementById("imagem6porra");
  item6.style.display = "none";
}

function menuItem6() {
  var item1 = document.getElementById("imagem1porra");
  item1.style.display = "none";
  var item2 = document.getElementById("imagem2porra");
  item2.style.display = "none";
  var item3 = document.getElementById("imagem3porra");
  item3.style.display = "none";
  var item4 = document.getElementById("imagem4porra");
  item4.style.display = "none";
  var item5 = document.getElementById("imagem5porra");
  item5.style.display = "none";
  var item6 = document.getElementById("imagem6porra");
  item6.style.display = "flex";

  var coloritem1 = document.getElementById("button-menu-item1");
  coloritem1.classList.remove("menu-items-buttons-styles-active");
  coloritem1.classList.add("menu-items-buttons-styles");

  var coloritem2 = document.getElementById("button-menu-item2");
  coloritem2.classList.remove("menu-items-buttons-styles-active");
  coloritem2.classList.add("menu-items-buttons-styles");

  var coloritem3 = document.getElementById("button-menu-item3");
  coloritem3.classList.remove("menu-items-buttons-styles-active");
  coloritem3.classList.add("menu-items-buttons-styles");

  var coloritem4 = document.getElementById("button-menu-item4");
  coloritem4.classList.remove("menu-items-buttons-styles-active");
  coloritem4.classList.add("menu-items-buttons-styles");

  var coloritem5 = document.getElementById("button-menu-item5");
  coloritem5.classList.remove("menu-items-buttons-styles-active");
  coloritem5.classList.add("menu-items-buttons-styles");

  var coloritem6 = document.getElementById("button-menu-item6");
  coloritem6.classList.remove("menu-items-buttons-styles");
  coloritem6.classList.add("menu-items-buttons-styles-active");
}