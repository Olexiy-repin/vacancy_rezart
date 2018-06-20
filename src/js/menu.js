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

	$('.vacancy-title').on('click', () => {
		$('.vacancy__container').show();
	});

		$('.vacancy__sale').on('click', () => {
			$('.vacancy__container').hide();
			$('.vacancy__sale-container').show();
		});

		$('.vacancy__finance').on('click', () => {
			$('.vacancy__container').hide();
			$('.vacancy__finance-container').show();
		});

		$('.vacancy__hr').on('click', () => {
			$('.vacancy__container').hide();
			$('.vacancy__hr-container').show();
		});

		$('.vacancy__it').on('click', () => {
			$('.vacancy__container').hide();
			$('.vacancy__it-container').show();
		});

		$('.vacancy__marketing').on('click', () => {
			$('.vacancy__container').hide();
			$('.vacancy__marketing-container').show();
		});

		$('.vacancy__support').on('click', () => {
			$('.vacancy__container').hide();
			$('.vacancy__support-container').show();
		});

		$('.vacancy__legacy').on('click', () => {
			$('.vacancy__container').hide();
			$('.vacancy__legal-container').show();
		});

		$('.vacancy__beginner').on('click', () => {
			$('.vacancy__container').hide();
			$('.vacancy__beginner-container').show();
		});

		let vbCount = $('.vacancy__beginner-container .vacancy__block').length;
		console.log(vbCount);
		let vbNumber = $('.vacancy__beginner .vacancy-menu__count').textContent;
		vbNumber = 'vbCount';
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
