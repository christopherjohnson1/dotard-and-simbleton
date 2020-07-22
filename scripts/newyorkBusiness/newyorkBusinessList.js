import { newyorkBusinessCollection } from './newyorkBusinessProvider.js'
import { newyorkBusiness } from './newyorkBusiness.js'

const contentTarget = document.querySelector(".businessList--newYork")

export const newyorkBusinessList = () => {
  const newyorkBusinessArray = newyorkBusinessCollection
  contentTarget.innerHTML = "<h1>New York Businesses</h1>"

  newyorkBusinessArray.forEach(
    (businessObj) => {
      contentTarget.innerHTML += newyorkBusiness(businessObj)
    }
  );
}