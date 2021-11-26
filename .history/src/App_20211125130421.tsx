import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([]);

  const fetchData = async (url: string) => {
    setIsLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
