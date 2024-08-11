const searchBox=document.querySelector('#location');
const searchBtn=document.querySelector('#searchBtn');
const weather_img=document.getElementById('weather-img');
const temp=document.querySelector('.temp');
const nature=document.querySelector('.nature');
const perc=document.querySelector('.perc');
const speed=document.querySelector('.speed');

async function fetchWeather(city){
    const apikey="01c855835bac8bc316b944aadad7ab77";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const weather_data=await fetch(`${url}`).then(response=>
        response.json());
    
    // console.log(weather_data);
    temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}<sup>o</sup>C`;
    nature.innerHTML=`${weather_data.weather[0].description}`;
    speed.innerHTML=`${weather_data.wind.speed}Km/H`;
    perc.innerHTML=`${weather_data.main.humidity}%`;

    switch(weather_data.weather[0].description){
        case 'overcast clouds':
            weather_img.src="./assets/cloud.png"; 
            break;
        case 'clear':
            weather_img.src="./assets/clear.png";
            break;
        case 'rain':
            weather_img.src="./assets/rain.png";
            break;
        case 'snow':
            weather_img.src="./assets/snow.png";
            break;
        case 'haze':
            weather_img.src="./assets/mist.png";
            break;
    }


}
searchBtn.addEventListener('click',()=>{
    fetchWeather(searchBox.value);
})