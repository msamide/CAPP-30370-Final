$(window).on('load resize', function(){
  var $widthvalue = $(window).width();
  console.log('width', $widthvalue);
});

$('#hurdlepic').on("click", function(){
  var hurdlepic = $('#hurdlepic');
  var width = hurdlepic.width();
  var height = hurdlepic.height();
  console.log('Title:', hurdlepic.attr('alt'));
  console.log('width', width);
  console.log('height', height);
});

$('#header0').on('click', function(){
  var header0 = $('#header0');
  console.log('Text:', $(this).text());
  var fontsize = header0.css('font-size');
  console.log('Font Size:', fontsize);
  var color = header0.css('color');
  console.log('Text Color:', color);
});


$('#header1').on('click', function(){
  var header1 = $('#header1');
  console.log('Text:', $(this).text());
  var fontsize = header1.css('font-size');
  console.log('Font Size:', fontsize);
  var color = header1.css('color');
  console.log('Text Color:', color);
});

$('#header2').on('click', function(){
  var header2 = $('#header2');
  console.log('Text:', $(this).text());
  var fontsize = header2.css('font-size');
  console.log('Font Size:', fontsize);
  var color = header2.css('color');
  console.log('Text Color:', color);
});

$('#header3').on('click', function(){
  var header3 = $('#header3');
  console.log('Text:', $(this).text());
  var fontsize = header3.css('font-size');
  console.log('Font Size:', fontsize);
  var color = header3.css('color');
  console.log('Text Color:', color);
});

