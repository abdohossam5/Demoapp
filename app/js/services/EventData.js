eventsApp.factory('EventData', function ($http) {
    return {
        getEvent: function (successcb) {
            $http({method: 'GET', url: 'data/event/1'}).success(function (data, status, headders, config) {
                successcb(data);
            }).error(function (data, status, headders, config) {

            });
        }
    };
});
