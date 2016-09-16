var helloApp = angular.module("helloApp", ['ui.calendar', 'ui.bootstrap']);
helloApp.controller("CompanyCtrl", ["$scope", "$http", 'uiCalendarConfig', function ($scope, $http, uiCalendarConfig) {

    $http.get("static/json/dersler.json")
        .then(function (response) {
            $scope.courses = response.data;
        });


    $scope.user = {name: 'Ali', courses: []};

    $scope.eventSources = [];
    $scope.update_add = function (cour) {       /*Adds item to the eventS. list*/
        var index = $scope.eventSources.indexOf(cour);
        if (index == -1)
            $scope.eventSources.push(cour);

    };


    $scope.update_remove = function (cour) {        /*Removes item from the eventS. list*/
        var index = $scope.eventSources.indexOf(cour);
        if (index !== -1) $scope.eventSources.splice(index, 1);
        $scope.v = false;

    };


    $scope.remove_all_elements = function () {      /*Removes all items in the eventS. list*/
        $scope.eventSources.length = 0;

    };


    $scope.changeView = function (view, calendar) {
        uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
    };


    $scope.renderCalender = function (calendar) {
        if (uiCalendarConfig.calendars[calendar]) {
            uiCalendarConfig.calendars[calendar].fullCalendar('render');
        }
    };
    $scope.uiConfig = {
        calendar: {
            height: "auto",
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            editable: false,
            defaultView: 'agendaWeek',
            allDaySlot: false,
            firstDay: 1,

            defaultDate: '2016-01-11',
            selectable: false,
            columnFormat: "dddd",
            yearCellMinH: 60,
            dragOpacity: 0.7,
            axisFormat: 'HH:mm',
            header: {
                left: '',
                center: '',
                right: ''

            },
            eventOverlap: true,
            minTime: "9:00:00",
            maxTime: "22:00:00",

            timeFormat: {
                agenda: 'H:mm'
            },


            eventSources: $scope.eventSources


        }
    };


}]);