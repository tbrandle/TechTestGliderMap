

class Api {
  constructor(config) {
    this.baseUrl = config.baseUrl
    this.headers = config.headers
    this.fetch = window.fetch.bind(window)
  }

  async post(model, params) {
    console.log(`[Calling Post Route]`, params)
    const response = await this.fetch(`${this.baseUrl}/${model}`,{
      method: 'POST',
      body: JSON.stringify(params),
      headers: this.headers,
    })
    
    console.log(`[Response]`, response)

    return response.json()
  }
}

export default Api