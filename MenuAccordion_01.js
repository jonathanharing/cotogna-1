// Establish variables
var foodMenus = $('#foodmenus').children('.foodmenus-collection-item');
var menuCount = foodMenus.length;

// Data + accessibility setup
foodMenus.each(function (index){
	var accordionContentID = "accordion-" + index;
	console.log(accordionContentID);
	$(this).data('menu-id', index);
	// Accessibility labels + controls
	$(this).children('.foodmenus__accordion-button').attr('id', accordionContentID);
	$(this).children('.foodcontent__grid').attr('aria-labelledby', accordionContentID);
	if (index == 0) {
		$(this).children('.foodmenus__accordion-button').attr('aria-expanded', 'true');
		$(this).children('.foodmenus__accordion-button').attr('aria-disabled', 'true');
	} else {
		$(this).children('.foodmenus__accordion-button').attr('aria-expanded', 'false');
		$(this).children('.foodmenus__accordion-button').attr('aria-disabled', 'false');
	}
});
