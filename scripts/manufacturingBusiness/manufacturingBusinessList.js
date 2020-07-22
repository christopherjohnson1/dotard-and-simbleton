import { manufacturingBusinessCollection } from './manufacturingBusinessProvider.js'
import { manufacturingBusiness } from './manufacturingBusiness.js'

const contentTarget = document.querySelector(".businessList--manufacturing")

export const manufacturingBusinessList = () => {
  const manufacturingBusinessArray = manufacturingBusinessCollection
  contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"

  manufacturingBusinessArray.forEach(
    (businessObj) => {
      contentTarget.innerHTML += manufacturingBusiness(businessObj)
    }
  );
}