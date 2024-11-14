import { globalParams } from "../../../../utils/ECMAScript/index.mjs";
import { dialogEdithostShow } from "./dialogCreateAndEdithost.mjs";
import { $ } from "../../../../utils/ECMAScript/index.mjs"


export default function createHostCell({Name, Port, Path, IndexFile, IndexFilesEnabled, IsActive}) {
    const imgPaht = globalParams('GlobalIMG');

    if (IndexFile === null) {
        IndexFile = ''
    }

    if (IsActive === 1) {
        IsActive = 'Active'
    }

    $(`button[data-edit=P${Port}]`).onReactiveEvent('click', async () => {
        dialogEdithostShow(Port);
    });

    $(`button[data-delete=P${Port}]`).onReactiveEvent('click', async () => {
        window.DBConnect.deleteHostPort(Port);
        const portDiv = document.querySelector(`div[data-port='P${Port}']`);
        portDiv.parentElement.remove();
        console.log('delete', Port)
    });

    return /* html */ `
        <div class="list-item" data-port='P${Port}'>
            <div class="name">${Name}</div>
            <div class="details">Port: ${Port}, Path: ${Path}\\${IndexFile}</div>
            <div class="status">${IsActive}</div>
            <button data-edit="P${Port}"><img src="${imgPaht}/edit.svg" alt="Edit Icon" /></button>
            <button data-delete="P${Port}"><img src="${imgPaht}/delete.svg" alt="Edit Icon" /></button>
        </div>
        <style>
            createHost-Cell > .list-item {
                display: flex;
                align-items: center;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                margin: 5px;

            }
            createHost-Cell >.list-item .name {
                font-weight: bold;
                margin-right: 15px;
            }
            createHost-Cell >.list-item .details {
                flex-grow: 1;
            }
            createHost-Cell >.list-item .status {
                margin-left: 15px;
                font-style: italic;
            }
        </style>
    `
}