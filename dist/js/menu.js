(()=>{let c=$(".vacancy__block"),a=$(".vacancy__block-more-than-10");$(".vacancy-title");$(".vacancy__container").removeClass("active-content"),a.hide();for(let a=0;a<c.length;a++)a>9?c.eq(a).hide():c.eq(a).show()})(),(()=>{let c=$(".vacancy-menu");document.documentElement.clientWidth>=1200?(c.show(),$(".vacancy-title").click(function(){$(".vacancy-title").addClass("active"),$(".vacancy__tab").removeClass("active"),$(".vacancy__container").show(500),$(".vacancy__container").removeClass("active-content");let c=$(".vacancy__block");$(".vacancy__block-more-than-10").css("display","none");for(let a=0;a<c.length;a++)a>9?c.eq(a).hide():c.eq(a).show();c.length<10?$(".vacancy__more-btn").css("display","none"):$(".vacancy__more-btn").css("display","inline-block")})):c.hide(),$(".vacancy__tab").click(function(){$(".vacancy-title").removeClass("active"),$(".vacancy__tab").removeClass("active"),$(".all-vacancy__tab").removeClass("middle-active-tab"),$(".vacancy__container").css("display","none"),$(this).addClass("active");let c=$("#"+$(this).data("id"));c.addClass("active-content"),c.css("display","block");let a=c.find(".vacancy__block");a.show(),a.length<10?$(".vacancy__more-btn").css("display","none"):$(".vacancy__more-btn").css("display","inline-block");let n=c.find(".vacancy__block-more-than-10");for(let c=0;c<a.length;c++)c>9?n.hide():n.show()}),$(".vacancy__more-btn").click(function(){let c=$(".vacancy__container"),a=$(".vacancy-title");$(".all-vacancy").find(".vacancy__tab"),$(".vacancy__block-more-than-10");for(let a=0;a<c.length;a++)if(c.eq(a).hasClass("active-content")){c.eq(a).find(".vacancy__block");c.eq(a).find(".vacancy__block-more-than-10").toggle(500)}if(a.hasClass("active"))if(c.hasClass("flag")){c.removeClass("flag");let a=$(".vacancy__block");for(let c=0;c<a.length;c++)c>9&&a.eq(c).hide(500)}else{c.addClass("flag"),c.find(".vacancy__block").show(500);for(let a=0;a<c.length;a++)0!==c.eq(a).find(".vacancy__block-more-than-10").length&&c.eq(a).find(".vacancy__block-more-than-10").show()}});let a=$(".vacancy__block").length;$(".vacancy-title .vacancy-menu__count").text(a);let n=$(".vacancy__sale-container .vacancy__block").length;$(".vacancy__sale + .vacancy-menu__count").text(n);let e=$(".vacancy__finance-container .vacancy__block").length;$(".vacancy__finance + .vacancy-menu__count").text(e);let t=$(".vacancy__hr-container .vacancy__block").length;$(".vacancy__hr + .vacancy-menu__count").text(t);let l=$(".vacancy__it-container .vacancy__block").length;$(".vacancy__it + .vacancy-menu__count").text(l);let _=$(".vacancy__marketing-container .vacancy__block").length;$(".vacancy__marketing + .vacancy-menu__count").text(_);let o=$(".vacancy__support-container .vacancy__block").length;$(".vacancy__support + .vacancy-menu__count").text(o);let v=$(".vacancy__legal-container .vacancy__block").length;$(".vacancy__legacy + .vacancy-menu__count").text(v);let i=$(".vacancy__beginner-container .vacancy__block").length;$(".vacancy__beginner + .vacancy-menu__count").text(i)})(),(()=>{let c=$(".vacancy-menu");if(document.documentElement.clientWidth<1200){$(".vacancy-title").on("click",()=>{c.slideToggle(400)});$(".vacancy-title");$(".vacancy__tab").on("click",()=>{c.hide(600)}),$(".vacancy-menu__item").click(function(){let c=$(this).find(".vacancy-menu__count"),a=$(this).find(".vacancy__tab");$(".vacancy-title-span").text(a.text()),$(".vacancy-title .vacancy-menu__count").text(c.text())}),$(".all-vacancy__tab").click(function(){$(".all-vacancy__tab").addClass("middle-active-tab"),$(".vacancy__tab").removeClass("active"),$(".vacancy__container").show(500),$(".vacancy__container").removeClass("active-content");let c=$(".vacancy__block");$(".vacancy__block-more-than-10").css("display","none");for(let a=0;a<c.length;a++)a>9?c.eq(a).hide():c.eq(a).show();c.length<10?$(".vacancy__more-btn").css("display","none"):$(".vacancy__more-btn").css("display","inline-block")}),$(".vacancy__more-btn").click(function(){let c=$(".vacancy__container"),a=$(".all-vacancy").find(".vacancy__tab");$(".vacancy__block-more-than-10");for(let a=0;a<c.length;a++)if(c.eq(a).hasClass("active-content")){c.eq(a).find(".vacancy__block");c.eq(a).find(".vacancy__block-more-than-10").eq(a).toggle(500)}if(a.hasClass("middle-active-tab"))if(c.hasClass("flag")){c.removeClass("flag");let a=$(".vacancy__block");for(let c=0;c<a.length;c++)c>9&&a.eq(c).hide(500)}else{c.addClass("flag"),c.find(".vacancy__block").show(500);for(let a=0;a<c.length;a++)0!==c.eq(a).find(".vacancy__block-more-than-10").length&&c.eq(a).find(".vacancy__block-more-than-10").show()}});let a=$(".vacancy__block").length;$(".all-vacancy .vacancy-menu__count").text(a)}})();