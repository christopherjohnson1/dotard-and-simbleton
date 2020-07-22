import { businessList } from './businesses/BusinessList.js'
import { newyorkBusinessList } from './newyorkBusiness/newyorkBusinessList.js'
import { manufacturingBusinessList } from './manufacturingBusiness/manufacturingBusinessList.js'
import { purchasingAgentList } from './purchasingAgents/purchasingAgentList.js'

const pageBuilder = () => {
businessList()
newyorkBusinessList()
manufacturingBusinessList()
purchasingAgentList()
}

pageBuilder()