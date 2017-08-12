    !(function (d3) {

    $("ccontent").empty();
	    
    $(document).ready(function() {
         console.log("Hello world.")
        });
	    
       var margin = {
         top: 20,
         right: 80,
         bottom: 30,
         left: 50
       },
       width = $(".chart1").width() - margin.left - margin.right,
       height = $(".chart1").height() - margin.top - margin.bottom;
        
       var svg = d3.select("dcontent").select(".chart1").append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        

    })(d3);
