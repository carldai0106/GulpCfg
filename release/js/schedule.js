$(function(){function t(){var t=$(window).height(),e=$("#navbar").outerHeight(),n=$(".breadcrumb").outerHeight(),a=$("#page-title").outerHeight(),i=$("#footer").outerHeight(),r=$(".search-bar").outerHeight(),o=e+n+a+i+r+6,l=t-o;return 460>l?460:l}function e(){var e=t();$("#calendar").fullCalendar("option","height",e)}var n=[{title:"All Day Event",start:"2016-01-01",id:12},{title:"Long Event",start:"2016-01-07",end:"2016-01-10"},{id:"999",title:"Repeating Event",start:"2016-01-09T16:00:00-05:00"},{id:"999",title:"Repeating Event",start:"2016-01-16T16:00:00-05:00"},{title:"Conference",start:"2016-01-11",end:"2016-01-13"},{title:"Meeting",start:"2016-01-12T10:30:00-05:00",end:"2016-01-12T12:30:00-05:00"},{title:"Lunch",start:"2016-01-12T12:00:00-05:00"},{title:"Meeting",start:"2016-01-12T14:30:00-05:00"},{title:"Happy Hour",start:"2016-01-12T17:30:00-05:00"},{title:"Dinner",start:"2016-01-12T20:00:00"},{title:"Birthday Party",start:"2016-01-13T07:00:00-05:00"},{title:"Click for Google",url:"http://google.com/",start:"2016-01-28"}];$("#calendar").fullCalendar({lang:"en-gb",header:{left:"prev,next,today",center:"title",right:"agendaDay,agendaWeek,agendaTwoWeeks,month"},selectable:!0,editable:!0,views:{today:{buttonText:"Today"},agendaTwoWeeks:{type:"agenda",duration:{days:14},buttonText:"Two Week"}},firstDay:1,events:n,dayClick:function(t,e,n,a){window.location="scheduledetails.html"},eventClick:function(t,e,n){},eventRender:function(t,e,n){e.children(".fc-content").append(function(){return $('<i class="fa fa-remove fc-event-del"></i>').on("click",function(e){$("#calendar").fullCalendar("removeEvents",function(e){return e===t})})})}}),e(),$(window).on("resize",function(){e()})});