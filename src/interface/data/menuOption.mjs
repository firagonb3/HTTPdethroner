import { createHost } from "../components/createHost.mjs"
import { Setting } from "../components/setting.mjs"
import { vhost } from "../components/vhost.mjs";
import { serviceControll } from "../components/serviceControll.mjs";

import { save } from "../components/save.mjs";

const objectJson = {};

export const menuOptions = [
    { label: 'Service controller', functionality: () => serviceControll() },
    { label: 'Create host', functionality: () => createHost() },
    { label: 'Create vhost', functionality: () => vhost(save, objectJson) },
    { label: 'Config', functionality: () => Setting(save, objectJson) }
];