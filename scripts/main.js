import { businessList } from './businesses/BusinessList.js'
import { newyorkBusinessList } from './newyorkBusiness/newyorkBusinessList.js'
import { manufacturingBusinessList } from './manufacturingBusiness/manufacturingBusinessList.js'

const pageBuilder = () => {
businessList()
newyorkBusinessList()
manufacturingBusinessList()
}

pageBuilder()