import { $ } from "../../../utils/ECMAScript/index.mjs"

export function serviceControll() {

    $('#httpStart').onReactiveEvent('click', async () => {
        console.log()
        await window.HTTPserver.httpStart()
    })

    $('#httpStop').onReactiveEvent('click', async () => {
        await window.HTTPserver.httpStop()
    })

    $('#httpRestart').onReactiveEvent('click', async () => {
        await window.HTTPserver.httpRestart()
    })

    $('#log-win').onReactiveEvent('click', async () => {
        window.newWindow.addWin('winLog', true)
    })

    window.logMessage.onLogMessage((message) => {
        console.log(message)
        const { type, args } = message;
        $('#log-container').appendChild('p', `[${type.toUpperCase()}] ${args.join(' ')}`)
    });

    return /*html*/`
        <section class="conten" id="serviceControll">
            <serviceControll-Controll>
                <serviceControll-Button>
                    <button id="httpStart">Start server</button>
                    <button id="httpRestart">Restart server</button>
                    <button id="httpStop">Stop server</button>
                </serviceControll-Button>
            </serviceControll-Controll>
            <serviceControll-Log>
                <button id="log-win">win log</button>
                <p>
                    log:
                </p>
                <serviceControll-Box id="log-container">
                </serviceControll-Box>
            </serviceControll-Log>
        </section>

        <style>
            serviceControll-Controll {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }

            serviceControll-Button {
                height: 10rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                align-items: stretch;
            }

            serviceControll-Button button {
                margin-top: .5rem;
            }

            serviceControll-Log {
                width: 100%;
            }

            serviceControll-Log p {
                margin-top: 0px;
                margin-bottom: .2em;
                width: 100%;
            }

            serviceControll-Box {
                display: block;
                width: 100%;
                height: 10rem;
                border: 2px solid black;
                border-radius: 5px;
                padding: .5em;
                overflow: hidden;
                box-sizing: border-box;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
            }
        </style>
    `
}