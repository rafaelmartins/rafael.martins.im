$(function() {

    // Media fluid width.
    // based on http://css-tricks.com/fluid-width-youtube-videos/
    var $container = $("#body"),
        $elements = $(".oembed");
    $elements.each(function() {
        $(this).children().each(function() {
            $(this).data('ratio', this.width / this.height)
                   .removeAttr('height')
                   .removeAttr('width');
        });
    });
    $(window).resize(function() {
        var container_width = $container.width();
        $elements.each(function() {
            $(this).children().each(function() {
                $(this).width(container_width)
                       .height(container_width / $(this).data('ratio'));
            });
        });
    }).resize();

    // Fake comment box :P
    $(".comments").click(function (e) {
        alert(
            "Não existe espaço para comentários neste blog!\n\n" +
            "Se você tiver algo a dizer sobre este post, me envie um email:\n" +
            "rafael@rafaelmartins.eng.br");
        return false;
    });
});

