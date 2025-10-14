import AlertBanner from "../features/legal/AlertBanner";
import PolicyCard from "../features/legal/PolicyCard";

function RefundPolicyPage() {
  return (
    <>
      {" "}
      <div className="mx-auto px-16 py-12 min-h-screen">
        <div className=" rounded-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Refund Policy
            </h1>
            <p className="text-gray-500">Last updated: February 12, 2024</p>
          </div>

          {/* Introduction */}
          <PolicyCard title="Introduction">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              Thank you for subscribing to the service at incorporation.lk. We
              value your satisfaction and strive to provide you with the best
              online service possible. If, for any reason, you are not
              completely satisfied with our service, we are here to help.
            </p>
          </PolicyCard>

          {/* Refunds */}
          <PolicyCard title="Refunds">
            <div className="space-y-4">
              <p className="text-sm md:text-md text-gray-700 leading-relaxed">
                We accept refund requests within 7 days of the date of payment.
                You may directly e-mail your refund request by mentioning the
                reason for the refund to contact@incorporation.lk.
              </p>
              <p className=" text-sm md:text-md text-gray-700 leading-relaxed">
                Once we receive your refund request e-mail, we will notify you
                of the status of your refund. If your request is approved, we
                will initiate a refund to your original method of payment
                (payment-initiated media). Please note that the refund amount
                will exclude any charges incurred during the transaction.
              </p>
            </div>
          </PolicyCard>

          {/* Subscription Transfer */}
          <PolicyCard
            title="Subscription Transfer"
            icon={
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            }
          >
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              We do not entertain requests for transferring subscriptions from
              one company to another company.
            </p>
          </PolicyCard>

          {/* Important Notice */}
          <AlertBanner variant="info">
            <p className="font-medium ">
              All refund requests must be submitted within 7 days of payment.
            </p>
          </AlertBanner>

          {/* Non-Returnable Items */}
          <PolicyCard title="Non-Returnable Items">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              In the event of your platform incorporation.lk user account being
              suspended due to any of the Terms and Condition (Policy)
              violations, any remaining subscription fee will not be refunded.
              Please refer to the Terms and Conditions provided on
              www.incorporation.lk for more information.
            </p>
          </PolicyCard>

          {/* Processing Time */}
          <PolicyCard title="Processing Time">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              Refund requests will be processed within 10 business days after we
              receive your e-mail. Please note that it may take additional time
              for the refund to appear in your account, depending on your
              payment provider.
            </p>
          </PolicyCard>

          {/* Amendments and Termination */}
          <PolicyCard title="Amendments and Termination">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              We reserve the right to modify, update, or terminate the Refund
              Policy at any time without prior notice. Any changes will be
              posted on this page with a revised "last updated" date. It is your
              responsibility to review these policy terms periodically for any
              changes.
            </p>
          </PolicyCard>

          {/* Contact Us */}
          <PolicyCard title="Contact Us">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              If you have any questions or concerns regarding our Refund Policy,
              please contact us over: contact@incorporation.lk email. We are
              here to assist you and ensure your interaction with us is
              enjoyable and hassle-free.
            </p>
          </PolicyCard>
        </div>
      </div>
    </>
  );
}

export default RefundPolicyPage;
