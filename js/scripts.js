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
$(document).ready(function() {

    $(".gallery_item img").click(function(){	// Событие клика на маленькое изображение
        var img = $(this);	// Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
            "<img src="+src+" class='popup_img' />"+ // Само увеличенное фото
            "</div>");
        $(".popup").fadeIn(800); // Медленно выводим изображение
        $(".popup_bg").click(function(){	// Событие клика на затемненный фон
            $(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
            setTimeout(function() {	// Выставляем таймер
                $(".popup").remove(); // Удаляем разметку высплывающего окна
            }, 800);
        });
    });

});


