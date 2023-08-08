// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect } from "react";
// import { useState } from "react";
// import useAuth from '../Hooks/useAuth'

// const CheckOutForm = ({price}) => {
//     const {user} = useAuth()
//     const stripe = useStripe()
//     const elements = useElements()
//     const [cardError, setCardError] = useState('')
//     const [clientSecret, setClientSecret] = useState('')
//     const [processing, setProcessing] = useState(false)
//     const [tId, setTId] = useState('')

//     useEffect(()=>{
//         fetch('https://music-instrument-learning-server-seven.vercel.app/create-payment-intent',{
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({price})
//         })
//         .then(res =>res.json())
//         .then(data =>{           
//             setClientSecret(data.clientSecret)
//         })
//     },[])

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         if (!stripe || !elements) {
//             return
//         }
//         const card = elements.getElement(CardElement)
//         if (card === null) {
//             return
//         }
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })
//         if (error) {
//             setCardError(error.message)
            
//         }
//         else {
//             setCardError('')
            
//         }
//         setProcessing(true)

//         const {paymentIntent,payError} = await stripe.confirmCardPayment(
//             clientSecret,
//             {
//                 payment_method: {
//                     card: card,
//                     billing_details: {
//                         email: user?.email || 'No Email',
//                         name: user?.displayName || 'No Name'
//                     },
//                 },
//             },
//         ) 

//         if(payError){
//             console.log(payError);
//         }
//         setProcessing(false)
//         if(paymentIntent.status === "succeeded"){
//             setTId(paymentIntent.id)
//             const payment = {email: user?.email, transactionId: paymentIntent.id, price, date: new Date()}
//             fetch('https://music-instrument-learning-server-seven.vercel.app/payments',{
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(payment)
//             })
//             .then(res => res.json())
//             .then(data =>{
//                 console.log(data);
//             })
//         }

//     }
//     return (
//         <div>
//             <form className="w-1/2" onSubmit={handleSubmit}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 <button disabled={!stripe || !clientSecret || processing} className="btn btn-success mt-4" type="submit">
//                     Pay
//                 </button>
//             </form>
//             {cardError && <p className="text-red-600 pt-6">{cardError}</p>}
//             {tId && <p>Transaction completed</p>}
//         </div>
//     );
// };

// export default CheckOutForm;