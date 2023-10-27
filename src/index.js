import './scssFile/style.scss';

function mainComponents (){
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('mainContainer');

    //Navigation bar
    const mainNav = document.createElement('nav');
    mainNav.classList.add('mainNav');

    //append Tag
    mainContainer.append(mainNav);

    return mainContainer;
}

document.body.appendChild(mainComponents());