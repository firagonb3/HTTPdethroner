export function _globalParams(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}