
let $newSkill = $('.skill');

$('#addSkill').on('click',function(evt) {
    $('ul').append(`<li><button class="btn btn-danger">X</button>${$newSkill.val()}</li>`);
});

$('.btn').click(function() {
    $('li').remove();
});
