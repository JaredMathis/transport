import { element } from './../../../../node_modules/m00/src/element.mjs';
import { element_style } from './../../../../node_modules/m00/src/element/style.mjs';
import { component_fa } from './../../fa.mjs';
import { click } from './../../../../node_modules/m00/src/click.mjs';
import { element_style_display_none } from './../../../../node_modules/m00/src/element/style/display/none.mjs';
export function component_top_right_small(container, overlay, content) {
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
        element_style_display_none(content);
    });
}