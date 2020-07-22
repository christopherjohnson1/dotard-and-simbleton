import { businesses } from '../businesses/BusinessProvider.js'

export const manufacturingBusinessCollection = businesses.filter(business => business.companyIndustry === "Manufacturing")