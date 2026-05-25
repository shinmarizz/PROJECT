var dataset = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')  
                  .filterDate('2020-01-01', '2020-12-31')
                  .filterBounds(ROI)
                  .sort('CLOUD_COVER') 
                  .first();

var clipdata = dataset.clip(ROI);

var trueColor432Vis = {
  bands:['SR_B4', 'SR_B3', 'SR_B2'],
  min: 7000.0,
  max: 12000.0 
};

Map.setCenter(106.05083, -6.02500, 8);
Map.addLayer(clipdata, trueColor432Vis, 'True Color (432)');

var label = 'Class';
var bands = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B6', 'SR_B7'];
var input = clipdata.select(bands);

var training = Forest.merge(ricefield).merge(residentialarea).merge(waterbodies);
print(training);

var trainImage = input.sampleRegions({
  collection:training,
  properties:[label],
  scale:30
});

print(trainImage);

var trainingData = trainImage.randomColumn();
var trainTest = trainingData.filter(ee.Filter.lessThan('random', 0.8));
var testSet = trainingData.filter(ee.Filter.greaterThanOrEquals('random', 0.8));

var classifier = ee.Classifier.smileCart().train(trainTest, label, bands);

var classified = input.classify(classifier);
print(classified);

var landcoverPalette = [
  '#228B22',
  '#ADFF2F',
  '#ff9966',
  '#1f78b4',
  ];

Map.addLayer(classified, {palette:landcoverPalette, min:0, max:3},'classification supervised');
  
  
  