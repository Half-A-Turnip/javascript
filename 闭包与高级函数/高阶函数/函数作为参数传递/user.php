<?php
header('Content_Type:application/json;charset=UTF-8');
$userId=$_REQUEST['userId'];
$output={};
if($userId==1213){
    $output.$userName="zsk";
}
echo json_encode($output);