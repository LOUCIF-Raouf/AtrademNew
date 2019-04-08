<?php
require "/Applications/MAMP/htdocs/AtrademNew/AtrademNew/includes/db.php";

$dbn = $_POST['id'];
$uid = $_POST['uid'];
/* $val = $_POST['qty']; */

isset($_POST['qty']) ? $val = $_POST['qty'] : $val = $_POST['label'];

$sql = $pdo->query("SELECT id FROM devis WHERE uid = $uid");
$user = $sql->fetch();
$sql->closeCursor();
if ($user) {
    $req = $pdo->prepare("UPDATE devis SET $dbn = :val WHERE uid = :uid");
} else {
    $req = $pdo->prepare("INSERT INTO devis SET $dbn = :val, uid = :uid");
}
echo $dbn, $val, $uid;
$req->execute([
    "val" => $val,
    "uid" => $uid,
]);

/* if ($val) {
for ($i = 0; $i < sizeof($val); $i++) {
}
}
 */
