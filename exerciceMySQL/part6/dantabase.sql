#BASENAME
USE webDevelopment;
#1.
SELECT * FROM frameworks WHERE version LIKE '2.%';
#2.
SELECT * FROM frameworks WHERE id IN (1, 3);
#3.
SELECT * FROM ide WHERE `date` BETWEEN '2010-01-01' AND '2011-12-31';
