import { Outlet } from 'react-router-dom';

function Student() {
  const student = {
    firstName: 'Maxim',
    lastName: 'Kiseliov',
    admissionYear: 2023,
    major: 'Computer Science',
  };

  return (
    <div>
      <h2>Student Page</h2>
      <p>First Name: {student.firstName}</p>
      <p>Last Name: {student.lastName}</p>
      <p>Year of Admission: {student.admissionYear}</p>
      <p>Major: {student.major}</p>
    </div>
  );
}

export default Student;