import './style.css'

const projects = [
    {
    title :"Personal Portfolio",
    description:"Detailed portfolio about me.",
    tech:"HTML  . CSS . Tailwind . Javascript",
    image:"/projects/portfolio.png",
    live:"https://kwizera-salim.vercel.app",
    code:"https://github.com/salimbuilds/portfolio-v1"


    },
    
        {
    title :"Movie Search",
    description:"Movie Search site",
    tech:"HTML  . CSS . Tailwind . Javascript . daisyUi",
    image:"/projects/movieSearch.png",
    live:"https://salim-movies.vercel.app/",
    code:"https://github.com/salimbuilds/Movie-search"


    },
         {
    title :"weather app",
    description:"Movie Search site",
    tech:"HTML  . . Tailwind . Javascript . Flowbite",
    image:"/projects/weather.png",
    live:"https://salim-weather-app.vercel.app/",
    code:"https://github.com/salimbuilds/ weatherApp"


    }
    
    ,
       {
  title: "Random Dog",
  description: "Built random dog picture generator for practice.",
  tech: "HTML . CSS . Javascript",
  image: "/projects/dog.png",
  live: "https://salimbuilds.github.io/DogApi/",
  code: "https://github.com/salimbuilds/DogApi"
},

  
]

const grid = document.querySelector("#projects-grid");

grid.innerHTML = projects

.map((p,i)=> `
<article class="reveal border border-line p-6 hover:border-brand flex flex-col">
    ${p.image ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy" class="w-full aspect-video object-cover border border-line mb-6" />` : ""}
    <p class="font-mono text-[11px] tracking-[0.24em] text-brand">${String(i + 1).padStart(2, "0")}</p>
    <h3 class="font-display text-2xl mt-8">${p.title}</h3>
    <p class="text-paper/80 leading-7 mt-3">${p.description}</p>
    <p class="font-mono text-mute text-sm mt-4">${p.tech}</p>
    <div class="flex gap-3 flex-wrap mt-auto pt-6">
      <a href="${p.live}" target="_blank" rel="noopener" class="px-5 py-3 font-mono bg-brand hover:bg-paper text-[11px] text-ink uppercase tracking-tight">Live</a>
      <a href="${p.code}" target="_blank" rel="noopener" class="px-5 py-3 border border-line hover:border-paper text-[11px] uppercase tracking-tight">Code</a>
    </div>
  </article>`

)

.join("");

const items = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
      if(entry.isIntersecting){
         entry.target.classList.add("is-visible");
         observer.unobserve(entry.target);
      }
   });
});

items.forEach((item)=>{
   observer.observe(item);
})


const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#mobile-menu");



btn.addEventListener("click",() =>{
     menu.classList.toggle("hidden");
});


const links = document.querySelectorAll("a");

links.forEach((link) =>{
   link.addEventListener("click",()=>{
      menu.classList.add("hidden");
   })
})


const phrases = ["Software engineering", "Full-stack development", "Building for the web"];
const el = document.querySelector("#typing");

let phraseIndex = 0;
let letterIndex = 0;
let deleting = false;

function type() {
  const current = phrases[phraseIndex];

  if (deleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  el.textContent = current.slice(0, letterIndex);

  if (!deleting && letterIndex === current.length) {
    deleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (deleting && letterIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(type, deleting ? 40 : 80);
}

type();
   document.querySelector("#year").textContent = new Date().getFullYear();
