export function _utilsDom(element) {
    const self = {
        e: element === document ? document : document.querySelector(element),
        value: (v = null) => v === null ? self.e.value : self.e.value = v,
        checked: (v) => (v === true || v === false) ? self.e.checked = v : self.e.checked,
        onReady: (func) => self.e.addEventListener('DOMContentLoaded', func),
        onClick: (func) => self.e.onclick = func,
        onEvent: (type, func) => self.e.addEventListener(type, func),
        removeEvent: (type, func) => self.e.removeEventListener(type, func),
        setLocalStorageValue: (key) => window.localStorage.setItem(key, self.e.value),
        getLocalStorageValue: (key) => self.e.value = window.localStorage.getItem(key) || "",
        addHTMLContent: (content) => self.e.innerHTML = content,
        appendChild: (tag, content) => {
            const element = document.createElement(tag);
            element.innerHTML = content;
            self.e.appendChild(element);
        },
        onReactiveEvent: (type, func) => {
            const observer = new MutationObserver((mutationsList, observer) => {
                const elm = document.querySelector(element);
                if (elm) {
                    observer.disconnect();
                    elm.addEventListener(type, func);
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        },
    }
    return self;
}