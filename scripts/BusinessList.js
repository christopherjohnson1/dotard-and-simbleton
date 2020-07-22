import { useBusinesses } from "./BusinessProvider.js"
import { business } from "./Business.js"

const contentTarget = document.querySelector(".business")

export const businessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObj) => {
            contentTarget.innerHTML += business(businessObj)
        }
    );
}