import { useEffect, useState } from 'react';
import DisplayData from './components/DisplayData';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState('Loading data...')
  const [error, setError] = useState(null)
  
  useEffect(() => {
    // fetches data from the source and sets error message if data can't be retrieved
    const fetchData = () => {
      try {
        fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
        .then(res => res.json())
        .then(resData => {
          setData(resData)
          setLoading(null)
        })
      } catch {
        setError('There was a problem fetching the data')
        setLoading(null)
      }

    }

    fetchData()
  }, [])

  return (
    <div className="App">
      {loading && <h1>{loading}</h1>}
      {error && <h1>{error}</h1>}
      <DisplayData data={data}/>
    </div>
  );
}

export default App;
