/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

    /**
     * Example drupal behavior
     */
    Drupal.behaviors.masonry = {
        attach: function (context, settings) {
            $('.view-recnete-projecten, .field--name-field-project-img', context).once('masonry').each(function () {
                $(this).masonry({
                    columnWidth: '.views-row, .field__item',
                    itemSelector: '.views-row, .field__item',
                    horizontalOrder: true,
                    gutter: 50,
                    percentPosition: true
                });
            });
        }
    };

})(jQuery, Drupal);