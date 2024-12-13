
import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const mathMarks = [
        { id: 1, name: "Alice", marks: 78 },
        { id: 2, name: "Bob", marks: 85 },
        { id: 3, name: "Charlie", marks: 92 },
        { id: 4, name: "David", marks: 88 },
        { id: 5, name: "Emma", marks: 74 },
        { id: 6, name: "Fiona", marks: 81 },
        { id: 7, name: "George", marks: 95 },
        { id: 8, name: "Hannah", marks: 69 },
        { id: 9, name: "Ian", marks: 87 },
        { id: 10, name: "Julia", marks: 80 }
      ];
      
  return (
    <div>
        <LChart width={500} height={400} data={mathMarks}>
            <Line></Line>
        </LChart>
    </div>
  )
}

export default LineChart