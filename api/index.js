import { ssrListen } from 'quasar/wrappers'
export const listen = ssrListen(async ({ app, port, ssrHandler, isReady }) => {
  if (process.env.DEV) {
    await isReady()
    return await app.listen(port, () => {
      // we're ready to serve clients
    })
  } else {
    // in production
    return { handler: ssrHandler }
  }
})
