// ANMINATION MOUSE MOVE IMAGE TRANFORM
function mouseMove(tile) {
  tile

    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('img').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
      
    })

    .on('mousemove', function(e){
      $(this).children('img').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles append image
    .append('<img src ="'+tile.attr('data-image')+'">');
}

mouseMove($(".lumin"));
mouseMove($(".swell"));
mouseMove($(".walrus"));
mouseMove($(".joynit"));
mouseMove($(".bonux"));


  
// Number Increment 

function numberIncrement (a) {
    
    var valueMin = a.attr('data-min');
    var valueMax = a.attr('data-max');
    

    
    $({percentage: valueMin}).stop(true).animate({percentage: valueMax}, {
        duration : 2000,
       
        step: function () {
            // percentage with 1 decimal;
            var percentageVal = Math.round(this.percentage);
            
            a.text(percentageVal);
        }
    }).promise().done(function () {
        // hard set the value after animation is done to be
        // sure the value is correct
        a.text(valueMax);
    });


};

numberIncrement($(".service-title1"));
numberIncrement($(".service-title2"));
numberIncrement($(".service-title3"));
       

