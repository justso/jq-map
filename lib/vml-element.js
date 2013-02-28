/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param name   {String}  Tag name of the element
 * @param config {Object}  Set of parameters to initialize element with
 */

jvm.VMLElement = function (name, config) {
    if (!jvm.VMLElement.VMLInitialized) {
        jvm.VMLElement.initializeVML();
    }

    jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

// The following method of VML handling is borrowed from the
// Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function () {
    try {
        if (!document.namespaces.rvml) {
            document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
        }
        /**
         * Creates DOM element.
         * @param {String} tagName Name of element
         * @private
         * @returns DOMElement
         */
        jvm.VMLElement.prototype.createElement = function (tagName) {
            return document.createElement('<rvml:' + tagName + ' class="rvml">');
        };
    } catch (e) {
        /**
         * @private
         */
        jvm.VMLElement.prototype.createElement = function (tagName) {
            return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
        };
    }
    document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
    jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param ctr {String}  Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function (ctr) {
    return jvm['VML' + ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param className {String}  Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function (className) {
    jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param attr   {String}         Name of attribute
 * @param config {Number|String}  Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function (attr, config) {
    this.node[attr] = config;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function () {
    var node = jvm.$(this.node);
    return {
        x: node.position().left / this.canvas.scale,
        y: node.position().top / this.canvas.scale,
        width: node.width() / this.canvas.scale,
        height: node.height() / this.canvas.scale
    };
};
