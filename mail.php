<?php
// $to = $_GET['to'];
// $from = $_GET['to'];
// $to = "pagina@bosquemagico.com.mx";
// $from = "pagina@bosquemagico.com.mx";

// $subject = $_GET['subject'];
// $message = $_GET['message'];

// $headers = "From:" . $from;
// $headers .='X-Mailer: PHP/' . phpversion();
// $headers .= "MIME-Version: 1.0\r\n";
// $headers .= "Content-Type: text/html; charset=UTF-8";

// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST');
// header("Access-Control-Allow-Headers: X-Requested-With");

// $success = mail($to,$subject,$message,$headers);

// if ($success) {
//     $response = '{"status":"200"}';
// }else{
//     $response = '{"status":"500"}';
// }


// echo $response;


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    #$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'paginabosquemagic@gmail.com';                     //SMTP username
    $mail->Password   = 'magic8585';                               //SMTP password
    //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = '587';                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    // //Recipients
    $mail->setFrom('paginabosquemagic@gmail.com');
    $mail->addAddress('reservas@bosquemagico.com.mx');     //Add a recipient

    // //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_GET['subject'];
    $mail->Body    = $_GET['message'];
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $mail->CharSet = 'UTF-8';

    $mail->send();
    echo '{"status":"200"}';
} catch (Exception $e) {
    echo '{"status":"500"}';
}

?>