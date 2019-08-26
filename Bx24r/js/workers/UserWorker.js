class UserWorker {
    constructor(data) {
        //user array
        // if(data.user)
            this.user = data.user;

        //task hours
        // if(data.time)
            this.time = data.time;
    }

    static instance(data) {
        return new UserWorker(data);
    }

    showUserList() {

        return '<div class="col-flex company_employees_item information_employees">\
            <div class="company_employees_item__body">\
            <div class="company_employees_item__wrap">\
            <div style="background-image: url(' + this.user.PERSONAL_PHOTO + ')" class="company_employees_item__img"></div> \
            <div class="company_employees_item__information">\
            <p class="company_employees_item__value">'+this.user.LAST_NAME+' ' + this.user.NAME + '</p>\
        </div>\
        </div>\
        <div class="company_employees_item__salary">\
            <p>9000<span> ₽</span></p>\
        </div>\
        </div>\
        <div class="container_progressbar">\
            <div class="cart_progressbar">\
            <div data-width="'+this.time+'" style="" class="cart_progressbar__progress">\
            <div class="cart_progressbar__progress_bar" data-width="100"></div>\
            </div>\
            </div>\
            <div class="progressbar-count">\
            <p><span> %</span></p>\
        </div>\
        </div>\
        </div>';




    }
}



















































