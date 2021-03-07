/* global sessionStorage */
class Storage {
  setSession (key, value) {
    const flatVal = typeof value === 'object' ? JSON.stringify(value) : value
    sessionStorage.setItem(key, flatVal)
  }

  getSession (key) {
    const storedVal = sessionStorage.getItem(key)

    try {
      return JSON.parse(storedVal)
    } catch (e) {
      return storedVal
    }
  }

  clearSession () {
    sessionStorage.clear()
  }
}

const storage = new Storage()
export default storage
