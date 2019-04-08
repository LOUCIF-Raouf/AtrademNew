<?php
$dsn = "mysql:host=host696235.onetsolutions.network;dbname=digital1_atradem";

$pdo = new PDO($dsn, 'digital1', 'pIL7b*4.lOz32C', []);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
