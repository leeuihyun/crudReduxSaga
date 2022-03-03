import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const api = 'https://jsonplaceholder.typicode.com/todos/1';
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
