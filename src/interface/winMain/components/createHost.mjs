import { globalParams } from "../../../utils/ECMAScript/index.mjs";
import { $ } from "../../../utils/ECMAScript/index.mjs"

import { dialog } from "../../components/windows/dialog.mjs";




// $('#addHost').onReactiveEvent('click', async () => {
//     $('createHost-Container').appendChild('createHost-Cell', `dddd`)
// })




export function createHost() {
    const imgPaht = globalParams('GlobalIMG')

    const createhost = dialog.create({
        id: 'createHost',
        show: false,
        elements: /* html */`
            <p>Este es un párrafo dentro del diálogo.</p>
            <input id="cosa" type="text" placeholder="Escribe aquí">
        `,
        buttons: {
            acceptButtonOnClick: () => {
                // $('#cosa').value() = ""
                console.log($('#cosa').value())
                dialog.hide()
            },
            cancelButtonOnClick: () => {
                dialog.hide()
            }
        }
    })

    $('#addHost').onReactiveEvent('click', async () => {
        dialog.show('createHost')
    })
        
    return /*html*/`
        <section class="conten" id="service">
            ${createhost}
            <createHost-Container>
                <createHost-Cell>
                    <p id="addHost">
                        <img src="${imgPaht}/add.svg" alt="Add Icon" />
                    </p>
                </createHost-Cell>
                <createHost-Cell>
                    ff
                </createHost-Cell>
            </createHost-Container>
            <p>Service</p>
            <label>
                Pror:
                <input id="port" type="number"><br>
            </label>
        </section>

        <style>
            createHost-container {
                display: flex;
                flex-direction: column;
            }

            createHost-Cell img {
                vertical-align: middle;
            }

            createHost-Cell p{
                margin: .5em 0 .5em 0;
                text-align: center;
            }

            createHost-Cell:hover {
                background-color: grey;
            }

        </style>
    `
}