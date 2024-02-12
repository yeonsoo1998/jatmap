import React, { useState, useEffect } from "react";
import axios from "axios";

const ExchangeRate = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExchangeRate() {
      try {
        const response = await axios.get("http://localhost:8080/exchangeRate");
        setExchangeRate(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching exchange rate:", err);
        setError("일본 옌 환율 정보를 가져오는 도중 오류가 발생했습니다.");
        setLoading(false);
      }
    }

    fetchExchangeRate();
  }, []);


  const findJapaneseYenExchangeRate = () => {
    if (!exchangeRate) return null;
    return exchangeRate.find(currency => currency.cur_unit === "JPY(100)");
  };

  // 일본 옌의 환율 정보를 가져옴
  const japaneseYenExchangeRate = findJapaneseYenExchangeRate();

  return (
    <div>
      {loading ? (
        <p>로딩중...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>오늘의 일본 옌 환율</h2>
          {exchangeRate ? (
            <p>{`100JPY = ${japaneseYenExchangeRate.ttb} KRW`}</p>
          ) : (
            <p>일본 옌 환율 정보를 찾을 수 없음</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ExchangeRate;