"use strict";

(function(){

    angular
        .module("DrwnCenterBoxItem")
        .directive("acadCrudBoxItem", Directive);

    function Directive(){
        return {
            restrict: "E",
            transclude: true,
            templateUrl: "./dist/templates/components/box-item/center/center-box-item.template.html",
            scope: {
                title: "@",
                columns: "=",
                data: "=",
                noDataText: "@",
                addMethod: "&",
                addLabel: "=",
                editMethod: "&",
                editLabel: "=",
                deleteMethod: "&",
                deleteLabel: "="
            }
        };
    }

})();
