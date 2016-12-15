$(document).ready(function (){
    
    //create the controller
    var controller = new ScrollMagic.Controller();
    
    //pin the nav bar
    var navBarTl = new TimelineLite();
    navBarTl
            .to($('#header'),0.2,{backgroundColor: "rgba(0,0,0,0.7)"});
    
    var pinNavBar = new ScrollMagic.Scene({
        triggerElement: ".boxes",
        triggerHook: 0.99
    })
    .setTween(navBarTl)
//    .addIndicators({name:"pin", colorStart: "red",colorEnd: "red",colorTrigger: "red"})
    .addTo(controller);   
    
    // get all slides
    var slides = document.querySelectorAll(".section");

    // create scene for every slide
    for (var i=0; i<slides.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: slides[i],
                triggerHook: "onLeave"
            })
            .setPin(slides[i])
            .addTo(controller);
    }
    
    //boxes scene
    var leftTl = new TimelineLite();
    leftTl 
            .from($("#box-one"),0.3,{x: -500, ease:Power1.easeOut})
            .to($("#box-one"),0.3,{autoAlpha: 1, ease:Power1.easeOut},"-0.2")
    
    var leftScene = new ScrollMagic.Scene({
        triggerElement: "#box-one",
        triggerHook: 0.66
    })
    .setTween(leftTl)
    .addTo(controller);
    
    var rightTl = new TimelineLite();
    rightTl 
            .from($("#box-two"),0.3,{x: +500, ease:Power1.easeOut})
            .to($("#box-two"),0.3,{autoAlpha: 1, ease:Power1.easeOut},"-0.2")
    
    var rightScene = new ScrollMagic.Scene({
        triggerElement: "#box-two",
        triggerHook: 0.66
    })
    .setTween(rightTl)
    .addTo(controller);
    
});

