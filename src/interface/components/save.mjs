import { $ } from "../../utils/ECMAScript/index.mjs"

export function save(object) {

    $('.save').onReactiveEvent('click', () => {
        
    })

    return /*html*/ `
        <button id="save" class="save">Apply</button>

        <style>
            .save {
                position: absolute;
                bottom: 1.5em;
                right: .4em;
                margin-right: 1em;
                padding: 2px 8px;
                font-size: 16px;
                cursor: pointer;
            }
        </style>
    `
}