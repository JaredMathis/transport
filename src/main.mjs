import { element_style } from './../node_modules/m00/src/element/style.mjs';
import { element_style_default } from './../node_modules/m00/src/element/style/default.mjs';
import { defaults_set } from './../node_modules/m00/src/defaults/set.mjs';
import { element } from './../node_modules/m00/src/element.mjs';
import { element_style } from 'm00/src/element/style.mjs';
import { element_style_default } from 'm00/src/element/style/default.mjs';
import { component_top } from './component/top.mjs';
export function main() {
    defaults_set(element, { fontFamily: 'Sans-Serif' });
    const parent = document.body;
    element_style(parent, { margin: 0 });
    component_top(parent);
}