$(".card").hover(function() {
    $(this).find(".circle").slideUp(1000); 
    // $(this).find(".card-img-text").hide(500); 
}, 
function() { 
    $(this).find(".circle").slideDown(1000);
    // $(this).find(".card-img-text").show(3500)
}); 