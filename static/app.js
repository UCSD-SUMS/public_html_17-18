/* global $ */
import "default.css";
import "fullcalendar";
import ICAL from "ical.js";

Date.prototype.addHours = function(h) {
	this.setHours(this.getHours() + h);
	return this;
}
const now = new Date();

const initCalendar = (events) => {
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek'
		},
		defaultDate: now,
		defaultView: 'month',
		selectable: false,
		editable: false,
		events: events,
		eventRender: function(event, element) {
			$(element).tooltip({title: event.title});
		}
	});
};

const getICSData = () => {
	$.ajax({
		type: 'GET',
		url: '/events.ics',
		success: (result) => {
			const eventData = new ICAL.Component(
				ICAL.parse(result)
			).getAllSubcomponents();

			const events = eventData.map(a => {
				return {
					title: a.getFirstPropertyValue('summary'),
					start: a.getFirstPropertyValue('dtstart').toJSDate(),
					end: a.hasProperty('dtend') ?
						a.getFirstPropertyValue('dtend').toJSDate() : a.getFirstPropertyValue('dtstart').toJSDate().addHours(1),
					url: a.getFirstPropertyValue('url')
				}
			});

			initCalendar(events);
		}
	});
};

$(document).ready(getICSData);
