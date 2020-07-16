import { HXElement } from '../../interfaces/HXElement/index.js';

/**
 * Defines behavior for the `<hx-drop-fence>` element.
 *
 * @extends HXElement
 * @hideconstructor
 * @since 0.24.0
 */
export class HXEyebrowElement extends HXElement {
    static get is () {
        return 'hx-eyebrow-control';
    }
}
