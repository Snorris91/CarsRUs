
import { setPaintOption } from "./TransientState.js"


export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    document.addEventListener("change", handlePaintChoice)

    let paintHtml = `<select id="paints"><option value="0">Pick Your Paint</option>`
    const paintArr = paints.map((paint) => {
        return `
        <option value="${paint.id}">${paint.color}</option>
        `
    })
    paintHtml += paintArr.join("")
    paintHtml += `</select>`
    return paintHtml
}


const handlePaintChoice = (event) => {
    if( event.target.id === "paints"){
        setPaintOption(parseInt(event.target.value))
    }

}