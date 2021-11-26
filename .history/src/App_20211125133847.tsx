import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

type DataProps = {
  company: string;
  dates: string;
  duties: [];
  title: string;
  id: string;
  order: number;
};

type ValueProps = {
  value: DataProps;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DataProps[]>();
  const [value, setValue] = useState<ValueProps>();

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

  if (isLoading)
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );

  const { company, dates, duties, title } = data[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data?.map((item) => {
            return (
              <button className="job-btn" key={item.id}>
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info"></article>
      </div>
    </section>
  );
}

export default App;