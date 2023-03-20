let isDobopen=false;
let dateOfbirth;
const settingCogEl=document.getElementById('setting-Icon');
const settingContentEl=document.getElementById('setting-content');
const intialtxtEl=document.getElementById('intialtxt');
const afterdobBtntxtEl=document.getElementById('afterdobBtntxt');
const dobbtnEl=document.getElementById('dobbtn');
const dobinputEl=document.getElementById('dobinput');
const yearEl=document.getElementById('year');
const monthEl=document.getElementById('month');
const dayEl=document.getElementById('day');
const hoursEl=document.getElementById('hours');
const minuteEl=document.getElementById('minute');
const secondEl=document.getElementById('second');
// const maketwodigitnumber=(number)=>{
//     return number > 9 ? number : '0';
// };
const  toggleDateofbirthSelector=()=>{
    if(isDobopen){
        settingContentEl.classList.add('hide');
    }
    else{
        settingContentEl.classList.remove('hide');
    }
    isDobopen=!isDobopen;
    console.log("Toggle",isDobopen);
};
const updateAge=()=>{
    const currentdate=new Date();
    const datediff=(currentdate-dateOfbirth);
    const year=Math.floor(datediff/(1000*60*60*24*365));
    const month=Math.floor((datediff/(1000*60*60*24*365))%12);
    const day=Math.floor(datediff/(1000*60*60*24))%30;
    const hours=Math.floor(datediff/(1000*60*60))%24;
    const minute=Math.floor(datediff/(1000*60))%60;
    const second=Math.floor(datediff/(1000))%60;
    

    yearEl.innerHTML=year;
    monthEl.innerHTML=month;
    dayEl.innerHTML=day;
    hoursEl.innerHTML=hours;
    minuteEl.innerHTML=minute;
    secondEl.innerHTML=second;

};
const localStorageGetter=()=>{
    const year=localStorage.getItem("year");
    const month=localStorage.getItem("month");
    const date=localStorage.getItem("date");
    if(year && month && date)
    {
    dateOfbirth=new Date(year,month,date);
    }
    updateAge();

};
const contenttoggler=()=>{
    updateAge();
    if(dateOfbirth){
        intialtxtEl.classList.add('hide');
        afterdobBtntxtEl.classList.remove('hide');
    }
    else{
        
        afterdobBtntxtEl.classList.add('hide');
        intialtxtEl.classList.remove('hide');
    }
};
const setDobHandler=()=>{
    const datestring =dobinputEl.value;
    dateOfbirth=datestring ? new Date(datestring):null;
    const year=localStorage.getItem("year");
    const month=localStorage.getItem("month");
    const date=localStorage.getItem("date");
    if(year && month && date)
    {
        dateOfbirth=new Date(year,month,date);
    }

    if(dateOfbirth){
        localStorage.setItem("year",dateOfbirth.getFullYear());
        localStorage.setItem("month",dateOfbirth.getMonth());
        localStorage.setItem("date",dateOfbirth.getDate());
        
    }  
    contenttoggler();
    setInterval(()=>updateAge(),1000);
    };

// const updateAge=()=>{
//     const currentdate=new Date();
//     const datediff=currentdate-dateOfbirth;
//     const year=Math.floor(datediff/(1000*60*60*24*365));
//     const month=Math.floor(datediff/(1000*60*60*24))%30;
//     const hours=Math.floor(datediff/(1000*60*60))%24;
//     const minute=Math.floor(datediff/(1000*60))%60;
//     const second=Math.floor(datediff/(1000))%60;
    

//     yearEl.innerHTML=year;
// };
localStorageGetter();
contenttoggler();
settingCogEl.addEventListener("click",toggleDateofbirthSelector);
dobbtnEl.addEventListener("click",setDobHandler);