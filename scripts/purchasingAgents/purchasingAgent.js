export const purchasingAgent = (purchasingAgentObj) => {
  return `
      <section class="purchasingAgent">
          <h2 class="purchasingAgent__name">${purchasingAgentObj["name"].nameFirst} ${purchasingAgentObj["name"].nameLast}</h2>
          <div class="company__name">${purchasingAgentObj.company}</div>
          <div class="purchasingAgent__phone">${purchasingAgentObj.phone}</div>
          <hr>
      </section>
  `
}