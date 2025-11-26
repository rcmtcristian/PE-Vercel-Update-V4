import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProgramEquityLogo } from "@/ProgramEquityLogoSizeMedium/ProgramEquityLogo";

export interface INavBarModeDesktopProps {
  mode?: "desktop" | "mobile";
  className?: string;
}

export const NavBarModeDesktop = ({
  mode = "desktop",
  className,
  ...props
}: INavBarModeDesktopProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  return (
    <>
      <div
        className={cn(
          "bg-header-and-footer-nav-bar-background-fill",
          "px-4 sm:px-6 lg:px-8",
          "flex flex-row items-center justify-between",
          "min-h-[72px] w-full",
          "relative",
          "z-50",
          className
        )}
      >
        <ProgramEquityLogo size="medium" link="/" className="flex-shrink-0" />

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[300px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex flex-col justify-end h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                          to="/volunteer"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Volunteer with us
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Become a part of our community and lets help each
                            other out grow!
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem to="/ErgVolunteering" title="ERG Volunteering">
                      Support open source software by sponsoring one of our
                      events
                    </ListItem>
                    <ListItem
                      href="https://codefortheplanet.donorsupport.co/page/generalgiving"
                      title="Donate to Us"
                      external
                    >
                      We appreciate any and all contributions!
                    </ListItem>
                    <ListItem to="/ContactUs" title="Contact Us">
                      We are always looking for new ways to help our community.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/fellowship"
                    className={navigationMenuTriggerStyle()}
                  >
                    Fellowship
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to="/conservation"
                    className={navigationMenuTriggerStyle()}
                  >
                    Conversation
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/Ourstory" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <div className="flex flex-col p-4 pt-20 space-y-4">
            <div className="space-y-4">
              <h3 className="mb-2 text-lg font-medium">Get Involved</h3>
              <Link
                to="/volunteer"
                className="block p-2 rounded-md hover:bg-accent"
              >
                Volunteer with us
              </Link>
              <Link
                to="/ErgVolunteering"
                className="block p-2 rounded-md hover:bg-accent"
              >
                ERG Volunteering
              </Link>
              <a
                href="https://codefortheplanet.donorsupport.co/page/generalgiving"
                className="block p-2 rounded-md hover:bg-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate to Us
              </a>
              <Link
                to="/ContactUs"
                className="block p-2 rounded-md hover:bg-accent"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 space-y-4 border-t">
              <Link
                to="/fellowship"
                className="block p-2 rounded-md hover:bg-accent"
              >
                Fellowship
              </Link>
              <Link
                to="/conservation"
                className="block p-2 rounded-md hover:bg-accent"
              >
                Conversation
              </Link>
              <Link
                to="/Ourstory"
                className="block p-2 rounded-md hover:bg-accent"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { external?: boolean; to?: string }
>(({ className, title, children, href, to, external, ...props }, ref) => {
  const content = (
    <>
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
        {children}
      </p>
    </>
  );

  return (
    <li>
      <NavigationMenuLink asChild>
        {external ? (
          <a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            {content}
          </a>
        ) : (
          <Link
            ref={ref}
            to={to || "/"}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            {content}
          </Link>
        )}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
