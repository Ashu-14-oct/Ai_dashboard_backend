const fs = require('fs');
const {spawn} = require('child_process');

module.exports.metrics = function(req, res){
    const metrics = {
        accuracy: 0.85,
        precison: 0.76,
        recall: 0.92
    }
    res.json(metrics);
}

module.exports.predictions = function(req, res){
    // Execute the Python script to generate prediction data
  const pythonProcess = spawn('python', ['./ai_func/ai_predictions.py']);

  // When the script is done, read the generated data from the file and send it as JSON
  pythonProcess.on('close', () => {
    fs.readFile('./ai_func/predictions.json', 'utf8', (err, predictionsData) => {
      if (err) {
        return res.status(500).json({ error: 'Error reading prediction data' });
      }
      const predictions = JSON.parse(predictionsData);
      res.json(predictions);
    });
  });
}