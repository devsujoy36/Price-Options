import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { InfinitySpin } from 'react-loader-spinner';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import LineChart from "../LineChart/LineChart";

const Phones = () => {
    const [phones, setPhones] = useState([])
    const [fakePhones, setFakePhones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phoneData)
                setFakePhones(phonesWithFakeData)
                setLoading(false)
            })
    }, [])

    return (
        <div className="max-w-screen-2xl mx-auto">
            <h1 className="mt-10 mb-5 text-5xl font-semibold text-center">Phones: {phones.length}</h1>

            <div className="md:hidden">
                {loading ?
                    <div className="w-full h-56 flex justify-center items-center">
                        <InfinitySpin
                            visible={true}
                            width="200"
                            color="black"
                            ariaLabel="infinity-spin-loading"
                        />
                    </div>
                    :
                    <div className=" flex md:flex-row flex-col m-0">
                        <LineChart />
                        <BarChart width={350} height={150} data={fakePhones}>
                            <Bar dataKey="price" fill="#8884d8" />
                            <XAxis dataKey={name} />
                            <YAxis />
                            <Tooltip />
                        </BarChart>
                    </div>
                }
            </div>


            <div className="hidden md:block">
                {loading ?
                    <div className="w-full h-56 flex justify-center items-center">
                        <InfinitySpin
                            visible={true}
                            width="200"
                            color="black"
                            ariaLabel="infinity-spin-loading"
                        />
                    </div>
                    :
                    <div className=" flex md:flex-row flex-col m-0">
                        <LineChart />
                        <BarChart width={800} height={300} data={fakePhones}>
                            <Bar dataKey="price" fill="#8884d8" />
                            <XAxis dataKey={name} />
                            <YAxis />
                            <Tooltip />
                        </BarChart>
                    </div>
                }
            </div>


        </div>
    )
}

export default Phones