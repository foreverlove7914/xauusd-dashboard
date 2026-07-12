// =========================
// XAUUSD PRO Dashboard
// =========================

let chart;

function createChart() {

    document.getElementById("tvchart").innerHTML = "";

    chart = new TradingView.widget({
        container_id: "tvchart",
        width: "100%",
        height: 600,
        symbol: "BINANCE:XAUTUSDT"
        interval: convertInterval(TIMEFRAME),
        timezone: "Asia/Kuala_Lumpur",
        theme: "dark",
        style: "1",
        locale: "ms",
        toolbar_bg: "#0d1117",
        allow_symbol_change: false,
        enable_publishing: false
    });

}

function convertInterval(tf){

    switch(tf){

        case "1min": return "1";
        case "5min": return "5";
        case "15min": return "15";
        case "30min": return "30";
        case "1h": return "60";
        case "4h": return "240";
        case "1day": return "D";
        case "1week": return "W";

        default: return "5";

    }

}

async function loadPrice(){

    try{

        const url =
        `${BASE_URL}/price?symbol=${SYMBOL}&apikey=${API_KEY}`;

        const response = await fetch(url);

        const data = await response.json();

        if(data.price){

            document.getElementById("price").innerHTML =
            "$" + Number(data.price).toFixed(2);

            document.getElementById("trend").innerHTML =
            "LIVE";

        }else{

            document.getElementById("price").innerHTML =
            "API ERROR";

            console.log(data);

        }

    }catch(e){

        document.getElementById("price").innerHTML =
        "Connection Error";

        console.log(e);

    }

}

document.getElementById("timeframe")
.addEventListener("change",function(){

    TIMEFRAME=this.value;

    createChart();

    loadIndicators();

});

createChart();

loadPrice();

loadIndicators();

setInterval(loadPrice,REFRESH_INTERVAL);
