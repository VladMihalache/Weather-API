const input1= document.getElementById("theInput1");
const button= document.querySelector(".button");
const timez= document.querySelector(".timezone");
const tempC= document.querySelector(".tempC");
const tempF= document.querySelector(".tempF");
const toggleButton= document.querySelector(".fahrenheitToggle");
const humid= document.querySelector(".humidity");
const wdescrip= document.querySelector(".w-description");
const wicon= document.querySelector(".w-icon");
const unit= document.querySelector(".unit");


let apiKey="a8da44b6c3bc48d19c1a1b2e868a503b"

toggleButton.addEventListener("change",() => {
    tempF.classList.toggle("displayNone")
    tempC.classList.toggle("displayNone")
})


button.addEventListener("click",() =>{
    let city=input1.value;
    const urlToFetch= `https://api.weatherbit.io/v2.0/current?city=${city}&key=a8da44b6c3bc48d19c1a1b2e868a503b`
    fetch(urlToFetch)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const {app_temp,rh,weather,timezone} = data.data[0]
            timez.innerHTML=timezone;
            tempC.innerHTML= app_temp + " °C";
            app_temp_F=app_temp * 1.8 + 32
            tempF.innerHTML=app_temp_F + " F";
            humid.innerHTML=rh + "%";
            wdescrip.innerHTML=weather.description;
        })
})
