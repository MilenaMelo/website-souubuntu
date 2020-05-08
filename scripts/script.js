  //Função para mudança da navbar durante o scroll da tela
  $(window).scroll(function() { 
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 160)
  });
 