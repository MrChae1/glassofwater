import './scssFile/style.scss';


//Remove Class
export const removeClass = (anchorTag) => {
    anchorTag.forEach(key => key.classList.remove('special-btn'));
}

//Change Anchor Tag Color
/**
 * Change the style of navigation buttons based on the clicked element's class.
 * @param {Event} event - The click event.
 * @param {HTMLElement[]} anchorTag - An array of navigation buttons.
 */
export const changeNav = (event, anchorTag) => {
    const classToAnchor = {
        'mainHome-btn': 0,
        'mainTasks-btn': 1,
        'mainNotes-btn': 2,
    };
    const clickedClass = event.target.className;
    if (classToAnchor.hasOwnProperty(clickedClass)) {
        const buttonIndex = classToAnchor[clickedClass];
        // Add the 'special-btn' class to the corresponding button
        anchorTag[buttonIndex].classList.add('special-btn');
    } else {
        // Handle the default case, e.g., adding 'special-btn' to HomeButton
        anchorTag[0].classList.add('special-btn');
    }
}