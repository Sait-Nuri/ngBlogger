app.provider('Search', function () {
    this.search_request = {
        method: 'GET',
        url: '#'
    };

    this.setSearchUrl = function (url) {
        this.search_request.url = url;
    };

    this.$get = ['$q', 'Request', function ($q, Request) {
        var request = this.search_request;

        return {
            getResults: function (input) {
                $q.when(true).then(function() {
                    return Request.request(request); // Will be resolved
                }).then(function(response) {    // Success callback
                    return response.data;
                }, function(err) {  // Error callback
                    return null;
                });
            }
        }
    }];
});