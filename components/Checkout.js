import { useSelector } from 'react-redux';

export default function Checkout() {
    const items = useSelector(state => state.Cartslicer.items);

    // Calculate the total bill for all items
    const totalAmount = items.reduce((acc, value) => acc + (value.defaultPrice * value.Quantity) / 100, 0).toFixed(2);
    const deliveryFee = 61.04;
    const totalToPay = (parseFloat(totalAmount) + deliveryFee).toFixed(2);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 mb-6 transition-all transform hover:scale-105 hover:shadow-2xl">
                {items.map((value) => (
                    <div key={value.id} className="flex justify-between items-center mb-4">
                        <img className="h-40 w-60 rounded-lg object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${value.imageId}`} alt={value.name} />
                        <div className="text-3xl font-semibold text-gray-800">{value.name}</div>
                        <div className="text-3xl font-semibold text-gray-800">{"x" +value.Quantity}</div>
                        <div className="text-xl font-semibold text-green-700">₹{((value.defaultPrice / 100) * value.Quantity).toFixed(2)}</div>
                    </div>
                ))}

                <h3 className="text-lg font-bold text-gray-600 mb-2">Bill Details</h3>
                <div className="flex justify-between mb-2">
                    <div>Item Total</div>
                    <div>₹{totalAmount}</div>
                </div>
                <div className="flex justify-between mb-2">
                    <div>Delivery Fee | 6.0 kms</div>
                    <div>₹{deliveryFee.toFixed(2)}</div>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between">
                    <div className="font-bold cursor-pointer">TO PAY</div>
                    <div className="text-xl font-bold text-red-600">₹{totalToPay}</div>
                </div>
            </div>
        </div>
    );
}


