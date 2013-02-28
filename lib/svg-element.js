/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @!param name {String}  Tag name of the element
 * @!param config {Object}  Set of parameters to initialize element with
 */

jvm.SVGElement = function () {
    jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param tagName {String}  Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function (tagName) {
    return document.createElementNS(jvm.SVGElement.svgns, tagName);
};

/**
 * Adds CSS class for underlying DOM element.
 * @param className {String}  Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function (className) {
    this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param ctr {String}
 *  Name of basic constructor to return proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function (ctr) {
    return jvm['SVG' + ctr];
};

jvm.SVGElement.prototype.getBBox = function () {
    return this.node.getBBox();
};
