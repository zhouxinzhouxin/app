import './jqui.js';
import './jqfp.js';
import ManageObj from './Manage.js';

let maxHeight = window.innerHeight;
let maxWidth = window.innerWidth;
  ManageObj
            .init('wrapper')
                .addPage('index')
                    .addComponent({
                        text: '个人简历',
                        class: 'resume',
                        animateIn:{
                            top: maxHeight/7,
                            opacity:0.6
                        },
                        animateOut:{
                            top:-10,
                            opacity:0
                        },
                        delay:200
                    })
                    .addComponent({
                        text:'周鑫',
                        class: 'name',
                        css:{
                            top: maxHeight/4
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
                        class: 'position',
                      text:'前端工程师',
                      css:{
                          top: maxHeight/4 + 50
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
                         text:'教育背景',
                         class: 'second-title',
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
                        text:'哈尔滨理工大学',
                         class: 'third-title',
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
                          text:'...自动化专业',
                         class:'third-title',
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
                        text:'虽然专业看起来更贴近于下车间，调机械，可我有颗不安分的心，所以自学了web前端，想通过自己的努力找到自己满意的工作！',
                         class:'introduce',
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
                        class:'child',
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
                          text:'工作经验',
                        class:'second-title',
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
                          text:'2017.1-2017.3 百度糯米',
                        class:'third-title',
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
                      text:'2017.3-至今 百度AI平台部',
                        class:'third-title',
                      animateIn:{
                          top:maxHeight/4 + 50,
                          opacity:1
                      },
                      animateOut:{
                          top:0,
                          opacity:0
                      },
                      delay:1000
                    })
                    .addComponent({
                        text:'半年实习经历，我收获颇丰！',
                        class:'third-title',
                        animateIn:{
                            top:maxHeight/2,
                            opacity:1
                        },
                        animateOut:{
                            top:'100%',
                            opacity:0
                        },
                        delay:1500
                    })
                    .addComponent({
                        name:'rotate',
                        class:'person-img',
                      animateIn:{
                          padding:'60% 0 0 80%',
                          bottom:40,
                          opacity:1
                      },
                      animateOut:{
                          padding:'0 0 0 0',
                          bottom:150,
                          opacity:0
                      },
                      delay:1500
                    })
                .addPage()
                      .addComponent({
                          text:'项目经历',
                          class:'second-title',
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
                          css:{
                              top:maxHeight/6
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
                          css:{
                              top:maxHeight/6 + 54 + maxHeight/50
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
                          css:{
                              top:maxHeight/6 + 142 + maxHeight/25
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
                          css:{
                              top:maxHeight/6 + 196 + maxHeight*3/50
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
                        text:'掌握技能',
                         class:'second-title',
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
                        text:'用折线图表示',
                         class:'third-title',
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
                        width:maxWidth*9/5,
                        height :maxHeight*37/50,
                         class:'Poly',
                        animateIn:{
                            bottom:maxHeight/8,
                            opacity:1
                        },
                        animateOut:{
                            bottom:0,
                            opacity:0
                        },
                          data:[
                              ['js',.9,'orange'],
                              ['es6',.7,'black'],
                              ['css',.9,'yellow'],
                              ['vue',.7,'purple'],
                              ['h5',.5,'blue'],
                              ['react',.6,'pink'],
                              ['jq',.7,'green'],
                              ['node',.5,'red'],
                        ],
                        delay:1000
                    })
                .addPage()
                     .addComponent({
                        text:'平时时间利用',
                         class:'second-title',
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
                        width:maxWidth*9/5,
                        height:maxWidth*9/5,
                         class:'Pie',
                        animateIn:{
                            bottom:maxHeight/6,
                            opacity:.6
                        },
                        animateOut:{
                            bottom:0,
                            opacity:0
                        },
                          data:[
                        ['打代码',0.6,'red'],
                        ['放松',0.1,'lightGreen'],
                        ['户外运动',0.2,'pink'],
                        ['看书',0.1,'yellow']
                        ],
                        delay:1000
                    })
                .addPage()
                    .addComponent({
                        name:'back',
                        class:'back',
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
                        name:'strgth',
                        text:'周鑫',
                        class:'strgth',
                        css:{
                            top:maxHeight/4 ,
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
                        name:'strgth',
                      text:'前端工程师',
                        class:'strgth',
                      css:{
                          top:maxHeight/4 + 40 ,
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
                        text:'对编程充满热爱！',
                        class:'third-title',
                        css:{
                            top:maxHeight*2/3,
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
