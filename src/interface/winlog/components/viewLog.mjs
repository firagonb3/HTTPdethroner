import { $ } from "../../../utils/ECMAScript/index.mjs"
export function viewLog() {

    function scrollToBottom() {
        const container = document.getElementById('log-container');
        container.scrollTop = container.scrollHeight;
    }

    window.logMessage.onLogMessage((message) => {
        const { type, args } = message;
        $('#log-container').appendChild('p', `[${type.toUpperCase()}] ${args.join(' ')}`)
        scrollToBottom();
    });

    return /* html */`
        <serviceControll-Log>
            <serviceControll-Box id="log-container">
            </serviceControll-Box>
        </serviceControll-Log>

        <style>
            serviceControll-log p {
                margin: 0;
                padding: 0.5em;
            }

            serviceControll-box {
                width: 100vw;
                height: 90vh;
                overflow-y: auto;
                box-sizing: border-box;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
        </style>
    `;
}