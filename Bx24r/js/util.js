class Util {
    /*
        Данный ментод возвращает текущий отчетный период
     */
    currentTime() {
        var Data = new Date();
        var Year = parseInt(Data.getFullYear());
        var Month = (parseInt(Data.getMonth())+1);
        var Day = parseInt(Data.getDate());

        if(Day>=10&&Month){
            return Year + "-"+Month+"-10T00:01"
        }
        else if(Day<=9&&Month){
            return Year + "-"+(Month-1)+"-10T00:01"
        }
    }

    static instance() {
        return new Util();
    }
}