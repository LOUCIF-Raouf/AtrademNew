<?php
define("WEBMASTER_EMAIL", 'service-client@atradem.com');

$error = false;
$fields = array('email', 'devis');

foreach ($fields as $field) {
    if (empty($_POST[$field]) || trim($_POST[$field]) == '') {
        $error = true;
    }
}

if (!$error) {
    $email = trim($_POST['user_email']);
    $devis = stripslashes($_POST['resume_container']);
    $name = "Atradem.com";

    $mail = @mail(WEBMASTER_EMAIL, "Nouveau Devis Envoyé Par Mail", $devis,
        "From: " . $name . " <" . $email . ">\r\n"
        . "Reply-To: " . $email . "\r\n"
        . "X-Mailer: PHP/" . phpversion());

    $mail1 = @mail($email, $subject, $message,
        "From: " . $name . " <" . WEBMASTER_EMAIL . ">\r\n"
        . "Reply-To: " . WEBMASTER_EMAIL . "\r\n"
        . "X-Mailer: PHP/" . phpversion());

    if ($mail && $mail1) {
        echo "Envoyé!";
    } else {
        echo "Erreur :(";
    }
}
