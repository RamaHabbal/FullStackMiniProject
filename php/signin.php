<?php
include('connection.php');

$first_name = $_POST['first_name'];
$password = $_POST['password'];

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
        $response['user_id'] = $id;
        $response['first_name'] = $first_name;
        $response['last_name'] = $last_name;
    } else {
        $response['status'] = "wrong password";
    }
}
echo json_encode($response);