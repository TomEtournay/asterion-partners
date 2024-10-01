<?php 
    require_once(__DIR__ . '/vendor/autoload.php');
    use \Mailjet\Resources;
    define('API_PUBLIC_KEY', '6ac967f832699d4b93ada5098d3ccebb');
    define('API_PRIVATE_KEY', 'd2e0dc45eca49e630fec3e2b237d5bd4');
    $mj = new \Mailjet\Client(API_PUBLIC_KEY, API_PRIVATE_KEY,true,['version' => 'v3.1']);


    if(!empty($_POST['prenom']) && !empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['message']) && !empty($_POST['entreprise']) && !empty($_POST['telephone'])){
        $surname = htmlspecialchars($_POST['prenom']);
        $firstname = htmlspecialchars($_POST['nom']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);
        $entreprise = htmlspecialchars($_POST['entreprise']);
        $telephone = htmlspecialchars($_POST['telephone']);

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $body = [
            'Messages' => [
            [
                'From' => [
                'Email' => "contact@asterion-partners.com",
                'Name' => "Asterion Partners"
                ],
                'To' => [
                [
                    'Email' => "contact@asterion-partners.com",
                    'Name' => "etournay"
                ]
                ],
                'Subject' => "demande de renseignement site web",
                'TextPart' => "$surname, $firstname, $entreprise, $telephone, $email, $message", 

            ]
            ]
        ];
            $response = $mj->post(Resources::$Email, ['body' => $body]);
            $response->success();
            echo "Email envoyé avec succès !";
        }
        else{
            echo "Email non valide";
        }

    } else {
        header('Location: index.html');
        die();
    }