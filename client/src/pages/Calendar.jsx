// import React, { useState } from "react";
// import format from "date-fns/format";
// import getDay from "date-fns/getDay";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import DatePicker from "react-datepicker";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "react-datepicker/dist/react-datepicker.css";
// import { Modal, Button } from "antd";

// const locales = {
//   "en-US": require("date-fns/locale/en-US"),
// };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const events = [
//   {
//     title: "Big Meeting",
//     allDay: true,
//     start: new Date(2021, 6, 0),
//     end: new Date(2021, 6, 0),
//   },
//   {
//     title: "Vacation",
//     start: new Date(2021, 6, 7),
//     end: new Date(2021, 6, 10),
//   },
//   {
//     title: "Conference",
//     start: new Date(2021, 6, 20),
//     end: new Date(2021, 6, 23),
//   },
// ];

// function AdminCalendar() {
//   const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
//   const [allEvents, setAllEvents] = useState(events);

//   const [isModalVisible, setIsModalVisible] = useState(false);
//   function handleAddEvent() {}

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleOk = () => {
//     setAllEvents([...allEvents, newEvent]);
//     setIsModalVisible(false);
//     setNewEvent({ title: "", start: "", end: "" });
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <div className="AdminCalendar">
//       <h1>Calendar</h1>
//       <div>
//         <Button type="primary" onClick={showModal}>
//           Add +
//         </Button>
//         <Modal
//           title="Basic Modal"
//           visible={isModalVisible}
//           onOk={handleOk}
//           onCancel={handleCancel}
//         >
//           <input
//             type="text"
//             placeholder="Add Title"
//             style={{ width: "20%", marginRight: "10px" }}
//             value={newEvent.title}
//             onChange={(e) =>
//               setNewEvent({ ...newEvent, title: e.target.value })
//             }
//           />
//           <DatePicker
//             placeholderText="Start Date"
//             style={{ marginRight: "10px" }}
//             selected={newEvent.start}
//             onChange={(start) => setNewEvent({ ...newEvent, start })}
//           />
//           <DatePicker
//             placeholderText="End Date"
//             selected={newEvent.end}
//             onChange={(end) => setNewEvent({ ...newEvent, end })}
//           />
//         </Modal>
//       </div>
//       <Calendar
//         localizer={localizer}
//         events={allEvents}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500, margin: "0px" }}
//       />
//     </div>
//   );
// }

// export default AdminCalendar;

import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

export const appointments = [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 6, 23, 9, 30),
    endDate: new Date(2018, 6, 23, 11, 30),
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 6, 23, 12, 0),
    endDate: new Date(2018, 6, 23, 13, 0),
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 6, 23, 14, 30),
    endDate: new Date(2018, 6, 23, 15, 30),
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 6, 24, 10, 0),
    endDate: new Date(2018, 6, 24, 11, 0),
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 6, 24, 12, 0),
    endDate: new Date(2018, 6, 24, 13, 35),
  },
  {
    title: "New Brochures",
    startDate: new Date(2018, 6, 24, 14, 30),
    endDate: new Date(2018, 6, 24, 15, 45),
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 6, 25, 9, 45),
    endDate: new Date(2018, 6, 25, 11, 15),
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 6, 25, 12, 0),
    endDate: new Date(2018, 6, 25, 14, 0),
  },
  {
    title: "Upgrade Personal Computers",
    startDate: new Date(2018, 6, 25, 15, 15),
    endDate: new Date(2018, 6, 25, 16, 30),
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 6, 26, 11, 0),
    endDate: new Date(2018, 6, 26, 12, 0),
  },
  {
    title: "Prepare 2015 Marketing Plan",
    startDate: new Date(2018, 6, 26, 11, 0),
    endDate: new Date(2018, 6, 26, 13, 30),
  },
  {
    title: "Brochure Design Review",
    startDate: new Date(2018, 6, 26, 14, 0),
    endDate: new Date(2018, 6, 26, 15, 30),
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2018, 6, 27, 10, 0),
    endDate: new Date(2018, 6, 27, 11, 30),
  },
  {
    title: "Upgrade Server Hardware",
    startDate: new Date(2018, 6, 27, 14, 30),
    endDate: new Date(2018, 6, 27, 16, 0),
  },
  {
    title: "Submit New Website Design",
    startDate: new Date(2018, 6, 27, 16, 30),
    endDate: new Date(2018, 6, 27, 18, 0),
  },
  {
    title: "Launch New Website",
    startDate: new Date(2018, 6, 26, 12, 20),
    endDate: new Date(2018, 6, 26, 14, 0),
  },
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 6, 16, 9, 30),
    endDate: new Date(2018, 6, 16, 15, 30),
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 6, 16, 12, 0),
    endDate: new Date(2018, 6, 16, 13, 0),
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 6, 17, 15, 45),
    endDate: new Date(2018, 6, 18, 12, 15),
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 6, 18, 12, 35),
    endDate: new Date(2018, 6, 18, 14, 15),
  },
  {
    title: "Upgrade Personal Computers",
    startDate: new Date(2018, 6, 19, 15, 15),
    endDate: new Date(2018, 6, 20, 20, 30),
  },
  {
    title: "Prepare 2015 Marketing Plan",
    startDate: new Date(2018, 6, 20, 20, 0),
    endDate: new Date(2018, 6, 20, 13, 30),
  },
  {
    title: "Brochure Design Review",
    startDate: new Date(2018, 6, 20, 14, 10),
    endDate: new Date(2018, 6, 20, 15, 30),
  },
  {
    title: "Vacation",
    startDate: new Date(2018, 5, 22),
    endDate: new Date(2018, 6, 1),
  },
  {
    title: "Vacation",
    startDate: new Date(2018, 6, 28),
    endDate: new Date(2018, 7, 7),
  },
];

const AdminCalendar = () => (
  <Paper>
    <Scheduler data={appointments} height={660}>
      <WeekView startDayHour={9} endDayHour={19} />
      <Appointments />
    </Scheduler>
  </Paper>
);
export default AdminCalendar;
