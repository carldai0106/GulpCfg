$(function() {

    var eventData = [{
        "title": "All Day Event",
        "start": "2016-01-01",
        "id": 12
    }, {
        "title": "Long Event",
        "start": "2016-01-07",
        "end": "2016-01-10"
    }, {
        "id": "999",
        "title": "Repeating Event",
        "start": "2016-01-09T16:00:00-05:00"
    }, {
        "id": "999",
        "title": "Repeating Event",
        "start": "2016-01-16T16:00:00-05:00"
    }, {
        "title": "Conference",
        "start": "2016-01-11",
        "end": "2016-01-13"
    }, {
        "title": "Meeting",
        "start": "2016-01-12T10:30:00-05:00",
        "end": "2016-01-12T12:30:00-05:00"
    }, {
        "title": "Lunch",
        "start": "2016-01-12T12:00:00-05:00"
    }, {
        "title": "Meeting",
        "start": "2016-01-12T14:30:00-05:00"
    }, {
        "title": "Happy Hour",
        "start": "2016-01-12T17:30:00-05:00"
    }, {
        "title": "Dinner",
        "start": "2016-01-12T20:00:00"
    }, {
        "title": "Birthday Party",
        "start": "2016-01-13T07:00:00-05:00"
    }, {
        "title": "Click for Google",
        "url": "http://google.com/",
        "start": "2016-01-28"
    }];


    $('#calendar').fullCalendar({
        lang: 'en-gb',
        header: {
            left: 'prev,next,today',
            center: 'title',
            right: 'agendaDay,agendaWeek,agendaTwoWeeks,month'
        },
        selectable: true,
        editable: true,
        
        views: {
            today: {
                buttonText: "Today"
            },
            agendaTwoWeeks: {
                type: 'agenda',
                duration: {
                    days: 14
                },
                buttonText: 'Two Week'
            }
        },
        firstDay: 1,
        events: eventData, //事件数据源 
        dayClick: function(date, allDay, jsEvent, view) {
            //create new schedule details
            window.location = "scheduledetails.html";
        },
        eventClick: function(calEvent, jsEvent, view) {
            //console.log(arguments);
        },
        eventRender: function(calEvent, element, view) {
            element.children('.fc-content').append(function() {
                return $('<i class="fa fa-remove fc-event-del"></i>').on('click', function(event) {                    
                    $('#calendar').fullCalendar('removeEvents', function(event) {
                        return event === calEvent;
                    });                                    
                });
            });
        }

    });

    function getCalendarArea() {
        var winHeight = $(window).height();
        var navHeight = $("#navbar").outerHeight();
        var breadHeight = $(".breadcrumb").outerHeight();
        var pageTitleHeight = $("#page-title").outerHeight();
        var footerHeight = $("#footer").outerHeight();
        var searchBarHeight = $(".search-bar").outerHeight();

        var excludeHeight = navHeight + breadHeight + pageTitleHeight + footerHeight + searchBarHeight + 6;
        var fixedHeight = winHeight - excludeHeight;
        if (fixedHeight < 460) {
            return 460;
        }

        return fixedHeight;
    }

    function setCalendarHeight() {
        var height = getCalendarArea();
        $('#calendar').fullCalendar('option', 'height', height);
    }

    setCalendarHeight();

    $(window).on('resize', function() {
        setCalendarHeight();
    });
});