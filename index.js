const api = {
    key:'32489cc0a357b94897d9b839b619d23b',
    baseurl:'https://api.openweathermap.org/data/2.5/',
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener("keypress",setQuery)
  function setQuery (e){
      if(e.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value);}}
    function getResults(query){
       fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((weather) => {
        return weather.json()})
       .then(displayResults);}
         function displayResults(weather){
            console.log(weather);
            let city = document.querySelector(".location,.count");
            city.innerHTML = `${weather.name},${weather.sys.country}`; 
                let now = new Date();
                let date = document.querySelector(".date");
                date.innerHTML = dateBuilded(now);     
                   let temp = document.querySelector(".temps");
                       temp.innerHTML = `${Math.round( weather.main.temp)}<span>°C</span>`; 
                           let weatherEL = document.querySelector(".hi-low");
                               weatherEL.innerHTML =weather.weather[0].main; 
                               let hiLow =document.querySelector(".grad");
                                   hiLow.innerHTML=`${weather.main.temp_min} °C / ${weather.main.temp_max} `}

function dateBuilded(a){
    let months = [
        "January",
        "February",
        "March",
        "april",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let days = [
        "Sunday",
        "Monday",
        "tuesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

        let day = days[a.getDay()];
        let date = a.getDate();
        let month = months[a.getMonth()];
        let year = a.getFullYear();
     return `${day} ${date} ${month} ${year}`;
}