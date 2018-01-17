import '../less/ComponentBase.less';
let ComponentFactory=(config)=>{
    let Component=$('<div class="ComponentBase"/>');
    let Id=(Math.random()+'').replace('.','-');
    Component.attr('id',Id);
    Component.text(config.text);
    config.css&&Component.css(config.css);
    Component.width(config.width/2);
    Component.height(config.height/2);
    Component.addClass(config.class);

for (var eventType in config.event){
    Component.on(eventType,config.event[eventType]);
}
Component.on('cpLeave',(e)=>{
    setTimeout(()=>{
        Component.addClass('leaveComponent');
    Component.removeClass('loadComponent');
    config.animateOut && Component.animate(config.animateOut,800);
        config.name&&Component.removeClass(config.name);
    },config.delay||0)
});
Component.on('cpLoad',(e)=>{
    setTimeout(()=>{
        Component.removeClass('leaveComponent');
    Component.addClass('loadComponent');
    config.animateIn && Component.animate(config.animateIn,800);
    config.name&&Component.addClass(config.name);
    },config.delay||0)
});
    return Component;
};
export default ComponentFactory;