import BulletList from "../features/legal/BulletList";
import PolicyCard from "../features/legal/PolicyCard";

function PrivacyPolicyPage() {
  return (
    <>
      {" "}
      <div className="mx-auto px-16 py-12 min-h-screen">
        <div className=" rounded-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Privacy Policy
            </h1>
            <p className="text-gray-500">Last updated: February 12, 2024</p>
          </div>

          {/* Introduction */}
          <PolicyCard title="Introduction">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              At <a
                href="https://incorporation.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                incorporation.lk
              </a>, we are committed to protecting the privacy
              and security of our clients’ personal information. This Privacy
              Policy outlines how we collect, use, and safeguard your
              information when you visit or make payment on our website. By
              using our online service, you consent to the practices described
              in this policy.
            </p>
          </PolicyCard>

          {/* Information We Collect */}
          <PolicyCard title="Information We Collect">
            <div className="space-y-4">
              <p className="text-sm md:text-md text-gray-700 leading-relaxed">
                When you visit our website, we may collect certain information
                about you, including:
              </p>
              <BulletList
                items={[
                  "Personal identification information (such as your name, email address, and phone number) provided voluntarily by you during the signup, registration or checkout process.",
                  "Information related to your companies such as company addresses, telephone numbers, directors and shareholders and other companies related information that you provide through our website.",
                  "Payment and billing information necessary to process your orders, including credit card details, which are securely handled by trusted third-party payment processors.",
                  "Browsing information, such as your IP address, browser type, and device information, is collected automatically using cookies and similar technologies.",
                ]}
              />
            </div>
          </PolicyCard>

          {/* Use of Information */}
          <PolicyCard title="Use of Information">
            <div className="space-y-4">
              <p className="text-sm md:text-md text-gray-700 leading-relaxed">
                We may use the collected information for the following purposes:
              </p>
              <BulletList
                items={[
                  "To process and fulfill your requirements, including company registration and compliance.",
                  "To communicate with you regarding your requirements, provide customer support, and respond to inquiries or requests.",
                  "To make personalized consultations and recommendations.",
                  "To improve our website and services based on your feedback.",
                  "To detect and prevent fraud, unauthorized activities, and abuse of our website.",
                ]}
              />
            </div>
          </PolicyCard>

          {/*Information Sharing*/}
          <PolicyCard title="Information Sharing">
            <div className="space-y-4">
              <p className="text-sm md:text-md text-gray-700 leading-relaxed">
                We respect your privacy and do not sell, trade, or otherwise
                transfer your personal information to third parties without your
                consent, except in the following circumstances:
              </p>
              <BulletList
                items={[
                  "Trusted service providers: We may share your information with third-party service providers who assist us in operating our website, processing payments, and delivering services. These providers are contractually obligated to handle your data securely and confidentially.",
                  "Legal requirements: We may disclose your information if required to do so by law or in response to valid legal requests or orders.",
                ]}
              />
            </div>
          </PolicyCard>

          {/* Data Security */}
          <PolicyCard title="Data Security">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction. However, please be aware that no
              method of transmission over the internet or electronic storage is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </PolicyCard>

          {/* Cookies and Tracking Technologies */}
          <PolicyCard title="Cookies and Tracking Technologies">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              We use cookies and similar technologies to enhance your browsing
              experience, analyze website traffic, and gather information about
              your preferences and interactions with our website. You have the
              option to disable cookies through your browser settings, but this
              may limit certain features and functionality of our website.
            </p>
          </PolicyCard>

          {/* Changes to the Privacy Policy */}
          <PolicyCard title="Changes to the Privacy Policy">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be posted on this page with a revised
              “last updated” date. We encourage you to review this Privacy
              Policy periodically to stay informed about how we collect, use,
              and protect your information.
            </p>
          </PolicyCard>

          {/* Contact Us */}
          <PolicyCard title="Contact Us">
            <p className="text-sm md:text-md text-gray-700 leading-relaxed">
              If you have any questions, concerns, or requests regarding our
              Privacy Policy or the handling of your personal information,
              please contact us using the information provided on our website.
            </p>
          </PolicyCard>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicyPage;
