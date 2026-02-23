'use strict'

const addNestedValue = function (pojo, name, value) {
  const recurse = function recurse (pojo, keys, value) {
    const key = keys.shift()
    const next = keys[0]
    if (next === '') { // key is an array
      pojo[key] = pojo[key] || []
      pojo[key].push(value)
    } else if (next) { // key is a parent key
      pojo[key] = pojo[key] || {}
      recurse(pojo[key], keys, value)
    } else { // key is the key for value
      pojo[key] = value
    }

    return pojo
  }

  const keys = name.split('[').map((k) => k.replace(/]$/, ''))
  return recurse(pojo, keys, value)
}

'use strict'

const addNestedValue = require('./add-nested-value')

const getFormFields = (form) => {
  const target = {}

  const elements = form.elements || []
  for (let i = 0; i < elements.length; i++) {
    const e = elements[i]
    if (!e.hasAttribute('name')) {
      continue
    }

    let type = 'TEXT'
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type
        break
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase()
        break
    }

    const name = e.getAttribute('name')

    if (type === 'MULTIPLE') {
      for (let i = 0; i < e.length; i++) {
        if (e[i].selected) {
          addNestedValue(target, name, e[i].value)
        }
      }
    } else if ((type !== 'RADIO' && type !== 'CHECKBOX') || e.checked) {
      addNestedValue(target, name, e.value)
    }
  }

  return target
}

window.getformfields = getFormFields

