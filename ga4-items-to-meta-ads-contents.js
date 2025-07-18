// Crea una variable de javascript personalizada en GTM con este código para generar el contents de Meta Ads
function() {
  var items = {{Ecommerce Items}} || [];  // esta variable es la que contiene `ecommerce.items`
  var contents = [];

  for (var i = 0; i < items.length; i++) {
    contents.push({
      id: items[i].item_id || '',
      quantity: items[i].quantity || 1,
      item_price: items[i].price || 0
    });
  }

  return contents;
}
