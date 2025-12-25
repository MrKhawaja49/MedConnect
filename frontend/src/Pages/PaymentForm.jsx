import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import cross_icon from "../assets/cross_icon.png";  // Correct path and .png extension
const CARD_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const PaymentForm = ({ 
  appointmentId, 
  amount, 
  backendUrl, 
  token, 
  onPaymentSuccess, 
  onClose // New prop to handle closing
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/create-payment-intent",
        { appointmentId, amount },
        { headers: { token } }
      );
      const clientSecret = data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (result.error) {
        toast.error(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
        await axios.post(
          backendUrl + "/api/user/mark-appointment-paid",
          { appointmentId },
          { headers: { token } }
        );
        onPaymentSuccess();
        onClose(); // Close the modal after successful payment
      }
    } catch (err) {
      console.log(err);
      toast.error("Payment failed, try again.");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-md relative">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Close payment form"
          >
            <img src={cross_icon} alt="Close" className="w-6 h-6" />
          </button>

          {/* Header with Price Summary */}
          <div className="bg-blue-700 text-white p-6 text-center pt-12"> {/* Added pt-12 to make space for close button */}
            <h2 className="text-xl font-semibold mb-2">Appointment Payment</h2>
            <div className="bg-white text-blue-700 rounded-xl py-4 px-6 inline-block">
              <p className="text-sm opacity-80">Amount to Pay</p>
              <p className="text-4xl font-bold">${amount}</p>
            </div>
          </div>

          {/* Card Input Section */}
          <div className="p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Details
              </label>
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              disabled={!stripe || loading}
              className="w-full bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center text-lg"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                `Pay $${amount}`
              )}
            </button>
          </div>

          {/* Footer - Secured by Stripe */}
          <div className="bg-gray-50 px-8 py-4 text-center text-sm text-gray-600">
            <p>Secured by <span className="font-semibold text-blue-700">Stripe</span> 🔒</p>
            <p className="mt-1">Your card information is encrypted and never stored.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;