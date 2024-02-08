import axios from "axios";
import React, { useState, useEffect } from "react";

const ExchangeRate = () => {
  const [exchangeRate, setExchangeRate] = useState();

  useEffect(() => {
    async function fetchExchangeRate() {
      try {
        //api호출
        const response = await axios.get(
          "https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=QOfxsGtKjCbJiREwrmmjUyxN3xuIpLTw&searchdate=20240208&data=AP01"
        );

        setExchangeRate(response.json());
      } catch (err) {
        console.error("Error fetching exchange rate:", err);
      }
    }

    fetchExchangeRate();
  }, []);

  return (
    <div>
      {exchangeRate ? (
        <div>`오늘의 엔화 환율은 ${exchangeRate.tts} : 1000원 입니다.`</div>
      ) : (
        <p> 로딩중... </p>
      )}
    </div>
  );
};

export default ExchangeRate;
