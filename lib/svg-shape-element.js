/*jslint browser:true, es5:true, white:false, forin:true */
/*globals jvm */

jvm.SVGShapeElement = function (name, config, style) {
    jvm.SVGShapeElement.parentClass.call(this, name, config);
    jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);
