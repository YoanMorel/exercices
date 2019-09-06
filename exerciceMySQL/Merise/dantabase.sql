#BASENAME

USE primarySchool;

#1.
SELECT r.lname_student, r.fname_student, r.rate, c.class 
	FROM rates r INNER JOIN classes c ON r.id_classes = c.id ORDER BY r.lname_student;

#2.
SELECT s.lname, s.fname, g.grade, t.lname, AVG(r.rate) AS overall_average FROM students s 
	LEFT JOIN teachers t ON t.id = s.id_teachers 
	LEFT JOIN grades g ON g.id = s.id_grades 
	LEFT JOIN rates r ON r.id_students = s.id 
	GROUP BY s.lname, s.fname, g.grade, t.lname;

#3.
SELECT t.lname, t.fname, c.class, s.lname, s.fname FROM teachers t
	JOIN classes c ON c.id_teachers = t.id
	JOIN students s ON s.id_teachers = t.id
	ORDER BY t.lname;

#BASENAME

USE medicalOffice;

#1.
SELECT a.appointment, pa.lname, pa.fname, ph.lname, s.specialty FROM appointments a JOIN patients pa ON a.id_patients = pa.id JOIN physicians ph ON a.id_physicians = ph.id JOIN specialties s ON a.id_specialties = s.id ORDER BY a.appointment;

#2.
SELECT ph.lname, a.appointment, p.lname, p.fname FROM physicians ph JOIN appointments a ON ph.id = a.id_physicians JOIN patients p ON p.id = a.id_patients ORDER BY ph.lname;

#3.
SELECT a.lname_patient, a.fname_patient, s.specialty, ph.lname, ph.fname, a.appointment FROM appointments a JOIN specialties s ON s.id = a.id_specialties JOIN physicians ph ON a.id_physicians = ph.id ORDER BY p.lname;

