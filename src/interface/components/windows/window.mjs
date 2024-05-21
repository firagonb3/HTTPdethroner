import { $ } from "../../../utils/ECMAScript/index.mjs"

export function windows(titel, content) {

    const id = 1

    $('#close').onReactiveEvent('click', async () => {
        console.log('Window ID:', id);
        await window.RemoteControl.close(id)
    })

    $('#minimize').onReactiveEvent('click', async () => {
        console.log('test')
        await window.RemoteControl.minimizer(id)
    })

    return /*html*/`
        <header class="titelbar">
            <h4 id="title">${titel}</h4>
            <div>
                <button id="minimize">—</button>
                <button id="close">✕</button>
            </div>
        </header>
        
        <main>
             ${content}
        </main>
        <style>
            .titelbar {
                -webkit-app-region: drag;
                background-color: #1E1F22;
                display: flex;
                justify-content: space-between;
                align-items: center;

                & h4 {
                    margin: 0;
                    margin-left: 1em;
                }

                & div {
                    -webkit-app-region: no-drag;
                    display: flex;

                    & button {
                        height: 2em;
                        width: 2em;
                        background-color: transparent;
                        border: none;
                        line-height: 1;
                    }

                    & button:hover {
                        color: #999;
                        background-color: aliceblue;
                    }

                    & #close:hover {
                        color: #fff;
                        background-color: red;
                    }
                }
            }

            

        </style>
    `
}