var body = $('body');

$(document).ready(function() {
    dropdownActions();
    showLabel();
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

function showLabel() {
    $('input, textarea').focus(function() {
        $(this).parent().find('label span').fadeIn(200);
        $(this).attr('placeholder', '');
    });
    $('input, textarea').focusout(function() {
        $(this).parent().find('label span').fadeOut(200);
        $(this).attr('placeholder', $(this).attr('data-placeholder'));
    });
}

function countCharacters() {
    let maxCharacter = 200;

    $('.message_textarea').on('keyup', function() {
        let numberOfCharacters = $('.message_textarea').val().length;
        $('.remain_character').html(maxCharacter - numberOfCharacters);

    });
}