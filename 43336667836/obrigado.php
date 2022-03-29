<!--
    Nome: Caio Duarte
    E-mail: caioduarte.eng@gmail.com
-->
<?php
    if (!isset($_SESSION)) {
        session_start();
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $_SESSION['postdata'] = $_POST;
        unset($_POST);
        header("Location: " . $_SERVER['REQUEST_URI']);
        return;
    }
?>
<!DOCTYPE html>
<html>
<head>
	<title>Marketing - Uma História de Amor</title>
    <link rel='canonical' href='https://onovomercado.com.br/obrigado'>

    <meta name='description' content='Não existe marketing sem uma história de amor.'>
    <meta name='author' content='O Novo Mercado'>
    <meta name='keywords' content='O Novo Mercado, Marketing Digital'>
    <meta name='robots' content='index,follow'>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="../43336667836/css/obrigado.css?v=<?= filemtime(__DIR__ . "/../43336667836/css/obrigado.css") ?>">

</head>
<body>
    <div class="onm-hero">
        <div class="onm-hero-bg">
            <picture>
                <source srcset="../43336667836/images/hero-h1-m.jpg" media="(max-width: 767px)">
                <source srcset="../43336667836/images/hero-h1.jpg" media="(min-width: 767px)">
                <img srcset="../43336667836/images/hero-h1.jpg" alt="">
            </picture>
        </div>
        <div class="onm-hero-wrap">
            <div class="onm-hero-info">
                <h1>Olá, <?= $_SESSION['postdata'][nome] ?>. Sua inscrição foi confirmada!</h1>
                <p>Aenean eget ultrices ipsum. Pellentesque quis laoreet massa. Mauris sed porta tellus, nec euismod est. Praesent velit ligula.</p>
            </div>
        </div>
    </div>
</body>
</html>