var body = $('body');

$(document).ready(function() {
    dropdownActions();
    countCharacters();
});

function dropdownActions() {
    body.off('mouseenter.show_dropdown').on('mouseenter.show_dropdown', '.dropdown_holder', function() {
        $(this).find('.menu_dropdown').fadeIn(200);
    });

    body.off('mouseleave.hide_dropdown').on('mouseleave.hide_dropdown', '.dropdown_holder', function() {
        $(this).find('.menu_dropdown').fadeOut(200);
    });
}


function countCharacters () {

    let maxCharacter = 200;

    $('.character_textarea').on('keyup', function() {
        let numberOfCharacters = $('.character_textarea').val().length;
        $('.remain_character').html(maxCharacter - numberOfCharacters);

    });
}