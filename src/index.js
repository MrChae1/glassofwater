import './scssFile/style.scss';

function mainComponents (){
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('mainContainer');

    //Navigation bar
    const headerTag = () => {
        const mainHeader = document.createElement('header');
        mainHeader.classList.add('mainHeader');
        mainHeader.innerHTML = `
            <div class="logoDiv">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hand-pointing-right</title><path d="M21,9A1,1 0 0,1 22,10A1,1 0 0,1 21,11H16.53L16.4,12.21L14.2,17.15C14,17.65 13.47,18 12.86,18H8.5C7.7,18 7,17.27 7,16.5V10C7,9.61 7.16,9.26 7.43,9L11.63,4.1L12.4,4.84C12.6,5.03 12.72,5.29 12.72,5.58L12.69,5.8L11,9H21M2,18V10H5V18H2Z" /></svg>
                <h1>TodoThis</h1>
            </div>
            <nav class="mainNav">
                <a class="mainBtn special-btn" id="mainHome" href="#homePanel">Home</a>
                <a class="mainBtn" id="mainTasks" href="#tasksPanel">Tasks</a>
                <a class="mainBtn" id="mainNotes" href="#notesPanel">Notes</a>
            </nav>
            <aside class="mainAdd">
                <svg class="AddIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
            </aside>
        `;
        const allAnchor = Array.from(mainHeader.querySelectorAll('.mainBtn'));
        const mainNav = mainHeader.querySelector('.mainNav').addEventListener('click', function(e){
            import('./command').then(module => {
                module.removeClass(allAnchor);
                module.changeNav(e, allAnchor)
            }).catch(error => {
                console.error('Error while importing module: ', error);
            });
        });

        const AddNewBtn = mainHeader.querySelector('aside').addEventListener('click', () => {
            import('./modals').then(module => {
                module.addModals();
            });
        }); 

        return mainHeader; 
    }

    //Home Section
    const homeTag = () => {
        const mainHome = document.createElement('main');
        mainHome.classList.add('mainHome');
        mainHome.setAttribute('id', 'homePanel');
        mainHome.innerHTML = `
            <article class="homeArticle">
                <p>Empower Tomorrow,</p>
                <h2><span>TODOTHIS</span>Today!</h2>
            </article>
            <svg class="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a6a6a6" fill-opacity="1" d="M0,128L21.8,144C43.6,160,87,192,131,170.7C174.5,149,218,75,262,74.7C305.5,75,349,149,393,160C436.4,171,480,117,524,106.7C567.3,96,611,128,655,117.3C698.2,107,742,53,785,32C829.1,11,873,21,916,53.3C960,85,1004,139,1047,181.3C1090.9,224,1135,256,1178,245.3C1221.8,235,1265,181,1309,149.3C1352.7,117,1396,107,1418,101.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
        `;
        return mainHome
    }
    
    //tasks section
    const tasksTag = () => {
        const mainTasks = document.createElement('main');
        mainTasks.classList.add('mainTasks');
        mainTasks.innerHTML = `
            <h3 id="tasksPanel">TASKS</h3>
            <main class="tasksMain">
            </main>
        `;

        return mainTasks;
    }

    //Notes Section
    const notesTag = () => {
        const mainNotes = document.createElement('main');
        mainNotes.classList.add('mainNotes');
        mainNotes.innerHTML = `
            <h3 id="notesPanel">NOTES</h3>
            <main class="notesMain">
            </main>
        `;

        return mainNotes;
    }


    //Footer Tag
    const footerTag = () => {
        const mainFooter = document.createElement('footer');
        mainFooter.classList.add('mainFooter');
        mainFooter.innerHTML = `
            <p>&copy; 2023 TodoThis. All rights reserved.</p>
        `;

        return mainFooter;
    }    

    //append Tag
    mainContainer.append(headerTag(), homeTag(), tasksTag(), notesTag(), footerTag());

    return mainContainer;
}

document.body.appendChild(mainComponents());