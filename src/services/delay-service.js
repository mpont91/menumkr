export const useDelayService = () => {
  const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms))
  return { delay }
}
