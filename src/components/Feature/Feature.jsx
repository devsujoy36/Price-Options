import { FaCircleCheck } from "react-icons/fa6";
const Feature = ({ feature }) => {
    return (
        <div className="flex gap-2 items-center">
            <FaCircleCheck className="text-emerald-600"/>
            <p>{feature}</p>
        </div>
    )
}

export default Feature