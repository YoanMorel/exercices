#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Database: medicalOffice
#------------------------------------------------------------

CREATE DATABASE IF NOT EXISTS medicalOffice;

USE medicalOffice;

#------------------------------------------------------------
# Table: specialties
#------------------------------------------------------------

CREATE TABLE specialties(
        id        Int  Auto_increment  NOT NULL ,
        specialty Varchar (50) NOT NULL
	,CONSTRAINT specialties_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: physicians
#------------------------------------------------------------

CREATE TABLE physicians(
        id             Int  Auto_increment  NOT NULL ,
        lname          Varchar (50) NOT NULL ,
        fname          Varchar (50) NOT NULL ,
        mail           Varchar (320) NOT NULL ,
        id_specialties Int NOT NULL
	,CONSTRAINT physicians_PK PRIMARY KEY (id)

	,CONSTRAINT physicians_specialties_FK FOREIGN KEY (id_specialties) REFERENCES specialties(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: patients
#------------------------------------------------------------

CREATE TABLE patients(
        id            Int  Auto_increment  NOT NULL ,
        lname         Varchar (50) NOT NULL ,
        fname         Varchar (50) NOT NULL ,
        birth         Date NOT NULL,
        id_physicians Int NOT NULL
	,CONSTRAINT patients_PK PRIMARY KEY (id)

	,CONSTRAINT patients_physicians_FK FOREIGN KEY (id_physicians) REFERENCES physicians(id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: appointments
#------------------------------------------------------------

CREATE TABLE appointments(
        id             Int  Auto_increment  NOT NULL ,
        lname_patient  Varchar (50) NOT NULL ,
        fname_patient  Varchar (50) NOT NULL ,
        appointment    Datetime ,
        id_patients    Int NOT NULL ,
        id_physicians  Int NOT NULL ,
        id_specialties Int NOT NULL
	,CONSTRAINT appointments_PK PRIMARY KEY (id)

	,CONSTRAINT appointments_patients_FK FOREIGN KEY (id_patients) REFERENCES patients(id)
	,CONSTRAINT appointments_physicians0_FK FOREIGN KEY (id_physicians) REFERENCES physicians(id)
	,CONSTRAINT appointments_specialties1_FK FOREIGN KEY (id_specialties) REFERENCES specialties(id)
)ENGINE=InnoDB;


