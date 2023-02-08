import { component_top_overlay } from './top/overlay.mjs';
import { component_top_container } from './top/container.mjs';
import { component_top_left } from './top/left.mjs';
import { component_top_middle } from './top/middle.mjs';
import { component_top_right } from './top/right.mjs';
import { component_top_right_small } from './top/right/small.mjs';
import { element_style_display_none } from './../../node_modules/m00/src/element/style/display/none.mjs';
import { window_match_media_on_change } from './../../node_modules/m00/src/window/match/media/on/change.mjs';
import { for_each } from './../../node_modules/m00/src/for/each.mjs';
import { element_style_display_inline_block } from './../../node_modules/m00/src/element/style/display/inline/block.mjs';
export function component_top(content) {
    let overlay = component_top_overlay(content);
    let container = component_top_container(content);
    component_top_left(container);
    let middle = component_top_middle(container);
    let right = component_top_right(container);
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
    component_top_right_small(container, overlay, content);
}