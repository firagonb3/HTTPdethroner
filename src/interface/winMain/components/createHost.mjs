import { globalParams } from "../../../utils/ECMAScript/index.mjs";
import { $ } from "../../../utils/ECMAScript/index.mjs"

import { dialogCreateShow, dialogCreatehost } from "./host/dialogCreateAndEdithost.mjs";
import createHostCell from "./host/createHostCell.mjs"

export function createHost() {
    const imgPaht = globalParams('GlobalIMG');

    const idsAppendChild = {
        id1: 'createHost-Container',
        id2: 'createHost-Cell',
    }

    window.DBConnect.selectHostsAll().then(res => {
        res.forEach(v => {
            $(idsAppendChild.id1).appendChild(idsAppendChild.id2, createHostCell({
                Name: v.Name,
                Port: v.Port,
                Path: v.Path,
                IndexFile: v.IndexFile,
                IsActive: v.IsActive
            }));
        });
    })

    $('#addHost').onReactiveEvent('click', async () => {
        dialogCreateShow()
    });

    return /*html*/`
        ${dialogCreatehost(idsAppendChild)}
        <section class="conten" id="service">
            <createHost-Container>
                <createHost-Cell>
                    <p id="addHost">
                        <img src="${imgPaht}/add.svg" alt="Add Icon" />
                    </p>
                </createHost-Cell>
            </createHost-Container>
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