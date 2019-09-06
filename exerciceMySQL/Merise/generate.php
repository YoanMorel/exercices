<?php
$prenom = ['Emma','Louise','Jade','Alice','Chloé','Lina','Mila','Anaïs','Giulia','Alicia','Romy','Nour','Élise','Théa','Léa','Gabriel','Louis','Raphaël','Jules','Adam','Lucas','Léo','Naël','Tiago','Amir','Isaac','Nino','Ibrahim','Lyam','Lenny'];

$cours = ['Generaliste', 'Oncologue', 'neurologue'];
$prenomAfter = [];
$nom = [];

echo 'INSERT INTO `patients` (lname, fname, birth, id_physicians) VALUES ';
for ($i = 1; $i <= 20; $i++):
    $firstRand = rand(0, count($prenom) - 1);
    $secondRand = rand(0, count($prenom) - 1);
    $physicians = rand(1,5);
    $birthTimestamp = mt_rand(-1577923200, 1546300800);
    $birthDate = date('Y-m-d', $birthTimestamp);
    $fname = $prenom[$firstRand];
    $lname = $prenom[$secondRand];
    array_push($prenomAfter, $fname);
    array_push($nom, $lname);

    echo '("'.$lname.'","'.$fname.'","'.$birthDate.'",'.$physicians.'),';
endfor;
echo '<br /><br />';

 ?>
 <br /><br />
 <?php
 echo 'INSERT INTO `appointments` (lname_patient, fname_patient, id_patients, id_physicians, id_specialties) VALUES ';
 for ($i = 1; $i <= 30; $i++):
   $keyRand = rand(0, count($prenomAfter) - 1);
   $physicians = rand(1,5);
   $specialties = rand(1,3);

   echo '("'.$nom[$keyRand].'", "'.$prenomAfter[$keyRand].'", '.++$keyRand.', '.$physicians.', '.$specialties.'),';
 endfor;

  ?>
  <br /><br />
  <?php

  echo 'INSERT INTO `physicians` (lname, fname, mail, id_specialties) VALUES ';
  for ($i = 1; $i <= 5; $i++):
      $firstRand = rand(0, count($prenom) - 1);
      $secondRand = rand(0, count($prenom) - 1);
      $fname = $prenom[$firstRand];
      $lname = $prenom[$secondRand];
      $specialty = rand(1,3);
      echo '("'.$lname.'","'.$fname.'","'.strtolower($fname.$lname).'@educ.groove","'.$specialty.'"),';
  endfor;
  echo '<br /><br />';
  echo 'INSERT INTO specialties (specialty) VALUES ("Generaliste"), ("Neurologue"), ("Oncologue")';

   ?>
