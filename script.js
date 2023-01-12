const hamburger = document.querySelector('.hamburger');
const topMenu = document.querySelector('.nav-top');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  topMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    topMenu.classList.remove('active');
  }));

// pop-up menu
const speakers = [{
  id: '1',
  speakerName: 'Yochai Benkler',
  speakerImg: './images/speaker_01.png',
  speakerPost: 'Havard Law School',
  speakerInfo: 'Lorem ipsum dolor sit amet. Ex ut amet adipisci qui voluptatem atque hic voluptates magnam est incidunvoluptate eos sint consequatur.',
},

{
  id: '2',
  speakerName: 'SohYeong Noh',
  speakerImg: './images/speaker_02.png',
  speakerPost: 'Art and Humanities Lagos, Nigeria',
  speakerInfo: 'Lorem ipsum dolor sit amet. Ex ut amet adipisci qui voluptatem atque hic eos sint consequatur.',
},

{
  id: '3',
  speakerName: 'Gilnam Jeon',
  speakerImg: './images/speaker_03.png',
  speakerPost: 'Cultural Heritage Los Angeles',
  speakerInfo: 'Lorem ipsum dolor sit amet. Ex ut amet adipisci qui idunvoluptate eos sint consequatur.',
},

{
  id: '4',
  speakerName: 'Julia Leda',
  speakerImg: './images/speaker_04.png',
  speakerPost: 'Art and Culture India',
  speakerInfo: 'Lorem ipsum dolor sit amet. Ex ut amet adipisci qui eos sint consequatur.',
},

{
  id: '5',
  speakerName: 'Lyla Tretikov',
  speakerImg: './images/speaker_05.png',
  speakerPost: 'Havard Law School',
  speakerInfo: 'Lorem ipsum dolor sit amet. Ex ut amet adipisci qui incidunvoluptate eos sint consequatur.',
},

{
  id: '6',
  speakerName: 'Ryan Merkly',
  speakerImg: './images/speaker_06.png',
  speakerPost: 'Havard Law School',
  speakerInfo: 'Lorem ipsum dolor sit amet. Ex ut amet adipisci hic voluptates magnam est incidunvoluptate eos sint consequatur.',
},
];

const guestSpeakers = document.querySelector('.speakers-container');

for (let i = 0; i < speakers.length; i += 1) {
  let visibleImg = 'show';
  if (i > 1) {
    visibleImg = 'hide';
  }
  guestSpeakers.innerHTML += `
  <div class="${visibleImg} speakers" id="speak">
    <div><img src="${speakers[i].speakerImg}" alt="image"></div>
            <div class="speaker-info">
            <h3>${speakers[i].speakerName}</h3>
            <h4>${speakers[i].speakerPost}</h4>
            <span class="speaker-bar"></span>
            <p>${speakers[i].speakerInfo}</p>         
             </div>
             </div>`;
}

const moreBtn = document.querySelector('.btn-more');
const perImg = document.querySelectorAll('.speakers');
const lessBtn = document.querySelector('.btn-less');

moreBtn.addEventListener('click', () => {
  perImg.forEach((eachspeaker) => {
    eachspeaker.classList.remove('hide');
    moreBtn.classList.add('hide');
    lessBtn.classList.remove('hide');
  });
});

lessBtn.addEventListener('click', () => {
  perImg.forEach((eachspeaker, index) => {
    if (index > 1) {
      eachspeaker.classList.add('hide');
      lessBtn.classList.add('hide');
      moreBtn.classList.remove('hide');
    }
  });
});
