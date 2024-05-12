const skills = [
    {
        name: "OOP in C#/.NET",
        description: "I have gained substantial knowledge in Object-Oriented Programming with C#/.NET, crafting efficient and scalable solutions with precision and expertise. My proficiency in OOP principles such as SOLID, Desing Patterns, etc. ensures clean code architecture and seamless functionality in every project.",
        image: './images/skill-oop.png'
    },
    {
        name: "Data Stuctures & Algorithms",
        description: "Through my university education and personal pursuit of various courses in my free time, I have acquired proficiency in different data stuctures as well as algorithms. It enables me to design and implement optimised solutions that tackle complex problems with efficiency and ingenuity.",
        image: './images/skill-dsa.png'
    },
    {
        name: "RDBMS",
        description: "Experienced in relational database managament systems, particularly in MS SQL Server and MySQL. Skilled in database design, optimization and advanced SQL techniques to ensure streamlined data management and optimal performance in alignment with organizational objectives.",
        image: './images/skill-db.png'
    },
    {
        name: "Web Technologies",
        description: "The understanding of HTML, CSS, Sass and JavaScript helps me excel in crafting meticulously structured and visually appealing web solutions. With a keen eye for detail and a deep knowledge of front-end technologies, I consistently deliver high-quality, user-centric experiences.",
        image: './images/skill-wt.png'
    }
] 

const skillsProgress = [
    {
        name: "C# / Object-Oriented Programming",
        percentage: 85
    },
    {
        name: "Data Structures & Algorithms with C#",
        percentage: 60
    },
    {
        name: "MS SQL Server / MySQL",
        percentage: 80
    },
    {
        name: "HTML / CSS / JavaScript",
        percentage: 65
    }
]

const experience = [
    {
        startYear: 2014,
        position: "SOFTWARE ENGINEERING INTERN",
        company: "TELEBID PRO LTD.",
        workDescription: "Assisted in debugging code and writing unit tests under supervision. Also participated in team meetings. learned about the company's technology stack and gained exposure to agile development methodologies."
    },
    {
        startYear: 2014,
        position: "JUNIOR SOFTWARE ENGINEER",
        company: "TELEBID PRO LTD.",
        workDescription: "Contributed to development tasks, such as feature implementation and bug fixes, within a team environment. Additionally, collaborated with other team members to refine requirements, attended training sessions to enhance skills and participated in code reviews."
    },
    {
        startYear: 2017,
        position: "MID-LEVEL SOFTWARE ENGINEER",
        company: "PROGRESS",
        workDescription: "Designed and developed software modules, participated in code reviews and mentored junior engineers. Also contributed to architectural discussions, collaborated with cross-functional teams to deliver projects on time."
    },
    {
        startYear: 2020,
        position: "SENIOR SOFTWARE ENGINEER",
        company: "ACCEDIA",
        workDescription: "Led the architecure design for new features, provided technical guidance to the team and resolved complex technical challenges. Conducted performance optimizations and represented the engineering team in stakeholder meetings."
    },
    {
        startYear: 2022,
        position: "LEAD SOFTWARE ENGINEER",
        company: "DXC TECHNOLOGY",
        workDescription: "Managed a team of engineers, coordinated project timelines and collaborated with other departments for product development. Additionally, conducted performance evaluations, identified skill gaps and provided mentoring and coaching to team members."
    },
    {
        startYear: "2024",
        position: "SENIOR SOFTWARE ENGINEER",
        company: "MICROSOFT CORP.",
        workDescription: "Designing and implementing complex software features for Microsoft products like Windows, Office or Azure. Collaborating with cross-functional teams to deliver high-quality software solutions aligned with the company's goals and standards."
    },
]

const projects = [
    {
        name: "Graphic Figures Application",
        image: './images/project-gf.PNG'
    },
    {
        name: "Board Game About English Literature",
        image: './images/project-bg.png'
    },
    {
        name: "German Website",
        image: './images/project-gw.PNG'
    },
    {
        name: "BMW e46 Website",
        image: './images/project-bmw.png'
    },
    {
        name: "Iphone 12 Pro Max Website",
        image: './images/project-iphone.PNG'
    },
    {
        name: "Travel agency",
        image: './images/project-example.jpg'
    },
]


document.addEventListener("DOMContentLoaded", function() {
    const titlePart = document.querySelector(".second-part");
    let skillsContainer = document.querySelector('.js-skill-container');
    let skillProgressContainer = document.querySelector('.js-skill-progress-container');
    let experienceContainer = document.querySelector('.js-experience-container');
    let projectsContainer = document.querySelector('.js-projects-container');

    skills.map(skill => {
        let skillElement = `<div class="js-skill">
                                <img src="${skill.image}" class="js-skill-image">

                                <h4 class="page-heading">${skill.name}</h4>
                                
                                <div class="page-description-text">
                                    <p>
                                        ${skill.description}
                                    </p>
                                </div>
                            </div>`;

        skillsContainer.innerHTML += skillElement;
    })

    skillsProgress.map(skill => {
        let skillProgressElement = `<div class="progress">
                                        <div class="progress-percentage"><span>${skill.name}</span><span>${skill.percentage}</span></div>
                                        <div class="progress-bar"><div class="percentage" style="width: ${skill.percentage}%"></div>
                                    </div>`

        skillProgressContainer.innerHTML += skillProgressElement;
    })

    experience.map(exp => {
        let experienceElement = `<div class="experience-info">
                                    <h5 class="experience-info-start">${exp.startYear}</h5>
                                    <h4 class="experience-info-title">${exp.position}</h4>
                                    <h4 class="experience-info-subtitle">${exp.company}</h4>
                                    <p class="experience-info-description page-description-text">
                                        ${exp.workDescription}
                                    </p>
                                </div>`

        experienceContainer.innerHTML += experienceElement;
    })

    projects.map(project => {
        let projectElement = `<div class="projects-info">
                                <img src="${project.image}" class="projects-info-image">
                                <h4 class="projects-info-title">${project.name}</h4>
                              </div>`

        projectsContainer.innerHTML += projectElement;
    })


// Navigation bar
const navMenu = document.querySelector(".navigation__nav-menu");
const navLink = document.querySelectorAll('li.navigation__nav-menu-list-item')
const navToggle = document.querySelector(".navigation__nav-toggle");
const navClose = document.querySelector(".navigation__nav-close");

// Show menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')   
    })
}

navLink.forEach(item => {
    item.addEventListener('click', () => {
        if(navMenu.classList.contains('show-menu'))
            navMenu.classList.remove('show-menu')
    })
})

// Title Page Animation
const titlePartLoad = () => {
    setTimeout(() => {
        titlePart.textContent = "Hristiyan Bratov/>";
    }, 0);
    setTimeout(() => {
        titlePart.textContent = "a Back-end developer/>";
    }, 4000);
    setTimeout(() => {
        titlePart.textContent = "located in Sofia, Bulgaria/>";
    }, 8000);
}

    titlePartLoad();
    setInterval(titlePartLoad, 12000);
});