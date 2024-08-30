export default function createHostCell({Name, Port, Path, IndexFile, IndexFilesEnabled, IsActive}) {

    if (IndexFile === null) {
        IndexFile = ''
    }

    if (IsActive === 1) {
        IsActive = 'Active'
    }

    return /* html */ `
        <div class="list-item">
            <div class="name">${Name}</div>
            <div class="details">Port: ${Port}, Path: ${Path}\\${IndexFile}</div>
            <div class="status">${IsActive}</div>
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