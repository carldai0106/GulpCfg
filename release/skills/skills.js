(function($) {

	$(function() {

		window.siderbar = {
			parentName : "healthcareagency",
			childName : "skills"
		};

		$("#btnCreate").on('click', function() {
			window.location.href = "create.html";
		});

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
				"skillType": "Skill Type " + i,				
				"description": "This is description for skill " + i,
				"overridable" : (i % 2 === 0 ? true : false),				
				"creationTime": "2016-01-27 10:" + (i < 10 ? ("0" + i) : i)				
			});
		}


		var $table = $('#table');

		$table.bootstrapTable({
			pageSize: app.options.defaultPageSize,
			pageList: app.options.defaultPageSizes,
			pagination: true,
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
				field: 'skillType',
				valign: 'middle',
				title: 'Skill Type'
			}, {
				field: 'description',
				valign: 'middle',
				title: 'Skill Description'
			}, {
				field: 'overridable',
				valign: 'middle',
				title: 'Overridable',
				formatter : function(value, row, index){
					if(row.overridable){
						return "<i class='fa fa-2x fa-check-square-o'></i>";
					}else{
						return "<i class='fa fa-2x fa-square-o'></i>";
					}
				}
			}, {
				title: 'Operation',
				width: "90px",
				cellStyle: function(value, row, index) {
					return {
						classes: "btn-group-wrapper"
					};
				},
				formatter: function(value, row, index) {
					var html = [];
					html.push('<div class="btn-group">');			       
					   html.push([
					       '<a class="btn btn-default btn-sm edit" href="create.html" >',
					       '<i class="fa fa-edit"></i>',
					       '</a>  '
					   ].join(''));	       					 

					   html.push([
					       '<a class="btn btn-default btn-sm delete" href="javascript:void(0)" >',
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