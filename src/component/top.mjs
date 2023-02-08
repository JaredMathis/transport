import { click } from './../../node_modules/m00/src/click.mjs';
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
import { component_fa } from './fa.mjs';
export function component_top(parent) {
    const links = [
        'Home',
        'Services',
        'Careers',
        'About',
        'Contact'
    ];
    let overlay = element(document.body, 'div');
    element_style_display_none(overlay)
    element_style(overlay, {
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: 'white',
        right: '0',
        bottom: '0',
        padding: '5vh'
    });
    for_each(links, l => {
        let link = element_with_text(overlay, 'div', l);
        element_style(link, { padding: '1vh' });
    });
    let container = element(parent, 'div');
    element_style(container, {
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        'align-items': 'center'
    });
    let left = element_with_text(container, 'div', config_company().name);
    element_style(left, { fontSize: '4vh' });
    element_style_display_inline_block(left);
    element_style_width_min_max(left, '33.33%');
    element_style_margin_vertical_auto(left);
    let middle = element(container, 'div');
    element_style(container, { textAlign: 'center' });
    element_style_width_min_max(middle, '33.33%');
    for_each(links, label => {
        let link = element_with_text(middle, 'div', ` ${ label } `);
        element_style_display_inline_block(link);
        element_style(link, { padding: '0.8vh' });
    });
    element_style_margin_vertical_auto(middle);
    let right = element_with_text(container, 'div', config_company().phone);
    element_style_width_min_max(right, '33.33%');
    element_style_margin_vertical_auto(right);
    window_match_media_on_change(`(min-width: 701px)`, matches => {
        const group1 = [
            middle,
            right
        ];
        if (matches) {
            for_each(group1, e => {
                element_style_display_inline_block(e);
            });
        } else {
            for_each(group1, e => {
                element_style_display_none(e);
            });
        }
    });
    let right_small = element(container, 'div');
    element_style(right_small, {
        marginLeft: 'auto',
        marginRight: '3vh'
    });
    let bars = component_fa(right_small, 'bars');
    element_style(bars, {
        fontSize: '4vh',
        cursor: 'pointer'
    });
    click(bars, () => {
        element_style(overlay, { display: 'block' });
    });
}