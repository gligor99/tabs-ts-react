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
  const [data, setData] = useState<DataProps[]>();
  const [value, setValue] = useState()

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
  
  if (isLoading) return <section className="section loading"><h1>Loading ...</h1></section> ;
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      {data?.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>
      })}
    </section> 
  );
}

export default App;
