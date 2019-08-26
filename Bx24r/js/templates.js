// function getUserList2(user_list) {
//     return '<p>\
//             <img class="img" src="'+user_list.PERSONAL_PHOTO+'" style="width: 50px;"> \
//             <b>Имя:</b> '+user_list.NAME+' \
//             <b>Фамилия:</b> '+user_list.LAST_NAME+' \
//             <b>Почта:</b> '+user_list.EMAIL+' \
//             <b>Специальность:</b> '+user_list.WORK_POSITION+' \
//         </p>';
// }



function getUserList(user_list, user_task) {
        return '<div class="col-flex user_name_list__item wrapper-progressbar" >\
                <div data-width="'+user_task.toFixed(2)+'" class="wrapper-progressbar__progress">\
                    <div style="" class="wrapper-progressbar__progress-bars">\
                        <div class="user_name_list__container">\
                            <div class="progressbar-count">\
                                <p></p>\
                            </div>\
                            <div class="user_name_list__description">\
                                <div style="background-image: url(' + user_list.PERSONAL_PHOTO + ')" class="user_name_list__img"></div> \
                                <div class="user_name_list__information">\
                                    <p class="user_name_list__value">' + user_list.LAST_NAME + ' ' + user_list.NAME + '</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>';


}

// function getGeneralInfoList() {
//         return' <div  class="col-flex general_information_item information_employees">\
//                         <div class="general_information_item__body">\
//                             <div  class="general_information_item__icon">\
//                                 <i class="fa fa-rub" aria-hidden="true"></i>\
//                             </div>\
//                             <div class="general_information_item__wrap_info">\
//                                 <p class="general_information_item__title">Database</p>\
//                                 <p class="general_information_item__count">Total: <span>785244</span></p>\
//                             </div>\
//                         </div>'
//
// }

