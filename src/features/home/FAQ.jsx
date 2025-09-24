import { useNavigate } from "react-router";
import { Button } from "@/src/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import faqData from "@/public/data/faq.json";

function FAQ() {
  const navigate = useNavigate();

  return (
    <section id="faq" className="container/fluid mt-[140px] mb-[100px] w-full">
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-9 transition duration-500">
        {/* Left side - Title and description */}
        <div className="flex flex-col text-center items-center lg:items-start lg:text-left">
          <h2 className="text-5xl lg:text-5xl font-semibold">
            Frequently<br/> Asked Questions
          </h2>

          <div className="mt-8 max-w-lg">
            <p className="text-gray-600 mb-6">
              Have another question? Please contact our team!
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                size={"lg"}
                className="rounded-full text-white "
                onClick={() => navigate("/contact")}
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>

        {/* Right side - FAQ Accordion */}
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map(({ question, answer }, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border border-gray-200 data-[state=open]:bg-gray-100/50  px-6 py-2 rounded-xl data-[state=open]:rounded-t-none data-[state=open]:border-t-primary-500 data-[state=open]:border-t-3"
              >
                <AccordionTrigger className="text-lg font-medium text-left hover:no-underline ">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-base font-light text-gray-600 pt-2 pb-4">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
