let isDobopen=false;
let dateOfbirth;
const settingCogEl=document.getElementById('setting-Icon');
const settingContentEl=document.getElementById('setting-content');
const intialtxtEl=document.getElementById('intialtxt');
const afterdobBtntxtEl=document.getElementById('afterdobBtntxt');
const dobbtnEl=document.getElementById('dobbtn');
const dobinputEl=document.getElementById('dobinput');

const toggleDateofbirthSelector=()=>{
    if(isDobopen){
        settingContentEl.classList.add('hide');
    }
    else{
        settingContentEl.classList.remove('hide');
    }
    isDobopen=!isDobopen;
    console.log("Toggle",isDobopen);
};
const setDobHandler=()=>{
    dateOfbirth=dobinputEl.value;
    if(dateOfbirth){
        intialtxtEl.classList.add('hide');
        afterdobBtntxtEl.classList.remove('hide');
    }
    else{
        
        afterdobBtntxtEl.classList.add('hide');
        intialtxtEl.classList.remove('hide');
    }
};
setDobHandler();
settingCogEl.addEventListener("click",toggleDateofbirthSelector);
dobbtnEl.addEventListener("click",setDobHandler);