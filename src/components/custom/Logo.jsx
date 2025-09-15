import { cn } from "@/src/lib/utils";
import { useNavigate } from "react-router";

function Logo({ className, logoBlack = false }) {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "flex max-h-[70px] max-w-[180px] cursor-pointer items-center justify-center transition-all duration-300 ease-in-out md:max-w-[200px] xl:max-w-[220px]",
        className,
      )}
      onClick={() => navigate("/home")}
    >
      <img
        src={
          logoBlack
            ? `/Incorporation_logo.png`
            : `/Incorporation_logo.png`
        }
        alt="Incorporation"
      />
    </div>
  );
}

export default Logo;
