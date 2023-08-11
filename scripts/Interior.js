
import { setInteriorOption } from "./TransientState.js"


export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorChoice)

    let interiorHtml = `<select id="interior"><option value="0">Pick Your Interior</option>`

    const interiorArr = interiors.map((interior) => {
        interiorHtml += `
        <option value="${interior.id}">${interior.type}</option>
        `
    })
    interiorHtml += interiorArr.join("")
    interiorHtml += `</select>`
    return interiorHtml
}


const handleInteriorChoice = (event) => {
    if (event.target.id === "interior"){
        setInteriorOption(parseInt(event.target.value))
    }
}