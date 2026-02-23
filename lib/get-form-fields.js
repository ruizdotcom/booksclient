'use strict'

const getFormFields = (form) => {
  const target = {}
  const elements = form.elements || []

  for (let i = 0; i < elements.length; i++) {
    const e = elements[i]
    if (!e.hasAttribute('name')) continue

    let type = 'TEXT'
    if (e.nodeName === 'SELECT') {
      type = e.multiple ? 'MULTIPLE' : type
    } else if (e.nodeName === 'INPUT') {
      type = e.type.toUpperCase()
    }

    const name = e.name

    if (type === 'MULTIPLE') {
      for (let j = 0; j < e.length; j++) {
        if (e[j].selected) {
          window.addNestedValue(target, name, e[j].value)
        }
      }
    } else if ((type !== 'RADIO' && type !== 'CHECKBOX') || e.checked) {
      window.addNestedValue(target, name, e.value)
    }
  }

  return target
}

window.getformfields = getFormFields