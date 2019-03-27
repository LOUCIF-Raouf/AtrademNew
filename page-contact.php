<?php include './includes/header_start.php';?>

<?php include './includes/header_end.php';?>


<body class="page header-fixed no-sidebar">
    <div id="page" class="animsition clearfix">

<?php include "./includes/topbar.php";?>

        <div id="featured" class="accent-bg">
            <div id="featured-title">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="featured-title-inner">
                                <div class="featured-title-heading-wrap">
                                    <h1 class="featured-title-heading">Contactez Nous</h1>
                                </div>

                                <div id="breadcrumbs">
                                    <div class="breadcrumb-trail"><a href="#" title="Home" rel="home" class="trail-begin">Accueil</a> <span class="sep"><i class="fa fa-angle-right"></i></span> <span class="trail-end">Contact</span></div>
                                </div>
                            </div><!-- .featured-title-inner -->
                        </div><!-- .col-md-12 -->
                    </div><!-- .row -->
                </div><!-- .container -->
            </div><!-- #featured-title -->
        </div><!-- .bg-accent -->

        <div id="main-content" class="site-main clearfix">
            <div id="content-wrap">
                <div id="site-content" class="site-content clearfix">
                    <div id="inner-content" class="inner-content-wrap">
                        <div class="row-contact">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="cbr-spacer clearfix" data-desktop="140" data-mobi="110" data-smobi="110"></div>
                                    </div><!-- .col-md-12 -->

                                    <div class="col-md-4">
                                        <div class="cbr-contact-info">
                                            <div class="cbr-headings style-5">
                                                <h2 class="heading">Nous Contacter</h2>
                                            </div><!-- .cbr-headings -->

                                            <div class="cbr-icon-box style-4 clearfix icon-left-2 bg-accent align-center rounded-100 has-width w80">
                                                <div class="icon-wrap">
                                                    <i class="fa fa-map-o"></i>
                                                </div>
                                                <h3 class="heading"><a href="#">Localisation</a></h3>
                                                <p class="desc">8-10 Rue des Blés - 93210 Saint-Denis</p>
                                            </div><!-- .cbr-icon-box -->

                                            <div class="cbr-spacer clearfix" data-desktop="47" data-mobi="35" data-smobi="35"></div>

                                            <div class="cbr-icon-box style-4 clearfix icon-left-2 bg-accent-2 align-center rounded-100 has-width w80">
                                                <div class="icon-wrap">
                                                    <i class="fa fa-envelope-o"></i>
                                                </div>
                                                <h3 class="heading"><a href="#">Email</a></h3>
                                                <p class="desc">service-client@atradem.com</p>
                                            </div><!-- .cbr-icon-box -->

                                            <div class="cbr-spacer clearfix" data-desktop="47" data-mobi="35" data-smobi="35"></div>

                                            <div class="cbr-icon-box style-4 clearfix icon-left-2 bg-accent align-center rounded-100 has-width w80">
                                                <div class="icon-wrap">
                                                    <i class="fa fa-phone"></i>
                                                </div>
                                                <h3 class="heading"><a href="#">Téléphone</a></h3>
                                                <p class="desc">(+33) 01 48 22 46 10</p>
                                            </div><!-- .cbr-icon-box -->

                                            <div class="cbr-spacer clearfix" data-desktop="0" data-mobi="70" data-smobi="70"></div>
                                        </div><!-- .cbr-contact-info -->
                                    </div><!-- .col-md-4 -->

                                    <div class="col-md-8">
                                        <div class="cbr-contact-form">
                                            <h5 class="heading font-size-30 margin-bottom-45">Laisser un Message</h5>

                                            <form action="./includes/contact/contact-process.php" method="post" class="contact-form wpcf7-form">
                                                <span class="form-control-wrap your-name">
                                                    <label for="name">Votre Nom</label>
                                                    <input type="text" tabindex="1" id="name" name="name" value="" class="wpcf7-form-control" placeholder="Nom *" required>
                                                </span>
                                                <span class="form-control-wrap your-email">
                                                    <label for="email">Votre Prénom</label>
                                                    <input type="email" tabindex="2" id="email" name="email" value="" class="wpcf7-form-control" placeholder="Email *" required>
                                                </span>
                                                <span class="form-control-wrap your-phone">
                                                    <label for="phone">Votre Téléphone</label>
                                                    <input type="text" tabindex="3" id="phone" name="phone" value="" class="wpcf7-form-control" placeholder="Téléphone">
                                                </span>
                                                <span class="form-control-wrap your-subject">
                                                    <label for="phone">Sujet du Message</label>
                                                    <input type="text" tabindex="4" id="subject" name="subject" value="" class="wpcf7-form-control" placeholder="Sujet" required>
                                                </span>
                                                <span class="form-control-wrap your-message">
                                                    <label for="phone">Laisser un Message</label>
                                                    <textarea name="message" tabindex="5" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" placeholder="Ecrivez votre message:" required></textarea>
                                                </span>
                                                <div class="wrap-submit">
                                                    <button type="submit" value="Envoyer" class="submit wpcf7-form-control wpcf7-submit cbr-button out-line-1px small-button button-has-bg-2" id="submit" name="submit"><span>Envoyer Message</span></button>
                                                </div>
                                            </form>
                                        </div><!-- cbr-contact-form -->
                                    </div><!-- .col-md-8 -->

                                    <div class="col-md-12">
                                        <div class="cbr-spacer clearfix" data-desktop="100" data-mobi="60" data-smobi="60"></div>
                                    </div><!-- .col-md-12 -->
                                </div><!-- .row -->
                            </div><!-- .container -->

				            <div class="container-fluid no-padding">
				                <div class="row">
				                    <div class="col-md-12">
				                        <div class="google-map clearfix">
				                            <div class="cbr-gmap" data-lat="37.414797" data-lng="-122.077624" data-zoom="13"></div>
				                        </div><!-- .google-map -->
				                    </div><!-- .col-md-12 -->
				                </div><!-- .row -->
				            </div><!-- .container -->
                        </div><!-- .row-contact -->
                    </div><!-- inner-content -->
                </div><!--#site-content -->
            </div><!-- #content-wrap -->
        </div><!-- #main-content -->

        <?php include "./includes/footer_start.php";?>

        <!-- Javascript -->
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/plugins.js"></script>
        <script src="assets/js/animsition.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/owl.carousel.min.js"></script>
        <script src="assets/js/countto.js"></script>
        <script src="assets/js/validate.js"></script>
        <script src="assets/js/main.js"></script>
        <script src="assets/js/shortcodes.js"></script>
        <!-- Google Maps -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBvEEMx3XDpByNzYNn0n62Zsq_sVYPx1zY"></script>
        <script src="assets/js/gmap3.min.js"></script>

        <script>
        validate.validators.presence.options = {message: "can't be empty"};
        </script>




<?php include "./includes/footer_end.php";?>

