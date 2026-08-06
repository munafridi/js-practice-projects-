let apiKey = "8fc0272968025e15a783c69ba51e30ee";
let city = "peshawar"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => {

   
        document.getElementById("cityName").innerHTML = data.name
        document.getElementById("temperature").innerHTML = data.main.temp + "°C";
        document.getElementById("description").innerHTML = data.weather[0].description
})
