// function getUserList2(user_list) {
//     return '<p>\
//             <img class="img" src="'+user_list.PERSONAL_PHOTO+'" style="width: 50px;"> \
//             <b>Имя:</b> '+user_list.NAME+' \
//             <b>Фамилия:</b> '+user_list.LAST_NAME+' \
//             <b>Почта:</b> '+user_list.EMAIL+' \
//             <b>Специальность:</b> '+user_list.WORK_POSITION+' \
//         </p>';
// }



function getUserList(user_list) {
    return '<div class="col-flex user_name_list__item">\
            \
                <div class="user_name_list__container">\
                    \
                    <div style="background-image: url('+user_list.PERSONAL_PHOTO+')" class="user_name_list__img"></div> \
                    <div class="user_name_list__description">\
                    \
                        <div class="user_name_list__wrap">\
                          <p class="user_name_list__label">Имя:</p>\
                          <p class="user_name_list__value">'+user_list.LAST_NAME+' '+user_list.NAME+'</p>\
                        </div>\
                        \
                    </div>\
                </div>\
                <div class="container-progressbar container-progressbar__margin">\
                    <div class="progressbar-count"></div>\
                    <div class="wrapper-progressbar">\
                        <div data-width="22" class="progress">\
                            <div class="progress-bar" role="progressbar" data-width="100"></div>\
                        </div>\
                    </div>\
                </div>\
            </div>';


}

