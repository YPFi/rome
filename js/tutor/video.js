$(document).ready(function () {
    // console.log("已加载")
    var myVideo = document.getElementById("player");
    var vol = 0.1;  //1代表100%音量，每次增减0.1
    var time = 10; //单位秒，每次增减10秒
    // 设置有效期为30天
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);

    myVideo.disablePictureInPicture=true;
    // 视频暂停，获取视频观看进度
    myVideo.addEventListener('pause', function () {
        var curTime = myVideo.currentTime //获取当前暂停时间
        document.cookie = "curTime:" + curTime + ";expires=" + exp.toGMTString(); //将暂停时间写入cookies
        // console.log("curTime:" + curTime + ";expires=" + exp.toGMTString());
        // console.log("暂停");
    });
    // 视频播放，从上一次暂停位置开始
    myVideo.addEventListener('play', function () {
        var currentTime = document.cookie.split(';'); //从cookies获取暂停时间
        var index = currentTime.length - 1; //获取最后一个缓存值的索引
        play_time = currentTime[index].split(':');
        if (play_time) {
            myVideo.currentTime = play_time[1];
        }
        // console.log("播放");
    });

    //键盘事件
    document.onkeyup = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode === 38) {
            // 按 向上键
            myVideo.volume !== 1 ? myVideo.volume += vol : 1;
            return false;
        } else if (e && e.keyCode === 40) {
            // 按 向下键
            myVideo.volume !== 0 ? myVideo.volume -= vol : 1;
            return false;
        } else if (e && e.keyCode === 37) {
            // 按 向左键
            myVideo.currentTime !== 0 ? myVideo.currentTime -= time : 1;
            return false;
        } else if (e && e.keyCode === 39) {
            // 按 向右键
            myVideo.volume !== myVideo.duration ? myVideo.currentTime += time : 1;
            return false;
        } else if (e && e.keyCode === 32) {
            // 按空格键 判断当前是否暂停
            console.log(myVideo.paused);
            myVideo.paused === true ? myVideo.play() : myVideo.pause();
            return false;
        }
    };


});

// 页面关闭
function saveCookies() {
    //响应事件
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    var player = document.getElementById("player");
    var curTime = player.currentTime;
    document.cookie = "curTime:" + curTime + ";expires=" + exp.toGMTString(); //将暂停时间写入cookies
};