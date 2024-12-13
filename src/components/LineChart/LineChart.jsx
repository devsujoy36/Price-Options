

import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const LineChart = () => {
    const studentsMarks = [
        { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 88 },
        { id: 2, name: "Bob", math: 85, physics: 80, chemistry: 82 },
        { id: 3, name: "Charlie", math: 92, physics: 89, chemistry: 91 },
        { id: 4, name: "David", math: 78, physics: 84, chemistry: 79 },
        { id: 5, name: "Emma", math: 84, physics: 78, chemistry: 76 },
        { id: 6, name: "Fiona", math: 82, physics: 87, chemistry: 85 },
        { id: 7, name: "George", math: 91, physics: 92, chemistry: 94 },
        { id: 8, name: "Hannah", math: 69, physics: 73, chemistry: 70 },
        { id: 9, name: "Ian", math: 87, physics: 88, chemistry: 83 },
        { id: 10, name: "Julia", math: 80, physics: 81, chemistry: 79 }
    ];


    return (
        <div>
            <LChart width={800} height={300} data={studentsMarks} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line name="math" type="monotone" dataKey="math" stroke="#8684d8" />
                <Line name="physics" type="monotone" dataKey="physics" stroke="#8884d8" />
                <Line name="chemistry" type="monotone" dataKey="chemistry" stroke="#82ca9d" />
            </LChart>
        </div>
    )
}

export default LineChart