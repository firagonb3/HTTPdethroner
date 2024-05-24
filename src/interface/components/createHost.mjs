import { globalParams } from "../../utils/ECMAScript/index.mjs";

export function createHost() {
    const imgPaht = globalParams('GlobalIMG')

    return /*html*/`
        <section class="conten" id="service">
            <createHost-Container>
                <createHost-Cell>
                    <p>
                        <img src="${imgPaht}/add.svg" alt="Add Icon" />
                        New Host 
                    </p>
                </createHost-Cell>
                <createHost-Cell>
                    ff
                </createHost-Cell>
            </createHost-Container>
            <p>Service</p>
            <label>
                Pror:
                <input id="port" type="number"><br>
            </label>
        </section>

        <style>
            createHost-container {
                display: flex;
                flex-direction: column;
            }

            createHost-Cell p{
                text-align: center;
            }

        </style>
    `
}