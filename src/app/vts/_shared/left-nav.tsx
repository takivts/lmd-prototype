"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  sectionName: string;
  items: Item[];
}

interface Item {
  label: string;
  href: string;
}

interface NavSectionProps {
  navItems: NavItem[];
}

export const LeftNav = ({ navItems }: NavSectionProps) => {
  const url = usePathname();
  const leftNav = navItems;

  const isActiveNavItem = (itemHref: string) => {
    if (url === itemHref) {
      return true;
    }

    if (url?.startsWith(itemHref) && url?.charAt(itemHref.length) === "/") {
      return true;
    }

    return false;
  };

  return (
    <div className="flex h-[calc(100dvh-50px)] w-[225px] shrink-0 flex-col overflow-y-auto border-r border-gray-300">
      <div className="bg-vts-purple-300 mx-4 my-6 flex min-h-[135px] rounded-lg">
        <Image
          src="/asset-selector.png"
          alt="VTS Logo"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>
      {leftNav?.map((section: any, index: number) => {
        return (
          <div className="flex flex-col" key={index}>
            {section.sectionName && (
              <h5 className="mb-2 ml-6 text-xs font-semibold text-gray-700 uppercase">{section.sectionName}</h5>
            )}
            <ul className="mb-8 text-sm">
              {section.items?.map((item: any, index: number) => {
                return (
                  <li
                    className={`border-l-8 border-transparent px-4 py-2 text-gray-700 ${
                      isActiveNavItem(item.href) ? "border-vts-purple-700" : ""
                    }`}
                    key={index}
                  >
                    <Link href={item.href} className="block">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
