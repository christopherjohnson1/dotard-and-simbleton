import { businesses } from '../businesses/BusinessProvider.js'

export const newyorkBusinessCollection = businesses.filter(business => business.addressStateCode === "NY")