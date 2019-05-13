<?php

	$from = 'support@sahar-spa.ru';
	$to  = 'info@sahar-spa.ru';

	$name = trim($_POST['name']);
	$phone = trim($_POST['phone']);

	$subject = 'Обратный звонок «Сахар»';

	$message = '<p><strong>Имя:</strong>  ' . $name;
	$message .= '<p><strong>Телефон:</strong> ' . $phone;

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
	$headers .= 'From:' . $from . "\r\n";

	mail($to, $subject, $message, $headers);

?>