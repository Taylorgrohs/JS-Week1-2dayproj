var map;
$(document).ready(function(){
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 45.5207260, lng: -122.6796520},
      zoom:15
    });
    var marker = new google.maps.Marker({
      position: {lat: 45.5207260, lng: -122.6796520},
      map:map,
    });
  }
  initMap();
  $('#getName').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    $.get('https://api.github.com/users/' + name + '/repos', function(data) {
  console.log(data);
    $('.taylor').append('<li><a href="https://github.com/'+name+'/'+data[29].name +'">'+data[29].full_name+ '</a></li>');
});
  })
});
