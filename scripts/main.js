import { InteriorOptions } from "./Interior.js"
import { PackageOption } from "./Packages.js"
import { PaintOptions } from "./Paints.js"
import { modelOptions } from "./models.js"
import { SaveOrder } from "./Submission.js"
import { WheelOptions } from "./Wheels.js"
import { CurrentOrders } from "./orders.js"




const container = document.querySelector("#container")

const render = async () => {

    const interiorHtml = await InteriorOptions()
    const packageHtml = await PackageOption()
    const paintHtml = await PaintOptions()
    const wheelHtml = await WheelOptions()
    const modelHTML = await modelOptions()
    const orderButton = await SaveOrder()
    const orders = await CurrentOrders()

    container.innerHTML = ` 
    <article class="choices">
    <section class="interiors">  
    <h1>Rims</h1>
    ${wheelHtml}
    </section>
    <section class="interiors">
    <h1>Interiors</h1>
    ${interiorHtml}
    </section>
    <section class="interiors">
    <h1>Paints</h1>
    ${paintHtml}
    </section>
    <section class="interiors">
    <h1>Packages</h1>
    ${packageHtml}
    </section>
    <section class="models">
    <h1>Models</h1>
    ${modelHTML}
    </section>
    </article>
    

    <h1>Place Your Order Here!</h1>
    <article class="button">
    ${orderButton}
    </article>
    <h1>Current Orders</h1>
    <article class="order">
    ${orders}
    </article>



`
}

document.addEventListener("TheClickening", render)

render()