
$('#btnSubmit').click(function(e){
 
    alert('The button has been hit!');
  /*  let msg = $("input[type=text]").val();
    $('<h2>' + msg + '</h2>').appendTo('div')
    $('h2').mouseover(function(){
        console.log('test');
        $('h2').css({
    'background-color': 'green',
    'border-radius': '10px'
    
        });
    }) */
   
})
$('<ul></ul>').appendTo('body');
$( "form" ).on( "submit", function(){
    alert('Form is submitted');
    let text = $("input[type=text]").val();
    $('<li>' + text + '</li>').appendTo('ul').click(function(e){
    let colors = ['Green', 'Blue', 'Purple', 'Brown', 'yellowgreen', 'brown', 'yellow', 'babyblue'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    $('li').css('color', random_color);
});
    return false;
});
$('li').click("dblclicked", function(){
    $('li').remove();
})
$("input[type=text]").on("input", function(){
    if($("input[type=text]").val()){
$('#btnSubmit').removeAttr();
    }else{
        $('#btnSubmit').attr("disabled", "disabled");
    }
})
$('<div></div>').appendTo('body');



