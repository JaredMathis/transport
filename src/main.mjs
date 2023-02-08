import { element_attribute_merge } from './../node_modules/m00/src/element/attribute/merge.mjs';
import { element_style } from './../node_modules/m00/src/element/style.mjs';
import { defaults_set } from './../node_modules/m00/src/defaults/set.mjs';
import { element } from './../node_modules/m00/src/element.mjs';
import { component_top } from './component/top.mjs';
export function main() {
    defaults_set(element.name, {
        fontFamily: 'Sans-Serif',
        fontSize: '2.8vh'
    });
    const parent = document.body;
    element_style(parent, { margin: 0 });
    let content = element(parent, 'div');
    component_top(content);
    let s = element(parent, 'script');
    element_attribute_merge(s, {
        src: 'https://kit.fontawesome.com/9fc689c523.js',
        crossorigin: 'anonymous'
    });
}