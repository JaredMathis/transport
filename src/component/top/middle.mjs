import { company_links_get } from './../../company/links/get.mjs';
import { element } from './../../../node_modules/m00/src/element.mjs';
import { element_style } from './../../../node_modules/m00/src/element/style.mjs';
import { component_style_top_item } from './../style/top/item.mjs';
import { for_each } from './../../../node_modules/m00/src/for/each.mjs';
import { element_with_text } from './../../../node_modules/m00/src/element/with/text.mjs';
import { element_style_display_inline_block } from './../../../node_modules/m00/src/element/style/display/inline/block.mjs';
export function component_top_middle(container) {
    const links = company_links_get();
    let middle = element(container, 'div');
    element_style(container, { textAlign: 'center' });
    component_style_top_item(middle);
    for_each(links, label => {
        let link = element_with_text(middle, 'div', ` ${ label } `);
        element_style_display_inline_block(link);
        element_style(link, { padding: '0.8vh' });
    });
    return middle;
}