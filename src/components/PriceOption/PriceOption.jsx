/* eslint-disable react/prop-types */

import Feature from "../Feature/Feature";


const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="border p-5 rounded-lg shadow-lg flex flex-col gap-3">
            <div className="text-center">

                <h2 className="flex md:flex-row  justify-center items-center">
                    <span className="text-5xl font-bold">{price}</span>
                    <span className="text-3xl">/-Month</span>
                </h2>
                <h4 className="text-3xl">{name}</h4>
            </div>

            <h1 className="font-semibold">Features</h1>
            <div className="flex-grow">
                <div className="pl-5 text-xs grid gap-1 flex-grow">
                    {
                        features.map((feature, idx) => <Feature key={idx} feature={feature} />)
                    }
                </div>
            </div>

            <div className="mt-5 flex justify-end">
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-white border border-transparent hover:border-emerald-500 active:scale-95 hover:text-black transition-all font-bold">Purchace</button>
            </div>
        </div>
    )
}

export default PriceOption;