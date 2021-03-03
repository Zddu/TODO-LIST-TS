export function findParentNode(target: HTMLElement, className: string): HTMLElement {
  while (target = target.parentNode as HTMLElement) {
    if (target.className = className) {
      return target;
    }
  }
}

export function createTemplate(tagName,className,tempStr:string):HTMLElement{
  const oItem = document.createElement(tagName);
  oItem.className = className;
  oItem.innerHTML = tempStr;
  return oItem;
}