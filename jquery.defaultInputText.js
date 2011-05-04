(function($) {
    $.fn.defaultInputText = function(options) {
        /* Goes over the given selectors and then adds the title attribute
         * as default text to display for when users click out of an input
         * without entering anything.
         *
         * Usage:
         *
         *    $('input').defaultInputText();
         *    $('#my-field').defaultInputText({className: 'customThing'});
         */

        var settings = {
            'className': 'defaultInputText'
        }

        if(options) {
            $.extend(settings, options);
        }

        var classSelector = '.'+settings['className'];

        this.each(function() {
            $(this).addClass(settings['className']);
        });

        $(classSelector).focus(function(elem) {
            if ($(this).val() == $(this)[0].title) {
                $(this).removeClass(settings['className']+"Active");
                $(this).val("");
            }
        });
        $(classSelector).blur(function() {
            if ($(this).val() == "") {
                $(this).addClass(settings['className']);
                $(this).val($(this)[0].title);
            }
        });
        $(classSelector).blur();


    };
})(jQuery);