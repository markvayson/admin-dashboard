let projects = [
  {
    name: "Calculator",
    details: "Html5, Tailwindcss, JavaScript",
    github: "https://github.com/markvayson/calculator",
    liveCode: "https://markvayson.github.io/calculator/",
    img: "img/calculator.png",
  },
  {
    name: "SketchMaster",
    details: "Html5, Tailwindcss, JavaScript",
    github: "https://github.com/markvayson/SketchMaster",
    liveCode: "https://markvayson.github.io/SketchMaster/",
    img: "img/sketchmaster.png",
  },
  {
    name: "clashofCattitude",
    details: "Html5, Tailwindcss, JavaScript",
    github: "https://github.com/markvayson/clashofCattitude",
    liveCode: "https://markvayson.github.io/clashofCattitude/",
    img: "img/ClashofCattitude.png",
  },
  {
    name: "signUpForm",
    details: "Html5, Tailwindcss, JavaScript",
    github: "https://github.com/markvayson/signUpForm",
    liveCode: "https://markvayson.github.io/signUpForm/",
    img: "img/sign.png",
  },
];

const menuItems = document.querySelectorAll("[data-items]");
const svgSearch = document.getElementById("svgSearch");
const loader = document.getElementById("loader");

let isSearch = false;

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

  setTimeout(() => {
    loader.style.opacity = 0;
    loader.addEventListener("transitionend", () => {
      loader.style.display = "none";
    });
  }, 300);
};
