$(function () {
    var win = $(window); //获取窗口对象
    var video = $(".video") //获取视频对象
    var player = $("#player") //获取播放器对象
    var navBar = $(".navBar") //获取导航对象
    var box = $(".box") //获取box盒子对象
    var btn = $("#btn") //获取导航开关对象
    var video_height = win.height() - 200; //视频高度 70+70+30+30
    var video_width = win.width() - 560; //视频宽度 320+120+120=560 
    var box_height = win.height() - 70; //box高度
    var btn_top = (video_height - 40) / 2; //按钮居中
    // console.log(video_width);
    // console.log(video_width + "+" + video_height);
    //判断手机和电脑
    var ua = navigator.userAgent.toLocaleLowerCase();
    var pf = navigator.platform.toLocaleLowerCase();
    var isAndroid = (/android/i).test(ua) || ((/iPhone|iPod|iPad/i).test(ua) && (/linux/i).test(
            pf)) ||
        (/ucweb.*linux/i.test(ua));
    var isIOS = (/iPhone|iPod|iPad/i).test(ua) && !isAndroid;
    var isWinPhone = (/Windows Phone|ZuneWP7/i).test(ua);
    var mobileType = {
        pc: !isAndroid && !isIOS && !isWinPhone,
        ios: isIOS,
        android: isAndroid,
        winPhone: isWinPhone
    };
    if (!mobileType.pc) {
        //手机
        video_height = (9 * video_width) / 16;
        // console.log("手机页面")
    }
    // 初始化设置
    setCss(video,player,box,navBar,btn,video_width,video_height,box_height,btn_top)
    //窗口大小改变时设置视频位置
    win.resize(function () {
        var btn_top = (video_height - 40) / 2 + "px";
        var video_height = win.height() - 200; //视频高度 70+70+30+30
        var video_width = win.width() - 560; //视频宽度 320+120+120=560
        var box_height = win.height() - 70; //box高度
        // console.log("navBar_width:"+navBar_width+";video_height:"+video_height+";video_width:"+video_width+";box_height:"+box_height+";box:"+box.width())
        setCss(video,player,box,navBar,btn,video_width,video_height,box_height,btn_top)
    });


    //显示与隐藏
    btn.click(function () {
        var status = btn.val();
        // console.log(status);
        //导航隐藏
        if (status == "hide") {
            old_video_width = video.width(); //存储原来视频大小
            new_video_width = box.width() - 240; //视频新的宽度，高不变
            setCss(video,player,'','','',new_video_width,video_height)
            // console.log(new_video_width);
            //窗口大小改变时
            win.resize(function () {
                old_video_width = video.width(); //存储原来视频大小
                new_video_width = box.width() - 240; //视频新的宽度，高不变
                setCss(video,player,'','','',new_video_width,video_height)  
            });
        }
        //导航显示
        if (status == "show") {
            setCss(video,player,'',navBar,'','',video_height,'','',old_video_width)
            //窗口大小改变时
            win.resize(function () {
                new_video_width = video.width() - 320; //视频新的宽度，高不变
                console.log("s:"+new_video_width);
                setCss(video,player,'',navBar,'',new_video_width,video_height)
    
            });
        }
    });

    //窗口改变函数
    function setCss(video, player, box, navBar, btn, video_width,  video_height, box_height, btn_top,old_video_width) {
        // 视频盒子
        if (video) {
            if(old_video_width){
                // console.log(old_video_width)
                video_width = old_video_width;  //将原来宽度赋值给新的值
            }
            // console.log(video_width)
            video.css({
                "width": video_width + "px",
                "height": video_height + "px",
            });
        }
        // 播放器
        if (player) {
            if(old_video_width){
                video_width = old_video_width;  //将原来宽度赋值给新的值
            }
            player.css({
                "width": video_width + "px",
                "height": video_height + "px",
            });
        }
        if (box) {
            //初始化box大小
            box.css({
                "height": box_height + "px",
            });
        }
        if (navBar) {
            //初始化导航栏位置
            if(old_video_width){
                video_width = old_video_width;  //将原来宽度赋值给新的值
            }
            navBar.css({
                "left": video_width + 120 + "px",
                "height": video_height + "px",
            })
        }
        if(btn){
            //设置按钮位置
            $(".show-btn").css({
                "top": btn_top+ "px"
            })
        }
    }
})