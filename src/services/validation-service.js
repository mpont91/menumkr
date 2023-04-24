import { useI18n } from 'boot/i18n'
const { t } = useI18n().global

export const ruleRequired = (value) => {
  return !!value || value === 0 || t('validation.required')
}

export const ruleEmail = (value) => {
  return (
    (!!value && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) ||
    t('validation.email')
  )
}
