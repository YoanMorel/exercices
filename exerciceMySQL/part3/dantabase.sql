#BASENAME
USE webDevelopment;
#1.
ALTER TABLE languages ADD versions VARCHAR(255) NOT NULL;
#2.
ALTER TABLE frameworks ADD version INT;
#3.
ALTER TABLE languages CHANGE `versions` `version` VARCHAR(255) NOT NULL;
#4.
ALTER TABLE frameworks CHANGE `name` `framework` VARCHAR(255) NOT NULL;
#5.
ALTER TABLE frameworks MODIFY version VARCHAR(10) NOT NULL;

#TP.
#BASENAME
USE codex;
ALTER TABLE clients DROP secondPhoneNumber,
                    CHANGE `firstPhoneNumber` `phoneNumber` INT;
ALTER TABLE clients MODIFY COLUMN `phoneNumber` VARCHAR(255) NOT NULL,
                    ADD (zipCode VARCHAR(255) NOT NULL,
                          city VARCHAR(255) NOT NULL);
