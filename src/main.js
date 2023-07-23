let proj = [
  {
    name: "Zoro FanPage",
    github: "https://github.com/markvayson/zorofanpage",
    liveCode: "https://markvayson.github.io/zorofanpage/",
    img: "src/img/zoro.jpg",
  },
  {
    name: "Calculator",
    github: "https://github.com/markvayson/calculator",
    liveCode: "https://markvayson.github.io/calculator/",
    img: "src/img/calculator.png",
  },
  {
    name: "SketchMaster",
    github: "https://github.com/markvayson/SketchMaster",
    liveCode: "https://markvayson.github.io/SketchMaster/",
    img: "src/img/sketchmaster.png",
  },
  {
    name: "clashofCattitude",
    github: "https://github.com/markvayson/clashofCattitude",
    liveCode: "https://markvayson.github.io/clashofCattitude/",
    img: "src/img/ClashofCattitude.png",
  },
  {
    name: "signUpForm",
    github: "https://github.com/markvayson/signUpForm",
    liveCode: "https://markvayson.github.io/signUpForm/",
    img: "src/img/sign.png",
  },
];

let isSearch = false;
let isMenu = false;

const menuItems = document.querySelectorAll("[data-items]");
const svgSearch = document.getElementById("svgSearch");
const loader = document.getElementById("loader");
const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const header = document.querySelector("header");
const main = document.querySelector("main");
const logo = document.querySelector(".spanLogo");

menu.addEventListener("click", () => {
  isMenu = true;
  showMenu();
});
logo.addEventListener("click", () => {
  if (logo.textContent !== "x") return;
  isMenu = false;
  showMenu();
});

function showMenu() {
  if (isMenu) {
    logo.innerHTML = `<span>x</span>`;
    sidebar.style.display = "grid";

    setTimeout(() => {
      sidebar.style.opacity = 1;
      header.style.display = "none";
      main.style.display = "none";
    }, 300);
  }
  if (!isMenu) {
    sidebar.style.opacity = 0;
    setTimeout(() => {
      logo.textContent = "Dash";
      sidebar.style.display = "none";
      header.style.display = "grid";
      main.style.display = "grid";
    }, 300);
  }
}

function createCard() {
  const cardContainer = document.getElementById("card-container");
  const cardLength = proj.length;

  for (let i = 0; i < cardLength; i++) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const info = document.createElement("div");
    const title = document.createElement("div");
    const divBtns = document.createElement("div");
    const github = document.createElement("a");
    const liveDemo = document.createElement("a");

    const githubUrl = proj[i].github;
    const liveCode = proj[i].liveCode;
    const cardName = proj[i].name;

    img.src = `${proj[i].img}`;

    card.classList.add("card");

    info.classList.add("info");
    title.classList.add("title");
    divBtns.classList.add("btns");
    title.textContent = cardName;

    github.href = githubUrl;
    liveDemo.href = liveCode;
    github.target = "_blank";
    liveDemo.target = "_blank";

    github.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>`;
    liveDemo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v600q0 24.75-17.625 42.375T780-120H180Zm0-60h600v-520H180v520Zm300.041-105Q400-285 337-328.152q-63-43.151-92-112Q274-509 336.959-552t143-43Q560-595 623-551.849q63 43.152 92 112.001Q686-371 623.041-328t-143 43ZM480-335q57 0 104.949-27.825T660-440q-27.102-49.35-75.051-77.175Q537-545 480-545t-104.949 27.825Q327.102-489.35 300-440q27.102 49.35 75.051 77.175Q423-335 480-335Zm0-105Zm.118 50Q501-390 515.5-404.618q14.5-14.617 14.5-35.5Q530-461 515.382-475.5q-14.617-14.5-35.5-14.5Q459-490 444.5-475.382q-14.5 14.617-14.5 35.5Q430-419 444.618-404.5q14.617 14.5 35.5 14.5Z"/></svg>`;

    card.appendChild(img);
    card.appendChild(info);
    info.appendChild(title);
    info.appendChild(divBtns);

    divBtns.appendChild(github);
    divBtns.appendChild(liveDemo);
    cardContainer.appendChild(card);
  }
}

svgSearch.addEventListener("click", () => {
  const searchInput = document.getElementById("search-input");
  if (!isSearch) {
    searchInput.style.width = "100%";
    searchInput.style.opacity = 1;
    searchInput.focus();
    isSearch = true;
  } else {
    searchInput.style.width = "0%";
    searchInput.style.opacity = 0;
    isSearch = false;
  }
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((inactive) => {
      inactive.classList.remove("active");
    });
    item.classList.add("active");
  });
});

function getWeekDates() {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentDayofWeek = currentDate.getDay();
  const weekDates = {};
  const year = currentDate.getFullYear();
  const week = document.getElementById("week");
  const currentMonth = currentDate.getMonth();
  const ul = document.createElement("ul");
  const cal = document.getElementById("cal");

  cal.innerHTML = `Date - ${months[currentMonth]} ${year}`;
  console.log(
    "🚀 ~ file: main.js:52 ~ getWeekDates ~ currentMonth:",
    currentMonth
  );

  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - currentDayofWeek + i);
    weekDates[daysOfWeek[i]] = date.getDate();
  }

  for (key in weekDates) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${key}</span>${weekDates[key]}`;
    if (weekDates[key] === currentDate.getDate()) {
      li.classList.add("today");
    }
    ul.appendChild(li);
  }
  week.appendChild(ul);
}

window.onload = () => {
  getWeekDates();
  createCard();

  setTimeout(() => {
    loader.style.opacity = 0;
    loader.addEventListener("transitionend", () => {
      loader.style.display = "none";
    });
  }, 300);
};
