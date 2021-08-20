

   am4core.ready(function() {

    // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
    
        // Create chart instance
        var chart = am4core.create("chartdiv2", am4charts.XYChart);
        
        var iterateDay = function() {
            
            //var day = moment(inputs.date).dayOfYear();
            var dailyPerformanceArray = [];
            var iterator = 0;
            var date = new Date();
                for (var i = 0; i < 239; i++) {
                    
                    //var nexthour = moment(day).add(iterator, "hours");
                    
                    iterator += 0.1;
                    inputs.solIterate(iterator);
                    dailyPerformanceArray.push({hour: moment(inputs.date).add(iterator, "hours").format("MM-DD HH:mm").toString(),irradiation: inputs.installationSize * inputs.s_module});
                    console.log(moment(inputs.date).add(iterator, "hours").format("YYYY-MM-DD HH:mm").toString());
                    //console.log(inputs.s_mod_am);
                }
            
            
            this.dailyPerformanceArray = dailyPerformanceArray;
            console.log(dailyPerformanceArray);
            
        };
        // Add data
    
        
        
        var chartDaily1 = function() {
            iterateDay();
            series.data = dailyPerformanceArray;
            
        };
        
        var chartDaily2 = function() {
            iterateDay();
            series2.data = dailyPerformanceArray;
            
        };
        this.chartDaily1 = chartDaily1;
        this.chartDaily2 = chartDaily2;
        
        //chart.dateFormatter.dateFormat = "yyyy-MM-DD HH:mm";
        // Create axes
    
        var hourAxis = chart.xAxes.push(new am4charts.DateAxis());
        hourAxis.dataFields.value = "hour";
        hourAxis.renderer.grid.template.location = 0;
        hourAxis.renderer.minGridDistance = 30;
        hourAxis.baseInterval = {
            "timeUnit": "minute",
            "count": 6
        }
        hourAxis.dateFormats.setKey("minute", "HH:mm");
        hourAxis.title.text = "Time of Day (hours)";
        hourAxis.title.dy = 20;
        
    
        hourAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
          if (target.dataItem && target.dataItem.index & 2 == 2) {
            return dy + 25;
          }
          return dy;
        });
    
        var powerAxis = chart.yAxes.push(new am4charts.ValueAxis());
        powerAxis.title.text = "Expected Output (kW)";
        powerAxis.title.fontFamily = "sans-serif"
        powerAxis.renderer.minGridDistance = 10;
    
        // Create series
        var series = chart.series.push(new am4charts.LineSeries());
        var series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "irradiation";
        series.dataFields.valueY = "irradiation";
        series2.dataFields.dateX = "hour";
        series.dataFields.dateX = "hour";
        series2.name = "Orientation 2";
        series.name = "Orientation 1";
        chart.cursor = new am4charts.XYCursor();
        series.strokeWidth = 3;
        series2.strokeWidth = 3;
        
        var title = chart.titles.create();
        title.text = "Power Output Thoughout the Day";
        title.fontSize = 25;
        title.fontFamily = "sans-serif"
        // font-family: sans-serif;
        title.marginBottom = 30;
        series.tooltipText = "{dateX.formatDate('MM-dd HH:mm')}: [bold]{valueY}[/] (kW)";
        series2.tooltipText = "{dateX.formatDate('MM-dd HH:mm')}: [bold]{valueY}[/] (kW)";
       // series.columns.template.tooltipText = "{dateX}: [bold]{valueY}[/]";
       // series.columns.template.fillOpacity = .8;
    
       // var columnTemplate = series.columns.template;
       // columnTemplate.strokeWidth = 2;
      //  columnTemplate.strokeOpacity = 1;
    
    }); 


    
