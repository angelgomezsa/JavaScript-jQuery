<!DOCTYPE html>
<html>
    <head>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBfITkskFnkQFXkgSbMT-AoPXCx9_yHoXw&region=GB"></script>
        <script src="js/gmap3.min.js" type="text/javascript"></script>
        <link rel="stylesheet" href="gmap.css">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <title></title>
    </head>
    <body>
        <?php
        $winner = rand(1,2);
        if ($winner == 1) {
            $addr = $_POST["addrp1"];
            $age = $_POST["agep1"];
            $char = $_POST["charp1"];
        } else {
            $addr = $_POST["addrp2"];
            $age = $_POST["agep2"];
            $char = $_POST["charp2"];
        }
        ?>
        <audio autoplay loop>
            <source src="<?php if ($winner == 1) echo "audio/fanfare1.mp3"; else echo "audio/fanfare2.mp3"; ?>" type="audio/mpeg">
        </audio>
        <div class="container">
            <h1 style="text-align: center; margin: 20px">Ha ganado el jugador <?php echo $winner ?>!</h1>
            <div id="map"></div>
        </div>
            <script>
                $(document).ready(function () {
                    $('#map').gmap3({
                        zoom: 4
                    })
                    .infowindow()
                    .marker([
                        {address: "<?php echo $addr ?>", data: "<h3 style='text-align: center; margin: 10px' >Ganador</h3><div>" +
                        "<p><b>Age: </b><?php echo $age ?> years</p>" +
                        "<p><b>Character: </b><?php echo $char ?></p>" +
                        "<img src='img/<?php echo $char ?>.png'></div>"}
                    ])
                    .on('click', function (marker) {  //Al clicar obrim una finestra sobre la marca i hi insertem el data de la marca
                        marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
                        var map = this.get(0); //this.get(0) retorna la primera propietat vinculada-> gmap3
                        var infowindow = this.get(1); //this.get(1) retorna la segona propietat vinculada -> infowindow
                        infowindow.setContent(marker.data);     //dins la finestra mostrem el atribut data de la marca
                        infowindow.open(map, marker);
                    })
                    .fit();
                });
            </script>
    </body>
</html>
