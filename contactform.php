<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$email_from= 'bt20ece085@iiitn.ac.in';
$email_subject = "New Form Submission";
$email_body = "User Name: $name. In".
"User Email: $visitor_email. In".
Iuser Message: $message.\n";
$to = "ritikrangariinternship@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
mail($to, $email_subject, $email_body, $headers);
header("Location: index.html");
?>
