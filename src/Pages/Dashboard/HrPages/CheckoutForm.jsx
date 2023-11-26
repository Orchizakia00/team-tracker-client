import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const CheckoutForm = ({ salary, name }) => {
    const [error, setError] = useState([]);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    console.log(salary, name);

    useEffect( () => {
        axiosSecure.post('/create-payment-intent', {price: salary})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    }, [axiosSecure, salary])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="bg-blue-800 text-white py-3 px-5 rounded-xl my-5">Pay</button>
            <p className="text-red-600">{error}</p>
            {/* {
                transactionId && <p className="text-green-600">Your Transaction Id: {transactionId} </p>
            } */}
        </form>
    );
};

export default CheckoutForm;