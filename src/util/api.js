import notifier from './notifier'

const defaultHeaders = {
  'Content-type': 'application/json; charset=UTF-8'
}

class Api {
  constructor (config) {
    this.baseUrl = config.baseUrl
    this.headers = Object.assign(defaultHeaders, config.headers)
    this.fetch = window.fetch.bind(window)
  }

  success (message, resp) {
    console.log('inside success', resp)
    notifier.emit('notify', { message, type: 'success' })
  }

  error (message) {
    notifier.emit('notify', { message, type: 'error' })
  }

  async post (model, params) {
    console.log('[Calling Post Route]', params)
    try {
      const response = await this.fetch(`${this.baseUrl}/${model}`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: this.headers
      })

      if (response.ok) {
        this.success('Successful post request!', response)
      } else {
        this.error('Post request failed.')
      }
      return response.json()
    } catch (e) {
      this.error('Post request failed.')
    }
  }

  async get (model) {
    try {
      const response = await this.fetch(`${this.baseUrl}/${model}`, {
        method: 'GET',
        headers: this.headers
      })
      return response.json()
    } catch (e) {
      this.error('Get request failed.')
    }
  }
}

export default Api
