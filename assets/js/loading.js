(function($){

    $.loading = function (options) {
        return $.loading;
    };

    $.loading.open = function (time) {
        Swal.fire({
            iconHtml: '<i class="fas fa-spinner fa-pulse"></i>',
            allowOutsideClick: false,
            showConfirmButton: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });
        if (time) {
            setTimeout(function(){
                swal.close();
            }, parseInt(time));
        }
    };

    $.loading.close = function () {
        swal.close();
    };

})(window.jQuery||window.Zepto);

var loading= $.loading();
