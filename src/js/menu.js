(() => {
	let vacancyBlocks = $('.vacancy__block');
	let vacancyMoreBlock = $('.vacancy__block-more-than-10');
	let vacancyTittle = $('.vacancy-title');
	$('.vacancy__container').removeClass('active-content');

	vacancyMoreBlock.hide();

	for (let i = 0; i < vacancyBlocks.length; i++) {
		if (i > 9) {
			vacancyBlocks.eq(i).hide();
		} else {
			vacancyBlocks.eq(i).show();
		}
	}
})();

(() => {
	let menu = $('.vacancy-menu');
	let browserWidth = document.documentElement.clientWidth;

	if (browserWidth >= 1200) {
		menu.show();
	} else {
		menu.hide();
	}

// Обработчик вывода табов
	$('.vacancy-title').click(function(){
		$('.vacancy-title').addClass('active');
		$('.vacancy__tab').removeClass('active');
		$('.vacancy__container').show(500);
		$('.vacancy__container').removeClass('active-content');
		let vacancyBlocks = $('.vacancy__block');
		let vacancyMoreBlock = $('.vacancy__block-more-than-10');

		vacancyMoreBlock.css('display', 'none');

		for (let i = 0; i < vacancyBlocks.length; i++) {
			if (i > 9) {
				vacancyBlocks.eq(i).hide();
			} else {
				vacancyBlocks.eq(i).show();
			}
		}
	});

	$('.vacancy__tab').click(function(){
	 $('.vacancy-title').removeClass('active');
	 $('.vacancy__tab').removeClass('active');
	 $('.vacancy__container').css('display', 'none');
	 $(this).addClass('active');
	 let vacancyContent =  $('#'+$(this).data('id'));
	 console.log(vacancyContent);
	 vacancyContent.addClass('active-content');
	 vacancyContent.css('display', 'block');

	 let vacancyBlock = vacancyContent.find('.vacancy__block');
	 vacancyBlock.show();
	 if (vacancyBlock.length < 10) {
		 $('.vacancy__more-btn').css('display', 'none');
	 } else {
		 $('.vacancy__more-btn').css('display', 'inline-block');
	 }

	 let vacancyBlockMore = vacancyContent.find('.vacancy__block-more-than-10');
	 for (let i = 0; i < vacancyBlock.length; i++) {
		if (i > 9) {
			vacancyBlockMore.hide();
		} else {
			vacancyBlockMore.show();
		}
	 }
 });

// Обработчик по клику на кнопку
$('.vacancy__more-btn').click(function(){
	let vacancyContainer = $('.vacancy__container');
	let vacancyTitle = $('.vacancy-title');
	let vacancyMoreBlocks = $('.vacancy__block-more-than-10');

	for (let i = 0; i < vacancyContainer.length; i++) {
	 if (vacancyContainer.eq(i).hasClass('active-content')) {
		 console.log('lol');
		 let vacancyBlock = vacancyContainer.eq(i).find('.vacancy__block');
		 let vacancyMoreBlock = vacancyContainer.eq(i).find('.vacancy__block-more-than-10');

		 vacancyMoreBlock.toggle(500);
	 	}
	 }
	 if(vacancyTitle.hasClass('active')) {
		 if(vacancyContainer.hasClass('flag')) {
			vacancyContainer.removeClass('flag');

			let allVacancyBlocks = $('.vacancy__block');
			for (let j = 0; j < allVacancyBlocks.length; j++) {
				if(j>9) {
					allVacancyBlocks.eq(j).hide(500);
				}
			}
		} else {
			vacancyContainer.addClass('flag');
			vacancyContainer.find('.vacancy__block').show(500);

			for (let i = 0; i < vacancyContainer.length; i++) {
				if(vacancyContainer.eq(i).find('.vacancy__block-more-than-10').length !== 0) {
					vacancyContainer.eq(i).find('.vacancy__block-more-than-10').show();
				}
			}
		}
	}
});

// Счетчик вакансий
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

(() => {
	let menu = $('.vacancy-menu');
	let browserWidth = document.documentElement.clientWidth;

	if (browserWidth < 1200) {
		$('.vacancy-title').on('click', () => {
			menu.slideToggle(400);
		});
		let vacancyTitle = $('.vacancy-title');
		let vacancyTab = $('.vacancy__tab');

		vacancyTab.on('click', () => {
			menu.hide(600);
			
		});
		// let menu = $('.vacancy-menu');
		// let sale = $('.vacancy__sale').text();
		// let vacancyTitle = $('.vacancy-title');
		// $('.vacancy__sale-container').hide();
		//
		// $('.vacancy__sale').on('click', () => {
		// 	menu.hide(600);
		// 	vacancyTitle[0].innerHTML = sale;
		// 	$('.vacancy__sale-container').show(600);
		// });
		//
		// $('.vacancy__all-vacancy').on('click', () => {
		// 	menu.hide(600);
		// 	vacancyTitle[0].innerHTML = 'все вакансии';
		// 	$('.vacancy__sale-container').show(600);
		// });
	}
})();
