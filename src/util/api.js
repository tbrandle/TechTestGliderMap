import eventEmitter from './eventEmitter'


class Api {
  constructor(config) {
    this.baseUrl = config.baseUrl
    this.headers = config.headers
    this.fetch = window.fetch.bind(window)
  }

  success (message) {
    eventEmitter.emit('notify', { message, type: 'success' })
  }

  error (message) {
    eventEmitter.emit('notify', { message, type: 'error' })
  }

  async post(model, params) {
    console.log(`[Calling Post Route]`, params)
    try {
      const response = await this.fetch(`${this.baseUrl}/${model}`,{
        method: 'POST',
        body: JSON.stringify(params),
        headers: this.headers,
      })
      this.success('Successful post request!')
      return response.json()
    } catch (e) {
      this.error('Post request failed.')
    }
  }
}

export default Api