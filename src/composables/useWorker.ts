export const useWorker = (worker: Worker) => {
  const isSupported =
    (typeof Worker !== 'undefined' && typeof OffscreenCanvas !== 'undefined') || typeof importScripts !== 'undefined'

  const post = worker.postMessage.bind(worker)
  const on = worker.addEventListener.bind(worker)
  const terminate = worker.terminate.bind(worker)

  return { isSupported, on, post, terminate }
}
