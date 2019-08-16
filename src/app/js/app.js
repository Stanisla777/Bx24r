// class App{
//     _id=1;
//     _name=3;
//
//     constructor(id = null) {
//         this._id = id;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         this._name = value;
//     }
//
//     get getId() {
//         return this._id;
//     }
//
//     set setId(value) {
//         this._id = value;
//     }
// }
//
//
// function application() {
//     let object = new App(10);
// }
//
// //получаю текущего пользователя(меня)
// application.prototype.displayCurrentUser = function (selector) {
//     BX24.callMethod(
//         'user.current',
//         {},
//         function (result) {
//             $(selector).html('hello ' + result.data().NAME + ' ' + result.data().LAST_NAME + '!');
//         }
//     )
// }

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
            })
        }
    )
};

app = new application();