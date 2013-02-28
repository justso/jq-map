/*jslint browser:true, es5:true, white:false, forin:true */
/*globals jvm */

jvm.SVGPathElement = function (config, style) {
    jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
    this.node.setAttribute('fill-rule', 'evenodd');
};

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);
