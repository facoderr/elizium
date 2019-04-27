ymaps.ready(function(){
	var myMap = new ymaps.Map('map', {
		center: [53.201147, 50.089228],
		zoom: 14,
		controls: []
	}),
	
	myPlacemark = new ymaps.Placemark([53.202416, 50.120163], {
		hintContent: 'Мужская спа-студия «Элизиум»'
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/icons/map.svg',
		iconImageSize: [50, 62],
		iconImageOffset: [-25, -55]
	});
	myMap.geoObjects.add(myPlacemark);

	function onResizeMap() {
		if ($(window).width() <= '1440') {
			myMap.setCenter([53.202416, 50.120163]);
		} else {
			myMap.setCenter([53.201147, 50.089228]);
		}
	} onResizeMap();

	window.onresize = function () {
		onResizeMap();
	};
});