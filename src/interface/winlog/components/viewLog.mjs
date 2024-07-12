import { $ } from "../../../utils/ECMAScript/index.mjs"
export function viewLog() {

    window.logMessage.onLogMessage((message) => {
        console.log(message)
        const { type, args } = message;
        $('#log-container').appendChild('p', `[${type.toUpperCase()}] ${args.join(' ')}`)
    });

    return /* html */`
        <serviceControll-Log>
                <p>
                    log:
                </p>
                <serviceControll-Box id="log-container">
                </serviceControll-Box>
        </serviceControll-Log>
    `;
}