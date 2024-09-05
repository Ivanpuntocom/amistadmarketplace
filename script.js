<!-- Añadir jQuery y Slick Carousel en el <head> de tu documento HTML -->
<link rel="stylesheet" type="text/css" href="slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="slick/slick.min.js"></script>

<script>
$(document).ready(function(){
    $('.sponsor-logos').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1
    });
});
</script>