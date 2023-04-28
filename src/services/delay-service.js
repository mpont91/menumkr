export const useDelayService = () => {
  const delay = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))
  return { delay }
}
