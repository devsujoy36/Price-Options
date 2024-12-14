import PriceOption from "../PriceOption/PriceOption"

const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Plan",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "1 free group class per month",
        "Standard support via email",
        "Access during off-peak hours only"
      ],
      "price": 29.99
    },
    {
      "id": 2,
      "name": "Standard Plan",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "2 personal training sessions per month",
        "Access to sauna and steam room",
        "Free towel service",
        "24/7 gym access",
        "Discounted merchandise (5% off)"
      ],
      "price": 49.99
    },
    {
      "id": 3,
      "name": "Premium Plan",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "4 personal training sessions per month",
        "Access to sauna and steam room",
        "Priority booking for classes",
        "Free guest pass (1 per month)",
        "Nutrition consultation (1 session per month)",
        "Access to premium workout areas",
        "Complimentary water bottle and snacks"
      ],
      "price": 79.99
    },
    {
      "id": 4,
      "name": "Annual Plan",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "Access to sauna and steam room",
        "10% discount on personal training sessions",
        "Free guest pass (2 per month)",
        "Exclusive workshops and events",
        "Free fitness tracking app subscription",
        "Monthly progress evaluation with a trainer",
        "VIP parking spot (where available)"
      ],
      "price": 499.99
    }
  ]

  return (
    <div className="max-w-screen-2xl my-10 mx-auto px-10">
      <h2 className="text-3xl font-bold text-center my-10">Best Prices in the Town</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">

      {
        priceOptions.map(option =>  <PriceOption key={option.id} option={option} /> )
      }
      </div>
    </div>
  )
}

export default PriceOptions