/**
 * Created by marven on 2016/4/12.
 */
(function($){
    $(function() {
        "use strict";
        var common=new Common();
        var exployerInfo=common.getExplorerInfo();
        var data = [
            {name: '2013', value: 2, color: '#75c9d8'},
            {name: '2014', value: 2.5, color: '#6fc7d0'},
            {name: '2015', value: 4.8, color: '#37acc5'},
            {name: '2016', value: 9, color: '#31a1b9'},
            {name: '2017', value: 22, color: '#33a3c4'},
            {name: '2018', value: 43, color: '#31a1b9'},
        ];
        var data1 = [
            {
                name: '',
                value: [6.5, 7.5, 12, 16, 28, 50],
                color: '#b5c1c1',
                line_width: 1
            }
        ];
        if(exployerInfo.type=="IE"&&exployerInfo.version/1<=8){
            $(".about-us-chart-img").show();
            $(".about-us-chart-canvas").hide();
        }else{
            $(".about-us-chart-img").hide();
            $(".about-us-chart-canvas").show();
            var chart = new iChart.Column2D({
                animation: true,
                animation_timing_function: "ease-in",
                render: 'canvasDiv',
                data: data,
                offsetx: 50,
                border: {
                    width: 0
                },
                title: {
                    text: '',
                    color: '#4572a7',
                    textAlign: 'left',
                    padding: '0 40',
                    border: {
                        enable: false,
                        width: [0, 0, 0, 0],
                        color: '#4572a7'
                    },
                    height: 40
                },
                footnote: {
                    text: '',
                    height: 30,
                    color: '#c52120',
                    fontweight: 600,
                    padding: '0 40'
                },
                width: 1004,
                height: 480,
                padding: 0,
                label: {
                    fontsize: 12,
                    fontweight: 500,
                    color: '#a09f9b'
                },
                shadow: false,
                shadow_blur: 0,
                shadow_color: '#aaaaaa',
                shadow_offsetx: 0,
                shadow_offsety: 0,
                background_color: '#f4f9fb',
                column_width: 35,
                sub_option: {
                    label: false,
                    border: {
                        width: 0,
                        radius: '0 0 0 0',//上圆角设置
                        color: '#a09f9b'
                    }
                },
                coordinate: {
                    background_color: null,
                    grid_color: '#c0c0c0',
                    width: 760,
                    height: 350,
                    axis: {
                        color: '#a09e9b',
                        width: [0, 0, 0, 0]
                    },
                    scale: [{
                        position: 'left',
                        start_scale: 0,
                        end_scale: 50,
                        scale_space: 5,
                        scale_enable: false,
                        label: {
                            fontsize: 12,
                            fontweight: 500,
                            color: '#a09f9b'
                        },
                        labels: ["$0", "$50,000,000.00", "$100,000,000.00", "$150,000,000.00", "$200,000,000.00", "$250,000,000.00", "$300,000,000.00", "$350,000,000.00", "$400,000,000.00", "$450,000,000.00", "$500,000,000.00"]
                    }/*,{
                     position:'right',
                     start_scale : 5000000000,
                     end_scale : 50000000000,
                     scale_space : 5000000000,
                     scale_enable : false,
                     scaleAlign:'right',
                     label:{
                     fontsize:11,
                     fontweight:600,
                     color:'#666666'
                     }
                     }*/]
                }
            });
            //构造折线图
            var line = new iChart.LineBasic2D({
                animation: true,
                animation_timing_function: "ease-in",
                z_index: 1000,
                data: data1,
                label: {
                    color: 'red'
                },
                point_space: chart.get('column_width') + chart.get('column_space'),
                scaleAlign: 'right',
                smooth: true,
                sub_option: {
                    label: true,
                    hollow: false,
                    hollow_color: "#bdc8c7",
                    point_size: 10
                },
                coordinate: chart.coo//共用坐标系
            });

        };

        var drawChart=function(){
            if(exployerInfo.type=="IE"&&exployerInfo.version/1<=8){
                return ;
            }else{
                $(".about-us-chart-canvas").css({"display":"block"}).addClass("fadeIn");
                chart.plugin(line);
                chart.draw();
            }

        }
        var auConceptAnimate=function(){
            $(".concept-image").css({"display":"block"}).addClass("zoomIn");
            $(".concept-content").css({"display":"block"}).addClass("fadeInRight");
        }
        $(".js-au-waypoint").each(function(index,ele){
            var _handler=null;
            $(ele).attr("data-way-point",index);
            switch(index){
                case 0:
                    _handler=auConceptAnimate;
                    break;
                case 1:
                    _handler=drawChart;
                    break;
            }
            console.log(_handler);
            $(ele).waypoint({
                handler:function(direction){
                    _handler();
                },offset:"50%"
            });
        });
    });
})($)