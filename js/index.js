$(function () {
    //超过一定高度导航添加类名
    var nav = $("header"); //得到导航对象  
    var nav_dh = $(".nav-dh")
    var win = $(window); //得到窗口对象
    var sc = $(document); //得到document文档对象。 
    var winHeight = win.height(); //获取屏幕高度
    var navHeight = nav.height(); //得到导航对象高度
    var bannerHeight = winHeight + 'px'; //banner高度		
    var boxTop = $('.banner').height() + 'px';
    //设置css属性	
    $('.box').css('top', boxTop);
    //调整窗口大小时设置banner
    win.resize(function () {
        var boxTop = $('.banner').height() + 'px';
        $('.box').css('top', boxTop);
    });

    win.scroll(function () {
        if (sc.scrollTop() >= 100) {
            nav.addClass("on");
        } else {
            nav.removeClass("on");
        }
        //页面导航显示
        var height = $('.carousel-inner').height();
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
            nav_dh.hide();
        } else if (sc.scrollTop() >= (height - 60)) {
            nav_dh.show();
        } else {
            nav_dh.hide();
        }
    });


    //移动端展开nav
    $('#navToggle').on('click', function () {
        $('.m_nav').addClass('open');
    })
    //关闭nav
    $('.m_nav .top .closed').on('click', function () {
        $('.m_nav').removeClass('open');
    })

    //二级导航  移动端
    $(".m_nav .ul li").click(function () {
        $(this).children("div.dropdown_menu").slideToggle('slow')
        $(this).siblings('li').children('.dropdown_menu').slideUp('slow');
    });

    //设置搜索框位置
    var bannWidth = win.width(); //屏幕宽
    var bannHeight = $('.banner').height(); //banner图片高
    var seltWidth = $('.select').width(); //搜索框宽
    var seltHeight = $('.select').height(); //搜索框高
    var seltTop = (bannHeight - seltHeight) / 2 + 'px';
    var seltLeft = (bannWidth - seltWidth) / 2 + 'px';
    $('.select').css('left', seltLeft);
    $('.select').css('top', seltTop);
    //窗口改变时
    win.resize(function () {
        var bannWidth = win.width(); //banner宽
        var bannerHeight = $('.banner').height(); //banner图片高
        var seltWidth = $('.select').width(); //搜索框宽
        var seltHeight = $('.select').height(); //搜索框高
        var seltTop = (bannerHeight - seltHeight) / 2 + 'px';
        var seltLeft = (bannWidth - seltWidth) / 2 + 'px';
        $('.select').css('left', seltLeft);
        $('.select').css('top', seltTop);
    });

    //页面导航
    $('.nav-dh ul li').click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(this).children().css('color', 'white')
    });

    //设置新闻页导航宽度
    hot_width = $('.hot-ul').width();
    $('.hot-ul > ul >li').css({
        "width": hot_width
    })
    win.resize(function () {
        hot_width = $('.hot-ul').width();
        $('.hot-ul > ul >li').css({
            "width": hot_width
        })
    })
    // console.log(hot_width);
})