'use strict';

app.provider('Slider', [function () {
    this.slider_request = {
        method: 'GET',
        url: '/#'
    };

    // A provider method for configuring where the tracked events should been saved
    this.setSliderUrl = function(url) {
        this.slider_request.url = url;
    };

    this.$get = ['$q', 'Request', function ($q, Request) {
        var request = this.slider_request;
        return {
            getSlides: function () {
                $q.when(true).then(function() {
                    return Request.request(request); // Will be resolved
                }).then(function(response) {
                    console.log(response.status); // Success callback
                    return response.data;
                }, function(err) {
                    console.log(err); // Error callback
                });
            }
        }
    }];
}]);
