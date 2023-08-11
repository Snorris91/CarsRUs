
import { setRimOption } from "./TransientState.js"


export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelChoice)

    let wheelHtml = `<select id="wheels"><option value="0">What Them Rims Be</option>`

    const wheelsArr = wheels.map((wheel) => {
        return `
        <option value="${wheel.id}">${wheel.wheel}</option>
        `
    })
    wheelHtml += wheelsArr.join("")
    wheelHtml += `</select>`
    return wheelHtml
}


const handleWheelChoice = (event) => {
    if (event.target.id === "wheels"){
        setRimOption(parseInt(event.target.value))
    }
}