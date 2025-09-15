import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import { cn } from "@/src/lib/utils";
import { forwardRef } from "react";
import { Link } from "react-router";

function NavigationBar({ isTransparentHeader, isAtTop }) {
  return (
    <NavigationMenu
      viewport={false}
      className={`hidden ${
        isTransparentHeader && isAtTop
          ? "bg-white backdrop-blur-sm backdrop-filter"
          : "bg-transparent"
      } px-1 py-0.5 lg:flex`}
    >
      <NavigationMenuList
        className={`${
          isTransparentHeader && isAtTop
            ? "text-black"
            : "text-primary-foreground/80"
        }`}
      >
        <NavigationMenuItem>
          <NavigationMenuLink><Link to="/">Home</Link></NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/about">About Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>All Services</NavigationMenuTrigger>
          <NavigationMenuContent className={`text-primary-foreground`}>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Starter</div>
                    <div className="text-muted-foreground">
                      Designed for individuals or businesses exploring the
                      platform for the first time.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Intermediate</div>
                    <div className="text-muted-foreground">
                      Efficient tools for independent recruiters.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Advanced</div>
                    <div className="text-muted-foreground">
                      Best for small-to-medium-sized businesses.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Policies</NavigationMenuTrigger>
          <NavigationMenuContent className={`text-primary-foreground`}>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="#">
                    <div className="font-medium">Starter</div>
                    <div className="text-muted-foreground">
                      Designed for individuals or businesses exploring the
                      platform for the first time.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">
                    <div className="font-medium">Intermediate</div>
                    <div className="text-muted-foreground">
                      Efficient tools for independent recruiters.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">
                    <div className="font-medium">Advanced</div>
                    <div className="text-muted-foreground">
                      Best for small-to-medium-sized businesses.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavigationBar;

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
