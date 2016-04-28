/**
 * Created by marven on 2016/4/11.
 */
(function(){
    "use strict";

    $.fn.niceCheck=function(option){
        var defaults={
            type:"checkbox",
            hasText:false,
            textStyle:{},
            idSuffix:new Date().getTime()
        }
        var settings= $.extend({},defaults,option);

        var labelClick=function(e){
            //alert("click");
            var eve=e||event;
            var ele=eve.target;
            /**
             * 如果是单选按钮，选中当前选项，并反选name相同的其他项
             */
            if(settings.type=="radio"){
                var _name=$(ele).attr("data-name");
                $(".nc-label-radio[data-name="+_name+"]").removeClass("checked");
                $(ele).addClass("checked");
            }
            //如果是复选框，直接选中或不选中
            else{
                if($(ele).is(".checked")){
                    $(ele).removeClass("checked")
                }else{
                    $(ele).addClass("checked");
                }
            }
        };
        $(this).each(function(index,ele){
            var _id=$(ele).attr("id");
            if(_id=="undefined"||_id==null||_id==""){

                _id="nice-check-"+settings.idSuffix+"-"+index;
                $(ele).attr("id","nice-check-"+settings.idSuffix+"-"+index);
            }
            var _label=$("<label class='nc-label'></label>");
            /**
             * 如果需要添加点击后面的文字选中功能，则生成内容
             */
            if(settings.hasText){
                var _text=$(ele).next("span.nc-label-text").text();
                _label.css(settings.textStyle).text(_text);
                $(ele).next("span.nc-label-text").remove();
            }
            /**
             * 根据单选框复选框类型添加class
             */
            if(settings.type=="checkbox"){
                _label.addClass("nc-label-checkbox");
            }else{
                _label.addClass("nc-label-radio");
                //如果是单选，需要为空间编组，通过name属性的值编组
                _label.attr("data-name",$(ele).attr("name"));
            }
            if($(ele).is(":checked")){
                _label.addClass("checked");
            }
            _label.attr("for",_id);
            //绑定点击事件，实现选中和不选中的切换效果
            _label.on("click",{},labelClick);
            //将label空间添加到页面
            _label.insertAfter($(ele));
            //隐藏原始控件
            $(ele).addClass("nc-input");
        })
    }
})()
