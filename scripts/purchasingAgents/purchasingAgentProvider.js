import { businesses } from '../businesses/BusinessProvider.js'

export const purchasingAgentCollection = businesses.map(business => ({
  name: business.purchasingAgent,
  company: business.companyName,
  phone: business.phoneWork
}))