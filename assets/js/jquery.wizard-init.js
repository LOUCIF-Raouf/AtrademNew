/**
 * Theme: Highdmin - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Form wizard page
 */

! function ($) {
    "use strict";

    var FormWizard = function () {};

    FormWizard.prototype.createBasic = function ($form_container) {
            $form_container.children("div").steps({
                headerTag: "h3",
                bodyTag: "section",
                transitionEffect: "slideLeft",
                onFinishing: function (event, currentIndex) {
                    //NOTE: Here you can do form validation and return true or false based on your validation logic
                    console.log("Form has been validated!");
                    return true;
                },
                onFinished: function (event, currentIndex) {
                    //NOTE: Submit the form, if all validation passed.
                    console.log("Form can be submitted using submit method. E.g. $('#basic-form').submit()");
                    $("#basic-form").submit();

                }
            });
            return $form_container;
        },
        FormWizard.prototype.init = function () {
            //initialzing various forms

            //basic form
            this.createBasic($("#basic-form"));
        },
        //init
        $.FormWizard = new FormWizard, $.FormWizard.Constructor = FormWizard
}(window.jQuery),

//initializing 
function ($) {
    "use strict";
    $.FormWizard.init();
}(window.jQuery);