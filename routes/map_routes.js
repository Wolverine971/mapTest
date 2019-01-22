const curl = new (require( 'curl-request' ))();

module.exports = function (app, db) {

  app.get('/api/map/:name', (req, res) => {
    // You'll create your note here.
    //console.log(name)
    console.log(req.params.name)


    curl
     .setHeaders([
        // 'Content-Type: application/x-www-form-urlencoded',
       'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
     ])
    // .setBody(form = [
    //   "text=" + req + "&geometry=&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=&f=pjson"
    //     {"text": req}, 
    //     // {"geometry": null}, 
    //     { "geometryType": "esriGeometryPolygon"}, 
    //     {"inSR": null}, 
    //     {"spatialRel": "esriSpatialRelIntersects"}, 
    //     {"relationParam": null}, 
    //     // {"objectIds": null}, 
    //     // {"where": null}, 
    //     // {"time": null}, 
    //     {"returnCountOnly": "false"}, 
    //     {"returnIdsOnly": "false"}, 
    //     {"returnGeometry": "true"}, 
    //     {"maxAllowableOffset": null}, 
    //     {"outSR": null}, 
    //     {"outFields": null}, 
    //     {"f": "pjson"}
    //   ]
    //  )
    .get(
    //   "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/2/query?" + 
    // "text=" + req.params.name + "&geometry=&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=&f=pjson"
      //"https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/18/query?where=&text=" + req.params.name + "&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&resultOffset=&resultRecordCount=&queryByDistance=&returnExtentsOnly=false&datumTransformation=&parameterValues=&rangeValues=&f=pjson"
    )
    .then(({statusCode, body, headers}
      //response
      ) => {
      //console.log(response)
      // console.log("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/2/query?text=Florida&geometry=&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=&f=pjson")
      // console.log("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/2/query?" + 
      // "text=" + req.params.name +   "&geometry=&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=&f=pjson"
      //   )
      // console.log("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/2/query?text=Florida&geometry=&geometryType=esriGeometryPolygon&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&objectIds=&where=&time=&returnCountOnly=false&returnIdsOnly=false&returnGeometry=true&maxAllowableOffset=&outSR=&outFields=&f=pjson"
      //   )
      //console.log('body:', body);
      //console.log(statusCode, body, headers)
      //console.log(JSON.stringify(body))
      res.json(body);
      //res.json({"response": response.body});
    })
    .catch((e) => {
        console.log(e);
    });

    // var item = new Item(req.body);
    //   item.save()
    //  .then(item => {
      //console.log("got to the end point")
       //res.setHeader('Content-Type', 'application/json');
       //curl
        //res.json({"item": "Item added successfully"});
    //  })
    //  .catch(err => {
    //    res.status(400).send("unable to save to database");
    //  });
    //return "yellow fello"
    //res.send('Hello')
  })
}
