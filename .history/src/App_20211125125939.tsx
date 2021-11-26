import { useState } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([])

  const fetchData = (url: string) => {
    const response = fetch(url)
    const data = response.json()
  }

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
