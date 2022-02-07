document.querySelector('header form.desktop').addEventListener('change',(event) =>{
    if (event.target.nodeName === 'INPUT'){
        document.documentElement.classList.remove('dark', 'light', 'backendless');
        document.documentElement.classList.add(event.target.value);
    }

});
var Mobile = document.querySelector('header form.mobile select');
Mobile.addEventListener('change', function() {
    document.documentElement.classList.remove('dark', 'light', 'backendless');
    document.documentElement.classList.add(event.target.value);
});
var Tablet = document.querySelector('header form.tablet ');
Tablet.addEventListener('click', function() {
    document.documentElement.classList.remove('dark', 'light', 'backendless');
    document.documentElement.classList.add(event.target.value);
});


