import React, { useState, useEffect } from 'react';

const FetchExample = () => {
  const [text, setText] = useState("posts");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${text}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log("This is what");
  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
      <div>
        <button onClick={() => setText("posts")}>Posts</button>
        <button onClick={() => setText("users")}>Users</button>
        <button onClick={() => setText("comments")}>Comments</button>
      </div>
      <div>
        {Array.isArray(data) ? (
          data.map((item, i) => (
            <pre key={i} style={{ textAlign: 'center', width: '100%' }}>
              {JSON.stringify(item)}
            </pre>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default FetchExample;
