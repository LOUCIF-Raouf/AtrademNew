<?php

try {
    $dsn = "mysql:host=localhost;dbname=atrademNew";

    $pdo = new PDO($dsn, 'root', 'root', []);

    $sql = 'SELECT * FROM `mobilier` ORDER BY name_m';

    $query = $pdo->prepare($sql);

    $query->execute([]);

    $objets = $query->fetchAll(PDO::FETCH_ASSOC);

    $salon = [];
    $chambre = [];
    $cuisine = [];
    $bureau = [];
    $sdb = [];
    $autres = [];

    foreach ($objets as $objet) {
        switch ($objet['typeMobilier_id_tm']) {
            case 1:
                array_push($salon, $objet);
                break;
            case 2:
                array_push($chambre, $objet);
                break;
            case 3:
                array_push($cuisine, $objet);
                break;
            default:
                array_push($autres, $objet);
                break;
        }
    }

} catch (PDOException $e) {
    $error = "Erreur" . $e->getMessage();
}

include 'index.phtml';
