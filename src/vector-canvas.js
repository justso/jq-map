/*jslint browser:true, es5:true, white:false, forin:true */
/*globals window, jvm */

/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param width {Number}
 * @param height {Number}
 */
jvm.VectorCanvas = function (container, width, height) {
    this.mode = window.SVGAngle ? 'svg' : 'vml';
    if (this.mode == 'svg') { // ==?
        this.impl = new jvm.SVGCanvasElement(container, width, height);
    } else {
        this.impl = new jvm.VMLCanvasElement(container, width, height);
    }
    return this.impl;
};
