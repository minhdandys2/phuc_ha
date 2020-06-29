function setTime() {
    var today = new Date();
    function getday(){
        switch (today.getDay()) {
            case 0:
                return 'Chủ nhật'
            case 1:
                return 'Thứ 2'
            case 2:
                return 'Thứ 3'
            case 3:
                return 'Thứ 4'
            case 4:
                return 'Thứ 5'
            case 5:
                return 'Thứ 6'
            case 6:
                return 'Thứ 7'
        }
    }
    var date = getday() + ", " +today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
    setTimeout('setTime()',1000);
}
setTime();
