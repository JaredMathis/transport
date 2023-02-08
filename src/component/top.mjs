import { element_style_display_none } from './../../node_modules/m00/src/element/style/display/none.mjs';
import { window_match_media_on_change } from './../../node_modules/m00/src/window/match/media/on/change.mjs';
import { config_company } from './../config/company.mjs';
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
        color: 'white',
        display: 'flex',
        'align-items': 'center'
    });
    let left = element_with_text(container, 'div', config_company().name);
    element_style_display_inline_block(left);
    element_style_width_min_max(left, '33.33%');
    element_style_margin_vertical_auto(left);
    let middle = element(container, 'div');
    element_style(container, { textAlign: 'center' });
    element_style_width_min_max(middle, '33.33%');
    const links = [
        'Home',
        'Services',
        'Careers',
        'About',
        'Contact'
    ];
    for_each(links, label => {
        let link = element_with_text(middle, 'div', ` ${ label } `);
        element_style_display_inline_block(link);
        element_style(link, { padding: '0.8vh' });
    });
    element_style_margin_vertical_auto(middle);
    let right = element_with_text(container, 'div', config_company().phone);
    element_style_width_min_max(right, '33.33%');
    element_style_margin_vertical_auto(right);
    window_match_media_on_change(`(max-width: 600px)`, matches => {
        const group1 = [
            middle,
            right
        ];
        if (matches) {
            for_each(group1, e => {
                element_style_display_none(e);
            });
        } else {
            for_each(group1, e => {
                element_style_display_inline_block(e);
            });
        }
    });
}