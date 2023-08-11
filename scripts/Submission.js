import { placedOrder } from "./TransientState.js"

const handleSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        placedOrder()
    }
}



export const SaveOrder = () => {
    document.addEventListener("click", handleSubmissionClick)

    return `<div class="button"><button id='saveSubmission'>Place Order</button></div>`
}