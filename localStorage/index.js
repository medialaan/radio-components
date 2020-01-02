// localStorage inside RadioPlayer webview on android is null and does not allow polyfill.
const localStorage = {
  setItem: function(id, val) {
    try {
      return window.localStorage.setItem(id, val);
    } catch (err) {
      console.error(err);
      return;
    }
  },
  getItem: function(id) {
    try {
      return window.localStorage.getItem(id);
    } catch (err) {
      console.error(err);
      return;
    }
  },
  removeItem: function(id) {
    try {
      return window.localStorage.removeItem(id);
    } catch (err) {
      console.error(err);
      return;
    }
  },
  clear: function() {
    try {
      return window.localStorage.clear();
    } catch (err) {
      console.error(err);
      return;
    }
  }
};

export { localStorage as default };
