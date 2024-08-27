import { $ } from "../../../utils/ECMAScript/index.mjs"



export default function dialog() {
    return {
        id: '',
        show: function (id = this.id) {document.getElementById(id).show()},
        hide: function (id = this.id) {document.getElementById(id).close()},
        create: function (args = {}) {
            const { id = rypto.randomUUID(), show = false, elements = '', preload = () => { return }, buttons = {} } = args;
            const open = show ? 'open' : '';

            this.id = id;
            const acceptButtonOnClick = typeof buttons.acceptButtonOnClick === 'function' ? buttons.acceptButtonOnClick : () => { this.hide() }
            const cancelButtonOnClick = typeof buttons.cancelButtonOnClick === 'function' ? buttons.cancelButtonOnClick : () => { this.hide() }
            
            const acceptButton = 'a' + crypto.randomUUID().replace(/-/g, '')
            const cancelButton = 'a' + crypto.randomUUID().replace(/-/g, '')

            preload();

            $('#' + acceptButton).onReactiveEvent('click', async () => {
                acceptButtonOnClick()
            })

            $('#' + cancelButton).onReactiveEvent('click', async () => {
                cancelButtonOnClick()
            })

            return /*html*/`
                <dialog id='${id}' ${open}>
                    <container-Dialog>
                        ${elements}
                    </container-Dialog>
                    <button id='${cancelButton}' >Cancelar</button>
                    <button id='${acceptButton}' >Aceptar</button>
                </dialog>
                <style>
                    dialog[open] {
                        padding: 0;
                        position: fixed;
                        top: 32px;
                        left: 0;
                        margin: 0;
                        border: 0;
                        z-index: 50;
                        width: 100%;
                        height: calc(100% - 32px);
                        box-sizing: border-box;
                    }
                    dialog[open] > button {
                        position: absolute;
                        bottom: 10px;
                    }
                    #${acceptButton} {
                        right: 10px;
                    }
                    #${cancelButton} {
                        right: calc(10px + 80px);
                    }
                </style>
            `
        }
    }
}