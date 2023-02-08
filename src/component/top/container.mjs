import { element } from './../../../node_modules/m00/src/element.mjs';
import { element_style } from './../../../node_modules/m00/src/element/style.mjs';
export function component_top_container(content) {
    let container = element(content, 'div');
    element_style(container, {
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        'align-items': 'center'
    });
    return container;
}