const scrollTop = () => {
let btn = $('#button')
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
}

export { scrollTop }
