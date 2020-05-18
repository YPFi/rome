$(function () {
    $("#select").click(function () {
        var chapter = $(".chapter").val();
        $.ajax({
            type: post,
            data: {},
            url: "",
            dataType: JSON,
            success: function (chapter) {
                if (chapter.status == 1) {
                    for (i in chapter.data) {
                        var obj = c[i]
                    }
                }
            }
        })
    })
})