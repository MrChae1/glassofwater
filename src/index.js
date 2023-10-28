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
                <a class="mainHome-btn special-btn" href="#homePanel">Home</a>
                <a class="mainTasks-btn" href="#tasksPanel">Tasks</a>
                <a class="mainNotes-btn" href="#notesPanel">Notes</a>
            </nav>
        `;
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

    //Add button
    const addTag = () => {

    }
    

    //append Tag
    mainContainer.append(headerTag(), homeTag(), tasksTag(), notesTag(), footerTag());

    return mainContainer;
}

document.body.appendChild(mainComponents());