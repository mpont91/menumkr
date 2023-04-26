import { Notify } from 'quasar'
import { useI18n } from 'boot/i18n'

const { t } = useI18n()

export const useNotifyService = () => {
  const notify = ({
    type,
    message,
    caption,
    position = 'top-left',
    progress = true,
    timeout = 5000,
  }) => {
    return Notify.create({
      type,
      message,
      caption,
      position,
      progress,
      timeout,
      actions: [
        {
          label: t('actions.dismiss'),
          color: 'white',
          handler: () => {},
        },
      ],
    })
  }
  const error = (error) => {
    const response = getErrorMessages(error)
    notify({
      type: 'negative',
      message: response.message,
      caption: response.caption,
      timeout: 10000,
    })
  }
  const success = () => {
    notify({
      type: 'positive',
      message: t('api.success'),
    })
  }

  const getErrorMessages = (error) => {
    const response = {
      message: t('api.error_message'),
      caption: t('api.error_caption'),
    }

    switch (error?.response?.status) {
      case 422:
        response.message = t('api.validation')
        response.caption = error?.response?.data?.message
        break
      case 500:
        response.caption = error?.response?.data?.message
        break
      default:
        response.caption += ' ' + error.message
    }

    return response
  }

  return { notify, success, error }
}
