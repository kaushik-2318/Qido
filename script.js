$(document).ready(function(){
    $(".button").on("click", function(){
        $(".button").removeClass("active");
        $(this).addClass("active");
        $(".input").attr("placeholder",`Enter ${$(this).html()}`)
    })
    const k = $(".input");
    $(".btn1").on("click", function(){
        $('.img1').attr("src",`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${k.val()}`)
        $('.img1').css("width",`${$(".i1").val()}px`)
        $('.img1').css("height",`${$(".i1").val()}px`)             
    })
    $(".btns1").on("click", function(){
        $('.down').attr("href",`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${k.val()}`)
    })
    $(".btns2").on("click", function(){
        var temp = $("<input>");
        $("body").append(temp);
        temp.val($('#copyText1').text()).select();
        document.execCommand("copy");
        temp.remove();
        $(".popup").toggle()
    })
})