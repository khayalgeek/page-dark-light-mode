let btnDarkLightMode = document.querySelector('.button');
let boxDarkLightMode = document.querySelector('.button-box');
let navbar = document.querySelector('.navbar-container');
let isDarkMode = false;
setThemeMode();



btnDarkLightMode.addEventListener('click', function () {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        localStorage.setItem("themeMode", "dark");
        btnDarkLightMode.classList.add('active');
        boxDarkLightMode.classList.add('active');
        setThemeMode();
    } else {
        localStorage.setItem("themeMode", "light");
        btnDarkLightMode.classList.remove('active');
        boxDarkLightMode.classList.remove('active');
        setThemeMode();
    }
})



function setThemeMode(){
    let pageThemeModeStorage = localStorage.getItem("themeMode");
    if (pageThemeModeStorage === 'dark') {
        isDarkMode=true;
        navbar.style.backgroundColor = 'black';
        navbar.style.color = 'white'
        btnDarkLightMode.classList.add('active');
        boxDarkLightMode.classList.add('active');
    }else if(pageThemeModeStorage === 'light'){
        isDarkMode=false;
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'black';
        btnDarkLightMode.classList.remove('active');
        boxDarkLightMode.classList.remove('active');
    }else{
        return;
    }
}
