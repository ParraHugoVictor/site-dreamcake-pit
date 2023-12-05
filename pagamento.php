<?php

    $acess_token = "TEST-8538928978948995-112219-7171ecb0411234da9631e28f33a6e3ab-384395312";

    require_once 'vendor/autoload.php';

    MercadoPago\SDK::setAccessToken($acces_token);

    $preference = new MercadoPago\Preference();

    $item = new MercadoPago\Item();
    $item->title = 'Produtos DreamsCakes';
    $item->quantity = ['quantidade'];
    $item->price = ['subTotal'];

    $preference->back_urls = array(
        "failure" => 'localhost'
    );

?>