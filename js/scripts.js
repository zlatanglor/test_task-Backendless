document.querySelector('header form').addEventListener('change',(event) =>{
    if (event.target.nodeName === 'INPUT'){
        document.documentElement.classList.remove('dark', 'light', 'backendless');
        document.documentElement.classList.add(event.target.value);
    }

});
var select = document.querySelector('header form select');
select.addEventListener('change', function() {
    document.documentElement.classList.remove('dark', 'light', 'backendless');
    document.documentElement.classList.add(event.target.value);
});
var select1 = document.querySelector('header form button');
select1.addEventListener('click', function() {
    document.documentElement.classList.remove('dark', 'light', 'backendless');
    document.documentElement.classList.add(event.target.value);
    console.log(target.value);
});
