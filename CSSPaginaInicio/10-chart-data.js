var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
		labels : ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],
		datasets : [
			{
				label: "My First dataset",
				fillColor : "rgba(220,220,220,0.2)",
				strokeColor : "rgba(220,220,220,1)",
				pointColor : "rgba(220,220,220,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : [3,3,3,4,4,4,4,5,5,5,5,5]
			},
			{
				label: "My Second dataset",
				fillColor : "rgba(48, 164, 255, 0.2)",
				strokeColor : "rgba(48, 164, 255, 1)",
				pointColor : "rgba(48, 164, 255, 1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(48, 164, 255, 1)",
				data : [1,1,1,2,2,3,3,4]
			}
		]

	}

	
		
	var barChartData = {
		labels : ["January","February","March","April","May","June","July"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			},
			{
				fillColor : "rgba(48, 164, 255, 0.2)",
				strokeColor : "rgba(48, 164, 255, 0.8)",
				highlightFill : "rgba(48, 164, 255, 0.75)",
				highlightStroke : "rgba(48, 164, 255, 1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			}
		]

	}

	var pieData = [
			{
				value: 300,
				color:"#30a5ff",
				highlight: "#62b9fb",
				label: "Blue"
			},
			{
				value: 50,
				color: "#ffb53e",
				highlight: "#fac878",
				label: "Orange"
			},
			{
				value: 100,
				color: "#1ebfae",
				highlight: "#3cdfce",
				label: "Teal"
			},
			{
				value: 120,
				color: "#f9243f",
				highlight: "#f6495f",
				label: "Red"
			}

		];
			
	var doughnutData = [
				{
					value: 300,
					color:"#30a5ff",
					highlight: "#62b9fb",
					label: "Blue"
				},
				{
					value: 50,
					color: "#ffb53e",
					highlight: "#fac878",
					label: "Orange"
				},
				{
					value: 100,
					color: "#1ebfae",
					highlight: "#3cdfce",
					label: "Teal"
				},
				{
					value: 120,
					color: "#f9243f",
					highlight: "#f6495f",
					label: "Red"
				}

			];
			
	var radarData = {
	    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
	    datasets: [
	        {
	            label: "My First dataset",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: [3, 3, 4, 4, 5, 4, 4]
	        },
	        {
	            label: "My Second dataset",
	            fillColor : "rgba(48, 164, 255, 0.2)",
	            strokeColor : "rgba(48, 164, 255, 0.8)",
	            pointColor : "rgba(48, 164, 255, 1)",
	            pointStrokeColor : "#fff",
	            pointHighlightFill : "#fff",
	            pointHighlightStroke : "rgba(48, 164, 255, 1)",
	            data: [1, 3, 3, 1, 5, 4, 3]
	        }
	    ]
	};
	
	var polarData = [
		    {
		    	value: 300,
		    	color: "#1ebfae",
		    	highlight: "#38cabe",
		    	label: "Teal"
		    },
		    {
		    	value: 140,
		    	color: "#ffb53e",
		    	highlight: "#fac878",
		    	label: "Orange"
		    },
		    {
		    	value: 220,
		    	color:"#30a5ff",
		    	highlight: "#62b9fb",
		    	label: "Blue"
		    },
		    {
		    	value: 250,
		    	color: "#f9243f",
		    	highlight: "#f6495f",
		    	label: "Red"
		    }
		
	];
