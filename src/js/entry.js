import './jqui.js';
import './jqfp.js';
import ManageObj from './Manage.js';

let maxHeight = window.innerHeight;
  ManageObj
            .init('wrapper')
                .addPage('index')
                    .addComponent({
                        width:420,
                        height :92,
                        text:'个人简历',
                        center:true,
                        css:{
                            position:'absolute',
                            top:-10,
                            lineHeight:'46px',
                            fontSize:'46px',
                            textAlign:'center',
                            fontWeight:'900',
                            color:'rgb(255,255,200)',
                            opacity:0
                        },
                        animateIn:{
                            top:100,
                            opacity:0.6
                        },
                        animateOut:{
                            top:-10,
                            opacity:0
                        },
                        delay:200
                    })
                    .addComponent({
                        width:400,
                        height :60,
                        center:true,
                        text:'周鑫',
                        css:{
                            position:'absolute',
                            top:'220px',
                            left:0,
                            lineHeight:'45px',
                            fontSize:'38px',
                            textAlign:'center',
                            fontWeight:'900',
                            color:'rgb(255,255,200)',
                            opacity:0
                        },
                        animateIn:{
                            left:'50%',
                            opacity:0.6
                        },
                        animateOut:{
                            left:0,
                            opacity:0
                        },
                        delay:1000
                    })
                    .addComponent({
                      width:400,
                      height :60,
                      center:true,
                      text:'前端工程师',
                      css:{
                          position:'absolute',
                          top:260,
                          left:0,
                          lineHeight:'45px',
                          fontSize:'38px',
                          textAlign:'center',
                          fontWeight:'900',
                          color:'rgb(255,255,200)',
                          opacity:0
                      },
                      animateIn:{
                          left:'50%',
                          opacity:0.6
                      },
                      animateOut:{
                          left:0,
                          opacity:0
                      },
                      delay:1000
                    })
                .addPage()
                     .addComponent({
                        width:500,
                        height :124,
                         center:true,
                         text:'教育背景',
                        css:{
                            position:'absolute',
                            top:0,
                            lineHeight:'46px',
                            fontSize:'36px',
                            textAlign:'center',
                            fontWeight:'900',
                            color:'rgb(255,255,200)',
                            opacity:0,
                        },
                        animateIn:{
                            top:maxHeight/10,
                            opacity:1
                        },
                        animateOut:{
                            top:0,
                            opacity:0
                        },
                        delay:200
                    })
                     .addComponent({
                        width:500,
                        height :50,
                        center:true,
                        text:'哈尔滨理工大学',
                        css:{
                            position:'absolute',
                            top:0,
                            opacity:0,
                            lineHeight:'25px',
                            fontSize:'25px',
                            textAlign:'center',
                            fontWeight:'900',
                            color:'rgb(255,255,200)'
                        },
                        animateIn:{
                            top:maxHeight/5,
                            opacity:1
                        },
                        animateOut:{
                            top:0,
                            opacity:0
                        },
                        delay:500
                    })
                     .addComponent({
                          width:500,
                          height :50,
                          center:true,
                          text:'...自动化专业',
                          css:{
                              position:'absolute',
                              top:0,
                              opacity:0,
                              lineHeight:'25px',
                              fontSize:'25px',
                              textAlign:'center',
                              fontWeight:'900',
                              color:'rgb(255,255,200)'
                          },
                          animateIn:{
                              top:maxHeight/4,
                              opacity:1
                          },
                          animateOut:{
                              top:0,
                              opacity:0
                          },
                          delay:1500
                    })
                     .addComponent({
                        width:522,
                        height :300,
                        text:'虽然专业看起来更贴近于下车间，调机械，可我有颗不安分的心，所以自学了web前端，想通过自己的努力找到自己满意的工作！',
                        center:true,
                        css:{
                            position:'absolute',
                            bottom:0,
                            opacity:0,
                            backgroundImage:'url(./src/img/dialog.png)',
                            padding:'10px 10px 10px 10px',
                            textAlign:'justify',
                            fontSize:'18px',
                            lineHeight:'25px',
                            fontWeight:'900'
                        },
                        animateIn:{
                            bottom:maxHeight/3,
                            opacity:1
                        },
                        animateOut:{
                            bottom:0,
                            opacity:0
                        },
                        delay:2000
                    })
                     .addComponent({
                        width:516,
                        height :306,
                        center:true,
                        css:{
                            position:'absolute',
                            bottom:-10,
                            opacity:0,
                            backgroundImage:'url(./src/img/child.jpg)'
                        },
                        animateIn:{
                            bottom:40,
                            opacity:1
                        },
                        animateOut:{
                            bottom:-10,
                            opacity:0
                        },
                        delay:2000
                    })
                .addPage()
                    .addComponent({
                          width:500,
                          height :124,
                          center:true,
                          text:'工作经验',
                          css:{
                              position:'absolute',
                              top:0,
                              lineHeight:'46px',
                              fontSize:'36px',
                              textAlign:'center',
                              fontWeight:'900',
                              color:'rgb(255,255,200)',
                              opacity:0,
                          },
                          animateIn:{
                              top:maxHeight/10,
                              opacity:1
                          },
                          animateOut:{
                              top:0,
                              opacity:0
                          },
                          delay:200
                    })
                    .addComponent({
                          width:640,
                          height :50,
                          center:true,
                          text:'2017.1-2017.3 百度糯米',
                          css:{
                              position:'absolute',
                              top:0,
                              opacity:0,
                              lineHeight:'23px',
                              fontSize:'23px',
                              textAlign:'center',
                              fontWeight:'900',
                              color:'rgb(255,255,200)'
                          },
                          animateIn:{
                              top:150,
                              opacity:1
                          },
                          animateOut:{
                              top:0,
                              opacity:0
                          },
                          delay:600
                    })
                    .addComponent({
                      width:640,
                      height :50,
                      center:true,
                      text:'2017.3-至今 百度AI平台部',
                      css:{
                          position:'absolute',
                          top:0,
                          opacity:0,
                          lineHeight:'23px',
                          fontSize:'23px',
                          textAlign:'center',
                          fontWeight:'900',
                          color:'rgb(255,255,200)'
                      },
                      animateIn:{
                          top:190,
                          opacity:1
                      },
                      animateOut:{
                          top:0,
                          opacity:0
                      },
                      delay:1000
                    })
                    .addComponent({
                        width:700,
                        height :60,
                        center:true,
                        text:'半年实习经历，我收获颇丰！',
                        css:{
                            position:'absolute',
                            bottom:0,
                            opacity:0,
                            lineHeight:'25px',
                            fontSize:'25px',
                            textAlign:'center',
                            fontWeight:'900',
                            color:'rgb(255,255,200)'
                        },
                        animateIn:{
                            bottom:maxHeight/2,
                            opacity:1
                        },
                        animateOut:{
                            bottom:0,
                            opacity:0
                        },
                        delay:1500
                    })
                    .addComponent({
                        name:'rotate',
                      css:{
                          position:'absolute',
                          bottom:150,
                          left:'50%',
                          transform:'translateX(-50%)',
                          width:0,
                          height :0,
                          opacity:0,
                          backgroundImage:'url(./src/img/people.jpeg)'
                      },
                      animateIn:{
                          width:300,
                          height :220,
                          bottom:40,
                          opacity:1
                      },
                      animateOut:{
                          width:0,
                          height :0,
                          bottom:150,
                          opacity:0
                      },
                      delay:1500
                    })
                .addPage()
                      .addComponent({
                          width:500,
                          height :124,
                          center:true,
                          text:'项目经历',
                          css:{
                              position:'absolute',
                              top:0,
                              lineHeight:'46px',
                              fontSize:'36px',
                              textAlign:'center',
                              fontWeight:'900',
                              color:'rgb(255,255,200)',
                              opacity:0,
                          },
                          animateIn:{
                              top:maxHeight/10,
                              opacity:1
                          },
                          animateOut:{
                              top:0,
                              opacity:0
                          },
                          delay:200
                      })
                      .addComponent({
                          type:'text',
                          width:640,
                          center:true,
                          css:{
                              position:'absolute',
                              top:'140px',
                              left:0,
                              opacity:0,
                              fontWeight:900
                          },
                          animateIn:{
                              left:'50%',
                              opacity:1
                          },
                          animateOut:{
                              left:0,
                              opacity:0
                          },
                          data:[
                              ['React写货物管理信息（后用vue改写）'],
                              ['用ajax获取数据，可根据输入关键字来改变现实的货物信息，有无存货颜色不同，可点击按钮只显示有存货的货物']
                          ],
                          delay:500
                      })
                      .addComponent({
                          type:'text',
                          width:640,
                          center:true,
                          css:{
                              position:'absolute',
                              top:'210px',
                              left:0,
                              opacity:0,
                              fontWeight:900
                          },
                          animateIn:{
                              left:'50%',
                              opacity:1
                          },
                          animateOut:{
                              left:0,
                              opacity:0
                          },
                          data:[
                              ['H5,CSS3写音乐播放器'],
                              ['配合 zepto 组件，用 webpack 打包，可以实现音乐的播放，暂停，切换，列表中的功能点击播放，高斯模糊图片作为背景，拖拽进度条进行播放和收藏的功能。'],
                              ['zhouxinzhouxin.github.io/music-player/index.html']
                          ],
                          delay:700
                      })
                      .addComponent({
                          type:'text',
                          width:640,
                          center:true,
                          css:{
                              position:'absolute',
                              top:'310px',
                              left:0,
                              opacity:0,
                              fontWeight:900
                          },
                          animateIn:{
                              left:'50%',
                              opacity:1
                          },
                          animateOut:{
                              left:0,
                              opacity:0
                          },
                          data:[
                              ['vue写，同步视频中的信息'],
                              ['动态匹配视频中的语音、文字、人脸、场景信息，根据当前播放时间动态匹配视频中的字幕']
                          ],
                          delay:900
                      })
                      .addComponent({
                          type:'text',
                          width:640,
                          center:true,
                          css:{
                              position:'absolute',
                              top:'380px',
                              left:0,
                              opacity:0,
                              fontWeight:900
                          },
                          animateIn:{
                              left:'50%',
                              opacity:1
                          },
                          animateOut:{
                              left:0,
                              opacity:0
                          },
                          data:[
                              ['用 js 编写日历'],
                              ['动态生成日历表格和其中内容，可实现左右切换月份的功能，过去的日子为一种颜色 ，将来的日子为另一种颜色。']
                          ],
                          delay:1100
                      })
                // .addPage()
                     // .addComponent({
                     //    width:500,
                     //    height :124,
                     //    center:true,
                     //    text:'掌握技能',
                     //    css:{
                     //        position:'absolute',
                     //        top:0,
                     //        lineHeight:'46px',
                     //        fontSize:'36px',
                     //        textAlign:'center',
                     //        fontWeight:'900',
                     //        color:'rgb(255,255,200)',
                     //        opacity:0,
                     //    },
                     //    animateIn:{
                     //        top:maxHeight/10,
                     //        opacity:1
                     //    },
                     //    animateOut:{
                     //        top:0,
                     //        opacity:0
                     //    },
                     //    delay:200
                     // })
                     // .addComponent({
                     //     type:'Bar',
                     //    width:500,
                     //    height :300,
                     //    center:true,
                     //    css:{
                     //        position:'absolute',
                     //        bottom:0,
                     //        opacity:0,
                     //        color:(255,255,200),
                     //        fontWeight:900
                     //    },
                     //    animateIn:{
                     //        bottom:maxHeight/2,
                     //        opacity:1
                     //    },
                     //    animateOut:{
                     //        bottom:0,
                     //        opacity:0
                     //    },
                     //      data:[
                     //          ['html',.9,'red'],
                     //          ['js',.8,'orange'],
                     //          ['css',.9,'yellow'],
                     //          ['jquery',.7,'green'],
                     //          ['h5',.6,'blue'],
                     //          ['es6',.7,'skyBlue'],
                     //          ['vue',.7,'purple'],
                     //          ['react',.6,'pink'],
                     //          ['node.js',.6,'black']
                     //      ],
                     //     delay:1000
                     // })
                .addPage()
                     .addComponent({
                        width:500,
                        height :124,
                        center:true,
                        text:'掌握技能',
                        css:{
                            position:'absolute',
                            top:0,
                            lineHeight:'46px',
                            fontSize:'36px',
                            textAlign:'center',
                            fontWeight:'900',
                            color:'rgb(255,255,200)',
                            opacity:0,
                        },
                        animateIn:{
                            top:maxHeight/10,
                            opacity:1
                        },
                        animateOut:{
                            top:0,
                            opacity:0
                        },
                        delay:200
                     })
                     .addComponent({
                        width:428,
                        height :maxHeight/9,
                        center:true,
                        text:'用折线图表示',
                        css:{
                            position:'absolute',
                            top:0,
                            opacity:0,
                            lineHeight:'25px',
                            textAlign:'center',
                            fontWeight:900,
                            fontSize:'25px',
                            color:'rgb(255,255,200)'
                        },
                        animateIn:{
                            top:maxHeight/4,
                            opacity:1
                        },
                        animateOut:{
                            top:0,
                            opacity:0
                        },
                        delay:600
                    })
                     .addComponent({
                         type:'Poly',
                        width:640,
                        height :500,
                        center:true,
                        css:{
                            position:'absolute',
                            bottom:0,
                            opacity:0,
                            fontWeight:900
                        },
                        animateIn:{
                            bottom:100,
                            opacity:1
                        },
                        animateOut:{
                            bottom:0,
                            opacity:0
                        },
                          data:[
                              ['html',.9,'red'],
                              ['js',.8,'orange'],
                              ['css',.9,'yellow'],
                              ['node',.6,'black'],
                              ['h5',.6,'blue'],
                              ['es6',.7,'skyBlue'],
                              ['vue',.7,'purple'],
                              ['react',.6,'pink'],
                              ['jq',.7,'green'],
                        ],
                        delay:1000
                    })
                .addPage()
                     .addComponent({
                        width:500,
                        height :124,
                        center:true,
                        text:'平时时间利用',
                        css:{
                            position:'absolute',
                            top:0,
                            lineHeight:'46px',
                            fontSize:'36px',
                            textAlign:'center',
                            fontWeight:'900',
                            color:'rgb(255,255,200)',
                            opacity:0,
                        },
                        animateIn:{
                            top:maxHeight/10,
                            opacity:1
                        },
                        animateOut:{
                            top:0,
                            opacity:0
                        },
                        delay:200
                     })
                     .addComponent({
                         type:'pie',
                        width:500,
                        height :500,
                        center:true,
                        css:{
                            position:'absolute',
                            bottom:0,
                            opacity:0,
                            fontWeight:900
                        },
                        animateIn:{
                            bottom:maxHeight/4,
                            opacity:.6
                        },
                        animateOut:{
                            bottom:0,
                            opacity:0
                        },
                          data:[
                        ['学习',0.6,'red'],
                        ['聚会',0.1,'lightGreen'],
                        ['户外运动',0.2,'pink'],
                        ['看书',0.1,'yellow']
                        ],
                        delay:1000
                    })
                .addPage()
                    .addComponent({
                        name:'back',
                        width:48,
                        height :26,
                        center:true,
                        css:{
                            position:'absolute',
                            top:0,
                            color:'rgb(255,255,200)',
                            opacity:0,
                            backgroundImage:'url(./src/img/back.png)'
                        },
                        animateIn:{
                            top:30,
                            opacity:1
                        },
                        animateOut:{
                            top:0,
                            opacity:0
                        },
                        event:{
                            click:()=>{
                                ManageObj.oContainer.fullpage.moveTo(1);
                            }
                        },
                        delay:200
                    })
                    .addComponent({
                        width:400,
                        height :60,
                        center:true,
                        name:'strgth',
                        text:'周鑫',
                        css:{
                            position:'absolute',
                            top: maxHeight/4,
                            left:0,
                            lineHeight:'30px',
                            fontSize:'30px',
                            textAlign:'center',
                            fontWeight:'900',
                            color:'rgb(255,255,200)',
                            opacity:0
                        },
                        animateIn:{
                            left:'48%',
                            opacity:1
                        },
                        animateOut:{
                            left:0,
                            opacity:0
                        },
                        delay:1000
                    })
                    .addComponent({
                      width:400,
                      height :60,
                      center:true,
                        name:'strgth',
                      text:'前端工程师',
                      css:{
                          position:'absolute',
                          top:maxHeight/4 + 40 ,
                          left:0,
                          lineHeight:'30px',
                          fontSize:'30px',
                          textAlign:'center',
                          fontWeight:'900',
                          color:'rgb(255,255,200)',
                          opacity:0
                      },
                      animateIn:{
                          left:'48%',
                          opacity:1
                      },
                      animateOut:{
                          left:0,
                          opacity:0
                      },
                      delay:1000
                    })
                    .addComponent({
                        width:370,
                        height :96,
                        center:true,
                        text:'对编程充满热爱！',
                        css:{
                            position:'absolute',
                            bottom:maxHeight/3,
                            lineHeight:'25px',
                            fontSize:'20px',
                            textAlign:'center',
                            fontWeight:'900',
                            color:'rgba(250,250,200)',
                            opacity:0,
                        },
                        animateIn:{
                            opacity:1
                        },
                        animateOut:{
                            opacity:0
                        },
                        delay:2000
                    })
            .load();
