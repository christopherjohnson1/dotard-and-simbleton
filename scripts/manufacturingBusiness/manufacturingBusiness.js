export const manufacturingBusiness = (businessObj) => {
  return `
      <section class="business">
          <h2 class="company__name">${businessObj.companyName}</h2>
          <div class="company__address">${businessObj.addressFullStreet}<br>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
          <div class="company__industry">${businessObj.companyIndustry}</div>
          <hr>
      </section>
  `
}