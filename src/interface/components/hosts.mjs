export function hosts(save, objectJson) {

    return /*html*/`
        <section class="conten" id="service">
            <p>Service</p>
            <label>
                Pror:
                <input id="port" type="number"><br>
            </label>
            ${save(objectJson)}
        </section>

        <style>
        </style>
    `
}