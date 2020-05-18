;(function(){
    var vm = new Vue({
        el: "#app",
        data: {
            display: true,
            hide: "glyphicon glyphicon-chevron-right",
            show: "glyphicon glyphicon-chevron-left",
            val: "hide"
        },
        methods: {
            isShow() {
                if (this.display) {
                    this.display = false;
                    this.val = "hide"
                } else {
                    this.display = true
                    this.val = "show"
                }
            }
        },
    })
})()