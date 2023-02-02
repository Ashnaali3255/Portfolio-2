const array = [
  {
    id: '1',
    name: 'Tonic',
    namedesk: 'Tonic',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2023],
    featureddesk: ['CANOPY', 'Back End Dev', 2023],
    image: './First-image.jpg',
    imageDesktop: './images/desktop/projectone.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails;'],
    live_version: 'https://ashnaali3255.github.io/Portfolio-2/',
    source_link: 'https://github.com/Ashnaali3255/Portfolio-2',
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    namedesk: 'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2023],
    featureddesk: ['FACEBOOK', 'Full Stack Dev', 2023],
    image: './Second-image.jpg',
    imageDesktop: './images/desktop/projecttwo.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails;'],
    live_version: 'https://ashnaali3255.github.io/Portfolio-2/',
    source_link: 'https://github.com/Ashnaali3255/Portfolio-2',
  },
  {
    id: '3',
    name: 'Tonic',
    namedesk: 'Facebook 360',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2023],
    featureddesk: ['FACEBOOK', 'Full Stack Dev', 2023],
    image: 'Third-image.jpg',
    imageDesktop: './images/desktop/projectthree.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails;'],
    live_version: 'https://ashnaali3255.github.io/Portfolio-2/',
    source_link: 'https://github.com/Ashnaali3255/Portfolio-2',
  },
  {
    id: '4',
    name: 'Multi-Post Stories',
    namedesk: 'Uber Navigation',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2023],
    featureddesk: ['UBER', 'Lead Developer', 2023],
    image: './Fourth-image.jpg',
    imageDesktop: './images/desktop/projectfour.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails;'],
    live_version: 'https://ashnaali3255.github.io/Portfolio-2/',
    source_link: 'https://github.com/Ashnaali3255/Portfolio-2',
  },
];
const main = document.querySelector('.menu-icon');
const dynamicWork = document.querySelector('.projects');
const modalView = document.querySelector('.bg-modal');
const openMain = () => {
  main.style.visibility = 'visible';
};
const closeMain = () => {
  main.style.visibility = 'hidden';
};
const closeModal = () => {
  modalView.style.visibility = 'hidden';
};
const openModal = (id) => {
  modalView.style.visibility = 'visible';
  for (let i = 0; i < array.length; i += 1) {
    if (id === array[i].id) {
      modalView.innerHTML = `
        <div class="model_content" id="modelcontent">
        <div class="model_header">
            <h2 class="project_title">${array[i].name}</h2>
  
            <span onclick="closeModal()" class="crossBtn">&times;</span>
        </div>
        <ul class="info_list">
            <li class="item1">${array[i].featured[0]}</li>
            <li class="item2"><span class="dot">&bull;</span><span>${array[i].featured[1]}</span></li>
            <li class="item2"><span class="dot">&bull;</span><span>${array[i].featured[2]}</span></li>
        </ul>
        <img class="img_project" src=${array[i].image} alt="project">
        <img class="proj-img" src=${array[i].imageDesktop} alt="project">
        <div class="container">
        <p class="project_description">${array[i].longDescription}</p>
        <ul class="tech_list list-flex">
            <li class="margin_li language">${array[i].technologies[0]}</li>
            <li class="margin_li language">${array[i].technologies[1]}</li>
            <li class="margin_li language">${array[i].technologies[2]}</li>
        </ul>
        <div class="buttons">
        <button><a class="model_btn live" href=${array[i].live_version}>See live<img class="_icon" src="./Icon.jpg" alt="live icon"></a></button>
        <button><a class="model_btn source" href=${array[i].source_link}>See Source<img class="_icon" src="./Github.jpg" alt="github icon"></a></button>
        </div>
        </div>
        </div>`;
    }
  }
};
openMain();
closeMain();
openModal();
closeModal();
for (let i = 0; i < array.length; i += 1) {
  dynamicWork.innerHTML += `<div class="project">
      <img class="picture" src="${array[i].image}" alt="project1">
      <h2 class="post">${array[i].name}</h2>
      <ul class="toni-flex">
        <li class="link">${array[i].featured[0]}</li>
        <li><img src="./Counter.jpg" alt="counter">${array[i].featured[1]}</li>
        <li><img src="./Counter.jpg" alt="counter">${array[i].featured[2]}</li>
      </ul>
      <p class="para">${array[i].shortDescription}</p>
      <ul class="list-flex">
        <li class="language">${array[i].technologies[0]}</li>
        <li class="language">${array[i].technologies[1]}</li>
        <li class="language">${array[i].technologies[2]}</li>
      </ul>
      <div class="button">
      <button id=${array[i].id} onclick="openModal(this.id)"><a  href="#modal">See Project</a></button>
    </div>
    </div>
    <div class="desktop-projects">
          <div class="proj-image">
            <img class="proj-img" src="${array[i].imageDesktop}" alt="picture">
          </div>
          <div class="proj-desc">
            <h2 class="proj-title">${array[i].namedesk}</h2>
            <ul class="toni-flex">
              <li class="link">${array[i].featureddesk[0]}</li>
              <li><img src="./Counter.jpg" alt="counter">${array[i].featureddesk[1]}</li>
              <li><img src="./Counter.jpg" alt="counter">${array[i].featureddesk[2]}</li>
            </ul>
            <p class="para">${array[i].shortDescriptiondesk}</p>
            <ul class="list-flex">
              <li class="language">${array[i].technologiesdesk[0]}</li>
              <li class="language">${array[i].technologiesdesk[1]}</li>
              <li class="language">${array[i].technologiesdesk[2]}</li>
              <li class="language">${array[i].technologiesdesk[3]}</li>
  
            </ul>
            <div class="button">
      <button id=${array[i].id} onclick="openModal(this.id)"><a  href="#modal">See Project</a></button>
    </div>
          </div>
        </div>
  </div>
  </div>
    `;
}