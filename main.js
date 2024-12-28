let todayData = document.getElementById("today")
let secoundDayData = document.getElementById("secound-day")
let thirdDayData = document.getElementById("third-day")
let searchData = document.getElementById("search")



async function getWeatherData(cityName) {
    let weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9f36c343ef3045d9bab210409242612&q=${cityName}&days=3`)
    let weatherData = await weatherResponse.json()
    return weatherData
}



function  displayToday(data) {

    let todaydDate = new Date()

    let cartona = `
    
                        <div class="up d-flex justify-content-between p-2">
                        <h2 class="h6 ">${todaydDate.toLocaleDateString("en-US" , {weekday:"long"})}</h2>
                        <h2 class="h6 ">${todaydDate.getDate()} ${todaydDate.toLocaleDateString("en-US" , {month:"long"})}</h2>
                    </div>
                    <div class="dn p-3">
                        <h3 class="h5 pt-3">${data.location.name}</h3>
                        <h4 class="h1 fw-bold text-white pt-3">${data.current.temp_c} ْC</h4>
                        <img src="${data.current.condition.icon}" alt="">
                        <p class="text-info ps-2">${data.current.condition.text}</p>
                        <div>
                            <span class="fw-light"><img class="px-2" src="https://routeweather.netlify.app/images/icon-umberella.png" alt="">${data.current.humidity}%</span>
                            <span class="fw-light"><img class="px-2" src="https://routeweather.netlify.app/images/icon-wind.png" alt="">${data.current.wind_kph}km/h</span>
                            <span class="fw-light"><img class="px-2" src="https://routeweather.netlify.app/images/icon-compass.png" alt="">${data.current.wind_dir}</span>
                        </div>
                    </div>
    
    ` 

    todayData.innerHTML = cartona 
}

function displaySecoundDay(data) {

    let secoundDate = new Date(data.forecast.forecastday[1].date)


    let cartona = `
    
                    <div class="upp p-2">
                        <h2 class="h6 ">${secoundDate.toLocaleDateString("en-US" , {weekday:"long"})}</h2>
                    </div>
                    <div class="dnn">
                        <img class="pt-5 pb-4" src="${data.forecast.forecastday[1].day.condition.icon}" alt="" width="53">
                        <h3 class="text-white fw-bolder">${data.forecast.forecastday[1].day.maxtemp_c} ْC</h3>
                        <p>${data.forecast.forecastday[1].day.mintemp_c} ْ</p>
                        <p class="text-info pb-5 mb-5">${data.forecast.forecastday[1].day.condition.text}</p>
                    </div>
    
    ` 

    secoundDayData.innerHTML = cartona 
}

function displayThirdDay(data) {

    let thirdDate = new Date(data.forecast.forecastday[2].date)

    let cartona = `
    
                    <div class="uppp p-2">
                        <h2 class="h6 ">${thirdDate.toLocaleDateString("en-US" , {weekday:"long"})}</h2>
                    </div>
                    <div class="dnnn">
                        <img class="pt-5 pb-4" src="${data.forecast.forecastday[2].day.condition.icon}" alt="" width="53">
                        <h3 class="text-white fw-bolder">${data.forecast.forecastday[2].day.maxtemp_c} ْC</h3>
                        <p>${data.forecast.forecastday[2].day.mintemp_c} ْ</p>
                        <p class="text-info pb-5 mb-5">${data.forecast.forecastday[2].day.condition.text}</p>
                    </div>
    
    ` 

    thirdDayData.innerHTML = cartona 
}


async function startMode(city = "cairo"){
    let weatherData = await getWeatherData(city)
    displayToday(weatherData)
    displaySecoundDay(weatherData)
    displayThirdDay(weatherData)

}

searchData.addEventListener("input" , function(){
    startMode(searchData.value)
})

startMode()

