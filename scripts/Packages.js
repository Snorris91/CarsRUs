
import { setPackageOption } from "./TransientState.js"


export const PackageOption = async () => {
    const response = await fetch("http://localhost:8088/packages")
    const packs = await response.json()

        document.addEventListener("change", handlePackageChoice)

    let packageHtml = `<select id="package"><option value="0">Pick Your Package</option>`

    const packageArr = packs.map((pack) => {
        return `
        <option value="${pack.id}">${pack.pack}</option>
        `
    })
    packageHtml += packageArr.join("")
    packageHtml += `</select>`
    return packageHtml
}


const handlePackageChoice = (event) => {
    if (event.target.id === "package"){
        setPackageOption(parseInt(event.target.value))
    }
}