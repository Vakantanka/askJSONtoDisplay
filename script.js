const renderPage = (arr) => {
    let returnHTML = "";

    let iconArr = [
        { icon: 113, day: "day-sunny", night: "night-clear" },
        { icon: 116, day: "day-cloudy", night: "night-cloudy" },    
        { icon: 119, day: "cloudy", night: "night-alt-cloudy" },        
        { icon: 122, day: "cloud", night: "cloud" },        
        { icon: 143, day: "fog", night: "fog" },        
        { icon: 176, day: "day-rain", night: "night-rain" },        
        { icon: 179, day: "day-snow", night: "night-alt-snow" },        
        { icon: 182, day: "day-rain-mix", night: "night-rain-mix" },        
        { icon: 185, day: "sleet", night: "sleet" },        
        { icon: 200, day: "day-lightning", night: "night-lightning" },        
        { icon: 227, day: "snow-wind", night: "snow-wind" },        
        { icon: 230, day: "snow-wind", night: "snow-wind" },        
        { icon: 248, day: "fog", night: "fog" },        
        { icon: 260, day: "fog", night: "fog" },        
        { icon: 263, day: "raindrops", night: "raindrops" },        
        { icon: 266, day: "raindrops", night: "raindrops" },        
        { icon: 281, day: "rain-mix", night: "rain-mix" },        
        { icon: 284, day: "rain-mix", night: "rain-mix" },        
        { icon: 293, day: "day-sprinkle", night: "night-sprinkle" },        
        { icon: 296, day: "sprinkle", night: "sprinkle" },        
        { icon: 299, day: "day-hail", night: "night-hail" },        
        { icon: 302, day: "sprinkle", night: "sprinkle" },        
        { icon: 305, day: "day-rain", night: "night-rain" },        
        { icon: 308, day: "rain", night: "rain" },        
        { icon: 311, day: "sleet", night: "sleet" },        
        { icon: 314, day: "rain-mix", night: "rain-mix" },        
        { icon: 317, day: "sleet", night: "sleet" },        
        { icon: 320, day: "sleet", night: "sleet" },        
        { icon: 323, day: "day-snow", night: "night-snow" },        
        { icon: 326, day: "snow", night: "snow" },        
        { icon: 329, day: "day-snow", night: "night-snow" },        
        { icon: 332, day: "snow", night: "snow" },        
        { icon: 335, day: "day-snow", night: "night-snow" },        
        { icon: 338, day: "snow", night: "snow" },        
        { icon: 350, day: "rain-mix", night: "rain-mix" },        
        { icon: 353, day: "day-sprinkle", night: "night-sprinkle" },        
        { icon: 356, day: "day-rain", night: "night-rain" },        
        { icon: 359, day: "day-showers", night: "night-showers" },        
        { icon: 362, day: "day-sleet", night: "night-sleet" },        
        { icon: 365, day: "day-sleet", night: "night-sleet" },        
        { icon: 368, day: "day-snow", night: "night-snow" },        
        { icon: 371, day: "day-snow", night: "night-snow" },        
        { icon: 374, day: "day-hail", night: "night-hail" },        
        { icon: 377, day: "day-sleet", night: "night-sleet" },        
        { icon: 386, day: "day-sleet-strom", night: "night-sleet-storm" },        
        { icon: 389, day: "storm-showers", night: "storm-showers" },        
        { icon: 392, day: "day-snow-thunderstorm", night: "night-snow-thunderstorm" },        
        { icon: 395, day: "day-snow-thunderstorm", night: "night-snow-thunderstorm" }
    ];

    let iconFile = (icon) => { iconArr.filter() };

    for (const item of arr) {
        let magyarul = "";
        let iconDay = `./day/${item.icon}.png`;
        let iconNight = `./night/${item.icon}.png`;
        let iconFiles = iconArr.filter(icon => icon.icon === item.icon);
        for (const lang of item.languages) {
            if (lang.lang_name === "Hungarian") {
                magyarul += `nappal: ${lang.day_text} , éjszaka: ${lang.night_text} `;
            }
        }
        console.log(iconFiles);
        // returnHTML += `<li><img src="${iconDay}"> <img src="${iconNight}"> <strong>${item.icon}</strong> ${item.day}: (${magyarul})</li>`;
        returnHTML += `<p>{ icon: ${item.icon}, day: "day-", night: "night-" },</p>`;
    }

    return returnHTML;
}

async function loadEvent() {
    const res = await fetch("https://www.weatherapi.com/docs/conditions.json"); // resource URL
    const arr = await res.json();

    document.getElementById("root").insertAdjacentHTML("beforeend",renderPage(arr));
    // document.getElementById("root").insertAdjacentHTML("beforeend",`<h1>Load completed</h1>`);
    // console.log("Load completed.");
}

window.addEventListener("load", loadEvent);