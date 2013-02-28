/**
 * Implements abstract vector canvas.
 * @constructor
 * @param container {HTMLElement}  Container to put element to.
 * @param width     {Number}       Width of canvas.
 * @param height    {Number}       Height of canvas.
 */
jvm.AbstractCanvasElement = function (container, width, height) {
    this.container = container;
    this.setSize(width, height);
    this.rootElement = new jvm[this.classPrefix + 'GroupElement']();
    this.node.appendChild(this.rootElement.node);
    this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param element {HTMLElement}  Element to add to canvas.
 * @param group   {HTMLElement}
 *  Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function (element, group) {
    group = group || this.rootElement;
    group.add(element);
    element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param config {Object}       Parameters of path to create.
 * @param style  {Object}       Styles of the path to create.
 * @param group  {HTMLElement}  Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function (config, style, group) {
    var el = new jvm[this.classPrefix + 'PathElement'](config, style);

    this.add(el, group);
    return el;
};

/**
 * Create circle and add it to the canvas.
 * @param config {Object}       Parameters of path to create.
 * @param style  {Object}       Styles of the path to create.
 * @param group  {HTMLElement}  Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function (config, style, group) {
    var el = new jvm[this.classPrefix + 'CircleElement'](config, style);

    this.add(el, group);
    return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param parentGroup {HTMLElement}
 *  Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function (parentGroup) {
    var el = new jvm[this.classPrefix + 'GroupElement']();

    if (parentGroup) {
        parentGroup.node.appendChild(el.node);
    } else {
        this.node.appendChild(el.node);
    }
    el.canvas = this;
    return el;
};
