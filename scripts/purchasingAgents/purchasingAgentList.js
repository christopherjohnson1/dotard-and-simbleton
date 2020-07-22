import { purchasingAgentCollection } from './purchasingAgentProvider.js'
import { purchasingAgent } from './purchasingAgent.js'

const contentTarget = document.querySelector(".agents")

export const purchasingAgentList = () => {
  const agentsArray = purchasingAgentCollection
  contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"

  agentsArray.forEach(
    (purchasingAgentObj) => {
      contentTarget.innerHTML += purchasingAgent(purchasingAgentObj)
    }
  );
}