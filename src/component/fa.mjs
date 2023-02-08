import { element_style } from './../../node_modules/m00/src/element/style.mjs';
import { element } from './../../node_modules/m00/src/element.mjs';
import { element_attribute_merge } from './../../node_modules/m00/src/element/attribute/merge.mjs';
export function component_fa(parent, name) {
    let result = element(parent, 'i');
    element_attribute_merge(result, { class: 'fa-solid fa-' + name });
    element_style(e, { fontFamily: null });
    return result;
}