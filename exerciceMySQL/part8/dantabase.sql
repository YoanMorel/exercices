#BASENAME
USE development;
#1.
SELECT * FROM frameworks f LEFT OUTER JOIN languages l ON f.languagesId = l.id;
#2.
SELECT * FROM frameworks f INNER JOIN languages l ON f.languagesID = l.id;
#3.
SELECT l.name, COUNT(*) AS nb_frameworks FROM frameworks f INNER JOIN languages l ON l.id = f.languagesId GROUP BY l.name;
#4.
SELECT l.name, COUNT(*) AS nb_frameworks FROM frameworks f INNER JOIN languages l ON l.id = f.languagesId GROUP BY l.name HAVING nb_frameworks > 3;
