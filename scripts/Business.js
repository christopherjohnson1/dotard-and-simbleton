export const business = (businessObj) => {
  return `
      <section class="business">
          <h2 class="company__name">${businessObj.companyName}</h2>
          <div class="company__address">${businessObj.addressFullStreet}${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>
          <hr>
      </section>
  `
}