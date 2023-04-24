export const ruleRequired = (value) => {
  return !!value || value === 0 || 'validation.required'
}

export const ruleEmail = (value) => {
  return (
    (!!value && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) ||
    'validation.email'
  )
}
