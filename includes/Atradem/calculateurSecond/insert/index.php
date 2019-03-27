<?php

$dsn = "mysql:host=localhost;dbname=temporaireatradem";

if (array_key_exists('name', $_POST)) {
    //insert into ddb
    try {

        $tab = [
            'name' => htmlspecialchars($_POST['name']),
            'mcube' => $_POST['mcube'],
            'type' => $_POST['type']
        ];

        $pdo = new PDO($dsn, 'root', '', []);

        $sql = 'INSERT INTO `mobilier` (`id_m` , `name_m` , `mcube_m` , `typeMobilier_id_tm`) VALUES (NULL, :name, :mcube, :type);';

        $query = $pdo->prepare($sql);

        if($query->execute($tab) == 1) {
            $good = "Bien ouej ! ".$tab['name'];
        }


    } catch (PDOException $e) {
        $error = "Erreur".$e->getMessage();
    }
}

include('index.phtml');