export function categoryMenu(menuOptions, checked = 0) {
    const menuItems = menuOptions.map((option, index) => /*html*/`
        <input type="radio" id="opcion${index + 1}" name="opcion" ${index === checked ? 'checked' : ''}>
        <label for="opcion${index + 1}">${option.label}</label>
    `).join('');

    const sectionContent = menuOptions.map(option => option.functionality()).join('');

    return /*html*/`
        <categoryMenu-Menu class="menu">
            ${menuItems}
            ${sectionContent}
        </categoryMenu-Menu>

        <style>

            categoryMenu-Menu {
                user-select: none;
                position: relative;
                display: inline-table;
                top: 0.5em;
                height: calc(100vh - 34px);
                width: 100vw;
            }

            categoryMenu-Menu input[type="radio"] {
                display: none;
            }
            
            categoryMenu-Menu label {
                padding: 5px 10px;
                border: 1px solid #ccc;
                border-bottom: none;
                cursor: pointer;
                position: relative;
                z-index: 1;
            }
            
            categoryMenu-Menu label:hover {
                background-color: #e0e0e0;
            }
            
            categoryMenu-Menu input[type="radio"]:checked + label {
                border-radius: 10px 0 0 0;
                background-color: #007bff;
                
            }
            
            categoryMenu-Menu input[type="radio"]:checked + label::before {
                content: '';
                position: absolute;
                bottom: -1px;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: #007bff;
            }

            categoryMenu-Menu section {
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