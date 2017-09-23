'use strict';

app.controller('SliderController', ['$scope', 'Slider' ,function ($scope, Slider) {
    var slides =  Slider.getSlides();
    console.log(slides);

    //Sunucu tamamlandığında yukarıdaki slides scope'a atanacak
    $scope.slides = [
        {
            image_url: 'img/news1.png',
            link_url: '#',
            title: 'CCleaner Malware Infects Big Tech Companies With Second Backdoor'
        },
        {
            image_url: 'img/news2.png',
            link_url: '#',
            title: 'Hacker Can Steal Data from Air-Gapped Computers Using IR CCTV Cameras'
        },
        {
            image_url: 'img/news3.png',
            link_url: '#',
            title: 'Viacom Left Sensitive Data And Secret Access Key On Unsecured Amazon Server'
        }
    ];

}]);