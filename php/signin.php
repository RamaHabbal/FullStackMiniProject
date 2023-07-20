<?php
include('connection.php');

$data = json_decode(file_get_contents('php://input'),true);


$first_name = $data['first_name1'];
$password = $data['password1'];

$query = $mysqli->prepare('select user_id,first_name,last_name,email,password
from users 
where first_name=?');
$query->bind_param('s', $first_name);
$query->execute();

$query->store_result();
$query->bind_result($user_id, $first_name, $last_name, $email, $hashed_password );
$query->fetch();

$num_rows = $query->num_rows();
if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = 'logged in';
        $response['user_id'] = $user_id;
        $response['first_name'] = $first_name;
        $response['last_name'] = $last_name;
        $response['username'] = $first_name;

    } else {
        $response['status'] = "wrong password";
    }
}

header('Content-Type: application/json');
echo json_encode($response);
// exit();
