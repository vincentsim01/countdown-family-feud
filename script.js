var timeShow=document.getElementById("timeShow");
var theChangingText=document.getElementById("theChangingText");
var i=0;

var text=["This","Will","Happen","Soon","Let's","Savour","The","Moment","And","Believe","In","The","Future"];

console.log(text[0]);

function showTime(){
    var date=new Date();
    var ffdate=new Date(2023,8,22,18,30,0);

    var deltat=(ffdate-date)/1000;


    var day=deltat/86400;
    var dayz=Math.floor(deltat/86400);
    var hour=(day-dayz)*24;
    var hourz=Math.floor(hour);
    var min=(hour-hourz)*60;
    var minz=Math.floor(min);
    var sec=(min-minz)*60;
    var secz=Math.floor(sec);
    // var sec=Math.floor(min%60);

    // var hour=Math.floor(deltat%86400000/3600000);
    // var hour=Math.floor(deltat/3600000);
    // var min=Math.floor(deltat/60000);
    // var sec=Math.floor(deltat/1000);

    
    // console.log(deltat);
    // console.log(day+"this is day");
    // console.log(dayz+"this is dayz");
    // console.log(hour+"this is hour");
    // console.log(hourz+"this is hourz");
    // console.log(min+"this is min");
    // console.log(minz+"this is minz");
    // console.log(sec+"this is sec");
    // console.log(secz+"this is secz");
    // console.log(date);
    // console.log(ffdate);




    // var h=date.getHours();
    // var m=date.getMinutes();
    // var s=date.getSeconds();
    // if(h<10){
    //     h="0"+h;
    // }
    // if(m<10){
    //     m="0"+m;
    // }
    // if(s<10){
    //     s="0"+s;
    // }
    // timeShow[0].innerHTML=h+":"+m+":"+s;
    // setTimeout(showTime,1000);

    timeShow.innerHTML=`
                        <p id="theCountDown">${dayz} day(s) ${hourz} hour(s) ${minz} minute(s) ${secz} second(s)</p>`;
};

function changeText(){
    i=i+1;
    theChangingText.innerHTML=text[i];


    if(i==text.length){
        i=0
        theChangingText.innerHTML=text[i];
    };

}


function letItRun(){
    setInterval(showTime,1000);
    setInterval(changeText,500);
}