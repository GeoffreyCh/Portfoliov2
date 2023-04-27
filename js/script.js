let fileCss = document.getElementById('fileCss');
let btnClair = document.getElementById('btnClair');
let btnSombre = document.getElementById('btnSombre');

let linkHome = document.getElementById('linkHome');
let linkProject = document.getElementById('linkProject');
let linkAbout = document.getElementById('linkAbout');
let linkContact = document.getElementById('linkContact');

let home = document.getElementById('home');
let project = document.getElementById('project');
let about = document.getElementById('about');
let contact = document.getElementById('contact');

let pages = [home, project, about, contact];

let opacity = 0;

btnClair.addEventListener('click', () => {
    fileCss.href = "scss/styleClair.css";
});

btnSombre.addEventListener('click', () => {
    fileCss.href = "scss/styleSombre.css";
});

linkHome.addEventListener('click', () => {
    pages.forEach(page => {
        if(page.style.display == 'block'){
            page.style.display = 'none';
        };
    });
    home.style.display = 'block';
});

linkProject.addEventListener('click', () => {
    pages.forEach(page => {
        if(page.style.display == 'block'){
            page.style.display = 'none';
        };
    });
    project.style.display = 'block';
});

linkAbout.addEventListener('click', () => {
    pages.forEach(page => {
        if(page.style.display == 'block'){
            page.style.display = 'none';
        };
    });
    about.style.display = 'block';
});

linkContact.addEventListener('click', () => {
    pages.forEach(page => {
        if(page.style.display == 'block'){
            page.style.display = 'none';
        };
    });
    contact.style.display = 'block';
});


// linkHome.addEventListener('click', () => {
//     pages.forEach(page => {
//         if(page.style.display == 'block'){
//             page.classList.add('fadeOn');
//             setTimeout(() => {
//                 page.style.display = 'none';
//                 page.classList.remove('fadeOn');
                
//               }, "1000");
            
//         }
//     });
    
//     home.style.display = 'block';
//     home.classList.add('fadeOff'); 

//     setTimeout(() => {
//         home.classList.remove('fadeOff');
        
//       }, "2000");
// });

// linkProject.addEventListener('click', () => {
//     pages.forEach(page => {
//         if(page.style.display == 'block'){
//             function MyFadeFunction() {
//                 if (opacity<1) {
//                     console.log('test');
//                     opacity += .1;
//                     setTimeout(() => {
//                         MyFadeFunction();
    
//                     }, "100");
//                 }
//                 page.style.opacity = opacity;
//              }

//             setTimeout(() => {
//                 page.style.display = 'none';

//               }, "1000");
//         }
//     });
    
//     project.style.display = 'block';

// });

