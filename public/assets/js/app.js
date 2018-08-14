$(function() {
  // set owl carousel
  $('.slides').owlCarousel({
    nav: true,
    center: true,
    loop: false,
    dots: false,
    margin: 20,
    responsive: {
      1200: {
        items: 3
      },
      990: {
        itesm: 2
      },
      0: {
        items: 1
      }
    }
  });
});
