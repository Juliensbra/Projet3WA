"use strict";

/***************************** AJAX **************************/


$(document).ready(function(){

  $('.formulaire').submit(function(){

    var name = $('.name').val();
    var mail = $('.mail').val();
    var content = $('.content').val();


    $.post('php/send.php', {name:name, mail:mail, content:content},function(donnees){

      $('.return').html(donnees).slideDown();
      $('.name').val('');
      $('.mail').val('');
      $('.content').val('');
    });

    return false;
  });
  
});

/************************ ANCRE SUR LA NAV *************************/

$(document).ready(function(){
		    // au clic sur un lien
		    $('.a-nav').on('click', function(evt){
		       // bloquer le comportement par défaut: on ne rechargera pas la page
		       evt.preventDefault(); 
		       // enregistre la valeur de l'attribut  href dans la variable target
		    var target = $(this).attr('href');
		       /* le sélecteur $(html, body) permet de corriger un bug sur chrome 
		       et safari (webkit) */
		    $('html, body')
		        //on arrête toutes les animations en cours 
		       .stop()
		        /*on fait maintenant l'animation vers le haut (scrollTop) vers 
		        notre ancre target */
		       .animate({scrollTop: $(target).offset().top}, 1000 );
		    });
		});

/******************* BOUTON SCROLL UP *******************/

document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(ev) {
   document.getElementById("back").className = (window.pageYOffset > 100) ? "visible" : "invisible";
  };
});


document.addEventListener('DOMContentLoaded', function() {
  var aLiens = document.querySelectorAll('a[href*="#"]');
  for(var i=0, len = aLiens.length; i<len; i++) {
    aLiens[i].onclick = function () {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = this.getAttribute("href").slice(1);
        if (target.length) {
          scrollTo(document.getElementById(target).offsetTop, 1000);
          return false;
        }
      }
    };
  }
});


function scrollTo(element, duration) {
  var e = document.documentElement;
  if(e.scrollTop===0){
    var t = e.scrollTop;
    ++e.scrollTop;
    e = t+1===e.scrollTop--?e:document.body;
  }
  scrollToC(e, e.scrollTop, element, duration);
}

function scrollToC(element, from, to, duration) {
  if (duration < 0) return;
  if(typeof from === "object")from=from.offsetTop;
  if(typeof to === "object")to=to.offsetTop;
  scrollToX(element, from, to, 0, 1/duration, 20, easeOutCuaic);
}

function scrollToX(element, x1, x2, t, v, step, operacion) {
  if (t < 0 || t > 1 || v <= 0) return;
  element.scrollTop = x1 - (x1-x2)*operacion(t);
  t += v * step;
  setTimeout(function() {
    scrollToX(element, x1, x2, t, v, step, operacion);
  }, step);
}

function easeOutCuaic(t){
  t--;
  return t*t*t+1;
}



