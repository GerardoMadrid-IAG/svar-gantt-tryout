import { useRef } from "react";
import GanttChart from "./GanttChart";
import Header from "./Header";
import { links, scales,basic_tasks } from "./common/data";
import type { Link, Scale, Task } from "./common/interfaces";

const first_links: Link[] = links;
const first_scales: Scale[] = scales;
const tasks:Task[] = basic_tasks;

const Frame = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const apiRef = useRef(null);

  // const getData = async () => {
  //   const req = await fetch("http://localhost:3000");
  //   const response = await req.json();
  //   setTasks(response);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className=" bg-gray-400 w-screen h-screen">
      <Header />
      <div className="p-4 ">
        <GanttChart
          tasks={tasks}
          first_links={first_links}
          first_scales={first_scales}
          apiRef={apiRef}
        />
      </div>
    </div>
  );
};

export default Frame;
