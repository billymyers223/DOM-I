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

// Example: Update the img src for the logo
//NAV
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
const nav1 = document.querySelector('nav a:nth-of-type(1)');
nav1.textContent = siteContent["nav"]["nav-item-1"];
const nav2 = document.querySelector('nav a:nth-of-type(2)');
nav2.textContent = siteContent["nav"]["nav-item-2"];
const nav3 = document.querySelector('nav a:nth-of-type(3)');
nav3.textContent = siteContent["nav"]["nav-item-3"];
const nav4 = document.querySelector('nav a:nth-of-type(4)');
nav4.textContent = siteContent["nav"]["nav-item-4"];
const nav5 = document.querySelector('nav a:nth-of-type(5)');
nav5.textContent = siteContent["nav"]["nav-item-5"];
const nav6 = document.querySelector('nav a:nth-of-type(6)');
nav6.textContent = siteContent["nav"]["nav-item-6"];
// END NAV

//CTA
const h1Ele = document.querySelector('h1');
h1Ele.textContent = siteContent["cta"]["h1"];
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent["cta"]["img-src"];
const ctaBut = document.querySelector('button');
ctaBut.textContent = siteContent["cta"]["button"];
//END CTA

//MAIN CONTENT
let textTitle = document.querySelectorAll('.text-content h4');
let textP = document.querySelectorAll('.text-content p');
//Title
textTitle[0].textContent = siteContent['main-content']['features-h4'];
textTitle[1].textContent = siteContent['main-content']['about-h4'];
textTitle[2].textContent = siteContent['main-content']['services-h4'];
textTitle[3].textContent = siteContent['main-content']['product-h4'];
textTitle[4].textContent = siteContent['main-content']['vision-h4'];
//Content
textP[0].textContent = siteContent['main-content']['features-content'];
textP[1].textContent = siteContent['main-content']['about-content'];
textP[2].textContent = siteContent['main-content']['services-content'];
textP[3].textContent = siteContent['main-content']['product-content'];
textP[4].textContent = siteContent['main-content']['vision-content'];
//Image
const contImg = document.getElementById('middle-img');
contImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
//END MAIN CONTENT

//CONTACT
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];
const contactAd = document.querySelector('.contact p:nth-of-type(1)');
contactAd.textContent = siteContent['contact']['address'];
const contactPh = document.querySelector('.contact p:nth-of-type(2)');
contactPh.textContent = siteContent['contact']['phone'];
const contactEm = document.querySelector('.contact p:nth-of-type(3)');
contactEm.textContent = siteContent['contact']['email'];
//END CONTACT

//FOOTER
const footerTxt = document.querySelector('footer');
footerTxt.textContent = siteContent['footer']['copyright'];
//END FOOTER

//OTHER EDITS
//Add nav elements
const nav = document.querySelector('nav');
const nav0 = document.createElement('a');
const nav7 = document.createElement('a');
nav0.textContent = 'Billy';
nav0.href = '#';
nav.prepend(nav0);
nav7.textContent = 'Myers';
nav7.href = '#';
nav.append(nav7);

let colorLink = document.querySelectorAll('nav  a');
    colorLink.forEach(function(x) {
    x.style.color = 'green';
 });
