<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: X-Requested-With, Origin, Content-Type, Cookie, Accept');

$data = json_decode(file_get_contents('php://input'), true);

$servername = "localhost";
$username   = "root";
$password   = "87654321";
$dbname     = "new_taskmanager";

// Connect to MySQL database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = $data["key1"];
$taskname = $data["key2"];
$comment = $data["key3"];
$status = $data["key4"];
$attachments = $data["key5"];
$executor = $data["key6"];

$sql = "INSERT INTO task (id, taskname, comment, status, attachments, executor) VALUES ($id, '$taskname', '$comment', '$status', '$attachments', '$executor')";

$conn->query($sql);
$conn->close();
?>
