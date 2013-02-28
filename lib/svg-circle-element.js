/*jslint browser:true, es5:true, white:false, forin:true */
/*globals jvm */

jvm.SVGCircleElement = function (config, style) {
    jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);
