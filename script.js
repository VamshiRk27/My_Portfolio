const tabLinks=document.getElementsByClassName("tab-links");
const tabContents=document.getElementsByClassName("tab-contents");
const navBar=document.getElementById('NavBar');
const navMenu=document.getElementById('navMenu');
const projectsList=document.getElementById('projectsList');

function closeMenu(){
  navMenu.style.right="-150px";
}

function openMenu(){
  navMenu.style.right="0";
}

fetch('./projects.json')
.then((response) => response.json())
.then((data) => renderProjects(data));

function renderProjects(data){
  let count=0;
  for(let key in data){
    if(count>2){
      return;
    }
    const projectData=data[key];
    const project=document.createElement('div');
    project.setAttribute('class','project');
    project.innerHTML=`
                    <div class="carousel">
                      <img src="${projectData["img"]}" alt="No Preview Available">
                    </div>
                    <div class="layer ${projectData["category"]}-Project">
                        <h2>${key}</h2>
                        <p>${projectData["info"]}</p>
                        <p>${projectData["techStack"]}</p>
                        <div class="links">
                            <a href="${projectData["repository"]}" target="_blank">Repository</a>
                            <a href="${projectData["deployment"]}" target="_blank">Deployed Link</a>
                        </div>
                    </div>
    `
    count++;
    projectsList.appendChild(project);
  };
}



function openTab(id){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(id).classList.add("active-tab");
}