var client = contentful.createClient({
    space: 'nwvbr4dtmxvg',
    accessToken: 'tKNKGLXqeJrnPaBKF2vSCfEsk_oSUNNriWJiH9BhZTc',
  });
  
  client.getEntries({content_type:'carsCollection'}).then(function (entries) {
    
    entries.items.forEach(function (entry) {

      var carsCollection=document.createElement('div');
      document.getElementById('all-products').append(carsCollection);

      var title = document.createElement('h3');
      title.innerHTML = entry.fields.title;
      carsCollection.append(title);

  
   var cars = document.createElement('img');
      cars.src = 'http:'+entry.fields.cars.fields.file.url;
      carsCollection.append(cars);

      var Price = document.createElement('p');
      Price.innerHTML = entry.fields.Price;
      carsCollection.append(Price);
             
    });
  });



  client.getEntries({content_type:'carShops'}).then(function (entries) {
    entries.items.forEach(function (entry) {
      console.log(entry);
  
      var carShops = document.createElement('div');
      coffee.append(carShops);
  
      var title = document.createElement('h3');
      title.innerHTML = entry.fields.name;
      carShops.append(title);
  
      var image = document.createElement('img');
      image.src = 'http:' + entry.fields.image.fields.file.url;
      carShops.append(image);
    });
  });
  