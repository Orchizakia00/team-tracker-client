import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Label, TextInput } from "flowbite-react";


const CheckoutForm = ({ salary, _id, email }) => {
    const [error, setError] = useState([]);
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: salary })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, salary])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const month = form.month.value;
        const year = form.year.value;

        const date = {year, month};
        console.log(date);

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

        // payment confirmation
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    employeeId: _id,
                    email: email,
                    amount: salary,
                    transactionId: paymentIntent.id,
                    date: date,
                }

                // const res = await axiosSecure.post(`/payments`, payment)
                // console.log('payment saved', res.data);
                // // refetch();
                // if (res.data.insertedId) {
                //     toast.success('Payment Successful');
                // }

                try {
                    const res = await axiosSecure.post(`/payments`, payment)
    
                    if (res.data.insertedId) {
                        toast.success('Payment Successful');
                    }
                } catch (error) {
                    // Check if the error is due to a duplicate payment
                    if (error.response && error.response.status === 400) {
                        toast.error('Payment already made for this month');
                    } else {
                        console.error('Error processing payment:', error);
                        toast.error('Error processing payment');
                    }
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Employee's Salary" />
                </div>
                <TextInput
                    id="salary"
                    defaultValue={salary}
                    required
                />
            </div>
            <div className="flex gap-3 mb-8">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Month" />
                    </div>
                    <TextInput
                        name="month"
                        required
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Year" />
                    </div>
                    <TextInput
                        name="year"
                        required
                    />
                </div>
            </div>

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
            {
                transactionId && <p className="text-green-600">Your Transaction Id: {transactionId} </p>
            }
        </form>
    );
};

export default CheckoutForm;