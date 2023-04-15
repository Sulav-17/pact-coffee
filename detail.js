var client = contentful.createClient({
    space: 'nwvbr4dtmxvg',
    accessToken: 'tKNKGLXqeJrnPaBKF2vSCfEsk_oSUNNriWJiH9BhZTc',
  });
  
  client.getEntries({content_type:'carsCollection'}).then(function (entries) {
    
    entries.items.forEach(function (entry) {

      var carsCollection=document.createElement('div');
      document.getElementById('all-carsCollection').append(carsCollection);

      var title = document.createElement('h3');
      title.innerHTML = entry.fields.title;
      carsCollection.append(title);

      var Price = document.createElement('p');
      Price.innerHTML = entry.fields.Price;
      carsCollection.append(Price);

      
   var cars = document.createElement('img');
      cars.src = 'http:'+entry.fields.cars.fields.file.url;
      carsCollection.append(cars);

      var detailsButton = document.createElement('a');
      detailsButton.innerHTML = 'Learn More';
      carsCollection.append(detailsButton);
      detailsButton.href='details.html?id='+entry.sys.id;
  
              
    });
  });