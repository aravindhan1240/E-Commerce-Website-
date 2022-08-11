<?php
@include 'config.php';
session_start();
if(!isset($_SESSION['admin_name'])){
    header('location:login_form.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin_Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="content">
            <h2>Hi,<span>Admin</span></h2>
            <h2>Welcome</h2>
            <h1><?php echo $_SESSION['admin_name'] ?></h1>
            <h4>This is an admin page</h4>
            <button type="submit"><a href="login_form.php" class="btn">Login</a></button>
            <button type="submit"><a href="register_form.php" class="btn">Register</a></button>
            <button type="submit"><a href="logout.php" class="btn">Logout</a></button>
        </div>
    </div>
</body>
</html>