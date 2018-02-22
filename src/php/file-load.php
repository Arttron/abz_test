<?php
// В PHP 4.1.0 и более ранних версиях следует использовать $HTTP_POST_FILES
// вместо $_FILES.
mb_http_output('UTF-8'); 
mb_http_input('UTF-8'); 
$uploaddir = '/volume1/web/upload/';
$uploadfile = $uploaddir . basename($_FILES['photo']['name']);

echo '<pre>';
if (move_uploaded_file($_FILES['photo']['tmp_name'], $uploadfile)) {
    echo "Файл корректен и был успешно загружен.\n";
} else {
    echo "Возможная атака с помощью файловой загрузки!\n";
}

echo 'Некоторая отладочная информация:'.$uploadfile. "\n";
print_r($_FILES);
print_r($_POST);

?>