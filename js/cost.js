var doughnutData = [
				{
					value: 50000,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Motors & Motor Drivers"
				},
				{
					value: 35000,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Registration Fee"
				},
				{
					value: 60000,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Sensors & Encoders"
				},
				{
					value: 40000,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Battery & Chargers"
				},
				{
					value: 20000,
					color: "#4D5360",
					highlight: "#616774",
					label: "PCB & Electronic Components"
				},
				{
					value: 60000,
					color: "#81F781",
					highlight: "#D0A9F5",
					label: "Fabrication & Materials"
				},
{
					value: 20000,
					color: "#F3E2A9",
					highlight: "#58FAAC",
					label: "Pneumatics"
				},
				{
					value: 50000,
					color: "#FE2EF7",
					highlight: "#FFBF00",
					label:"Wheels and Controllers"
				},
				{
					value: 50000,
					color: "#5858FA",
					highlight: "#2EFE9A",
					label: "Arena"
				}


			];

			window.onload = function(){
				var ctx = document.getElementById("chart-area").getContext("2d");
				window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {responsive : true});
			};
