const febHolidays = [
  "You are my best friend and the love of my life.😊",
  "In the journey of life, you are more than enough for me.❤",
  "I love you with all my heart my Love ❤️",
  "You are my soulmate. ✨💕",
  "You are my everything. 🤩✔",
  "You are the most Beautiful.",
  "You are the most Prettiest.", 
  "You are the most Cutest.",
  "You are the most Strongest", 
  "You are the most Bravest.",
  "You are the most Kindest.",
  "You are the most Sweetest.",
  "You are the most funniest.",
  "The most talented and the most extraordinary girl alive. ",
  "U have the most beautiful eyes, the most beautiful smile", 
  "And the most beautiful heart 💓",
  "In one word, you are just perfect Babes 😍",
  "Being yours makes me the luckiest and the happiest man alive.🥰",
  "I am so grateful that I met you. ❤️",
  "With you everything feels so special.",
  "I will always do my best to keep you happy. 🥺",
  "Never ever feel like you are alone. 💓",
  "I will always be there for you. 🥰",
  "No matter how far we are. 🤞✔",
  "You are the most special person in my life. 🥰",
  "I don't ever want to lose you. 😒",
  "And trust me, I don't want anyone else. 🥰",
  "There is no one better than you. ❤️",
  "You are the best, my baby gurll! 💖",
  "I miss you whenever something really good happens. 🤨",
  "I cherish all the moments we have spent together, 💓",
  "Yes, there have been hardships 😢",
  "But we have overcame everyone of them 🥰",
  "And through all those hardships", 
  "I have realized how important you are in my life. ❤️",
  "This entire love cycle is just for you, 😘",
  "I am binary in love—you are the only '1' in my life.",
  "I will always be thankful to God, for bringing us together.",
  "You are the love of my life my cute little Princess.🥰",
  "My future wife. ❤️🤭",
  "U'll always be my Pyara Bacha 😘💖",
  "U'll always be my Cutie Patootie  💖",
  "U'll always be my Divanya and I'll always be your Aadi❤",
  "I love you so so so so so so so so much. ❤️"
];

const ulEl = document.querySelector("ul");
const d = new Date();
// Start at the 10th message (index 9)
let daynumber = 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;

init();

function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2025-02-${idx + 1}">${idx + 1}</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0); // Start displaying from the 10th message
}

function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(
    `li:nth-child(${activeIndex + 1})`
  );
  document.body.style.backgroundColor = window.getComputedStyle(newActiveEl).backgroundColor;
  newActiveEl.classList.add("active");
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":
      adjustDay(1);
      break;
    default:
      return;
  }
});
