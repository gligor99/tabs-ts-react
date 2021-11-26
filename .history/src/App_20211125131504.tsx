import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

type DataProps = {
  company: string;
  dates: string;
  duties: [];
  title: string;
  id: string;
  order: number;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DataProps>();

  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  console.log(data);
  

  if (isLoading) return <h1>Loading ...</h1>;

  return (
    <div className="App">
      
    </div>
  );
}

export default App;