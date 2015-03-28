(function () {
    'use strict';

    angular.module("timePicker", [])

        .directive('rncTimePicker', function () {
            var today = new Date(new Date().toDateString());
            return {
                require: '?ngModel',
                link: function ($scope, $element, $attrs, ngModel) {
                    var initialized = false;

                    ngModel = ngModel || {
                        "$setViewValue": angular.noop
                    };

                    // where is the missing time value?
                    setTimeout(function () {
                        initialized = $element.timepicker()
                            .on('changeTime', function (ev, ui) {
                                var sec = $element.timepicker('getSecondsFromMidnight');
                                ngModel.$setViewValue(sec * 1000);
                                console.log("sec = " + sec);
                            });
                    });

                    ngModel.$render = function (val) {
                        if (!initialized) {
                            //If $render gets called before our timepicker plugin is ready, just return
                            return;
                        }
                        $element.timepicker('setTime', new Date(today.getTime() + val));
                    }
                }
            }
        })

        .directive('rncSliderRange', [function () {
            return {
                scope: {
                    min: "=min",
                    max: "=max"
                },
                link: function ($scope, $element, $attr) {
                    // where is the missing time value on the setTimeout ?
                    setTimeout(function () {
                        $element.slider()
                            .on('slide', function (ev, ui) {
                                console.log("Slider changed: " + ui.value);
                                $scope.$apply(function () {
                                    $scope.current = ui.value;
                                });
                            });
                        $element.slider({min: $scope.min});
                        $element.slider({max: $scope.max});
                        $element.slider("enable");
                    });
                }
            };
        }]);
}());
