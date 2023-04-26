import { useI18n } from 'boot/i18n'
const { t } = useI18n().global

export const ruleRequired = (value) => {
  return !!value || t('validation.required')
}

export const ruleEmail = (value) => {
  return (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    t('validation.email')
  )
}

export const rulePasswordConfirm = (value, password) => {
  return value === password || t('validation.password_confirm')
}

export const rulePasswordLength = (value) => {
  const PASSWORD_LENGTH = 6
  return (
    value.length > PASSWORD_LENGTH ||
    t('validation.password_length', PASSWORD_LENGTH)
  )
}
