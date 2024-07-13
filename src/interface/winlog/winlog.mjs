import { $ } from '../../utils/ECMAScript/index.mjs';
import { windows } from '../components/windows/window.mjs'

import { viewLog } from './components/viewLog.mjs';

$('#app').addHTMLContent(windows("winLog", viewLog()));