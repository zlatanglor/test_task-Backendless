document.querySelector('header form').addEventListener('change',(event) =>{
    if (event.target.nodeName === 'INPUT'){
        document.documentElement.classList.remove('dark', 'light', 'backendless');
        document.documentElement.classList.add(event.target.value);
    }
});
