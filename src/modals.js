import './scssFile/style.scss';

export const addModals = () => {
    const addModal = document.createElement('main');
    addModal.classList.add('addModal');
    addModal.innerHTML = `
        <div class="Input-Container"> 
            <header class="Addmodal-Container">
                <h2>CREATE NEW...</h2>
                <h4 class="Addmodal-Exit">X</h4>
            </header>
            <nav class="Addmodal-Nav">
                <a class="Addmodal special-btn" id="Addmodal-Tasks">Tasks</a>
                <a class="Addmodal" id="Addmodal-Tasks">Notes</a>
            </nav>
            <aside class="Addmodal-Aside">
                <section class="inputs">
                    <input class="input-title" type="text" placeholder="TITLE">
                    <textarea class="text-description" name="text-description" id="description" cols="30" rows="10" placeholder="Tell something about this..."></textarea>
                </section>
                <section class="dates">
                    <label for="tasksDates">Due Dates: </label>
                    <input type="date" id="tasksDates">   
                </section>
                <section class="Prioritymodal-Section">
                    <div class="PriorityContainer">
                        <h3>Priority:</h3>
                        <div class="prio-btn">
                            <button class="low" value="low">LOW</button>
                            <button class="medium" value="medium">MEDIUM</button>
                            <button class="high" value="high">HIGH</button>
                        </div>
                    </div>
                </section>
            </aside>
            <section class='addModal-btn'>
                <button class="New-Add">ADD NEW</button>    
            <section>
        </div>
    `;

    document.body.style.overflow = 'hidden';
    document.body.appendChild(addModal);
}