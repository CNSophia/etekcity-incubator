/**
 * Created by marven on 2016/4/9.
 */
(function($) {
    var ServiceDetail = function () {
        var sd = this;

    };
    ServiceDetail.prototype.advantageAnimate = function () {
        $(".advantage-list .adv-1").show({
            duration: 800,
            easing: "easeOutBounce",//可省略
            complete: function () {

            }
        });
        setTimeout(function () {
            $(".advantage-list .adv-2").show({
                duration: 800,
                easing: "easeOutBounce",//可省略
                complete: function () {

                }
            })
        }, 500);
        setTimeout(function () {
            $(".advantage-list .adv-3").show({
                duration: 600,
                easing: "easeOutBounce",//可省略
                complete: function () {

                }
            })
        }, 1050);
        setTimeout(function () {
            $(".advantage-list .adv-4").show({
                duration: 500,
                easing: "easeOutBounce",//可省略
                complete: function () {

                }
            })
        }, 1400);
        setTimeout(function () {
            $(".advantage-list .adv-5").show({
                duration: 400,
                easing: "easeOutBounce",//可省略
                complete: function () {

                }
            })
        }, 1900);
        setTimeout(function () {
            $(".advantage-list .adv-6").show({
                duration: 200,
                easing: "easeOutBounce",//可省略
                complete: function () {

                }
            })
        }, 2300);
        setTimeout(function () {
            $(".advantage-list .adv-7").show({
                duration: 500,
                easing: "easeOutBounce",//可省略
                complete: function () {

                }
            })
        }, 2700);
        setTimeout(function () {
            $(".advantage-title").fadeIn(800);
        }, 3200);

    };
    ServiceDetail.prototype.sdTwoPointOneAnimate = function () {
        $(".sd-2-1-bulb").css({"display": "inline-block"}).addClass("zoomIn");
        setTimeout(function () {
            //$(".sd-2-1-item-1").css({"display":"inline-block"}).addClass("fadeInLeft");
            $(".sd-2-1-item-1").css({"display": "inline-block"}).addClass("flash");
        }, 1000);
        setTimeout(function () {
            //$(".sd-2-1-item-2").css({"display":"inline-block"}).addClass("fadeInRight");
            $(".sd-2-1-item-2").css({"display": "inline-block"}).addClass("flash");
        }, 2000)
        setTimeout(function () {
            //$(".sd-2-1-item-3").css({"display":"inline-block"}).addClass("fadeInLeft");
            $(".sd-2-1-item-3").css({"display": "inline-block"}).addClass("flash");
        }, 3000);
        setTimeout(function () {
            //$(".sd-2-1-item-4").css({"display":"inline-block"}).addClass("fadeInRight");
            $(".sd-2-1-item-4").css({"display": "inline-block"}).addClass("flash");
        }, 4000)
    };
    ServiceDetail.prototype.sdTwoPointThreeAnimate = function () {
        $(".market-chanel-logo").css({"display": "inline-block"}).addClass("zoomIn");
        setTimeout(function () {
            //$(".sd-2-1-item-1").css({"display":"inline-block"}).addClass("fadeInLeft");
            $(".market-chanel-sm-logos").css({"display": "inline-block"}).addClass("fadeIn");
        }, 1000);

    };
    ServiceDetail.prototype.sdTwoPointFourAnimate = function () {
        $(".js-promotion-1").slideDown(800);

        $(".js-promotion-2").slideDown(800);

    };
    ServiceDetail.prototype.sdTwoPointFiveAnimate = function () {
        setTimeout(function () {
            $(".operation-team ul li").each(function (index, ele) {
                $(ele).show().animate({
                    left: $(ele).attr("data-pos-left"),
                    top: $(ele).attr("data-pos-top")
                }, {
                    easing: 'easeInQuart',
                    duration: 800,
                    complete: function () {
                        $(".operation-team-title").fadeIn(300);
                    }
                })
            })
        }, 200);
    };
    ServiceDetail.prototype.sdThreeAnimate = function () {
        $(".innovation-content").css({"display": "block"}).addClass("fadeInLeftBig");
        $(".innovation-images").css({"display": "block"}).addClass("zoomIn");
        setTimeout(function () {
            $(".gear-md").css({"display": "block"}).addClass("rotateIn");
        }, 300)
        setTimeout(function () {
            $(".gear-lg").css({"display": "block"}).addClass("rotateIn");
        }, 600)
        setTimeout(function () {
            $(".gear-sm").css({"display": "block"}).addClass("rotateIn");
        }, 900)
    };
//var sd=new ServiceDetail();
//sd.advantageAnimate();
    /*sd.sdTwoPointOneAnimate();
     sd.sdTwoPointThreeAnimate();
     sd.sdTwoPointFourAnimate();
     sd.sdTwoPointFiveAnimate();*/
//sd.sdThreeAnimate();
    $(document).ready(function () {
        var sd = new ServiceDetail();

        $(".js-sd-waypoint").each(function (index, ele) {
            var _handler = null;
            $(ele).attr("data-way-point", index);
            switch (index) {
                case 0:
                    _handler = sd.advantageAnimate;
                    break;
                case 1:
                    _handler = sd.sdTwoPointOneAnimate;
                    break;
                case 2:
                    _handler = sd.sdTwoPointThreeAnimate;
                    break;
                case 3:
                    _handler = sd.sdTwoPointFourAnimate;
                    break;
                case 4:
                    _handler = sd.sdTwoPointFiveAnimate;
                    break;
                case 5:
                    _handler = sd.sdThreeAnimate;
                    break;
            }
            console.log(_handler);
            $(ele).waypoint({
                handler: function (direction) {
                    _handler()
                }, offset: "50%"
            })

        })
    })
})($)