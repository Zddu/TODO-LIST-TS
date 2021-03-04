export function findParentNode(target: HTMLElement, className: string): HTMLElement {
  while (target = target.parentNode as HTMLElement) {
    if (target.className === className) {
      return target;
    }
  }
}

export function createTemplate(tagName: string, className: string,tempStr:string):HTMLElement{
  const oItem = document.createElement(tagName);
  oItem.className = className;
  oItem.innerHTML = tempStr;
  return oItem;
}


export function myFetch<T>(url: string,data:T, options?: object) {
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    // method: 'POST', // *GET, POST, PUT, DELETE, etc.
    ...options
  }).then(response => response.json()) // parses response to JSON
}
