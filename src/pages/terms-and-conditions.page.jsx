import BulletList from "../features/legal/BulletList";
import OrderedList from "../features/legal/OrderedList";
import PolicyCard from "../features/legal/PolicyCard";

function TermsAndConditionsPage() {
  return (
    <>
      {" "}
      <div className="mx-auto px-16 py-12 min-h-screen">
        <div className=" rounded-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Terms & Conditions
            </h1>
            <p className="text-gray-500">Last updated: February 12, 2024</p>
          </div>

          {/* Introduction */}
          <PolicyCard title="Introduction">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Incorporation.lk. These Terms and Conditions govern
              your use of our website and the subscription of services through
              our platform. By accessing or using our website, you agree to
              comply with these terms. Please read them carefully before
              proceeding with any payments or transactions.
            </p>
          </PolicyCard>

          {/* Use of the Website */}
          <PolicyCard title="Use of the Website">
            <div className="space-y-4">
              <OrderedList
                items={[
                  "You must be at least 18 years old to use our website or subscribe to services.",
                  "Our Privacy Policy explains how we collect, use, and protect your information when you visit or make payments through our website. By using our services, you consent to the practices described in the policy.",
                  "You agree to provide accurate and up-to-date information during the registration and checkout process.",
                  "When you register a company through the Incorporation.lk platform, KRC Corporate Services (Private) Ltd will assign an authorized secretary to your new company. If you prefer to appoint your own secretary, please contact the hotline for more information.",
                  "You may not use our website for any unlawful or unauthorized purposes.",
                ]}
              />
            </div>
          </PolicyCard>

          {/* Subscription Information and Fees */}
          <PolicyCard title="Subscription Information and Fees">
            <div className="space-y-4">
              <OrderedList
                items={[
                  "Incorporation.lk offers two subscription plans: Basic and Advanced.",
                  "The Basic subscription is ideal for single-director company registration and is valid for three months from the date of subscription.",
                  "For quotes on Advanced subscription options, please email/call us at contact@incorporation.lk, specifying any additional services you require.",
                  "Incorporation.lk may adjust subscription fees due to factors such as inflation, the introduction of additional services, operational costs, or changes in taxes.",
                  "For further details, visit Pricing Options on the incorporation.lk website. Prices are subject to change without notice. Any promotions, coupons, or discounts are time-limited and may be subject to additional terms.",
                ]}
              />
            </div>
          </PolicyCard>

          {/* Subscriptions and Payments */}
          <PolicyCard title="Subscriptions and Payments">
            <div className="space-y-4">
              <OrderedList
                items={[
                  "Placing an order on our website constitutes an offer to purchase our services.",
                  "We reserve the right to refuse or cancel any order for reasons including service availability, pricing issues, or suspected fraudulent activity.",
                  "You agree to provide valid and up-to-date payment information and authorize us to charge the full amount, including applicable taxes and fees, to your chosen payment method.",
                  "We utilize trusted third-party payment processors to securely handle your payment information. We do not store or access your full payment details.",
                ]}
              />
            </div>
          </PolicyCard>

          {/* Subscription Renewal */}
          <PolicyCard title="Subscription Renewal">
            <div className="space-y-4">
              <OrderedList
                items={[
                  "Payments for services not requested or used within the subscription period are non-refundable.",
                  "We do not offer subscription renewals. You may re-subscribe to services as needed.",
                ]}
              />
            </div>
          </PolicyCard>

          {/* Subscription Refunds */}
          <PolicyCard title="Subscription Refunds">
            <div className="space-y-4">
              <OrderedList
                items={[
                  "In the event your account is suspended due to policy violations, any remaining subscription fees will not be refunded.",
                  "If the Registrar of Companies refuses to complete the requested company registration due to issues with the provided information or any other matters, Incorporation.lk will not issue a refund.",
                  "Our Refund Policy available in incorporation.lk website outlines the process and conditions for seeking refunds. Please review it for more information.",
                ]}
              />
            </div>
          </PolicyCard>

          {/* Intellectual Property */}
          <PolicyCard title="Intellectual Property">
            <div className="space-y-4">
              <OrderedList
                items={[
                  "All content and materials on our website, including but not limited to text, images, videos, logos, and graphics, are protected by intellectual property rights and are the property of incorporation.lk or its licensors.",
                  "You may not use, reproduce, distribute, or modify any content from our website without our prior written consent.",
                ]}
              />
            </div>
          </PolicyCard>

          {/* Limitation of Liability */}
          <PolicyCard title="Limitation of Liability">
            <p className="text-gray-700 leading-relaxed">
              In no event shall incorporation.lk, its directors, employees, or
              affiliates be liable for any direct, indirect, incidental,
              special, or consequential damages arising out of or in connection
              with your use of our website or the online services.
            </p>
          </PolicyCard>
          {/* Amendments and Termination */}
          <PolicyCard title="Amendments and Termination">
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, update, or terminate these Terms
              and Conditions at any time without prior notice. It is your
              responsibility to review these terms periodically for any changes.
            </p>
          </PolicyCard>
          {/* Contact Us */}
          <PolicyCard title="Contact Us">
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns regarding our Terms &
              Conditions, please contact us over contact@incorporation.lk email.
              We are here to assist you and ensure your interaction with us is
              enjoyable and hassle-free.
            </p>
          </PolicyCard>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditionsPage;
