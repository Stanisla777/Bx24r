class GeneralInfo {
    constructor(){

    }
    showGeneralInfo(){
        return' <div  class="col-flex general_information_item information_employees">\
                        <div class="general_information_item__body">\
                            <div  class="general_information_item__icon">\
                                <i class="fa fa-rub" aria-hidden="true"></i>\
                            </div>\
                            <div class="general_information_item__wrap_info">\
                                <p class="general_information_item__title">Database</p>\
                                <p class="general_information_item__count">Total: <span>785244</span></p>\
                            </div>\
                        </div>'

    }

    static  instance(){
        return new GeneralInfo()
    }
}