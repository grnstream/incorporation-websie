import { Button } from "../ui/button";

function ITSupport() {
  return (
    <div className="bg-neutral-900 w-full text-white/90 items-center justify-items-center py-12">
      <div className="flex flex-col justify-center items-center max-w-6xl">
        <p className="text-center text-2xl px-10">
          In addition to the above services, our clients also receive reliable
          IT support from branding and website development to POS, ERP, and
          custom software solutions, all at affordable rates designed to make
          their business journey smooth and successful.
        </p>
        <Button variant={"default"} className={"text-white rounded-full max-w-35 mt-10 px-28 py-7 hover:bg-gradient-to-t"}>
          Find more
        </Button>
      </div>
    </div>
  );
}

export default ITSupport;
