(() => {
	let menu = $('.vacancy-menu');
	let browserWidth = document.documentElement.clientWidth;

	if (browserWidth >= 1200) {
		menu.show();
	} else {
		menu.hide();
		$('.vacancy-title').on('click', () => {
			menu.slideToggle(600);
			// $('.vacancy__sale-container').hide(600);
		});
	}

	$('.vacancy-title').click(function(){
		$('.vacancy__container').addClass('active-content');
	});

	$('.vacancy__tab').click(function(){
	 $('.vacancy__tab').removeClass('active');
	 $('.vacancy__container').removeClass('active-content');
	 $(this).addClass('active');
	 let vacancyContent =  $('#'+$(this).data('id'));
	 vacancyContent.addClass('active-content');

	 let vacancyBlock = vacancyContent.find('.vacancy__block');
	 if (vacancyBlock.length < 10) {
		 $('.vacancy__more-btn').css('display', 'none');
	 } else {
		 $('.vacancy__more-btn').css('display', 'inline-block');
	 }

	 for (let i = 0; i < vacancyBlock.length; i++) {
		if (i > 10) {
			vacancyBlock[i].hide();
		} else {
			vacancyBlock[i].show();
		}
	 }
 });

	// $('.vacancy__tab').click(function(){
	// 	for (let i = 0; i < vacancyBlock.length; i++) {
	//  	if (i > 10) {
	//  		vacancyBlock[i]
	//  	}
	//   }
	// });

 let allVacancy = $('.vacancy__block').length;
 $('.vacancy-title .vacancy-menu__count').text(allVacancy);

 let saleVacancy = $('.vacancy__sale-container .vacancy__block').length;
 $('.vacancy__sale + .vacancy-menu__count').text(saleVacancy);

 let financeVacancy = $('.vacancy__finance-container .vacancy__block').length;
 $('.vacancy__finance + .vacancy-menu__count').text(financeVacancy);

 let hrVacancy = $('.vacancy__hr-container .vacancy__block').length;
 $('.vacancy__hr + .vacancy-menu__count').text(hrVacancy);

 let itVacancy = $('.vacancy__it-container .vacancy__block').length;
 $('.vacancy__it + .vacancy-menu__count').text(itVacancy);

 let marketingVacancy = $('.vacancy__marketing-container .vacancy__block').length;
 $('.vacancy__marketing + .vacancy-menu__count').text(marketingVacancy);

 let supportVacancy = $('.vacancy__support-container .vacancy__block').length;
 $('.vacancy__support + .vacancy-menu__count').text(supportVacancy);

 let legacyVacancy = $('.vacancy__legal-container .vacancy__block').length;
 $('.vacancy__legacy + .vacancy-menu__count').text(legacyVacancy);

 let beginnerVacancy = $('.vacancy__beginner-container .vacancy__block').length;
 $('.vacancy__beginner + .vacancy-menu__count').text(beginnerVacancy);
})();

// (() => {
// 	let menu = $('.vacancy-menu');
// 	let sale = $('.vacancy__sale').text();
// 	let vacancyTitle = $('.vacancy-title');
// 	$('.vacancy__sale-container').hide();
//
// 	$('.vacancy__sale').on('click', () => {
// 		menu.hide(600);
// 		vacancyTitle[0].innerHTML = sale;
// 		$('.vacancy__sale-container').show(600);
// 	});
//
// 	$('.vacancy__all-vacancy').on('click', () => {
// 		menu.hide(600);
// 		vacancyTitle[0].innerHTML = 'все вакансии';
// 		$('.vacancy__sale-container').show(600);
// 	});
// })();
