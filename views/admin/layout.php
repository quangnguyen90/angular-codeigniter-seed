<!DOCTYPE html>
<html>
    <head>
        <base href="<?php echo base_url() ?>">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="description" content="<?php echo $site_description ?>">
        <meta name="keywords" content="<?php echo $keywords ?>">
        <meta name="author" content="<?php echo $author ?>">
        <!-- Title -->
        <title><?php echo $site_title ?></title>
        <!-- Favicons -->
        <!--<link rel="apple-touch-icon" href="">
        <link rel="icon" href="">-->

        <!--STYLES-->
        <link rel="stylesheet" href="apps/shared/styles/admin.min.css">
        <!--STYLES END-->

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body ng-app="angular-codeigniter-seed">
        <div class="wrapper">
            <div class="page-wrapper ui-view"></div>
        </div>

        <!--SCRIPTS-->
        <script src="apps/shared/scripts/admin.min.js"></script>
        <!--SCRIPTS END-->
    </body>
</html>
