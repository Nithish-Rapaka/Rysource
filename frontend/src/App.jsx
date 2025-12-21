import {useEffect,useState} from 'react';
function App() {
  const [data,setData]=useState(null);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/')
    .then(res=>res.json())
    .then(data=>setData(data.message))
    .catch(error=>console.error('Error fetching data:', error));
  },[])
  return(
    <>
    <h1>{data || "Loading..."}</h1>
    </>
  )
}
export default App;