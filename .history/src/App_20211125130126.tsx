import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([])

  const fetchData = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()
  }

  useEffect(() => {
    setData(data)
  }, [])

  console.log(data);
  

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
