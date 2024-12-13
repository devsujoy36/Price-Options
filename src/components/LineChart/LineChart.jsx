
import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const studentsMarks = [
        { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 88 },
        { id: 2, name: "Bob", math: 85, physics: 80, chemistry: 82 },
        { id: 3, name: "Charlie", math: 92, physics: 89, chemistry: 91 },
        { id: 4, name: "David", math: 88, physics: 84, chemistry: 79 },
        { id: 5, name: "Emma", math: 74, physics: 78, chemistry: 76 },
        { id: 6, name: "Fiona", math: 81, physics: 87, chemistry: 85 },
        { id: 7, name: "George", math: 91, physics: 92, chemistry: 94 },
        { id: 8, name: "Hannah", math: 69, physics: 73, chemistry: 70 },
        { id: 9, name: "Ian", math: 87, physics: 88, chemistry: 83 },
        { id: 10, name: "Julia", math: 80, physics: 81, chemistry: 79 }
      ];
      
      
  return (
    <div className="max-w-screen-2xl my-10 md:mx-auto mx-16">
        <LChart width={800} height={400} data={studentsMarks}>
            <Line stroke='red' dataKey="math"></Line>
            <Line stroke='blue' dataKey="physics"></Line>
            <Line stroke='green' dataKey="chemistry"></Line>
        </LChart>
    </div>
  )
}

export default LineChart