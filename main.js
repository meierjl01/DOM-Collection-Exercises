
// console.log(markets[0].marketname);

var marketsByDistance = markets.filter(function(market, i, arr) {
  if (market.marketname.split(' ')[0] <= 10) {
     return true;
   }
}).map(function(market, i, arr) {
    return market.marketname.split(' ').slice(1 ).join(' ');
});

console.log(marketsByDistance);


// var market = marketsByDistance[0];
// var li = $('<li>' + market + '</li>');
// //put the li into the dom

marketsByDistance.forEach(function(market, i){
 var li = $('<li>' + marketsByDistance[i] + '</li>');
 $('.market').append(li);
});



var catgif = cats.data.map(function(cat, i){
 return cats.data[i].images.fixed_height.url;
});

cats.data.forEach(function(cat, i){
 var img=$('<img src='+ catgif[i] +'>');
 $('.cats').append(img);
});
