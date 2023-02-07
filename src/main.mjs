import { element_style } from 'm00/src/element/style.mjs';
import { component_top } from './component/top.mjs';
export function main() {
    const parent = document.body;
    element_style(parent, { margin: 0 })
    component_top(parent);
}