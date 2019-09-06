#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------

#------------------------------------------------------------
# Database: primarySchool
#------------------------------------------------------------

CREATE DATABASE IF NOT EXISTS primarySchool;

USE primarySchool;

#------------------------------------------------------------
# Table: teachers
#------------------------------------------------------------

CREATE TABLE teachers(
        id    Int  Auto_increment  NOT NULL ,
        lname Varchar (60) NOT NULL ,
        fname Varchar (60) NOT NULL ,
        mail  Varchar (320) NOT NULL
	,CONSTRAINT teachers_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: grades
#------------------------------------------------------------

CREATE TABLE grades(
        id    Int  Auto_increment  NOT NULL ,
        grade Varchar (60) NOT NULL
	,CONSTRAINT grades_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: students
#------------------------------------------------------------

CREATE TABLE students(
        id          Int  Auto_increment  NOT NULL ,
        lname       Varchar (255) NOT NULL ,
        fname       Varchar (255) NOT NULL ,
        id_teachers Int NOT NULL ,
        id_grades   Int NOT NULL
	,CONSTRAINT students_PK PRIMARY KEY (id)

	,CONSTRAINT students_teachers_FK FOREIGN KEY (id_teachers) REFERENCES teachers(id)
	,CONSTRAINT students_grades0_FK FOREIGN KEY (id_grades) REFERENCES grades(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: classes
#------------------------------------------------------------

CREATE TABLE classes(
        id          Int  Auto_increment  NOT NULL ,
        class       Varchar (60) NOT NULL ,
        id_teachers Int NOT NULL
	,CONSTRAINT classes_PK PRIMARY KEY (id)

	,CONSTRAINT classes_teachers_FK FOREIGN KEY (id_teachers) REFERENCES teachers(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: rates
#------------------------------------------------------------

CREATE TABLE rates(
        id            Int  Auto_increment  NOT NULL ,
        lname_student Varchar (255) NOT NULL ,
        fname_student Varchar (255) NOT NULL ,
        rate          Float NOT NULL ,
        id_students   Int NOT NULL ,
        id_classes    Int NOT NULL
	,CONSTRAINT rates_PK PRIMARY KEY (id)

	,CONSTRAINT rates_students_FK FOREIGN KEY (id_students) REFERENCES students(id)
	,CONSTRAINT rates_classes0_FK FOREIGN KEY (id_classes) REFERENCES classes(id)
)ENGINE=InnoDB;

