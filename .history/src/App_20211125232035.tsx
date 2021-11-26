import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

type DataProps = {
  company: string;
  dates: string;
  duties: string[];
  title: string;
  id: string;
  order: number;
};

const App = () =>  {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DataProps | null>(null);
  const [value, setValue] = useState<number>(0);

  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          <button>{data.company}</button>
        </div>
        <article className="job-info">
          {/* <h3>{jobs.title}</h3>
          <h4>{jobs.company}</h4>
          <p className="job-dates">{jobs.dates}</p>
          {jobs.duties.map((duty, index) => {
            return (
              <div key={index} className="job-desk">
                <p>{duty}</p>
              </div>
            );
          })} */}
        </article>
      </div>
    </section>
  );
};

export default App;
