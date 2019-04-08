<?php
define("WEBMASTER_EMAIL", 'service-client@atradem.com');

$error = false;
$fields = array('name', 'email', 'subject', 'message', 'statut', 'source', 'nom', 'prenom', 'portable', 'telephone');

foreach ($fields as $field) {
    if (empty($_POST[$field]) || trim($_POST[$field]) == '') {
        $error = true;
    }
}

if (!$error) {
    $name = stripslashes($_POST['name']);
    $email = trim($_POST['email']);
    $subject = stripslashes($_POST['subject']);
    $message = stripslashes($_POST['message']);
    $statut = stripslashes($_POST['statut']);
    $source = stripslashes($_POST['source']);
    $nom = stripslashes($_POST['nom']);
    $prenom = stripslashes($_POST['prenom']);
    $portable = stripslashes($_POST['portable']);
    $telephone = stripslashes($_POST['telephone']);

    $mail = @mail(WEBMASTER_EMAIL, $subject, $message,
        "From: " . $name . " <" . $email . ">\r\n"
        . "Reply-To: " . $email . "\r\n"
        . "X-Mailer: PHP/" . phpversion());

    if ($mail) {
        echo "Envoyé!";
    } else {
        echo "Erreur :(";
    }
}
