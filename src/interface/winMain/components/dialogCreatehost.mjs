import { $ } from "../../../utils/ECMAScript/index.mjs"
import dialog from "../../components/windows/dialog.mjs";
import createHostCell from "./createHostCell.mjs"

export default function dialogCreatehost({id1, id2}) {
    const createHost = dialog()
    return createHost.create({
        id: 'createHost',
        show: true,
        elements: /* html */`
            <form id="elemt-form">
                <label>
                    Name:
                    <input id="Name" type="text"><br>
                </label>
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
                    const Port = $('#Port').value();
                    const Path = $('#Path').value();
                    const Name = $('#Name').value();

                    const addHost = {
                        Name: Name,
                        Path: Path,
                        Port: Port,
                        IsActive: true
                    }

                    window.DBConnect.addHost(addHost);

                    $(id1).appendChild(id2, createHostCell(Name, Port, Path, 1));
                    $('#Port').value('');
                    $('#Path').value('');
                    $('#Name').value('');
                    dialog.hide();
                }
            },
            cancelButtonOnClick: () => {
                //$('#cosa').value('')
                createHost.hide()
            }
        }
    })
}