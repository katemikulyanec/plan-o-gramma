<?php
$fromEmail = 'test@example.com';
$toEmails = 'lead.dreamteam@gmail.com';

if(isset($_REQUEST['type']) && $_REQUEST['type']){
    $type = $_REQUEST['type'];
}else{return;}
if(((!isset($_REQUEST['email']) || !$_REQUEST['email']) && (!isset($_REQUEST['phone']) || !$_REQUEST['phone'])) || $_REQUEST['lastname']){
    die(json_encode(array('success' => false, 'message'=>'Не все обязательные поля заполнены')));
}

    
$name = $_REQUEST['name'] ? $_REQUEST['name'] : '';
$email = $_REQUEST['email'] ? $_REQUEST['email'] : '';
$form_number = $_REQUEST['form_number'] ? intval($_REQUEST['form_number']) : '';

$message = '<h2>'.$type.'</h2><table>';
if($_REQUEST['name'])
	$message .= '<tr><td>Имя:</td><td>'.$_REQUEST['name'].'</td></tr>';
if($_REQUEST['email'])
	$message .= '<tr><td>E-mail:</td><td>'.$_REQUEST['email'].'</td></tr>';
if($_REQUEST['phone'])
	$message .= '<tr><td>Телефон:</td><td>'.$_REQUEST['phone'].'</td></tr>';
if($_REQUEST['message'])
	$message .= '<tr><td>Вопрос:</td><td>'.$_REQUEST['message'].'</td></tr>';

$headers = "From: ".$fromEmail."\r\n";
$send_charset='utf-8';
$headers .= "Content-type: text/html; charset=$send_charset\r\n";
$headers .= "Mime-Version: 1.0\r\n";
mail($toEmails, $type, $message, $headers);

die(json_encode(array('success'=>'true', 'message' => '<h2>Спасибо за заявку!</h2><p>Ваша заявка отправлена менеджеру, в ближайшее время мы с Вами свяжемся.</p>')));
