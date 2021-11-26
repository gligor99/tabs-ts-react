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

type JobsProps = {
  jobs: DataProps[];
}

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DataProps[]>([]);
  const [value, setValue] = useState<number>(0);
  const [jobs, setJobs] = useState<JobsProps | null>(null)

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

  if(data){
    const newJobs = data[value];
    setJobs(newJobs)
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data?.map((item, index) => {
            return (
              <button
                className="job-btn"
                key={item.id}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">{/* {jobs.company} */}</article>
      </div>
    </section>
  );
}

export default App;