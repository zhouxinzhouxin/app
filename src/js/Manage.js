import '../less/pageComponent.less';
import ComponentFactory from './componentBase.js';
import ComponentBarFactory from './componentBar.js';
import ComponentPolyFactory from './ComponentPoly.js';
import ComponentPieFactory from './ComponentPie.js';
let ManageObj={
    init(name){
        this.oContainer=$('<div/>').addClass(name);
        this.oContainer.appendTo($('body')).hide();
        return this; 
    },
    addPage(name){
        this.oPage=$('<div class="section"/>').addClass(name);
        this.oPage.appendTo(this.oContainer);
        this.addBottomComponent();
        return this;
    },
    addComponent(config){
        let Component=null;
        switch(config.type){ 
            case 'Poly':
            Component=ComponentPolyFactory(config);
            break;
            case 'pie':
            Component=ComponentPieFactory(config);
            break;
            case 'Bar':
            Component=ComponentBarFactory(config);
            break;
            case 'base':
            default:
            Component=ComponentFactory(config);
        }
        this.oPage.append(Component);
        return this;
    },
    addBottomComponent(){
        this.addComponent({
            height:40,
            text:'哈哈哈哈哈哈哈哈',
            css:{
                position:'absolute',
                right:0,
                left:0,
                bottom:0,
                textAlign:'center',
                lineHeight:'20px',
                color:'#fff',
                background:'#000',
                opacity:0
            },
            animateIn:{
                opacity:0.5
            },
            animateOut:{
                opacity:0
            },
            delay:1500
        })
    },
    load(){
        this.oContainer.show();
        this.oContainer.fullpage({
            onLeave(index,nextIndex,direction){
                 $('.section').eq(index-1).trigger('onLeave');
            },
            afterLoad(achorLink,index){
                $('.section').eq(index-1).trigger('onLoad');
            }
        });
        $('.section').on('onLeave',(e)=>{
            $(e.target).find('.ComponentBase').trigger('cpLeave');
        })
        $('.section').on('onLoad',(e)=>{
            $(e.target).find('.ComponentBase').trigger('cpLoad');
        })
        $('.section').eq(0).trigger('onLoad');
    }
}
export default ManageObj;