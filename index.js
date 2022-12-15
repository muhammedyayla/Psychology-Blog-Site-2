
$(function() {
  
  // Anchor Target Scroll Animation
  
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 600);
        return false;
      }
    }
  });
  
  // Header Shadow

  $(window).scroll(function() {
    var windowScroll = $(this).scrollTop();
    
    if (windowScroll > 304) {
      $(".navbar-fixed-top").addClass("shadow");
    } else {
      $(".navbar-fixed-top").removeClass("shadow");
    }
  }); 
});


function scrollIntoAbout() {
document.getElementById("duhan").scrollIntoView({
  behavior: 'smooth',
  block: 'center',
  inline: 'center'
});
}

function scrollIntoService() {
document.getElementById("our-service").scrollIntoView({
  behavior: 'smooth',
  block: 'center',
  inline: 'center',
  
});
}

function scrollIntoReferrer() {
document.getElementById("referrer-info").scrollIntoView({
  behavior: 'smooth',
  block: 'center',
  inline: 'center'
});
}

function scrollIntoContact() {
document.getElementById("contact").scrollIntoView({
  behavior: 'smooth',
  block: 'center',
  inline: 'center'
});
}

function scrollIntoTop() {
document.getElementById("top-page").scrollIntoView({
  behavior: 'smooth',
  block: 'center',
  inline: 'center'
});
}

