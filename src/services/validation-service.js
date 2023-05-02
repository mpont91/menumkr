import { useI18n } from 'boot/i18n'

export const ruleRequired = (value) => {
  return !!value || useI18n().global.t('validation.required')
}

export const ruleEmail = (value) => {
  return (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    useI18n().global.t('validation.email')
  )
}

export const rulePasswordConfirmation = (value, password) => {
  return value === password || useI18n().global.t('validation.password_confirm')
}

export const rulePasswordLength = (value) => {
  const PASSWORD_LENGTH = 6
  return (
    value.length > PASSWORD_LENGTH ||
    useI18n().global.t('validation.password_length', PASSWORD_LENGTH)
  )
}
