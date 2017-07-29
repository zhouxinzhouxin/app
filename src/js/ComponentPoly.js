import '../less/ComponentPoly.less';
import ComponentFactory from './componentBase.js';
let ComponentPolyFactory=(config)=>{
    let Component=ComponentFactory(config);
    Component.addClass('ComponentPoly');
    var Canvas =$('<canvas/>').get(0);
    var ctx=Canvas.getContext('2d');
    Canvas.width=config.width;
    Canvas.height=config.height;
    var Canvasw=Canvas.width;
    var Canvash=Canvas.height;
    Component.append(Canvas);
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.strokeStyle='rgb(255,255,200)';
    var step=10;
    for(let i=0;i<step+1;i++){
        var y=(Canvash/step)*i;
        ctx.moveTo(0,y);
        ctx.lineTo(Canvasw,y);
    }
    ctx.stroke();
    for(let i=0;i<config.data.length+2;i++){
        var x=(Canvasw/(config.data.length+1))*i;
        ctx.moveTo(x,0);
        ctx.lineTo(x,Canvash)
    } 
    ctx.stroke();
    var data=config.data;
    var textw=(config.width/2)/(data.length+1);
    data.forEach((ele,index)=>{
        var x=textw*(index+1)
        var otext=$('<div class="text"/>');
        otext.text(ele[0]);
        otext.css({width:textw,position:'absolute',left:x-textw/2,bottom:-20,textAlign:'center',fontSize:'14px'});
        Component.append(otext);
    });
    // 描点划线
    var CanvasTop=$('<canvas/>').get(0);
    var ctxTop=CanvasTop.getContext('2d');
    CanvasTop.width=config.width;
    CanvasTop.height=config.height;
    Component.append(CanvasTop);
    var colW=config.width/(data.length+1);
    function draw(per){
            ctxTop.clearRect(0,0,config.width,config.height);
            ctxTop.beginPath();
            ctxTop.moveTo(colW,config.height);
            data.forEach((ele,index)=>{
                var x=colW*(index+1);
                var y=config.height*(1-ele[1]*per);
                ctxTop.lineTo(x,y);
                ctxTop.arc(x,y,5,0,Math.PI*2);
                ctxTop.lineTo(x,y);

            })
            ctxTop.lineTo(colW*data.length,config.height);
            ctxTop.closePath();
            ctxTop.stroke();
            ctxTop.fillStyle='rgba(255,255,150,0.5)';
            ctxTop.fill();
            // 写文本
            data.forEach((ele,index)=>{
                let x=colW*(index+1);
                let y=config.height*(1-ele[1]*per);
                ctxTop.moveTo(x,y);
                ctxTop.font='35px Arial';
                ctxTop.fillStyle=ele[2];
                ctxTop.fillText(ele[1]*100+'%',x-20,y-20);
            })
    }
    Component.on('cpLoad',()=>{
        
        setTimeout(()=>{
             let s=0;
        for(let i=0;i<100;i++){
            setTimeout(()=>{
                s+=0.01;
                draw(s);
            },10*i);
        }
        },1000)
    })
    Component.on('cpLeave',()=>{
            let s=1;
        for(let i=0;i<100;i++){
            setTimeout(()=>{
                s-=0.01;
                draw(s);
            },10*i);
        }
    })
    return Component;
}
export default ComponentPolyFactory;