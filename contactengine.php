<?php

$EmailTo = "lane-anderson@hotmail.com";
$Subject = "New Message";
$Name = Trim(stripslashes($_POST['name']));
$Email = Trim(stripslashes($_POST['email'])); 
$Message = Trim(stripslashes($_POST['message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "Error";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body);

// redirect to success page 
if ($success){
  print "Your message has been sent!";
}
else{
  print "Error";
}
?>