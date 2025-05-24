const Appointments = [
  {
    id: 1,
    day: "Monday",
    date: "25",
    timings: {
      10: { treatment: "Dentist", doctor: "Dr John" },
      11: { treatment: "Heart Checkup", doctor: "Dr Seema" },
      12: { treatment: "Physiotherapy", doctor: "Dr Physio" },
    },
  },
  {
    id: 2,
    day: "Tuesday",
    date: "26",
    timings: {
      8: { treatment: "Urine Test", doctor: "Dr Lab1" },
      9: { treatment: "Blood Test", doctor: "Dr Lab2" },
      10: { treatment: "Pregnancy Test", doctor: "Dr Lab3" },
    },
  },
  {
    id: 3,
    day: "Wednesday",
    date: "27",
    timings: {
      9: { treatment: "Eye Checkup", doctor: "Dr Vision" },
      10: { treatment: "Dental Cleaning", doctor: "Dr Smile" },
      11: { treatment: "General Consultation", doctor: "Dr General" },
    },
  },
  {
    id: 4,
    day: "Thursday",
    date: "28",
    timings: {
      8: { treatment: "Thyroid Test", doctor: "Dr Hormone" },
      10: { treatment: "Nutrition Counseling", doctor: "Dr Diet" },
      12: { treatment: "Chiropractic Session", doctor: "Dr Spine" },
    },
  },
  {
    id: 5,
    day: "Friday",
    date: "29",
    timings: {
      9: { treatment: "ENT Specialist", doctor: "Dr Ear" },
      11: { treatment: "Cardiology Review", doctor: "Dr Heart" },
      13: { treatment: "Dermatology Check", doctor: "Dr Skin" },
    },
  },
  {
    id: 6,
    day: "Saturday",
    date: "30",
    timings: {
      10: { treatment: "Orthopedic Consultation", doctor: "Dr Bone" },
      12: { treatment: "Skin Treatment", doctor: "Dr Glow" },
      14: { treatment: "Mental Health Therapy", doctor: "Dr Mind" },
    },
  },
  {
    id: 7,
    day: "Sunday",
    date: "31",
    timings: {
      9: { treatment: "Full Body Checkup", doctor: "Dr Body" },
      11: { treatment: "Vaccination", doctor: "Dr Shot" },
      15: { treatment: "Follow-up Visit", doctor: "Dr Follow" },
    },
  },
];

export default Appointments;
