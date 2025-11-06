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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Terms & Conditions
            </h1>
            <p className="text-sm md:text-md text-gray-500">
              Last updated: February 12, 2024
            </p>
          </div>

          {/* Introduction */}
          <PolicyCard title="Introduction">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              Welcome to{" "}
              <a
                href="https://incorporation.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                incorporation.lk
              </a>
              . These Terms and Conditions govern your use of our website and
              the subscription of services through our platform. By accessing or
              using our website, you agree to comply with these terms. Please
              read them carefully before proceeding with any payments or
              transactions.
            </p>
          </PolicyCard>

          {/* Use of the Website */}
          <PolicyCard title="Use of the Website">
            <div className="space-y-4">
              <OrderedList
                items={[
                  "You must be at least 18 years old to use our website or subscribe to services.",
                  <>
                    Our{" "}
                    <a
                      href="/privacy-policy"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Privacy Policy
                    </a>{" "}
                    explains how we collect, use, and protect your information
                    when you visit or make payments through our website. By
                    using our services, you consent to the practices described
                    in the policy."
                  </>,
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
                  <>
                    <a
                      href="https://incorporation.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Incorporation.lk
                    </a>{" "}
                    offers three subscription plans: Kickstart, Momentum and
                    Elevate.
                  </>,
                  "The Kickstart package is ideal for entrepreneurs who wish to legally register their business and gain official recognition with all the essentials.",
                  "The Momentum package is perfect for entrepreneurs seeking a smooth and affordable start to their business journey.",
                  "The Elevate package is perfect for entrepreneurs ready to launch with impact, start operations quickly, and grow with confidence.",
                  <>
                    <a
                      href="https://incorporation.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Incorporation.lk
                    </a>{" "}
                    may adjust subscription fees due to factors such as
                    inflation, the introduction of additional services,
                    operational costs, or changes in taxes.
                  </>,
                  "Prices are subject to change without notice. ",
                  "Any promotions, coupons, or discounts are time-limited and may be subject to additional terms.",
                  "All free services included in the packages must be claimed within one (1) year from the date of company registration.",
                  "Domain registration is not included in the Elevate Package.",
                  "Additional services (extra directors, embossed seal, share certificate book, export/import registration, trademark registration) are chargeable separately.",
                  <>
                    For quotes on additional services, please contact us at{" "}
                    <a
                      href="mailto:contact@incorporation.lk"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      contact@incorporation.lk
                    </a>{" "}
                    or call us, specifying the services you require.
                  </>,
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
                  <>
                    If the Registrar of Companies refuses to complete the
                    requested company registration due to issues with the
                    provided information or any other matters,{" "}
                    <a
                      href="https://incorporation.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      incorporation.lk
                    </a>{" "}
                    will not issue a refund.
                  </>,
                  <>
                    Our Refund Policy available in{" "}
                    <a
                      href="https://incorporation.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      incorporation.lk
                    </a>{" "}
                    website outlines the process and conditions for seeking
                    refunds. Please review it for more information.
                  </>,
                ]}
              />
            </div>
          </PolicyCard>

          {/* Intellectual Property */}
          <PolicyCard title="Intellectual Property">
            <div className="space-y-4">
              <OrderedList
                items={[
                  <>
                    All content and materials on our website, including but not
                    limited to text, images, videos, logos, and graphics, are
                    protected by intellectual property rights and are the
                    property of{" "}
                    <a
                      href="https://incorporation.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      incorporation.lk
                    </a>{" "}
                    or its licensors.
                  </>,
                  "You may not use, reproduce, distribute, or modify any content from our website without our prior written consent.",
                ]}
              />
            </div>
          </PolicyCard>

          {/* Limitation of Liability */}
          <PolicyCard title="Limitation of Liability">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              In no event shall{" "}
              <a
                href="https://incorporation.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                incorporation.lk
              </a>
              , its directors, employees, or affiliates be liable for any
              direct, indirect, incidental, special, or consequential damages
              arising out of or in connection with your use of our website or
              the online services.
            </p>
          </PolicyCard>
          {/* Amendments and Termination */}
          <PolicyCard title="Amendments and Termination">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              We reserve the right to modify, update, or terminate these Terms
              and Conditions at any time without prior notice. It is your
              responsibility to review these terms periodically for any changes.
            </p>
          </PolicyCard>
          {/* Contact Us */}
          <PolicyCard title="Contact Us">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              If you have any questions or concerns regarding our Terms &
              Conditions, please contact us over{" "}
              <a
                href="mailto:contact@incorporation.lk"
                className="text-blue-600 hover:text-blue-800"
              >
                contact@incorporation.lk
              </a>{" "}
              email. We are here to assist you and ensure your interaction with
              us is enjoyable and hassle-free.
            </p>
          </PolicyCard>
        </div>
      </div>
    </>
  );
}

export default TermsAndConditionsPage;
