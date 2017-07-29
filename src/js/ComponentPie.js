import '../less/ComponentPie.less';
import ComponentFactory from './componentBase.js';
let ComponentPieFactory=(config)=>{
    let Component =ComponentFactory(config);
    Component.addClass('ComponentPie');
    let[w,h]=[config.width,config.height];
    let oBgCvs=$('<canvas/>').get(0);
    [oBgCvs.width,oBgCvs.height]=[w,h];
    Component.append(oBgCvs);
    let ctx=oBgCvs.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle='#eee';
    let r=w/2;
    ctx.arc=(r,r,r,0,Math.PI*2);
    ctx.fill();

    let DataCvs=$('<canvas/>').get(0);
    [DataCvs.width,DataCvs.height]=[config.width,config.height];
    Component.append(DataCvs);
    ctx=DataCvs.getContext('2d');
    let data=config.data;
    let sAngle=Math.PI*1.5;
    let eAngle=0;
    let aAngle=Math.PI*2;
    data.forEach((ele,index)=>{
        eAngle=sAngle+ele[1]*aAngle;
        ctx.beginPath();
        ctx.fillStyle=ele[2];
        ctx.moveTo(r,r);
        ctx.arc(r,r,r,sAngle,eAngle);
        ctx.fill();
        let oTextR=config.width/2/2;
        let x=Math.abs(oTextR*Math.cos(aAngle-(sAngle+(eAngle-sAngle)/2)));
        let y=Math.abs(oTextR*Math.sin(aAngle-(sAngle+(eAngle-sAngle)/2)));
        let trueAngle = sAngle+(eAngle-sAngle)/2;
        let oText = $('<div class="text"></div>');
        oText.text(ele[0]);
        oText.css('position','absolute');
        if( trueAngle>=1.5*Math.PI&&trueAngle<2.5*Math.PI){
            oText.css('left',oTextR+x);
        }else if(trueAngle>=2.5*Math.PI&&trueAngle<3.5*Math.PI){
            oText.css('right',oTextR+x);
        }
        if(trueAngle>=1.5*Math.PI&&trueAngle<=aAngle||(trueAngle>=3*Math.PI)){
            oText.css('bottom',oTextR+y);
        }else if(trueAngle>2*Math.PI&&trueAngle<3*Math.PI){
            oText.css('top',oTextR+y);
        }
        Component.append(oText);
        sAngle=eAngle;
    })
    let oMaskCvs = $('<canvas/>').get(0);
    [oMaskCvs.width,oMaskCvs.height]=[w,h];
    ctx=oMaskCvs.getContext('2d');
    sAngle=1.5*Math.PI;
    Component.append(oMaskCvs);
    let draw=(per)=>{
        ctx.clearRect(0,0,w,h);
        ctx.beginPath();
        ctx.fillStyle='rgb(255,255,200)';
        ctx.moveTo(r,r);
        ctx.arc(r,r,r+2,sAngle,sAngle-aAngle*per,1);
        ctx.fill();
    }
    Component.on('cpLoad',()=>{
        draw(1);
        let s=1;
        setTimeout(()=>{
             for(let i=0;i<100;i++){
            setTimeout(()=>{
                s=s-0.01;
                draw(s);
            },10*i)
        }
        },config.delay+800||800)
    })
     Component.on('cpLeave',()=>{
        let s=0;
        setTimeout(()=>{
             for(let i=0;i<100;i++){
            setTimeout(()=>{
                s=s+0.01;
                draw(s);
            },10*i)
        }
        },config.delay+800||800)
    })
    return Component;
}
export default ComponentPieFactory;