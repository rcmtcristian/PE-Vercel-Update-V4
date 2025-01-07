import React from "react";
// import { ProgramEquityLogo } from "../../ProgramEquityLogo/ProgramEquityLogo";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ProgramEquityLogo } from "@/ProgramEquityLogoSizeMedium/ProgramEquityLogo";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
export interface INavBarModeDesktopProps {
  mode?: "desktop" | "mobile";
  className?: string;
}



export const NavBarModeDesktop = ({
  mode = "desktop",
  className,
  ...props
}: INavBarModeDesktopProps): JSX.Element => {
  const variantsClassName = "mode-" + mode;

  return (
    <div
      className={
        "bg-header-and-footer-nav-bar-background-fill pr-desktop-margin-base pl-desktop-margin-base flex flex-row gap-desktop-gutter-base items-center justify-between self-stretch shrink-0 h-[72px] relative  " +
        className +
        " " +
        variantsClassName
      }
    >
      <ProgramEquityLogo
        size="medium"
        link="/"
        className="!gap-0 !self-stretch !shrink-0 !w-[unset]"
      />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Get Involved</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                      href="/volunteer"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        Volunteer with us
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Become a part of our community and lets help each other
                        out grow!
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/ErgVolunteering" title="ERG Volunteering">
                  Support open source software by sponsoring one of our events
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
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href} 
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
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
