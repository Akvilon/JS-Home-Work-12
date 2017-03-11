

$(function() {

var html = $('#myPage').html();

var data = {
    title: 'Pavlov Eugen',
    headerPar: 'Logistics manager at Avtologistika LTD',
    title2: 'I want to learn Front-end because:',
    li1: "i'll see the results of my work",
    li2: "i'll work with clever, interesting and creativ people",
    li3: "FE it's a magic",
    li4: "FE it's a way for my personal freedom",
    title3: 'My phone number:',
    phone: '+380676584594',
    title4: 'My profile in FB:',
    fb: 'facebook',
    title5: 'Feedback',
    feedbackPar: "Thank you for this task. It was interesting first work."


};

var content = tmpl(html, data);

$('body').append(content);

});
