function application() {

}
// //получаю текущего пользователя(меня)
application.prototype.displayCurrentUser = function (selector) {
    BX24.callMethod(
        'user.current',
        {},
        function (result) {
            $(selector).html('Здравствуйте ' + result.data().NAME + ' ' + result.data().LAST_NAME + '!');
        }
    )
}

/**
 * 2 аргумент - это массив фильтра для запроса
 *
 */


application.prototype.getProger = function(selector) {
    BX24.callMethod(
        'user.search', //Метод который выполняем(запрос)
        {
            UF_DEPARTMENT_NAME: 'WEBBERRY_REMASTERED'
        },
        function(result) {
            //var $result = JSON.parse(result);

            $.each(result.data(), function(key, value){
                $(selector).append(getUserList(value)); //в функцию передаём полученное значение(сотрудника)
            });

            $('.user_name_list__item').each(function () {


                const data_width = $(this).find('.wrapper-progressbar .progress').attr('data-width');
                $(this).find('.wrapper-progressbar .progress').css('width',data_width+'%');
                const teg_this = $(this);

                $({numberValue: 0}).animate({numberValue: data_width}, {

                    duration: 3000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
                    easing: "linear",

                    step: function (val) {

                        $(teg_this).find(".progressbar-count").html(Math.ceil(val) + ' %'); // Блок, где необходимо сделать анимацию

                    }

                });
            });
        }

    )
};

app = new application();