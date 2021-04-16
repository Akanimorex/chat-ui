var icon = $(".search-icon");
var form = $("form.search");
var logo = $("#logo");

icon.click(function () {
  form.toggleClass("open");
  logo.toggleClass("all-members-none");

  if (form.hasClass("open")) {
    form.children("input.search").focus();
  }
});

// my profile
var profileIcon = $(".my-profile-search");
var profileForm = $("form.profile-search");
var allMembersText = $("#members");

profileIcon.click(function () {
  profileForm.toggleClass("open");
  allMembersText.toggleClass("all-members-none");
  // allMembersText.addClass("all-members-block");
  if (profileForm.hasClass("open")) {
    profileForm.children("input.profile-search").focus();
  }
});

//chat search

var chatIcon = $(".chat-search-icon");
var chatForm = $("form.chat-search");

chatIcon.click(function () {
  chatForm.toggleClass("open");
  if (chatForm.hasClass("open")) {
    chatForm.children("input.chat-search").focus();
  }
});

//end
let chatBlock = document.querySelectorAll(".chat-block");
const menu = document.querySelector(".menu");
const outClick = document.querySelector(".out-click");

// chatBlock.addEventListener("contextmenu", (e) => {
//   e.preventDefault();

//   menu.style.top = `${e.clientY}px`;
//   menu.style.left = `${e.clientX}px`;
//   menu.classList.add("show");
//   outClick.style.display = "block";
// });

outClick.addEventListener("click", () => {
  menu.classList.remove("show");
  outClick.style.display = "none";
});

chatBlock.forEach((block) => {
  block.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;
    menu.classList.add("show");
    outClick.style.display = "block";
  });
});

let btn = document.querySelectorAll(".star-icon");

//each time button is clicked, it runs   the function

btn.forEach((star) => {
  star.addEventListener("click", () => {
    // console.log(star.id)
    rate(star.id);
  });
});
