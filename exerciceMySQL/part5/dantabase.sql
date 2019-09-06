#BASENAME
USE webDevelopment;
#1.
SELECT * FROM languages;
#2.
SELECT version FROM languages;
#3.
SELECT version FROM languages WHERE language IN ('PHP', 'JavaScript');
#4.
SELECT * FROM languages WHERE id IN (3, 5, 7);
#5.
SELECT * FROM languages WHERE language='JavaScript' LIMIT 2;
#6.
SELECT * FROM languages WHERE language!='PHP';
#7.
SELECT * FROM languages ORDER BY language;
