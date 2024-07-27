import { $ } from "../../../utils/ECMAScript/index.mjs"

// export function dialog(args = {}) {

//     const { id, elements = '', buttons = {} } = args;

//     const acceptButtonOnClick = buttons.acceptButtonOnClick || 'this.parentElement.close()';
//     const cancelButtonOnClick = buttons.cancelButtonOnClick || 'this.parentElement.close()';

//     $('#cancelButton').onReactiveEvent('click', async () => {
//         cancelButtonOnClick()
//         $('#cancelButton').e.parentElement.close()
//     })

//     $('#acceptButton').onReactiveEvent('click', async () => {
//         acceptButtonOnClick()
//     })

//     return /*html*/`
//         <dialog id='${id}' open>
//             <container-Dialog>
//                 ${elements}
//             </container-Dialog>
//             <button id="cancelButton" onClick='${cancelButtonOnClick}'>Cancelar</button>
//             <button id="acceptButton" onClick='${acceptButtonOnClick}'>Aceptar</button>
//         </dialog>
//         <style>
//             dialog[open] {
//                 padding: 0;
//                 position: fixed;
//                 top: 32px;
//                 left: 0;
//                 margin: 0;
//                 border: 0;
//                 z-index: 50;
//                 width: 100%;
//                 height: calc(100% - 32px);
//                 box-sizing: border-box;
//             }
//             dialog[open] button {
//                 position: absolute;
//                 bottom: 10px;
//             }
//             #acceptButton {
//                 right: 10px;
//             }
//             #cancelButton {
//                 right: calc(10px + 80px);
//             }
//         </style>
//     `
// }

export const dialog = {
    id: '',
    show: (id = dialog.id) => document.getElementById(id).show(),
    hide: (id = dialog.id) => document.getElementById(id).close(),
    create: (args = {}) => {
        const { id, show = false, elements = '', buttons = {} } = args;
        const open = show ? 'open' : '';

        dialog.id = id;
        const acceptButtonOnClick = typeof buttons.acceptButtonOnClick === 'function' ? buttons.acceptButtonOnClick : () => { dialog.hide() }
        const cancelButtonOnClick = typeof buttons.cancelButtonOnClick === 'function' ? buttons.cancelButtonOnClick : () => { dialog.hide() }
        
        $('#acceptButton').onReactiveEvent('click', async () => {
            acceptButtonOnClick()
        })

        $('#cancelButton').onReactiveEvent('click', async () => {
            cancelButtonOnClick()
        })

        

        return /*html*/`
                <dialog id='${id}' ${open}>
                    <container-Dialog>
                        ${elements}
                    </container-Dialog>
                    <button id="cancelButton" >Cancelar</button>
                    <button id="acceptButton" >Aceptar</button>
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
                    dialog[open] button {
                        position: absolute;
                        bottom: 10px;
                    }
                    #acceptButton {
                        right: 10px;
                    }
                    #cancelButton {
                        right: calc(10px + 80px);
                    }
                </style>
            `
    }
}