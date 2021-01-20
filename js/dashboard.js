$(document).ready(function(){

	// Get navbar height
	var navbarHeight = $(".dash-navbar").outerHeight();
	$(".dash-contents .sidebar").css("paddingTop", navbarHeight);
	$(".dash-contents .details").css("paddingTop", navbarHeight);
	$(".dash-contents .market").css("paddingTop", navbarHeight);

	function setAdvanceChartWidget(){
		// Get market width
		var chartWidth = $(".dash-contents .trade .chart").outerWidth();
		var chartHeight = $(".dash-contents .trade .chart").outerHeight() - 50;

		new TradingView.widget(
	    {
	      "width": chartWidth,
	      "height": chartHeight,
	      "symbol": "NASDAQ:AAPL",
	      "interval": "D",
	      "timezone": "Etc/UTC",
	      "theme": "dark",
	      "style": "1",
	      "locale": "en",
	      "toolbar_bg": "#f1f3f6",
	      "enable_publishing": false,
	      "hide_side_toolbar": false,
	      "allow_symbol_change": true,
	      "container_id": "tradingview_65e38"
	    }
	    );
	}

	setTimeout(function() {
		setAdvanceChartWidget();
	}, 500);

});