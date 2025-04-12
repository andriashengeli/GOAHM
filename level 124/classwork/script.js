let products = [
    { name: "pc", price: 1200 },
    { name: "headseat", price: 25 },
    { name: "Keyboard", price: 45 },
    
    ];
  
 
  let productnames = products.map(product => product.name);
  console.log("Product Names:", productnames);
  
  
  let affordableproducts = products.filter(product => product.price < 100);
  console.log("Affordable Products:", affordableproducts);
  
 
  let totalprice = products.reduce((sum, product) => sum + product.price, 0);
  console.log("Total Price:", totalprice);
  

  let productNamesreversed = products.reduceRight((num, product, idk) => {
    return idk === products.length - 1 ? product.name : num + " - " + product.name;
  }, "");
  console.log("Product Names Reversed:", productNamesreversed);