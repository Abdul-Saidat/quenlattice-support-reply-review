// Sample data goes here

const knowledgeRecords = [
  {
    'id': 1,
    'title': 'How to change billing date',
    'sourceLabel': 'Company how-to handbook',
    'policyText': 'Billing date can be changed in Settings under Billing. It can be changed up to twice per billing cycle.'

  }
]


const displayContainer = document.getElementById('knowledge-list')

knowledgeRecords.forEach((rec) => {
  const heading = document.createElement('h3')
  const sourceLabel = document.createElement('p')
  const policyText = document.createElement('p')
  const wrapper = document.createElement('article')
  wrapper.className = 'wrapper'
  sourceLabel.className = 'sourceLabel'

  heading.textContent = rec.title
  sourceLabel.textContent = 'Source: ' + rec.sourceLabel
  policyText.textContent = rec.policyText

  wrapper.append(heading)
  wrapper.append(sourceLabel)
  wrapper.append(policyText)

  displayContainer.append(wrapper)
})
