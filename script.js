var body = $('body');

$(document).ready(function() {
    dropdownActions();
});

function dropdownActions() {
    body.off('mouseenter.show_dropdown').on('mouseenter.show_dropdown', '.dropdown_holder', function() {
        $(this).find('.menu_dropdown').fadeIn();
    });

    body.off('mouseleave.hide_dropdown').on('mouseleave.hide_dropdown', '.dropdown_holder', function() {
        $(this).find('.menu_dropdown').fadeOut();
    });
}
