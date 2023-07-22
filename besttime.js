var maxProfit = function(prices) {
    let mp = 0;
    let min = Infinity;
    for(let i = 0;i<prices.length;i++){
        min = Math.min(min,prices[i])
        mp = Math.max(mp,prices[i]-min)
    }
    return mp;
};