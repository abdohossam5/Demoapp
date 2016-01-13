'use strict';
eventsApp.filter('durations',function(){
   return function(duration){
       switch (duration){
           case 1:
               return "Half Hour";
           case 2:
               return "One Hour";
           case 3:
               return "Half Day";
           case 4:
               return "one Day";
       }
   }
});

eventsApp.filter('levels',function(){
    return function(level){
        switch (level){
            case "introductory":
                return "/DemoApp/app/img/beginner.jpg";
            case "intermediate":
                return "/DemoApp/app/img/intermediate.png";
            case "expert":
                return "/DemoApp/app/img/expert.jpg"
        }
    }
});
