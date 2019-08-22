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

var masive_user = [];
var massive_time_shift =[];
application.prototype.getProger = function(selector) {
    BX24.callMethod(
        'user.search', //Метод который выполняем(запрос)
        {
            UF_DEPARTMENT_NAME: 'WEBBERRY_REMASTERED'
        },
        function(result) {

            $.each(result.data(), function(key, value){

                // $(selector).append(getUserList(value)); //в функцию передаём полученное значение(сотрудника)
                if(value.ACTIVE){
                    app.getTimeCompletedTasks(value,selector);
                }

            });

        }

    )
};


application.prototype.getTimeCompletedTasks = function(array_user,selector) {
    // const closed_date = curentTime();

    BX24.callMethod(
        'tasks.task.list',
        {
            filter: {
                'RESPONSIBLE_ID': array_user.ID,
                'REAL_STATUS': 5,
                '>=CLOSED_DATE': Util.instance().currentTime()
            },
            select: ['ID', 'TITLE', 'STATUS', 'DURATION_PLAN', 'CLOSED_DATE', 'TIME_ESTIMATE']
        },
        function (res) {
            let user_time = 0;
            let user_time_2 = 0;
            let user_time_total = 0;
            $.each(res.data(), function (key, value) {
                $.each(value, function (key_1, value_1) {
                    value_1.timeEstimate = parseInt(value_1.timeEstimate);


                    user_time+=value_1.timeEstimate;
                    user_time_total = (user_time*100)/(120*60*60);
              });
            });

            $(selector).append(getUserList(array_user,user_time_total)); //в функцию передаём полученное значение(сотрудника)

            createProgressBar($('.user_name_list__item'));

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