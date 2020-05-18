// 输入内容验证
// 倒计时
// 手机号码失去焦点
var phone_status = false;
var name_status = false;
var pass_status = false;
var repass_status = false;
$('#phone').blur(function () {
    var time = 60;
    var phone = $('#phone').val();
    if (phone.length == 0) {
        alert('手机号码不能为空');
        phone_status = false;
    } else if (isPhoneNo(phone)) {
        $('#msg').attr('disabled', 'disabled');
        phone_status = true;
        var t = setInterval(function () {
            time--;
            $('#msg').html(time + "秒");
            $('#msg').css({
                "cursor": "wait",
                "color": "black"
            });
            if (time == 0) {
                clearInterval(t);
                $('#msg').html("重新获取");
                $('#msg').removeAttr('disabled');
                $('#msg').css({
                    "cursor": "pointer",
                    "color": "red"
                });
            }
        }, 1000)
    } else {
        phone_status = false;
        alert("手机号码格式错误");
    }
});

$('#rename').blur(function () {
    var name = $(this).val();
    if (name.length <= 2) {
        alert('请输入不小于2位的用户名');
        name_status = false;
    } else {
        name_status = true;
    }
});
$('#repass').blur(function () {
    var repass = $(this).val();
    if (repass.length < 6) {
        alert('请输入不小于6位的密码');
        pass_status = false;
    } else {
        pass_status = true;
    }
});
$('#rerepass').blur(function () {
    var rerepass = $(this).val();
    var repass = $('#repass').val();
    if (repass.length < 6) {
        alert('请输入不小于6位的密码');
        repass_status = false;
    } else if (rerepass !== repass) {
        alert('两次密码不一致');
        repass_status = false;
    } else {
        repass_status = true;
    }
});

function isPhoneNo(phone) {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phone);
}

//表单提交事件
//注册表单
$("#reg").click(function () {
    var status = name_status && phone_status && pass_status && repass_status;
    // console.log(status);
    if (status) {
        $.ajax({
            type: "post",
            url: "",
            data: {},
            dataType: "json",
            error: function (error) {
                alert("注册失败，异常类型：" + error);
            }
        });
    }
})
//登录表单
$('#log').click(function () {
    $.ajax({
        type: "post",
        url: "",
        data: {},
        dataType: "json",
        success: function (status) {
            alert("登录成功");
        }
    })
})