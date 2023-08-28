var prevScrollpos = window.scrollY;

    window.onscroll = function() {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bar").classList.remove("hidden");
      } else {
        document.getElementById("nav-bar").classList.add("hidden");
      }
      prevScrollpos = currentScrollPos;
    }
function initMap() {
    // Coordenadas da localização (latitude e longitude)
    var location = { lat: -23.550520, lng: -46.633308 }; // Exemplo: São Paulo, Brasil
    
    // Criar um mapa com as coordenadas definidas
    var map = new google.maps.Map(document.getElementById('mapa'), {
      center: location,
      zoom: 15 // Nível de zoom
    });
    
    // Marcar a localização no mapa
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Localização da Empresa'
    });
  }
