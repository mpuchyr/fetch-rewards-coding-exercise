import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState('Loading data...')
  const [error, setError] = useState(null)
  
  useEffect(() => {
    const fetchData = () => {
      try {
        fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
        .then(res => res.json())
        .then(resData => {
          const sortedData = resData.sort((a, b) => {
            if (a.listId < b.listId) {
              return -1
            } else if (a.listId > b.listId) {
              return 1
            } else {
              return 0
            }
          })
          setData(sortedData)
          setLoading(null)
        })
      } catch {
        setError('There was a problem fetching the data')
      }

    }

    fetchData()
  }, [])

  console.log(data)

  return (
    <div className="App">
      {loading && <h1>{loading}</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default App;
