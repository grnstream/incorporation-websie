import PricingCard from "@/src/components/custom/PricingCard";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { GridBeams } from "@/src/components/ui/grid-beams";
import { InView } from "@/src/components/ui/in-view";

function Pricing() {
  const plans = [
    {
      name: "Kickstart",
      price: "LKR 29,900",
      description:
        "Get your business legally registered and recognized with all the essentials",
      buttonText: "Get Started",
      isHighlighted: false,
      features: [
        "Name approval",
        "Form 1, Form 18 & Form 19",
        "Articles of association",
        "Incorporation certificate (printed copy)",
        "TIN registration",
        "Online client portal access",
        "Company secretary for registration purpose - no upfront charges",
      ],
    },
    {
      name: "Momentum",
      price: "LKR 39,900",
      description:
        "Perfect for entrepreneurs who want a smooth and affordable start to their business journey",
      buttonText: "Get Started Now",
      isHighlighted: true,
      features: [
        "Includes everything in Starter",
        "Pre-ink company seal",
        "Pre-ink director seal",
        "Resolution for corporate bank account opening",
        "TIN registration",
        "Free Accounting & Bookkeeping consultation - Free for 1st year",
        "Free Tax consultation - Free for 1st year",
        "VAT and SSCL related consultations - Free for 1st year",
        "Free IT consultation - Free for 1st year",
      ],
    },
    {
      name: "Elevate",
      price: "LKR 79,900",
      description:
        "Perfect for entrepreneurs ready to launch with impact, you can start operations quickly and grow with confidence",
      buttonText: "Get Started",
      isHighlighted: false,
      features: [
        "Includes everything in Growth",
        "Logo, letterhead, visiting card design",
        "Name board design",
        "Single page web design (T&C applies)",
        "Free social media account creation (FB, IG, LinkedIn)",
        "Free Google My Business Setup",
        "10% Discount on any additional graphic designs",
        "10% Discount on social media content creation and management",
        "10% Discount on POS System/Software",
        "Free hosting and maintaining the website for 3 months - Domain name not included",
        "Free basic SEO",
      ],
    },
  ];
  return (
    <section
      id="pricing"
      data-header-style="transparent"
      className="relative mt-25"
    >
      <div className="flex flex-col text-center mt-5 transition-all duration-200 max-w-5xl mx-auto">
        <p className="text-5xl lg:text-5xl font-semibold text-center ">
          Straightforward and Customized Pricing Options
        </p>
        {/* Sub description */}
        <div className="flex mx-auto">
          <p className="text-neutral-500 mt-5">
            To receive a quote, please email us at contact@incorporation.lk or
            book a meeting.
          </p>
        </div>
      </div>
      <div>
        <div className="relative mt-12 flex w-full flex-col items-center justify-center">
          <PricingCard plans={plans} />
        </div>
        {/* <InView
          variants={{
            hidden: {
              opacity: 0,
              y: 10,
              scale: 0.7,
              filter: "blur(4px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewOptions={{ margin: "0px 0px -350px 0px" }}
        >
          <GridBeams>
            <div className="bg-neutral-900/50 w-full text-white/90 items-center justify-items-center py-10 ">
              <div className="flex flex-col justify-center items-center max-w-6xl ">
                <p className="text-center text-2xl px-10">
                  In addition to the above services, our clients also receive
                  reliable IT support from branding and website development to
                  POS, ERP, and custom software solutions, all at affordable
                  rates designed to make their business journey smooth and
                  successful.
                </p>
                <Dialog >
                  <DialogTrigger asChild>
                    <Button
                      variant="default"
                      className="text-white rounded-full max-w-35 mt-10 px-28 py-7 hover:bg-gradient-to-t"
                    >
                      Find more
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl border-0 p-12 bg-white/90 backdrop-blur-md rounded-2xl">
                    <DialogHeader>
                     
                      <DialogTitle className={'text-primary-950 py-5'}>Other Services &amp; Support</DialogTitle>
                      <DialogDescription asChild>
                        <div className="space-y-4 text-left">
                          <ul className="list-disc marker:text-blue-500 list-inside space-y-2 text-neutral-600">
                            <li>
                              Any additional directors:{" "}
                              <strong className="text-primary-800">3,000 LKR each</strong>
                            </li>
                            <li>
                              On request embossed seal:{" "}
                              <strong className="text-primary-800">3,500 LKR</strong>
                            </li>
                            <li>
                              On request share certificate book:{" "}
                              <strong className="text-primary-800">5,000 LKR</strong>
                            </li>
                            <li>
                              Export, import registration:{" "}
                              <strong className="text-primary-800">10,000 LKR</strong>
                            </li>
                            <li>
                              Trademark registration:{" "}
                              <strong className="text-primary-800">15,000 LKR</strong>
                            </li>
                          </ul>

                          <div className="flex bg-primary-50/50 rounded-lg py-5 px-5 items-center border-primary-400 border-2">
                            <p className="text-primary-900 text-justify">
                            Not limited to the packages above, we also support
                            you in a wide range of business and technological
                            needs, ensuring you have everything required to
                            operate smoothly. To get a quote contact us today.
                          </p>
                          </div>

                          <div className="mt-6 border-t border-primary-50 pt-4">
                            <h5 className="font-semibold">
                              Terms &amp; Conditions
                            </h5>
                            <ul className="ml-4 list-disc list-outside mt-2 space-y-2 text-neutral-700">
                              <li>
                                All free services included in the packages must
                                be claimed within one (1) year from the date of
                                company registration.
                              </li>
                              <li>
                                Domain registration is not included in the
                                Elevate Package.
                              </li>
                              <li>
                                Additional services (extra directors, embossed
                                seal, share certificate book, export/import
                                registration, trademark registration) are
                                chargeable separately.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </GridBeams>
        </InView> */}
      </div>
    </section>
  );
}

export default Pricing;
