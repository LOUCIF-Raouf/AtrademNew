<?php

try {
    $dsn = "mysql:host=localhost;dbname=atrademnew";

    $pdo = new PDO($dsn, 'root', '', []);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);

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
    $all = [];

    foreach ($objets as $objet) {
        switch ($objet['typeMobilier_id_tm']) {
            case 1:
                array_push($salon, $objet);
                array_push($all, $objet);
                break;
            case 2:
                array_push($chambre, $objet);
                array_push($all, $objet);
                break;
            case 3:
                array_push($cuisine, $objet);
                array_push($all, $objet);
                break;
            default:
                array_push($autres, $objet);
                array_push($all, $objet);
                break;
        }
    }

} catch (PDOException $e) {
    $error = "Erreur" . $e->getMessage();
}

include 'calculateur-objet.phtml';
