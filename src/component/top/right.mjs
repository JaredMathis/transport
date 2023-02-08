import { element_with_text } from './../../../node_modules/m00/src/element/with/text.mjs';
import { config_company } from './../../config/company.mjs';
import { component_style_top_item } from './../style/top/item.mjs';
export function component_top_right(container) {
    let right = element_with_text(container, 'div', config_company().phone);
    component_style_top_item(right);
    return right;
}