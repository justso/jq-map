/*jslint browser:true, es5:true, white:false, forin:true */
/*globals jvm */

/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param name   {String}  Tag name of the element.
 * @param config {Object}  Set of parameters to initialize element with.
 * @param style  {Object}  Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function (name, config, style) {
    this.style = style || {};
    this.style.current = {};
    this.isHovered = false;
    this.isSelected = false;
    this.updateStyle();
};

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param isHovered {Boolean}  <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.AbstractShapeElement.prototype.setHovered = function (isHovered) {
    if (this.isHovered !== isHovered) {
        this.isHovered = isHovered;
        this.updateStyle();
    }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param isSelected {Boolean}  <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.AbstractShapeElement.prototype.setSelected = function (isSelected) {
    if (this.isSelected !== isSelected) {
        this.isSelected = isSelected;
        this.updateStyle();
        jvm.$(this.node).trigger('selected', [isSelected]);
    }
};

/**
 * Set element's style.
 * @param prop {Object|String}  Could be string to set only one property or object to set several style properties at once.
 * @param val  {String}         Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function (prop, val) {
    var styles = {};

    if (typeof prop === 'object') {
        styles = prop;
    } else {
        styles[prop] = val;
    }
    jvm.$.extend(this.style.current, styles);
    this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function () {
    var attrs = {};

    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
    if (this.isHovered) {
        jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
    }
    if (this.isSelected) {
        jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
        if (this.isHovered) {
            jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
        }
    }
    this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function (styles, newStyles) {
    var key;

    newStyles = newStyles || {};
    for (key in newStyles) {
        if (newStyles[key] === null) {
            delete styles[key];
        } else {
            styles[key] = newStyles[key];
        }
    }
};
