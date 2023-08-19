const content =  document.getElementById("content")
const heading =  document.getElementById("heading")

async function fn() {
    let response = await fetch("https://api.weatherapi.com/v1/current.json?key=fd064e880a3f4e2886292005231808&q=kampala",{mode:'cors'})
    let data = await response.json(); 
    logData(data)
}
function logData(data) {
    heading.textContent=`${data.location.name}, ${data.location.country}`
    makeP("Location",`${data.location.name}, ${data.location.country}`)
    makeP("Local Time",data.location.localtime)
    makeP("temp_c",data.current.temp_c)
    makeP("feelslike_c",data.current.feelslike_c)
    makeP("condition",data.current.condition.text)
    makeP("wind_kph",data.current.wind_kph)
    makeP("wind_degree",data.current.wind_degree)
    makeP("wind_dir",data.current.wind_dir)
    makeP("pressure_mb",data.current.pressure_mb) 
    makeP("precip_mm",data.current.precip_mm)
    makeP("humidity",data.current.humidity)
    makeP("cloud",data.current.cloud)
    makeP("vis_km",data.current.vis_km)
    makeP("uv",data.current.uv)
    makeP("gust_kph",data.current.gust_kph)
}
fn();

function makeP(title,text) {
    const div = document.createElement("div")

    const titlep = document.createElement("p")
    titlep.textContent=title
    div.appendChild(titlep)

    const textp = document.createElement("p")
    textp.textContent=text
    div.appendChild(textp)

    content.appendChild(div)
}

