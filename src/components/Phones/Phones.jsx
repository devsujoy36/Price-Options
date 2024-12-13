import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import React, { PureComponent } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([])
    const [fakePhones, setFakePhones] = useState([])

    useEffect(() => {
        //   fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //   .then(res => res.json())
        //   .then(data => setPhones(data.data))

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
            })
    }, [])
    console.log(phones);
    console.log(fakePhones);


    return (
        <div className="max-w-screen-2xl my-10 md:mx-auto mx-16">
            <h1 className="text-5xl text-center font-bold">Phone: {phones.length}</h1>
            
                <BarChart width={1200} height={400} data={fakePhones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey={name}/>
                    <YAxis/>
                    <Tooltip/>
                </BarChart>
        </div>
    )
}

export default Phones