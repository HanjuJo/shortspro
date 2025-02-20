import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);

  const fetchTrends = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/shorts_trends?keyword=${keyword}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">📊 ShortsPro - 유튜브 숏츠 분석</h1>
      <input
        type="text"
        placeholder="키워드를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="p-2 border border-gray-300 rounded w-1/2"
      />
      <button onClick={fetchTrends} className="ml-2 p-2 bg-blue-500 text-white rounded">
        🔍 트렌드 분석
      </button>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((video, index) => (
          <div key={index} className="card bg-gradient-to-r from-red-400 to-red-500 text-white p-4 rounded-lg">
            <h2 className="text-lg font-bold">{video.제목}</h2>
            <p>조회수: {video.조회수}</p>
            <a href={video.영상_URL} target="_blank" rel="noopener noreferrer" className="text-blue-200 underline">
              영상 보기
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
