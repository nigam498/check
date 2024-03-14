/* Simple Hello World in Node.js */
// Create HTML elements
const html = document.createElement('html');
const head = document.createElement('head');
const title = document.createElement('title');
title.textContent = 'External Connect';

// Create and append link element for CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';

// Append elements to head
head.appendChild(title);
head.appendChild(link);

// Create body element
const body = document.createElement('body');

// Create and append content div
const contentDiv = document.createElement('div');
contentDiv.id = 'content';

// Create and append image element
const img = document.createElement('img');
img.src = 'USAA_Logo.png';
img.alt = 'USAA icon';
contentDiv.appendChild(img);

// Create and append heading elements
const h1 = document.createElement('h1');
h1.textContent = 'Employee Resources';
contentDiv.appendChild(h1);

const h2 = document.createElement('h2');
h2.textContent = 'Remote Resources';
contentDiv.appendChild(h2);

// Create and append list elements
const h3s = ['Password Reset/VIP Token Reset/Unlock Account', 'Employee Mobile Apps', 'HR Assistance', 'Need additional help?', 'Your IP Information'];
const uls = [
    ['Contact the IT Service Desk at (210) 456-9999 for assistance.'],
    ['Visit the Tech Spot Website on your work computer to learn how to enroll in Microsoft Intune.'],
    ['Email HR Service Desk ', 'Lincoln Financial Group ', 'OneSource Download the Workday mobile app from the Apple App store or Google Play store. For first-time users, enter the following when prompted: Tenant: USAA Website: https://www.myworkday.com'],
    ['Call IT Help at 210-456-9999'],
    ['If needed your IP Address is: 60.254.31.169']
];

for (let i = 0; i < h3s.length; i++) {
    const h3 = document.createElement('h3');
    h3.textContent = h3s[i];
    contentDiv.appendChild(h3);

    const ul = document.createElement('ul');
    for (let j = 0; j < uls[i].length; j++) {
        const li = document.createElement('li');
        if (i === 2 && j === 0) {
            const a = document.createElement('a');
            a.href = 'mailto:humanResources@usaa.com';
            a.textContent = uls[i][j];
            li.appendChild(a);
        } else if (i === 2 && j === 1) {
            const a = document.createElement('a');
            a.href = 'https://www.mylincolnportal.com/customer/public/usaa';
            a.textContent = uls[i][j];
            li.appendChild(a);
        } else {
            li.textContent = uls[i][j];
        }
        ul.appendChild(li);
    }
    contentDiv.appendChild(ul);
}

// Create and append footer element
const footer = document.createElement('footer');

// Create and append left-container and right-container divs
const leftContainer = document.createElement('div');
leftContainer.id = 'left-container';
leftContainer.textContent = '\u00A92022 USAA';

const rightContainer = document.createElement('div');
rightContainer.id = 'right-container';

// Create and append lock image
const lockImg = document.createElement('img');
lockImg.src = 'lock.png';
lockImg.alt = 'Lock icon';
rightContainer.appendChild(lockImg);

// Create and append text
const secureText = document.createElement('div');
secureText.textContent = 'USAA is a Secure Site';
rightContainer.appendChild(secureText);

footer.appendChild(leftContainer);
footer.appendChild(rightContainer);

// Append elements to body
body.appendChild(contentDiv);
body.appendChild(footer);

// Append head and body to html
html.appendChild(head);
html.appendChild(body);

// Create a new window with the dynamically created HTML content
const newWindow = window.open('');
newWindow.document.documentElement.replaceWith(html);
