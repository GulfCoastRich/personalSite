const theme = "theme";
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const toggleBtn = '.toggle-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';


const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = 'is-visible';

const root = document.documentElement;

/* Dark Mode Theme */
const toggleTheme = document.querySelector(themeTab);
const toggle = document.querySelectorAll(toggleBtn);
const currentTheme = localStorage.getItem(theme);

const setActive = (el, selector) => {
    if(document.querySelector(`${selector}.${active}`) !== null){
        document.querySelector(`${selector}.${active}`).classList.remove(active);
    }
        el.classList.add(active);
}

const setTheme = (val) => {
    if(val === dark){
        root.setAttribute(dataTheme, dark);
        localStorage.setItem(theme, dark);
    }else{
        root.setAttribute(dataTheme, light);
        localStorage.setItem(theme, light);
    }
}

if(currentTheme){
    root.setAttribute(dataTheme, currentTheme);
    toggle.forEach((btn) => {
        btn.classList.remove(active);
    });

    if(currentTheme === dark){
        toggle[1].classList.add(active);
    }else{
        toggle[0].classList.add(active);
    }
}

toggleTheme.addEventListener('click', function() {
    const tab = this.parentElement.parentElement;
    if(!tab.className.includes(open)){
        tab.classList.add(open);
    }else{
        tab.classList.remove(open);
    }
})


for(const el of toggle){
    el.addEventListener('click', function(){
        const toggle = this.dataset.toggle;
        setActive(el, toggleBtn);
        setTheme(toggle);
    })
}






/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

//Full Site Modal "open buttons"
for(const el of openModal){
    el.addEventListener('click', function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
}


//Full Site Modal "close buttons"
for(const el of closeModal){
    el.addEventListener('click', function() {
        this.parentElement.parentElement.classList.remove(isVisible);
    });
}


