import { company_links_get } from './../../company/links/get.mjs';
import { element } from './../../../node_modules/m00/src/element.mjs';
import { element_style_display_none } from './../../../node_modules/m00/src/element/style/display/none.mjs';
import { element_style } from './../../../node_modules/m00/src/element/style.mjs';
import { for_each } from './../../../node_modules/m00/src/for/each.mjs';
import { element_with_text } from './../../../node_modules/m00/src/element/with/text.mjs';
import { component_fa } from './../fa.mjs';
import { click } from './../../../node_modules/m00/src/click.mjs';
export function component_top_overlay(content) {
    const links = company_links_get();
    let overlay = element(document.body, 'div');
    element_style_display_none(overlay);
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
    let close = component_fa(overlay, 'times');
    element_style(close, {
        position: 'absolute',
        top: '5vh',
        right: '5vh',
        cursor: 'pointer'
    });
    click(close, () => {
        element_style(content, { display: 'block' });
        element_style_display_none(overlay);
    });
    return overlay;
}