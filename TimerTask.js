
let select=document.getElementsByTagName("select");
let maindiv=document.getElementById("maindiv");


select[0].addEventListener('change',(event)=>{
    res=setInterval(()=>{
        let date1=new Date();
        maindiv.children[0].innerHTML=`YEAR <br><br>${date1.getFullYear()}`;
        let mon=date1.getMonth();
        switch(mon){
            case 0:
                maindiv.children[1].innerHTML=`MONTH <br><br>JANUARY`;
                break;
            case 1:
                maindiv.children[1].innerHTML=`MONTH <br><br> FEBRUARY`;
                break;
            case 2:
                maindiv.children[1].innerHTML=`MONTH <br><br> MARCH`;
                break;
            case 3:
                maindiv.children[1].innerHTML=`MONTH <br><br> APRIL`;
                break;
            case 4:
                maindiv.children[1].innerHTML=`MONTH <br><br> MAY`;
                break;
            case 5:
                maindiv.children[1].innerHTML=`MONTH <br><br> JUNE`;
                break;
            case 6:
                maindiv.children[1].innerHTML=`MONTH <br><br> JULY`;
                break;
            case 7:
                maindiv.children[1].innerHTML=`MONTH <br><br> AUGUST`;
                break;
            case 8:
                maindiv.children[1].innerHTML=`MONTH <br><br> SEPTEMBER`;
                break;
            case 9:
                maindiv.children[1].innerHTML=`MONTH <br><br> OCTOBER`;
                break;
            case 10:
                maindiv.children[1].innerHTML=`MONTH <br><br> NOVEMBER`;
                break;
            case 11:
                maindiv.children[1].innerHTML=`MONTH <br><br> DECEMBER`;
                break;
            default:
                break;             
        } 
        let date=date1.getDate();
        maindiv.children[2].innerHTML=`DATE <br><br> ${date}`;
        let day=date1.getDay();
        switch(day){
            case 0:
                maindiv.children[3].innerHTML=`DAY <br><br> SUNDAY`;
                break;
            case 1:
                maindiv.children[3].innerHTML=`DAY <br><br> MONDAY`;
                break; 
            case 2:
                maindiv.children[3].innerHTML=`DAY <br><br> TUESDAY`;
                break;
            case 3:
                maindiv.children[3].innerHTML=`DAY <br><br> WEDNESDAY`;
                break;
            case 4:
                maindiv.children[3].innerHTML=`DAY <br><br> THURSDAY`;
                break;
            case 5:
                maindiv.children[3].innerHTML=`DAY <br><br> FRIDAY`;
                break;
            case 6:
                maindiv.children[3].innerHTML=`DAY <br><br> SATURDAY`;
                break;
            default:
                break;
        }    
        let hour=date1.getHours();
        if(event.target.value=='24-hours format')
        {
        maindiv.children[4].innerHTML=`HOURS<br><br>${hour}`  ;
        maindiv.children[7].innerHTML=`AM/PM`;
        }
        else{
        maindiv.children[4].innerHTML=`HOURS<br><br>${hour-12}`  ;
        if(hour>=12){
            maindiv.children[7].innerHTML=`AM/PM<br><br> PM`;
        }
        else {
            maindiv.children[7].innerHTML=`AM/PM<br><br> AM`;
        }
      

        }
        let min=date1.getMinutes();
        maindiv.children[5].innerHTML=`MINUTES<br><br>${min}`  ;
        let sec=date1.getSeconds();
        maindiv.children[6].innerHTML=`SECONDS <br><br>${sec}`  ;
    },1000)
})