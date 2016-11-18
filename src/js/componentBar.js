import '../less/ComponentBar.less';
import ComponentFactory from './componentBase.js';
let ComponentBarFactory = (config) => {
    let Component = ComponentFactory(config);
    Component.addClass('ComponentBar');

    let data = config.data;

    data.forEach((ele, index) => {
        let row = $('<div class="row"/>');
        let name = $('<div class="name"/>');
            name.text(ele[0]);

        let load = $('<div class="load">');
            load.css('width', ele[1] * 300);

        let loadInner = $('<div class="loadInner">');
            loadInner.css('background', ele[2]);
                load.append(loadInner);

        let per = $('<div class="per"/>');
            per.text(ele[1] * 100 + '%');

        row
            .append(name)
            .append(load)
            .append(per)
            .appendTo(Component);
    });
    return Component;
}

export default ComponentBarFactory;