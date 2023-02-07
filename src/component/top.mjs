import { element } from './../../node_modules/m00/src/element.mjs';
import { element_style } from './../../node_modules/m00/src/element/style.mjs';
import { element_with_text } from './../../node_modules/m00/src/element/with/text.mjs';
export function component_top(parent) {
    let container = element(parent, 'div');
    element_style(container, {
        backgroundColor: 'black',
        color: 'white'
    });
    let left = element_with_text(container, 'div', 'left');
    let middle = element_with_text(container, 'div', 'middle');
    let right = element_with_text(container, 'div', 'right');
}