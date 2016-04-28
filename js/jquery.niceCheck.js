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
             * ����ǵ�ѡ��ť��ѡ�е�ǰѡ�����ѡname��ͬ��������
             */
            if(settings.type=="radio"){
                var _name=$(ele).attr("data-name");
                $(".nc-label-radio[data-name="+_name+"]").removeClass("checked");
                $(ele).addClass("checked");
            }
            //����Ǹ�ѡ��ֱ��ѡ�л�ѡ��
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
             * �����Ҫ��ӵ�����������ѡ�й��ܣ�����������
             */
            if(settings.hasText){
                var _text=$(ele).next("span.nc-label-text").text();
                _label.css(settings.textStyle).text(_text);
                $(ele).next("span.nc-label-text").remove();
            }
            /**
             * ���ݵ�ѡ��ѡ���������class
             */
            if(settings.type=="checkbox"){
                _label.addClass("nc-label-checkbox");
            }else{
                _label.addClass("nc-label-radio");
                //����ǵ�ѡ����ҪΪ�ռ���飬ͨ��name���Ե�ֵ����
                _label.attr("data-name",$(ele).attr("name"));
            }
            if($(ele).is(":checked")){
                _label.addClass("checked");
            }
            _label.attr("for",_id);
            //�󶨵���¼���ʵ��ѡ�кͲ�ѡ�е��л�Ч��
            _label.on("click",{},labelClick);
            //��label�ռ���ӵ�ҳ��
            _label.insertAfter($(ele));
            //����ԭʼ�ؼ�
            $(ele).addClass("nc-input");
        })
    }
})()
