// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");
// console.log(mainColors);
if (mainColors !== null) {
  //  console.log("Local Storage Is Not Empty");
  //  console.log(localStorage.getItem("color_option"));

  // Get color Form local Storage
  document.documentElement.style.setProperty(
    "--mainColor",
    localStorage.getItem("color_option")
  );

  // Remove Active Class From All Class List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class From All Color List Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}
//  Random Background Option
let backgroundOption = true;

//  Variable To Control Option
let BackgroundInterval;

//  Check If There's Local  Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");
//  Chek If Local Storage Not Empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === true) {
    backgroundLocalItem = true;
  } else {
    backgroundLocalItem = false;
  }
  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}
// Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class Fa-spin For Roation
  this.classList.toggle("fa-spin");
  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};
// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
// Loop On All List Items
colorsLi.forEach((li) => {
  //  Click On Every List Items
  li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);

    // Set Color On Root
    document.documentElement.style.setProperty(
      "--mainColor",
      e.target.dataset.color
    );

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);
  });
});
// Switch Background
const randomBkEl = document.querySelectorAll(".random-backgrounds span");
// Loop On All List Items
randomBkEl.forEach((span) => {
  //  Click On Every List Items
  span.addEventListener("click", (e) => {
    handleActive(e);
    // Stoping  Or Starting  the Random Background
    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      backgroundImageRa();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(BackgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});
// select landing Page Element
let landingPage = document.querySelector(".landing-page");
// get Array Of Imgs
let ImagsArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "03.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
];

//  Function To Randomize Imgs
function backgroundImageRa() {
  if (backgroundOption === true) {
    // Random Number
    BackgroundInterval = setInterval(() => {
      let RandomNumber = Math.floor(Math.random() * ImagsArray.length);
      // console.log(RandomNumber)
      //  Change Background Image url
      landingPage.style.backgroundImage =
        'url("images/' + ImagsArray[RandomNumber] + '")';
    }, 100000);
  }
}
backgroundImageRa();

//  Skills Selector
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;
  //  Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // Window Height
  let windowHeight = this.innerHeight;
  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
//   Dynamic Year
let DynamicYear = document.querySelector(".year");
let date = new Date();
let DynamicYearNow = document.createTextNode(`2019 - ${date.getFullYear()}`);
DynamicYear.appendChild(DynamicYearNow);
// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
// Select All Links
const allLinks = document.querySelectorAll(".links a");
// function To Scroll to Sections
function scrollToSections(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target.dataset.section);
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollToSections(allBullets);
scrollToSections(allLinks);
//Handle Active Class
function handleActive(ev) {
  // Remove Active Class From All childrens
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  // Add Active Class On Self
  ev.target.classList.add("active");
}
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_option");
if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });
  if(bulletLocalItem === 'block') {
    bulletsContainer.style.display = 'block';
    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display ='none';
    document.querySelector(".bullets-option .no").classList.add("active");

  }
}
bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";
      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets_option", "none");
    }
    handleActive(e);
  });
});


//  Reset Button 
document.querySelector(".reset-options").onclick = function(){
  localStorage.removeItem("bullets_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("color_option");
  
  // Reload Window
  window.location.reload();
}
// toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks =document.querySelector(".links");
toggleBtn.onclick = function (e) {
  //  Stop Propagation
e.stopPropagation()
// Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");
  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");

}
//  Close The menu 
document.addEventListener("click", function(e) {
  if(e.target !== toggleBtn && e.target !== tLinks){
    // console.log("from event litener")
    // Check If menu Is Open 
    if(tLinks.classList.contains("open")){
      // Toggle Class "menu-active" On Button
  toggleBtn.classList.toggle("menu-active");
  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");
    }
  }

})

//  Stop The Propagation On Menu 
tLinks.onclick = function (e){
  e.stopPropagation();
}
// Create popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Overly Element
    let Overlay = document.createElement("div");

    // Add Class To Overlay
    Overlay.className = "popup-overlay";
    // Append Overlay To the Body
    document.body.appendChild(Overlay);
    // Create The Popup Box
    let popupBox = document.createElement("div");
    // Add Class To The Popup Box
    popupBox.className = "popup-box";
    if (img.alt !== null) {
      // Create HHeading
      let imgHeading = document.createElement("h3");
      // Create Text For Heading
      let imgText = document.createTextNode(img.alt);

      //  Append The Text To The Heading
      imgHeading.appendChild(imgText);
      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);
    }
    //  Create The Image
    let popupImage = document.createElement("img");
    //  Set Imade Source
    popupImage.src = img.src;
    // Add Image To Popup Box
    popupBox.appendChild(popupImage);
    // Append The Popup Box To Body
    document.body.appendChild(popupBox);
    // Create The Close Span
    let closeButton = document.createElement("span");
    //  Create The Close Button Text
    let closeButtonText = document.createTextNode("x");
    //  Append Text To Close Button
    closeButton.appendChild(closeButtonText);
    //  Add Class To Close button
    closeButton.className = "close-button";
    //  Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);
  });
});

//  Close Popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    //  Remove The Current Popu
    e.target.parentNode.remove();
    //  Remove Overlay 
    document.querySelector(".popup-overlay").remove()
  }
});