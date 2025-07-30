import { Gantt } from "wx-react-gantt";
import "wx-react-gantt/dist/gantt.css";
import type { Task, Link, Scale } from "./common/interfaces";

interface GanttChartProps {
  tasks: Task[];
  first_links: Link[];
  first_scales: Scale[];
  apiRef:any
}

const GanttChart: React.FC<GanttChartProps> = ({
  tasks,
  first_links,
  first_scales,
  apiRef
}) => {
  return (
    <Gantt
      tasks={tasks}
      links={first_links}
      scales={first_scales}
      apiRef={apiRef}
    />
  );
};

export default GanttChart;
