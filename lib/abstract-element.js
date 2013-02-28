/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param name   {String}  Tag name of the element
 * @param config {Object}  Set of parameters to initialize element with
 */
jvm.AbstractElement = function (name, config) {
    /**
     * Underlying DOM element
     * @type {DOMElement}
     * @private
     */
    this.node = this.createElement(name);

    /**
     * Name of underlying element
     * @type {String}
     * @private
     */
    this.name = name;

    /**
     * Internal store of attributes
     * @type {Object}
     * @private
     */
    this.properties = {};

    if (config) {
        this.set(config);
    }
};

/**
 * Set attribute of the underlying DOM element.
 * @param props {Object|String} Name of attribute
 * @param value {mixed}         Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function (props, value) {
    var key;

    if (typeof props === 'object') {
        for (key in props) {
            this.properties[key] = props[key];
            this.applyAttr(key, props[key]);
        }
    } else {
        this.properties[props] = value;
        this.applyAttr(props, value);
    }
};

/**
 * Returns value of attribute.
 * @param prop {String}  Name of attribute
 */
jvm.AbstractElement.prototype.get = function (prop) {
    return this.properties[prop];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param prop  {String}         Name of attribute
 * @param value {Number|String}  Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function (prop, value) {
    this.node.setAttribute(prop, value);
};

jvm.AbstractElement.prototype.remove = function () {
    jvm.$(this.node).remove();
};
