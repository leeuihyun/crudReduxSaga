import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  //🌟 React news-api, axios
  const api =
    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d5acc892bd7744ffbc8d2bcb88f9be49';
  const onClick = async () => {
    try {
      const res = await axios.get(api);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>return</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
