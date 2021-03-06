var fitxes_inici = {
    fitxa1: "img1"
    , fitxa2: "img3"
    , fitxa3: "img4"
    , fitxa4: "img7"
    , fitxa5: "img6"
    , fitxa6: "img2"
    , fitxa7: "img5"
    , fitxa8: "img9"
    , fitxa9: "img8"
};

var fitxes_final = {
    fitxa1: "img1"
    , fitxa2: "img2"
    , fitxa3: "img3"
    , fitxa4: "img4"
    , fitxa5: "img5"
    , fitxa6: "img6"
    , fitxa7: "img7"
    , fitxa8: "img8"
    , fitxa9: "img9"
};



$(document).ready(function() {
    for (var i=1;i<10;i++) {
        var img = fitxes_inici["fitxa"+i];
        $("#fitxes_iguals").append('<img src="'+img+'.jpg" alt=""/>');
    }
    $("button").click(function() {
        $(".fitxa").each(function(idx) {
          //  console.log($(this).children("img").attr("src") +" - "+ fitxes_final["fitxa"+(idx+1)]+".jpg");
            if ($(this).children("img").attr("src") == fitxes_final["fitxa"+(idx+1)]+".jpg") {
                $(this).css('border-color', 'yellow')
            } else {
                $(this).css('border-color', 'red')
            }
        });
    });
    $("#fitxes_iguals>img").click(selectFitxa);
    $(".fitxa").click(mouFitxa);
});
    
function selectFitxa(){
    $("#fitxa_seleccionada>img").appendTo($("#fitxes_iguals"));
    $(this).appendTo($("#fitxa_seleccionada"));   
}    

function mouFitxa(){
    var img = $("#fitxa_seleccionada>img");
    img.off(); // Desvincula eventos
    $(this).children("img").click(selectFitxa); // Añade el evento selectFitxa
    $(this).children("img").appendTo($("#fitxa_seleccionada"));
    $(this).append(img);
}
