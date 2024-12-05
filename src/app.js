// app.js
const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Application is running!',
    uptime: process.uptime(),
    hostname: os.hostname(),
    platform: os.platform(),
    timestamp: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
