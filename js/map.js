ymaps.ready(function(){
	var navMap = new ymaps.Map('nav-map', {
		center: [53.202416, 50.120163],
		zoom: 14,
		controls: []
	});
	var contactsMap = new ymaps.Map('contacts-map', {
		center: [53.201147, 50.089228],
		zoom: 14,
		controls: []
	});

	myPlacemark1 = new ymaps.Placemark([53.202416, 50.120163], {
		hintContent: 'Мужской спа-клуб «Сахар»'
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/icons/map.svg',
		iconImageSize: [50, 62],
		iconImageOffset: [-25, -55]
	});
	myPlacemark2 = new ymaps.Placemark([53.202416, 50.120163], {
		hintContent: 'Мужской спа-клуб «Сахар»'
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/icons/map.svg',
		iconImageSize: [50, 62],
		iconImageOffset: [-25, -55]
	});

	navMap.geoObjects.add(myPlacemark1);
	contactsMap.geoObjects.add(myPlacemark2);

	function onResizeMap() {
		if ($(window).width() <= '1440') {
			contactsMap.setCenter([53.202416, 50.120163]);
		} else {
			contactsMap.setCenter([53.201147, 50.089228]);
		}
	} onResizeMap();

	window.onresize = function () {
		onResizeMap();
	};
});