import '../less/ComponentText.less';
import ComponentFactory from './componentBase.js';

let ComponentTextFactory = (config) => {
    let Component = ComponentFactory(config);
    Component.addClass('ComponentText');
    config.data.forEach((ele,index) => {
        let text = $('<p class="text'+index+'"></p>');
        text.text(ele[0]);
        text.appendTo(Component)
    });
    return Component
};
export default ComponentTextFactory;