import { $ } from "../../../../utils/ECMAScript/index.mjs"
import dialog from "../../../components/windows/dialog.mjs";
import createHostCell from "./createHostCell.mjs"

export default function dialogCreatehost({ id1, id2 }) {
    const createHost = dialog()
    return createHost.create({
        id: 'createHost',
        show: true,
        elements: /* html */`
            <form id="elemt-form">
                <fieldset>
                    <legend>Información General</legend>
                    <label for="NameHost">
                        Nombre:<br>
                        <input id="NameHost" type="text" name="name" placeholder="Introduce el nombre" require>
                    </label>
                    <br>
                    <label for="PortHost">
                        Puerto:<br>
                        <input id="PortHost" type="number" name="port" placeholder="Introduce el puerto" require>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Rutas y Archivos</legend>
                    <label for="PathHosts">
                        Ruta:<br>
                        <input id="PathHosts" type="text" name="path" placeholder="c:\\www\\" require>
                        <button id="selectPathHosts" type="button">Buscar Ruta</button>
                    </label>
                    <br>
                    <label for="IndexFileHosts">
                        Archivo Index (Opcional):<br>
                        <input id="IndexFileHosts" type="text" name="indexFile" placeholder="index.html">
                        <button id="selectFileHosts" type="button">Buscar Archivo</button>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Configuración Adicional</legend>
                    <label for="IndexFilesEnabledHosts">
                        IndexFiles Habilitados:
                        <input id="IndexFilesEnabledHosts" type="checkbox" name="indexFilesEnabled">
                    </label>
                    <br>
                    <label for="IsActiveHosts">
                        Activo:
                        <input id="IsActiveHosts" type="checkbox" name="isActive" checked>
                    </label>
                </fieldset>
                <br>
            </form>

            <style>
                #elemt-form {
                    padding: 10px;
                    overflow-y: auto !important ;
                    max-height: calc(100% - 30px);

                    /* Estilo de los fieldsets y legends */
                    fieldset {
                        border: 1px solid #ddd;
                        border-radius: 8px;
                      
                        margin-bottom: 20px;
                        background-color: grey;
                    }

                    legend {
                        font-size: 18px;
                        font-weight: bold;
                        color: #f9f9f9;
                    }

                    /* Estilo de las etiquetas e inputs */
                    label {
                        display: block;
                        margin-bottom: 10px;
                    }

                    input[type="text"], input[type="number"] {
                        width: calc(100% - 120px);
                        padding: 8px;
                        margin-left: 10px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }

                    button {
                        padding: 8px 16px;
                        border: none;
                        border-radius: 4px;
                        background-color: #4CAF50;
                        color: #fff;
                        cursor: pointer;
                        margin-left: 10px;
                    }

                    button:hover {
                        background-color: #45a049;
                    }

                    /* Estilo para el botón de envío */
                    button[type="submit"] {
                        background-color: #007BFF;
                        padding: 12px 20px;
                        font-size: 16px;
                    }
                }
            </style>
        `,
        preload: () => {
            $('#selectPathHosts').onReactiveEvent('click', async e => {
                e.preventDefault();
                const Path = await window.openFileDialog.selectFileDialog();
                $('#Path').value(Path);
            })
            $('#selectFileHosts').onReactiveEvent('click', async e => {
                e.preventDefault();
                const Path = await window.openFileDialog.selectFileDialog();
                $('#Path').value(Path);
            })
        },
        buttons: {
            acceptButtonOnClick: () => {
                if ($('#PortHost').value() !== '' && $('#PortHost').value() !== '') {
                    const NameHost = $('#NameHost').value();
                    const PortHost = $('#PortHost').value();
                    const PathHosts = $('#PathHosts').value();
                    const IndexFileHosts = $('#IndexFileHosts').value();
                    const IndexFilesEnabledHosts = $('#IndexFilesEnabledHosts').checked();
                    const IsActiveHosts = $('#IsActiveHosts').checked();

                    const addHost = {
                        Name: NameHost,
                        Port: PortHost,
                        Path: PathHosts,
                        IndexFile: IndexFileHosts,
                        IndexFilesEnabled: IndexFilesEnabledHosts,
                        IsActive: IsActiveHosts
                    }

                    window.DBConnect.addHost(addHost);

                    $(id1).appendChild(id2, createHostCell(NameHost, PortHost, PathHosts, IsActiveHosts));
                    $('#NameHost').value('');
                    $('#PortHost').value('');
                    $('#PathHosts').value('');
                    $('#IndexFileHosts').value('');
                    $('#IndexFilesEnabledHosts').value('');
                    $('#IsActiveHosts').value('');
                    createHost.hide();
                }
            },
            cancelButtonOnClick: () => {
                //$('#cosa').value('')
                createHost.hide()
            }
        }
    })
}