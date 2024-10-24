const colorchips = [
  [
    {
      color: "#264653",
      class: "is-dark"
    },
    {
      color: "#2A9D8F",
      class: "is-light"
    },
    {
      color: "#E9C46A",
      class: "is-light"
    }
    ,
    {
      color: "#F4A261",
      class: "is-light"
    }
    ,
    {
      color: "#E76F51",
      class: "is-light"
    }
  ],[
    {
      color: "#E63946",
      class: "is-light"
    },
    {
      color: "#F1FAEE",
      class: "is-light"
    },
    {
      color: "#A8DADC",
      class: "is-light"
    }
    ,
    {
      color: "#457B9D",
      class: "is-light"
    }
    ,
    {
      color: "#1D3557",
      class: "is-dark"
    }
  ],[
    {
      color: "#606C38",
      class: "is-dark"
    },
    {
      color: "#283618",
      class: "is-dark"
    },
    {
      color: "#FEFAE0",
      class: "is-light"
    }
    ,
    {
      color: "#DDA15E",
      class: "is-light"
    }
    ,
    {
      color: "#BC6C25",
      class: "is-light"
    }
  ],[
      {
        color: "#8ECAE6", 
        class: "is-light"
      },
      {
        color: "#219EBC", 
        class: "is-light"
      },
      {
        color: "#023047", 
        class: "is-dark"
      },
      {
        color: "#FFB703", 
        class: "is-light"
      },
      {
        color: "#FB8500", 
        class: "is-light"
      }
  ],[
      {
        color: "#CDB4DB", 
        class: "is-light"
      },
      {
        color: "#FFC8DD", 
        class: "is-light"
      },
      {
        color: "#FFAFCC", 
        class: "is-light"
      },
      {
        color: "#BDE0FE", 
        class: "is-light"
      },
      {
        color: "#A2D2FF", 
        class: "is-light"
      }
  ],[
      {
        color: "#CCD5AE", 
        class: "is-light"
      },
      {
        color: "#E9EDC9", 
        class: "is-light"
      },
      {
        color: "#FEFAE0", 
        class: "is-light"
      },
      {
        color: "#FAEDCD", 
        class: "is-light"
      },
      {
        color: "#D4A373", 
        class: "is-light"
      }
  ],[
      {
        color: "#FFCDB2", 
        class: "is-light"
      },
      {
        color: "#FFB4A2", 
        class: "is-light"
      },
      {
        color: "#E5989B", 
        class: "is-light"
      },
      {
        color: "#B5838D", 
        class: "is-light"
      },
      {
        color: "#6D6875", 
        class: "is-light"
      }
  ]
]

const button_palette = document.querySelector(".button_palette");

const header = document.querySelector("header");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const skills = document.getElementById("skills");
const contact = document.getElementById("contact");
const footer = document.querySelector("footer");

const sections = [ header, about, projects, skills, contact, footer];

function changeColors() {
  const randomColor = colorchips[Math.floor(Math.random() * colorchips.length)];

  const firstColor = randomColor[0].color;
  const aboutColor = randomColor[1].color;
  const projectsColor = randomColor[2].color;
  const skillsColor = randomColor[3].color;
  const contactColor = randomColor[4].color;

  const firstClass = randomColor[0].class;
  const aboutClass = randomColor[1].class;
  const projectsClass = randomColor[2].class;
  const skillsClass = randomColor[3].class;
  const contactClass = randomColor[4].class;

  about.style.backgroundColor = aboutColor;
  projects.style.backgroundColor = projectsColor;
  skills.style.backgroundColor = skillsColor;
  contact.style.backgroundColor = contactColor;
  header.style.backgroundColor = firstColor;
  footer.style.backgroundColor = firstColor;

  header.classList.add(firstClass);
  footer.classList.add(firstClass);
  about.classList.add(aboutClass);
  projects.classList.add(projectsClass);
  skills.classList.add(skillsClass);
  contact.classList.add(contactClass);

}

// function clearClass(el) {
//   const currentClass = el.classList.value;
//   console.log(currentClass);
// }

// clearClass(contact);
// clearClass(about);
// clearClass(header);
// clearClass(skills);


changeColors();

const clearClass = function(el) {
  const currentClass = el.classList.value;
  el.classList.remove(currentClass);
}

const handleColorChange = function() {
  sections.forEach((item) => {
    clearClass(item);
  });
  changeColors();
}
button_palette.addEventListener("click", handleColorChange)

