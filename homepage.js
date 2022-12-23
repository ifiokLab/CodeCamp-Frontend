var listCourse = document.querySelectorAll("button.item-button");
var listCourseContent = document.querySelectorAll("div.item-content");
for (let i = 0; i < listCourse.length; i++) {
  window.onload = function () {
    listCourse[0].click();
  };
  listCourse[i].onclick = function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    for (let j = 0; j < listCourseContent.length; j++) {
      if (j !== i) {
        listCourseContent[j].style.opacity = "0";
        listCourseContent[j].style.visibility = "hidden";
      } else {
        listCourseContent[j].style.opacity = "1";
        listCourseContent[j].style.visibility = "visible";

      }
    }
  };
}
var bo = true;
var menuIcon = document.getElementById("menu-icon");
var menu = document.getElementById("menu");
var menuMain = document.getElementById("menu-main");
var menuExit = document.getElementById("menu-exit");
var iconExit = document.getElementById("icon-exit");
var root = document.getElementById("root");
var menuOut = document.getElementById("menu-out");
menuIcon.onclick = function () {
  menu.style.visibility = "visible";
  menu.style.opacity = "1";
  menuMain.style.transform = "translateX(0)";
  menuExit.style.visibility = "visible";
  menuExit.style.opacity = "1";
  iconExit.style.width = "4.8rem";
  iconExit.style.height = "4.8rem";
  root.style.overflowY = "hidden";
};
menuOut.onclick = function () {
  menu.style.visibility = "hidden";
  menu.style.opacity = "0";
  menuMain.style.transform = "translateX(-280px)";
  root.style.overflowY = "scroll";
};
iconExit.onclick = function () {
  menu.style.visibility = "hidden";
  menu.style.opacity = "0";
  menuMain.style.transform = "translateX(-280px)";
  root.style.overflowY = "scroll";
};

var subItem = document.querySelectorAll("div#subitem");
var subMenu = document.querySelectorAll("div#submenu");
var subMenuOut = document.querySelectorAll("div#submenuout");

for (let i = 0; i < subItem.length; i++) {
  subItem[i].onclick = () => {
    subMenu[i].style.transform = "translateX(0px)";
  };
  subMenuOut[i].onclick = () => {
    subMenu[i].style.transform = "translateX(280px)";
  };
}