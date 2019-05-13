const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// // Example: Update the img src for the logo
let logo = document.querySelector("#logo-img");
logo.setAttribute("src", "img/logo.png")

let cta = document.querySelector("#cta-img");
cta.setAttribute("src", "img/header-img.png");

let middle = document.querySelector("#middle-img");
middle.setAttribute("src", "img/mid-page-accent.jpg");

// 

// Set all Nav links correctly (Probably an easier way using a for each.. but just get it working first!)

let navItem1 = document.getElementsByTagName('a');
navItem1[0].text = 'Services';
navItem1[0].setAttribute("style", "color: Green;");
let navItem2 = document.getElementsByTagName('a');
navItem2[1].text = 'Product';
navItem2[1].setAttribute("style", "color: Green;");
let navItem3 = document.getElementsByTagName('a');
navItem3[2].text = 'Vision';
navItem3[2].setAttribute("style", "color: Green;");
let navItem4 = document.getElementsByTagName('a');
navItem4[3].text = 'Features';
navItem4[3].setAttribute("style", "color: Green;");
let navItem5 = document.getElementsByTagName('a');
navItem5[4].text = 'About';
navItem5[4].setAttribute("style", "color: Green;");
let navItem6 = document.getElementsByTagName('a');
navItem6[5].text = 'Contact';
navItem6[5].setAttribute("style", "color: Green;");

// let ctaText = document.getElementsByClassName('cta-text');
// ctaText[0].innerHTML = 'DOM IS AWSOME';

// const buttonText = document.querySelector('.cta-text button');

const test1 = document.querySelector('h1');
test1.innerText = 'DOM \n IS \n AWSOME'
// test1.style.justifyContent = 'flex-start'


const test2 = document.querySelector('button')
test2.innerText = 'Get Started';

arrayStuff = ['Features', 'About', 'Services', 'Product', 'Vision']
const test3 = document.querySelectorAll('h4');
let counter = 0
test3.forEach(function (element) {
  element.innerText = arrayStuff[counter];
  counter += 1;
})

counter = 0;

const paraGraph1 = document.querySelectorAll('.main-content p');
paraGraph1.forEach(function (element) {
  element.innerText = `${arrayStuff[counter]} content elementum magna eros, ac posuere elvit tempus et.Suspendisse vel tempus odio, in interdutm nisi.Suspendisse eu ornare nisl.Nullam convallis augue justo, at imperdiet metus scelerisque quis.`
  counter += 1;
})

let anchor = document.createElement('a')
document.querySelector('nav').appendChild(anchor)
anchor.textContent = 'Link';
anchor.href = '#';
anchor.setAttribute("style", "color: Green;");

let newAnchor = document.createElement('a')
document.querySelector('nav').appendChild(newAnchor)
newAnchor.textContent = 'Links';
newAnchor.href = '#';
newAnchor.setAttribute("style", "color: Green;");

const navAppend = document.querySelector('nav')

const contact = document.querySelector('.contact')


  

