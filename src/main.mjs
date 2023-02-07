import { element_style } from './../node_modules/m00/src/element/style.mjs';
import { defaults_set } from './../node_modules/m00/src/defaults/set.mjs';
import { element } from './../node_modules/m00/src/element.mjs';
import { component_top } from './component/top.mjs';
export function main() {
    defaults_set(element, { fontFamily: 'Sans-Serif' });
    const parent = document.body;
    element_style(parent, { margin: 0 });
    component_top(parent);
}