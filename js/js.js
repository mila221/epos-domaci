$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 70;
          if ($(window).scrollTop() > navHeight) {
              $('.meni').addClass('fixed');
          }
          else {
              $('.meni').removeClass('fixed');
          }
     });

     $(".telefon-ikonica").click(function(){
       $(".telefon-meni").toggleClass("expanded");
     });
     $(".telefon-lista").click(function(){
        $(".telefon-meni").removeClass("expanded");
      });
      $("#kontakt-forma").submit(function(){
        alert("Uspesno ste poslali pitanje. Odgovoricemo uskoro!");
      });
      $(".img1").click(function(){
        $("#hrana").css("display", "block");
        $("#pice").css("display", "none");

      });
      $(".img2").click(function(){
        $("#hrana").css("display", "none");

        $("#pice").css("display", "block");

      });
    
 });

 function validateForm() {
    var ime = document.forms["rez"]["ime"].value;
    var br = document.forms["rez"]["broj"].value;

    let isnum = /^\d+$/.test(br);
    if (ime.length<5){
        alert("Ime je nepravilno")
        return false;
    }
    if(!isnum){
        alert("Broj uneti u formatu 061111111")
        return false;
    }

    confirm("Rezervacija je sacuvana!");
    return true;
  }