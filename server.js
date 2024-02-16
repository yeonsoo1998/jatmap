const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/exchangeRate', async (req, res) => {

  let today = new Date();

  for(let i=0 ; i<7 ; i++){

    let year = today.getFullYear().toString().padStart(4, '0');
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');
    
    let formattedDate = year + month + day;
  
    try {
      const response = await axios.get(
        `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=QOfxsGtKjCbJiREwrmmjUyxN3xuIpLTw&searchdate=${formattedDate}&data=AP01`
      );
      if(response.data){
        res.json(response.data);
        return;
      }
    }
    catch (err) {
      console.error("Error fetching exchange rate:", err);
      res.status(500).json({ error: 'An error occurred while fetching exchange rate' });
      return;
    }
      today.setDate(today.getDate() - 1);
  }
});
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });   