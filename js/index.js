const input= document.getElementById("theInput");
const button= document.querySelector(".button");
const invisibleMessage = document.querySelector(".invisibleMessage")
const timez= document.querySelector(".timezone");
const tempC= document.querySelector(".tempC");
const tempF= document.querySelector(".tempF");
const toggleButton= document.querySelector(".fahrenheitToggle");
const humid= document.querySelector(".humidity");
const wdescrip= document.querySelector(".w-description");
const wicon= document.querySelector(".w-icon");
const unit= document.querySelector(".unit");



button.addEventListener("click",() =>{
    let city = input.value;
    const urlToFetch= `https://api.weatherbit.io/v2.0/current?city=${city}&key=7bd157fd1c9842b5ab673580ec437d05`
    if(city){
        invisibleMessage.style.display = "none";
        fetch(urlToFetch)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                const {app_temp,rh,weather,timezone} = data.data[0]
                timez.innerHTML=timezone;
                tempC.innerHTML= app_temp + " °C";
                app_temp_F=app_temp * 1.8 + 32
                tempF.innerHTML=app_temp_F + " F";
                humid.innerHTML=rh + "%";
                wdescrip.innerHTML=weather.description;
            })
    } else {
        invisibleMessage.style.display = "flex";
    }
})

toggleButton.addEventListener("change",() => {
    tempF.classList.toggle("displayNone")
    tempC.classList.toggle("displayNone")
})