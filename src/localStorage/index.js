// localStorage inside RadioPlayer webview on android is null and does not allow polyfill.
const localStorage = {
  setItem (id, val) {
    try {
      return window.localStorage.setItem(id, val)
    } catch (err) {
      console.error(err)
      return
    }
  },
  getItem (id) {
    try {
      return window.localStorage.getItem(id)
    } catch (err) {
      console.error(err)
      return
    }
  },
  removeItem (id) {
    try {
      return window.localStorage.removeItem(id)
    } catch (err) {
      console.error(err)
      return
    }
  },
  clear () {
    try {
      return window.localStorage.clear()
    } catch (err) {
      console.error(err)
      return
    }
  }
}

let lastPing

localStorage.keepalive = {
  check (id, { onAlive, onDead }) {
    window.addEventListener('storage', () => {
      if( localStorage.getItem(id) ){
        lastPing = (new Date()).getTime()
      }
    })
    setInterval(() => {
      const two_seconds_ago = (new Date() - 2000)
      if(!lastPing || (lastPing < two_seconds_ago)){
        onDead && onDead()
      } else {
        onAlive && onAlive()
      }
      localStorage.removeItem(id)
    }, 1000)
  },
  startPinging (id) {
    setInterval(() => localStorage.setItem(id, true), 300)
  }
}
export { localStorage as default }
