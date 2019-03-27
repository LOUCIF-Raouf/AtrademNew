<?php include './includes/header_start.php';?>

<link rel="stylesheet" href="./assets/css/price-calculator.min.css">
<link rel="stylesheet" href="./assets/css/metisMenu.min.css">
<link rel="stylesheet" href="./assets/css/sidebar.min.css">
<link rel="stylesheet" href="./assets/css/slideform.css">
<link rel="stylesheet" href="./assets/css/ion.rangeSlider.min.css" />
<link rel="stylesheet" href="./assets/css/hello.week.min.css" >
<link rel="stylesheet" href="./assets/css/hello.week.theme.min.css" >


<?php include './includes/header_end.php';?>


<body class="page header-fixed no-sidebar">
  <div id="page" class="animsition clearfix">

    <?php include "./includes/leftbar.php";?>

    <div class="content-page text-center py-0">

      <div id="main-content" class="site-main clearfix">
        <div id="content-wrap">
          <div id="site-content" class="site-content clearfix">
            <div id="inner-content" class="inner-content-wrap">
              <div class="wrapper">

                <div id="calculator-container" class="col-md-12">
                  <form action="">

                    <div class="slideform-wrapper">

                    <!-- Inventaire -->
                      <div class="slideform-slide">
                        <div class="slideform-group">
                          <?php include "./includes/pages/devis-inventaire/calculateur-objet.php";?>
                        </div>
                      </div>

                      <!-- Montage / Démontage -->
                      <div class="slideform-slide">
                        <div class="slideform-group">
                          <?php include "./includes/pages/devis-inventaire/montage-demontage.phtml";?>
                        </div>
                      </div>

                      <!-- Cartons -->
                      <div class="slideform-slide">
                        <div class="slideform-group">
                          <?php include "./includes/pages/devis-inventaire/cartons.phtml";?>
                        </div>
                      </div>

                      <!-- Matériel -->
                      <div class="slideform-slide">
                        <div class="slideform-group">
                          <?php include "./includes/pages/devis-inventaire/materiel.phtml";?>
                        </div>
                      </div>

                      <!-- Date déménagement -->
                      <div class="slideform-slide">
                        <div class="slideform-group">
                          <?php include "./includes/pages/devis-inventaire/dates.phtml";?>
                        </div>
                      </div>

                      <!-- Garanties -->
                      <div class="slideform-slide">
                        <div class="slideform-group">
                          <?php include "./includes/pages/devis-inventaire/garanties.phtml";?>
                        </div>
                      </div>

                      <!-- Annulation -->
                      <div class="slideform-slide">
                        <div class="slideform-group">
                          <?php include "./includes/pages/devis-inventaire/annulation.phtml";?>
                        </div>
                      </div>

                      <!-- Adresses déménagement -->
                      <div class="slideform-slide">
                        <div class="slideform-group">
                          <?php include "./includes/pages/devis-inventaire/adresses.phtml";?>
                        </div>
                      </div>


                      <!-- Devis -->
                      <div class="slideform-slide">
                        <div class="slideform-group">
                          <?php include "./includes/pages/devis-inventaire/resume.phtml";?>
                        </div>
                      </div>

                      <div class="slideform-slide">
                        <div class="slideform-group">
                          <h2>You can also set conditions with pretty simple data attributes</h2>

                          <h3>Show Condition?</h3>
                          <div class="options options-buttons">
                            <label for=""><input type="radio" name="group5" value="yes"><span>Yes</span></label>
                            <label for=""><input type="radio" name="group5" value="no"><span>No</span></label>
                          </div>

                          <div data-condition="input.group5 == 'yes'">
                            <h3>Showing condition</h3>
                          </div>
                        </div>
                      </div>

                      <footer class="slideform-footer fixed-bottom">
                        <div class="slideform-progress-bar">
                          <span></span>
                        </div>

                        <div class="buttons">
                          <button class="slideform-btn slideform-btn-prev">Précedent</button>
                          <button class="slideform-btn slideform-btn-next">Suivant</button>
                        </div>
                      </footer>

                  </form>
                </div>
              </div>
              <!-- End wrapper -->

            </div><!-- inner-content -->
          </div>
          <!--#site-content -->
        </div><!-- #content-wrap -->
      </div><!-- #main-content -->
    </div>
  </div>

  <script src="assets/js/jquery.validate.min.js"></script>
  <script src="assets/js/plugins.js"></script>
  <script src="assets/js/animsition.js"></script>
  <script src="assets/js/countto.js"></script>
  <script src="assets/js/wow.min.js"></script>
  <script src="assets/js/cubeportfolio.js"></script>
  <script src="assets/js/owl.carousel.min.js"></script>
  <script src="assets/js/magnific.popup.min.js"></script>
  <script src="assets/js/jquery.hoverdir.js"></script>
  <script src="assets/js/metisMenu.min.js"></script>
  <script src="assets/js/jquery.slimscroll.js"></script>
  <script src="assets/js/typed.min.js"></script>
  <script src="assets/js/jquery.timepicker.min.js"></script>
  <script src="assets/js/jquery.bootstrap.wizard.min.js"></script>
  <script src="assets/js/jquery.steps.min.js"></script>
  <script src="assets/js/jquery.slideform.js"></script>
  <script src="assets/js/metisMenu.min.js"></script>
  <script src="assets/js/select2.full.min.js"></script>
  <script src="assets/js/ion.rangeSlider.min.js"></script>
  <script src="assets/js/jquery.knob.min.js"></script>
  <!-- <script src="assets/js/priceCalculator.js"></script> -->


  <script src="assets/js/hello.week.min.js"></script>
  <script src="includes/pages/calendar.js"></script>

  <script src="includes/pages/calculateur.js"></script>
  <script src="includes/pages/sidebar.js"></script>
  <script src="includes/pages/form.js"></script>

  <script src="includes/pages/autocomplete.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDh0bbCQWiYa5eGu3FB8GtiDQga2TH_fGE&libraries=places&callback=initAutocomplete"
        async defer></script>


  <script src="assets/js/shortcodes.js"></script>
  <script src="assets/js/main.js"></script>

