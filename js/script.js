// owl carousel

$(".owl-carousel").owlCarousel({
    margin:10,
    responsiveClass: true,
    responsive:{
       0:{
            items: 1
       },

       680:{
            items: 2
       },
        
       590:{
            items: 3
       },  
    }
});


// google maps

    function initMap() {
        let uluru = {lat: 51.509865, lng: -0.118092};
        
        let map = new google.maps.Map(
            document.getElementById('map'), {zoom: 13, center:uluru}
        );
        let marker = new google.maps.Marker({position: uluru, map: map})
        
    }

