if (Meteor.isClient) {

	Template.grid.onRendered(function() {

		(function toggleSidebar() {
			$('#sidebar-menu').on('click', 'a', function() {
				var active	= $(this).hasClass('active');
				var btnName = $(this).prop('class').replace(/ icon| button| active/gi, '');
				
				var pnlName = '';
				$('#sidebar-panel').children('.panel').each(function() {
					var name = $(this).prop('class').replace(' panel','');
					if (name == btnName) {
						pnlName = name;
						return pnlName;
					}
				});

				if (active) {
					$(this).removeClass('active');
					$('#sidebar-panel').find(pnlName).removeClass('active');
				}
				else {
					$(this).addClass('active');
					$('#sidebar-panel').find(pnlName).addClass('active');
				}
			});
		})();
	});
}
