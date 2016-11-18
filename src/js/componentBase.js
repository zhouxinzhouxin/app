import '../less/ComponentBase.less';
let ComponentFactory=(config)=>{
    let Component=$('<div class="ComponentBase"/>');
    let Id=(Math.random()+'').replace('.','-');
    Component.attr('id',Id);

config.name&&Component.addClass(config.name);
config.width && Component.css('width',config.width/2); 
config.height && Component.css('height',config.height/2);
config.text && Component.text(config.text);
config.center && Component.css({left:'50%',marginLeft:-(config.width/2/2)});
config.css && Component.css(config.css);
for (var eventType in config.event){
    Component.on(eventType,config.event[eventType]);
}
Component.on('cpLeave',(e)=>{
    setTimeout(()=>{
         Component.addClass('leaveComponent');
    Component.removeClass('loadComponent');
    config.animateOut && Component.animate(config.animateOut);
    },config.delay||0)
})
Component.on('cpLoad',(e)=>{
    setTimeout(()=>{
        Component.removeClass('leaveComponent');
    Component.addClass('loadComponent');
    config.animateIn && Component.animate(config.animateIn);
    },config.delay||0)
})
    return Component;
}
export default ComponentFactory;