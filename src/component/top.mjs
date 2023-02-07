import { element_style_margin_vertical_auto } from './../../node_modules/m00/src/element/style/margin/vertical/auto.mjs';
import { for_each } from './../../node_modules/m00/src/for/each.mjs';
import { element_style_display_inline_block } from './../../node_modules/m00/src/element/style/display/inline/block.mjs';
import { element_style_width_min_max } from './../../node_modules/m00/src/element/style/width/min/max.mjs';
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
    element_style_display_inline_block(left);
    element_style_width_min_max(left, '33.33vw');
    element_style_margin_vertical_auto(left);
    let middle = element(container, 'div');
    element_style(container, { textAlign: 'center' });
    element_style_display_inline_block(middle);
    element_style_width_min_max(middle, '33.33vw');
    for_each([
        'Home',
        'Services',
        'Careers',
        'About',
        'Contact'
    ], label => {
        element_with_text(middle, 'span', ` ${ label } `);
    });
    element_style_margin_vertical_auto(middle);
    let right = element_with_text(container, 'div', 'right');
    element_style_display_inline_block(right);
    element_style_width_min_max(right, '33.33vw');
    element_style_margin_vertical_auto(middle);
}