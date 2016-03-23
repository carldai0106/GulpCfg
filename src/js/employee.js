(function($) {

	$(function() {

		var app = {
			"options": {
				defaultPageSize: 10,
				defaultPageSizes: [5, 10, 20, 50, 100]
			}
		};

		var data = [];
		for (var i = 1; i <= 12; i++) {
			data.push({
				"id": i,
				"firstName": "carl" + i,
				"lastName": "dai" + i,
				"ssNumber": "432-85-7463" + i,
				"status": false,
				"gender": true,
				"birthDate": "1986-01-" + (i < 10 ? ("0" + i) : i),
				"hiredDate": "2008-06-" + (i < 10 ? ("0" + i) : i),
				"phone": "12356802342" + i
			});
		}


		var $table = $('#table');

		$table.bootstrapTable({
			pageSize: app.options.defaultPageSize,
			pageList: app.options.defaultPageSizes,
			pagination : true,
			searchTimeOut: 600,
			paginationFirstText: "<i class='fa fa-angle-double-left'></i>",
			paginationPreText: "<i class='fa fa-angle-left'></i>",
			paginationNextText: "<i class='fa fa-angle-right'></i>",
			paginationLastText: "<i class='fa fa-angle-double-right'></i>",
			idField: 'id',
			cache: false,
			striped: true,
			showRefresh: true,
			data: data,
			columns: [{
				field: 'id',
				align: 'center',
				valign: 'middle',
				visible: false
			}, {
				field: 'firstName',
				valign: 'middle',
				title: 'First Name'
			}, {
				field: 'lastName',
				valign: 'middle',
				title: 'Last Name'
			}, {
				field: 'ssNumber',
				valign: 'middle',
				title: 'SSN'
			}, {
				field: 'status',
				valign: 'middle',
				title: 'Status',
				formatter: function(value, row, index) {
					if (row.status === false) {
						return '<i class="fa fa-remove"></i>';
					} else if (row.status === true) {
						return '<i class="fa fa-check"></i>';
					}
				}
			}, {
				field: 'gender',
				valign: 'middle',
				title: 'Gender',
				formatter: function(value, row, index) {
					if (row.status === false) {
						return '<i class="icons icon-symble-female"></i>';
					} else if (row.status === true) {
						return '<i class="icons icon-symbol-male"></i>';
					}
				}
			}, {
				field: 'birthDate',
				valign: 'middle',
				title: 'Birth Date'
			}, {
				field: 'hiredDate',
				valign: 'middle',
				title: 'Hired Date'

			}, {
				field: 'phone',
				valign: 'middle',
				title: 'Telephone'
			}, {
				title : 'Operation',
				width : "100px",
				cellStyles : function(value, row, index) {
        			return { classes: "btn-group-wrapper" };
    			},
				formatter : function (value, row, index) {
			        var html = [];
			        html.push('<div class="btn-group">');			       
		            html.push([
		                '<a class="btn btn-primary btn-sm edit" href="javascript:void(0)" >',
		                '<i class="fa fa-edit"></i>',
		                '</a>  '
		            ].join(''));	       
			        
		            html.push([
		                '<a class="btn btn-danger btn-sm delete" href="javascript:void(0)" >',
		                '<i class="fa fa-remove"></i>',
		                '</a>'
		            ].join(''));
			        
			        html.push('</div>');

			        return html.join('');
			    }
			}]

		});
	});

})(jQuery);