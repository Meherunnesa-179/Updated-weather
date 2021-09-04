const API_key = `bca59ac04fb4e9eb687e4af6b59a484b`;
const searchData = () => {
    const cityName = document.getElementById('city-name').value ;
    document.getElementById('city-name').value = "";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`
    console.log(url);
    
    fetch(url)
    .then(res => res.json())
    .then(data => showTemperature(data))
}
// searchData();
const setInnerText = (id,text) => {
    document.getElementById(id).innerText = text;
}
const showTemperature = data => {
    // console.log(data);
    setInnerText('city',data.name);
    setInnerText('temperature',data.main.temp);
    setInnerText('condition-desc',data.weather[0].description);
    //set icon
    const url =` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('icon');
    imageIcon.setAttribute('src',url);
}
