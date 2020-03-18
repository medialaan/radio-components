export function on(event, selector, callback){
  document.addEventListener(event, (e) => {
    const el = e.target.closest(selector)
    if(el) callback(e, el)
  })
}

export function isVisible(elem) {return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0; }
export function urlFor(params) {
  let currentParams = Object.fromEntries((new URL(document.location)).searchParams.entries())
  const queryParams = new URLSearchParams(Object.assign(currentParams, params)).toString();
  return `${window.location.pathname}?${queryParams}`;
}
