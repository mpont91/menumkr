import { Notify } from 'quasar'

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
    })
  }
  const error = (error) => {
    notify({
      type: 'negative',
      message: 'Error',
      caption: error?.response?.data?.message,
      timeout: 10000,
    })
  }
  const success = () => {
    notify({
      type: 'positive',
      message: 'success',
    })
  }

  return { notify, success, error }
}
