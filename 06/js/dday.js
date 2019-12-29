var now = new Date();//오늘 날짜
var firstDay=new Date("2019-2-28");//현애랑 만난날


var toNow=now.getTime(); //지금 날짜를 절대값으로
var toFirst=firstDay.getTime();//만난날을 절대값으로
var passedTime=toNow-toFirst;//이제까지 만난날 계산

var passedDay = Math.round(passedTime/(1000*60*60*24));//만난 절대값을 하루 단위로 환산해서 반올림

document.querySelector("#accent").innerText=passedDay+"일";


function calcDate(days){
    var future = toFirst+days*(1000*60*60*24)//만난지 100일 계산값
var someday = new Date(future);

var year=someday.getFullYear();
var month=someday.getMonth()+1;
var date=someday.getDate();


document.querySelector("#date"+days).innerText=year+"년"+month+"월"+date+"일";
}


calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

