/**
 * Components
 */
! function ($) {
    "use strict";

    var Components = function () {};

    //initializing Slimscroll
    Components.prototype.initSlimScrollPlugin = function () {
            //You can change the color of scroll bar here
            $.fn.slimScroll && $(".slimscroll-alt").slimScroll({
                position: 'right',
                size: "5px",
                color: '#98a6ad',
                wheelStep: 10
            });
        },

        //initilizing
        Components.prototype.init = function () {
            var $this = this;
            this.initSlimScrollPlugin();
        },

        $.Components = new Components, $.Components.Constructor = Components

}(window.jQuery),
//initializing main application module
function ($) {
    "use strict";
    $.Components.init();
}(window.jQuery);