<script type="text/javascript" src="includes/pages/cart.js"></script>
<script type="text/javascript">
  $(function() {
    Cart.currency = '';
    Cart.initJQuery();
  });
</script>

  <script>
    $(document).ready(function () {


      $('#selectedObject').select2({
        lang: "fr",
        placeholder: 'Selectionnez un objet',
        width: '80%', // need to override the changed default
        /* ajax: {
            url: "getData.php",
            dataType: 'json',
            quietMillis: 100,
            data: function (term, page) {
                return {
                    term: term,
                    page_limit: 10
                };
            },
            results: function (data, page) {
                return { results: data.results };
            }

        },
        initSelection: function(element, callback) {
            return $.getJSON("getData.php?id=" + (element.val()), null, function(data) {

                    return callback(data);

            });
        }
 */
    });


    $('#selectedObject').val(null).trigger('change')

      $(function () {
        $('#menu1, #menu2').metisMenu();
      });

      $('form').slideform();

      /* $('#selectedObject').select2({
        placeholder: 'Selectionnez un objet',
      }); */


      $("#distHomeDep, #distAppartDep, #distHomeArr, #distAppartArr").ionRangeSlider({
        grid: true,
        min: 0,
        max: 100,
        from: 0,
        step: 5,
        max_postfix: "+",
        skin: "sharp",
        postfix: "m"
      })


      $(".dial").knob({
        min: 0,
        max: 10,
        width: 100,
        height: 100,
        linecap: "round",
        fgColor: "#5447A9",
        angleOffset: -125,
        angleArc: 250,
        rotation: "anticlockwise",

      });
    });
  </script>


  <?php include "./includes/footer_end.php";?>