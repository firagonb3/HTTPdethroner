import { $ } from '../../utils/ECMAScript/index.mjs';
import { windows } from '../components/windows/window.mjs'

import { categoryMenu } from "../components/categoryMenu.mjs"
import { menuOptions } from "./data/menuOption.mjs"

$('#app').addHTMLContent(windows("winMain", categoryMenu(menuOptions, 0)))