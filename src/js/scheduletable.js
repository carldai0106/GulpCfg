(function($) {

		$(function() {

				var app = {
					"options": {
						defaultPageSize: 10,
						defaultPageSizes: [5, 10, 20, 50, 100]
					}
				};

				var data = [{
					"id": 1,
					"visitNumber": 1,
					"patientAddress": "1 Marcus Garvey Court",
					"borough": "Bklyn",
					"zipCode": "11206",
					"visitStartTime": "10:43",
					"visitEndTime": "11:00",
					"visitLength": "0:17",
					"travelTime": "0:0",
					"downTime": "3",

					"visitTypeE": false,
					"visitTypeG": "1",
					"visitTypeT": "2",
					"visitTypeB": "3",
					"visitTypeD": "4",

					"riskE": false,
					"riskG": "5",
					"riskD": "6",
					"vnsnyCompliance": false
				}, {
					"id": 2,
					"visitNumber": 2,
					"patientAddress": "8 Park Ave",
					"borough": "Bklyn",
					"zipCode": "11206",
					"visitStartTime": "11:10",
					"visitEndTime": "11:30",
					"visitLength": "0:20",
					"travelTime": "0:10",
					"downTime": "",

					"visitTypeE": false,
					"visitTypeG": "",
					"visitTypeT": "",
					"visitTypeB": "",
					"visitTypeD": "",

					"riskE": false,
					"riskG": "",
					"riskD": "",
					"vnsnyCompliance": false
				}, {
					"id": 3,
					"visitNumber": 3,
					"patientAddress": "1199 Cook St",
					"borough": "Bklyn",
					"zipCode": "11206",
					"visitStartTime": "11:43",
					"visitEndTime": "12:00",
					"visitLength": "0:17",
					"travelTime": "0:13",
					"downTime": "",

					"visitTypeE": false,
					"visitTypeG": "",
					"visitTypeT": "",
					"visitTypeB": "",
					"visitTypeD": "",

					"riskE": false,
					"riskG": "",
					"riskD": "",
					"vnsnyCompliance": false
				}, {
					"id": 4,
					"visitNumber": 4,
					"patientAddress": "68 Quincey St",
					"borough": "Bklyn",
					"zipCode": "11221",
					"visitStartTime": "11:19",
					"visitEndTime": "12:38",
					"visitLength": "0:19",
					"travelTime": "0:19",
					"downTime": "",

					"visitTypeE": false,
					"visitTypeG": "",
					"visitTypeT": "",
					"visitTypeB": "",
					"visitTypeD": "",

					"riskE": false,
					"riskG": "",
					"riskD": "",
					"vnsnyCompliance": false
				}, {
					"id": 5,
					"visitNumber": 5,
					"patientAddress": "178 Putnum",
					"borough": "Bklyn",
					"zipCode": "11221",
					"visitStartTime": "12:45",
					"visitEndTime": "13:15",
					"visitLength": "0:30",
					"travelTime": "0:07",
					"downTime": "",

					"visitTypeE": false,
					"visitTypeG": "",
					"visitTypeT": "",
					"visitTypeB": "",
					"visitTypeD": "",

					"riskE": false,
					"riskG": "",
					"riskD": "",
					"vnsnyCompliance": false
				}, {
					"id": 6,
					"visitNumber": 6,
					"patientAddress": "12 Jefferson",
					"borough": "Bklyn",
					"zipCode": "11221",
					"visitStartTime": "13:29",
					"visitEndTime": "14:29",
					"visitLength": "1:00",
					"travelTime": "0:14",
					"downTime": "",

					"visitTypeE": false,
					"visitTypeG": "",
					"visitTypeT": "",
					"visitTypeB": "",
					"visitTypeD": "",

					"riskE": false,
					"riskG": "",
					"riskD": "",
					"vnsnyCompliance": false
				}, {
					"id": 7,
					"visitNumber": 7,
					"patientAddress": "134 Lephard St",
					"borough": "Bklyn",
					"zipCode": "11232",
					"visitStartTime": "14:45",
					"visitEndTime": "15:10",
					"visitLength": "0:25",
					"travelTime": "0:16",
					"downTime": "",

					"visitTypeE": false,
					"visitTypeG": "",
					"visitTypeT": "",
					"visitTypeB": "",
					"visitTypeD": "",

					"riskE": false,
					"riskG": "",
					"riskD": "",
					"vnsnyCompliance": "#N/A"
				}, {
					"id": 8,
					"visitNumber": 8,
					"patientAddress": "189 Humbold St",
					"borough": "Bklyn",
					"zipCode": "11206",
					"visitStartTime": "15:20",
					"visitEndTime": "16:25",
					"visitLength": "1:05",
					"travelTime": "0:10",
					"downTime": "",

					"visitTypeE": false,
					"visitTypeG": "",
					"visitTypeT": "",
					"visitTypeB": "",
					"visitTypeD": "",

					"riskE": false,
					"riskG": "",
					"riskD": "",
					"vnsnyCompliance": false
				}];

				
				var $table = $('#table');

				$table.bootstrapTable({
						pageSize: app.options.defaultPageSize,
						pageList: app.options.defaultPageSizes,
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
						columns: [
							[{
									field: 'id',
									align: 'center',
									rowspan: 2,
									valign: 'middle',
									visible: false
								}, {
									field: 'visitNumber',
									valign: 'middle',
									rowspan: 2,
									title: 'Visit Number'
								}, {
									field: 'patientAddress',
									valign: 'middle',
									rowspan: 2,
									title: 'Patient Address'
								}, {
									field: 'borough',
									valign: 'middle',
									rowspan: 2,
									title: 'Borough'
								}, {
									field: 'zipCode',
									valign: 'middle',
									rowspan: 2,
									title: 'Zip Code'
								}, {
									field: 'visitStartTime',
									valign: 'middle',
									rowspan: 2,
									title: 'Visit Start Time'
								}, {
									field: 'visitEndTime',
									valign: 'middle',
									rowspan: 2,
									title: 'Visit End Time'
								}, {
									field: 'visitLength',
									valign: 'middle',
									rowspan: 2,
									title: 'Visit Length'
									
								}, {
									field: 'travelTime',
									valign: 'middle',
									rowspan: 2,
									title: 'Travel Time'
								}, {
									field: 'downTime',
									valign: 'middle',
									rowspan: 2,
									title: 'Down Time'
								}, {
									valign: 'middle',
									colspan: 4,
									title: 'Type Of Visit'
								}, {
									valign: 'middle',
									colspan: 3,
									title: 'Risk Designation'
								}, {
									field: 'vnsnyCompliance',
									valign: 'middle',
									rowspan: 2,
									title: 'VNSNY Compliance',
									formatter: function(value, row, index) {
										if (row.vnsnyCompliance === false) {
											return '<i class="fa fa-remove"></i>';
										} else if (row.vnsnyCompliance === true) {
											return '<i class="fa fa-check"></i>';
										} else {
											return row.vnsnyCompliance;
										}
									}
								}],
								[{
									field: 'visitTypeE',
									valign: 'middle',
									title: 'E',
									formatter: function(value, row, index) {
										if (!row.visitTypeE) {
											return '<i class="fa fa-remove"></i>';
										} else {
											return '<i class="fa fa-check"></i>';
										}
									}
								}, {
									field: 'visitTypeG',
									valign: 'middle',
									title: 'G'
								}, {
									field: 'visitTypeT',
									valign: 'middle',
									title: 'T'
								}, {
									field: 'visitTypeB',
									valign: 'middle',
									title: 'B'
								}, {
									field: 'riskE',
									valign: 'middle',
									title: 'E',
									formatter: function(value, row, index) {
										if (!row.visitTypeE) {
											return '<i class="fa fa-remove"></i>';
										} else {
											return '<i class="fa fa-check"></i>';
										}
									}
								}, {
									field: 'riskG',
									valign: 'middle',
									title: 'G'
								}, {
									field: 'riskD',
									valign: 'middle',
									title: 'D'
								}]
							]
						});
				});

		})(jQuery);