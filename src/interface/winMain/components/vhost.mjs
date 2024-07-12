export function vhost(save, objectJson) {

    return /*html*/`
        <section class="conten" id="vhost">
            <p>vhost: </p>
            <label>
                Pror:
                <input id="host-1" type="number"><br>
            </label>
            
            ${save(objectJson)}

        </section>

        <style>
        </style>
    `
}