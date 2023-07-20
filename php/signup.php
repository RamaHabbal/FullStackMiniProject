<?php
include('connection.php');

header("Content-Type": "application/json");
$data = json_decode(file_get_contents('php://input',true));

$first_name = $data['first_name'];
$last_name = $data['last_name'];
$email = $data['email'];
$password = $data['password'];

$check_first_name = $mysqli->prepare('select first_name from users where first_name=?');
$check_first_name->bind_param('s', $first_name);
$check_first_name->execute();
$check_first_name->store_result();
$username_exists = $check_first_name->num_rows();

if ($username_exists == 0) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(first_name,last_name,email,password) values(?,?,?,?)');
    $query->bind_param('ssss', $first_name, $last_name,$email,$hashed_password);
    $query->execute();

    $response['status'] = "success";
    $response['message'] = "another message in success";
} else {
    $response['status'] = "failed";
    $response['message'] = "another message in fail";
}

// types of http request : POST,GET,PUT,DELETE 
echo json_encode($response);
