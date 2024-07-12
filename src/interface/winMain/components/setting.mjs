import { $ } from "../../../utils/ECMAScript/index.mjs"

export function Setting(save, objectJson) {

    $('#toggle-dark-mode').onReactiveEvent('click', async () => {
        const isDarkMode = await window.darkMode.toggle()
        $('#theme-source').addHTMLContent(isDarkMode ? 'Dark' : 'Light')
    })

    $('#reset-to-system').onReactiveEvent('click', async () => {
        await window.darkMode.system()
        $('#theme-source').addHTMLContent('System')
    })

    return /*html*/`
        <section class="conten" id="config">
            <p>Current theme source: <strong id="theme-source">System</strong></p>
            <button id="toggle-dark-mode">Toggle Dark Mode</button>
            <button id="reset-to-system">Reset to System Theme</button>
            ${save(objectJson)}
        </section>

        <style>
        </style>
    `
}