import React, { useState } from "react";
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
                        <a
                          className="flex flex-col justify-end h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                          href="/volunteer"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            Volunteer with us
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Become a part of our community and lets help each
                            other out grow!
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/ErgVolunteering" title="ERG Volunteering">
                      Support open source software by sponsoring one of our
                      events
                    </ListItem>
                    <ListItem href="/donate" title="Donate to Us">
                      We appreciate any and all contributions!
                    </ListItem>
                    <ListItem href="/ContactUs" title="Contact Us">
                      We are always looking for new ways to help our community.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/fellowship"
                  className={navigationMenuTriggerStyle()}
                >
                  Fellowship
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/conservation"
                  className={navigationMenuTriggerStyle()}
                >
                  Conversation
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/Ourstory"
                  className={navigationMenuTriggerStyle()}
                >
                  About
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
              <a
                href="/volunteer"
                className="block p-2 rounded-md hover:bg-accent"
              >
                Volunteer with us
              </a>
              <a
                href="/ErgVolunteering"
                className="block p-2 rounded-md hover:bg-accent"
              >
                ERG Volunteering
              </a>
              <a
                href="/donate"
                className="block p-2 rounded-md hover:bg-accent"
              >
                Donate to Us
              </a>
              <a
                href="/ContactUs"
                className="block p-2 rounded-md hover:bg-accent"
              >
                Contact Us
              </a>
            </div>

            <div className="pt-4 space-y-4 border-t">
              <a
                href="/fellowship"
                className="block p-2 rounded-md hover:bg-accent"
              >
                Fellowship
              </a>
              <a
                href="/conservation"
                className="block p-2 rounded-md hover:bg-accent"
              >
                Conversation
              </a>
              <a
                href="/Ourstory"
                className="block p-2 rounded-md hover:bg-accent"
              >
                About
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
