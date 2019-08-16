function getUserList(user_list) {
    return '<p>\
            <img src="'+user_list.PERSONAL_PHOTO+'" style="width: 50px;"> \
            <b>Имя:</b> '+user_list.NAME+' \
            <b>Фамилия:</b> '+user_list.LAST_NAME+' \
            <b>Почта:</b> '+user_list.EMAIL+' \
            <b>Специальность:</b> '+user_list.WORK_POSITION+' \
        </p>';
}