const cohort = {
  name: "July2022",
  id: 1234,
  students: ["Lisa", "Bart", "Milhouse", "Nelson", "Ralph"],
};

const cohortMessage = (cohort) => {
  return `${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`;
};
