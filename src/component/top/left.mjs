import { element_with_text } from './../../../node_modules/m00/src/element/with/text.mjs';
import { config_company } from './../../config/company.mjs';
import { element_style } from './../../../node_modules/m00/src/element/style.mjs';
import { element_style_display_inline_block } from './../../../node_modules/m00/src/element/style/display/inline/block.mjs';
import { component_style_top_item } from './../style/top/item.mjs';
export function component_top_left(container) {
    let left = element_with_text(container, 'div', config_company().name);
    element_style(left, { fontSize: '4vh' });
    element_style_display_inline_block(left);
    component_style_top_item(left);
}