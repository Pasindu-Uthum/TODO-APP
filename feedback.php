<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'pasinduuthum31@gmail.com';

$email_subject = "FeedBack from the TODO Application";

$email_body = "User Name: $name.\n".
		"User Email: $visitor_email.\n".
			"User Message: $message.\n";

$to = "pasinduuthum31@gmail.com";

$headers = "From: $email_from \r\n";

$headers = "Replay-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");
?>
