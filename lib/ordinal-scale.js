/*jslint browser:true, es5:true, white:false, forin:true */
/*globals jvm */

jvm.OrdinalScale = function (scale) {
    this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function (value) {
    return this.scale[value];
};
