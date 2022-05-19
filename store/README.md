**PKT price from coinmarketcap.com**

location /api/cmc-price {
    # proxy_cache pktcash;
    # proxy_cache_valid any 5m;
    # proxy_cache_lock on;        
    proxy_set_header X-CMC_PRO_API_KEY "<TODO: CMC API KEY>";
    proxy_set_header Content-Type application/json;
    proxy_pass https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=PKT;
}