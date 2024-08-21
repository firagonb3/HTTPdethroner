import { globalParams } from "../../../utils/ECMAScript/index.mjs";
import { $ } from "../../../utils/ECMAScript/index.mjs"

import { dialog } from "../../components/windows/dialog.mjs";
import dialogCreatehost from "./dialogCreatehost.mjs";
import createHostCell from "./createHostCell.mjs"

export function createHost() {
    const imgPaht = globalParams('GlobalIMG');
    

    const idsAppendChild = {
        id1: 'createHost-Container',
        id2: 'createHost-Cell',
    }

    const addhost = dialogCreatehost(idsAppendChild);


    window.DBConnect.selectDetailsRouter().then(res => {
        res.map(v => {
            $(idsAppendChild.id1).appendChild(idsAppendChild.id2, createHostCell(v.Name, v.Port, v.Route, v.IsActive));
        })
    })

    $('#addHost').onReactiveEvent('click', async () => {
        dialog.show('createHost');
    });
        
    return /*html*/`
        <section class="conten" id="service">
            ${addhost}
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
                max-height: 300px;
                overflow-y: scroll;
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