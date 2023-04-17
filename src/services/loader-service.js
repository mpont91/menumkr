import { Loading } from 'quasar'

export const useLoaderService = () => {
  const show = () => {
    Loading.show()
  }

  const hide = () => {
    Loading.hide()
  }

  return { show, hide }
}
