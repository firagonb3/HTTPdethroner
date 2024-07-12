import { globalParams } from "../../../utils/ECMAScript/index.mjs";

export function createHost() {
    const imgPaht = globalParams('GlobalIMG')

    return /*html*/`
        <section class="conten" id="service">
            <createHost-Container>
                <createHost-Cell>
                    <p>
                        <img src="${imgPaht}/add.svg" alt="Add Icon" />
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

            createHost-Cell img {
                vertical-align: middle;
            }

            createHost-Cell p{
                margin: .5em 0 .5em 0;
                text-align: center;
            }

            createHost-Cell:hover {
                background-color: grey;
            }

        </style>
    `
}