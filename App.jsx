import {useState, useEffect} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const sub = () =>{
    setCount(count - 1);
  }
  const add = () =>{
    setCount(count + 1);
  }

  //useEffect

  useEffect (() => {
    //fn logic
       console.log(" count ", count);
    return () => {
      //clean up function 
    }

  }, [
    // count  // ab kuch nhe ho ga agr uncomment kar dein tu run ho ga aur console mein count kary ga
  ])  // dependency array : work as a watchman 
  


  return (
    <>
      <div style={{justifyContent:"center", textAlign:"center",}}>
      <h2 >
        Counter 
      </h2>

        <p>Hello this is counter app and you can learn about useState hooks.</p>
        <button onClick={sub}>
          -
        </button>
         <h3> {count} </h3>
        <button onClick={add}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
