"use client";

import { useEffect, useRef } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

const navData: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    children: [
      { label: "Widgets", href: "/products/widgets" },
      { label: "Gadgets", href: "/products/gadgets" },
      {
        label: "Tools",
        children: [
          { label: "Hand Tools", href: "/products/tools/hand" },
          { label: "Power Tools", href: "/products/tools/power" },
        ],
      },
    ],
  },
  { label: "About", href: "/about" },
];

function NavMenu({
  items,
  className,
  ...props
}: {
  items: NavItem[];
  className?: string;
}) {
  return (
    <ul className={twMerge("relative w-24", className)} {...props}>
      {items.map((item) => (
        <li key={item.label}>
          {item.children ? (
            <details>
              <summary
                className="flex items-center gap-2 justify-between marker:content-none"
                tabIndex={0}
              >
                {item.label}
                <FiChevronDown className="[details[open]>summary>&]:hidden block" />
                <FiChevronRight className="[details[open]>summary>&]:block hidden" />
              </summary>
              <NavMenu
                className="ml-4 absolute top-0 left-[100%]"
                items={item.children}
              />
            </details>
          ) : (
            <a className="block" href={item.href}>
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function NavDemo() {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && nav) {
        const active = document.activeElement;
        // Find the nearest open details containing the focused element
        const details =
          active && nav.contains(active)
            ? (active as HTMLElement).closest("details[open]")
            : null;
        if (details) {
          // Close all open nested details inside this details
          details
            .querySelectorAll("details[open]")
            .forEach((child: Element) => {
              if (child instanceof HTMLElement) {
                child.removeAttribute("open");
              }
            });
          // Close the parent details itself
          (details as HTMLElement).removeAttribute("open");
          (details.querySelector("summary") as HTMLElement | null)?.focus();
        }
      }
    }

    function onToggle(e: Event) {
      const target = e.target as HTMLElement & { open?: boolean };
      if (target.tagName.toLowerCase() === "details" && target.open && nav) {
        // Close sibling menus
        nav.querySelectorAll("details[open]").forEach((other: Element) => {
          if (other !== target && other instanceof HTMLElement) {
            other.removeAttribute("open");
          }
        });
      }
    }

    nav.addEventListener("keydown", onKeyDown as EventListener);
    nav.addEventListener("toggle", onToggle as EventListener);

    return () => {
      nav.removeEventListener("keydown", onKeyDown as EventListener);
      nav.removeEventListener("toggle", onToggle as EventListener);
    };
  }, []);

  return (
    <nav ref={navRef} aria-label="Main navigation">
      <NavMenu items={navData} />
    </nav>
  );
}
