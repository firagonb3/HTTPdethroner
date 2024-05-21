export function categoryMenu(menuOptions) {

    const menuItems = menuOptions.map((option, index) => /*html*/`
        <input type="radio" id="opcion${index + 1}" name="opcion" ${index === 0 ? 'checked' : ''}>
        <label for="opcion${index + 1}">${option.label}</label>
    `).join('');

    const sectionContent = menuOptions.map(option => option.functionality()).join('');

    return /*html*/`
        <div class="menu">
            ${menuItems}
            ${sectionContent}
        </div>

        <style>

            .menu {
                position: relative;
                display: inline-table;
                top: 0.5em;
                height: calc(100vh - 34px);
                width: 100vw;
            }

            .menu input[type="radio"] {
                display: none;
            }
            
            .menu label {
                padding: 5px 10px;
                border: 1px solid #ccc;
                border-bottom: none;
                cursor: pointer;
                position: relative;
                z-index: 1;
            }
            
            .menu label:hover {
                background-color: #e0e0e0;
            }
            
            .menu input[type="radio"]:checked + label {
                border-radius: 10px 0 0 0;
                background-color: #007bff;
                
            }
            
            .menu input[type="radio"]:checked + label::before {
                content: '';
                position: absolute;
                bottom: -1px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: #007bff;
            }

            .menu section {
                display: none;
            }

            ${menuOptions.map((_, index) => `
                #opcion${index + 1}:checked ~ section:nth-of-type(${index + 1}) {
                    display: block;
                }
            `).join('')}
        </style>
    `;
}