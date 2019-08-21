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
};

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
                app.getTimeCompletedTasks(value.ID);
            });
            createProgressBar($('.user_name_list__item'));

            app.resizeFrame();

        }

    )
};


application.prototype.getTimeCompletedTasks = function(id_user){
    const closed_date = curentTime();

    BX24.callMethod(
        'tasks.task.list',
        {
            filter: {
                'RESPONSIBLE_ID': id_user,
                'REAL_STATUS': 5,
                '>=CLOSED_DATE': /*'2019-8-10T00:01:01+03:00'*/closed_date
            },
             select: ['ID', 'TITLE', 'STATUS', 'DURATION_PLAN', 'CLOSED_DATE','TIME_ESTIMATE']
        },
        function(res){
            console.log(res.data());
            // console.log(name_user);
            // console.log(res);


        }


    );
};

// function curentTime(){
//     const now = moment();
//     const dayMonth = now.daysInMonth();
//     const currentDate = now.format();
//     const currentDay = now.format('DD',10);
//     const currentMonth = now.format('MM');
//
//     if(currentDay<=10&&currentMonth){
//         return ("привет")
//     }
//     else {
//         return('пока')
//     }
// }

    function curentTime() {
        Data = new Date();
        Year = Data.getFullYear();
        Year=parseInt(Year);
        Month = Data.getMonth();
        Month = (parseInt(Month)+1);
        Day = Data.getDate();
        Day = parseInt(Day);


        if(Day>10&&Month){
            return closed_date = Year + "-"+Month+"-10T00:01"
        }
        else if(Day<=10&&Month){
            return closed_date = Year + "-"+(Month-1)+"-10T00:01"
        }
    }



    app = new application();

function createProgressBar(targetItems){
    targetItems.each(function () {
        const data_width = $(this).find('.wrapper-progressbar__progress').attr('data-width');
        $(this).find('.wrapper-progressbar__progress').css('width',data_width+'%');
        const teg_this = $(this);

        $({numberValue: 0}).animate({numberValue: data_width}, {

            duration: 3000, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
            easing: "linear",

            step: function (val) {

                $(teg_this).find(".progressbar-count p").text(Math.ceil(val) + ' %'); // Блок, где необходимо сделать анимацию

            }

        });
    });
}


application.prototype.resizeFrame = function(){
    const currentSize = BX24.getScrollSize();
    minHeight = currentSize.scrollHeight;
    if (minHeight<400) minHeight=400;
    BX24.resizeWindow(this.FrameWidth,minHeight);
};
application.prototype.saveFrameWidth = function(selector){
    this.FrameWidth = $('.user_name_list__wrapper');
    // console.log(this.FrameWidth)
};