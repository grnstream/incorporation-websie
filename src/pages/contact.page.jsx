import LocationMap from "../components/custom/LocationMap";
import chat from "@/src/assets/icons/contact-icons/chat.png";
import email from "@/src/assets/icons/contact-icons/email.png";
import map from "@/src/assets/icons/contact-icons/map.png";
import phone from "@/src/assets/icons/contact-icons/phone.png";
import ServiceCard from "../components/custom/ServiceCard";

const contacts = [
  {
    title: "Email Us",
    logo: email,
    description: "Talk to our team to begin your business setup",
    isHighlighted: true,
    btntext: "contact@incorporation.lk",
    onClick: () => window.location.href = "mailto:contact@incorporation.lk"
  },
  {
    title: "Chat with Us",
    logo: chat,
    description: "We're here to guide you through compliance",
    btntext: "+94 72 28 99 111",
    onClick: () => window.open("https://wa.me/94722899111", "_blank")
  },
  {
    title: "Visit Us",
    logo: map,
    description: "Come meet us at our office HQ",
    btntext: "View on Google Maps",
    onClick: () => window.open("https://maps.app.goo.gl/YBkd5MCBjEMzx1nF8", "_blank")
  },
  {
    title: "Call Us",
    logo: phone,
    description: "Mon-Fri, 8am to 5pm",
    btntext: "+94 72 2899111",
    onClick: () => window.location.href = "tel:+94722899111"
  },
];

function ContactPage() {
  return (
    <div className="container/fluid flex flex-col items-center justify-center  mt-10">
      <div className="flex flex-col text-center py-12 items-center transition-all duration-200">
        <p className="text-3xl md:text-3xl lg:text-5xl font-semibold text-center ">
          Get in Touch With
          <br className="hidden lg:block" /> Our Team
        </p>
        {/* Sub description */}
        <div className="flex max-w-[75%]">
          <p className="text-neutral-500 mt-5">
            We take care of company registration, secretarial tasks, accounting,
            tax, and compliance . so you can focus on growing your dream.
          </p>
        </div>
      </div>

      <LocationMap />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full py-12">
        {contacts.map((contact, index) => (
          <ServiceCard
            key={index}
            title={contact.title}
            description={contact.description}
            logo={contact.logo}
            btntext={contact.btntext}
            onClick={contact.onClick}
          />
        ))}
      </div>
    </div>
  );
}
export default ContactPage;
