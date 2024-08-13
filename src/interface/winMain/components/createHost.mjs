import { globalParams } from "../../../utils/ECMAScript/index.mjs";
import { $ } from "../../../utils/ECMAScript/index.mjs"

import { dialog } from "../../components/windows/dialog.mjs";

export function createHost() {
    const imgPaht = globalParams('GlobalIMG')

    const createhost = dialog.create({
        id: 'createHost',
        show: true,
        elements: /* html */`
            <form id="elemt-form">
                <label>
                    Port:
                    <input id="Port" type="number"><br>
                </label>
                <br>
                <label>
                    Path:
                    <input id="Path" type="text" placeholder="c:\\web\\index.html">
                </label>

                <button id="selectFile">
                    search
                </button>
            </form>

            <style>
                #elemt-form {
                    padding: 20px;
                }
            </style>
        `,
        preload: () => {
            $('#selectFile').onReactiveEvent('click', async e => {
                e.preventDefault();
                const Path = await window.openFileDialog.selectFileDialog();
                $('#Path').value(Path);
            })
        },
        buttons: {
            acceptButtonOnClick: () => {
                if ($('#Port').value() !== '' && $('#Path').value() !== '') {
                    $('createHost-Container').appendChild('createHost-Cell', `Port: ${$('#Port').value()}, Path: ${$('#Path').value()}`);
                    $('#Port').value('');
                    $('#Path').value('');
                    dialog.hide();
                }
            },
            cancelButtonOnClick: () => {
                //$('#cosa').value('')
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
            </createHost-Container>
            <p>Service</p>
            <label>
                Port:
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