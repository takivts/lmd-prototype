"use client";

interface NavItem {
  sectionName: string;
  items: string[];
}

interface NavSectionProps {
  navItems: NavItem[];
}

const Section = ({ navItems }: NavSectionProps) => {
  const leftNav = navItems;
  return (
    <div className="flex h-[calc(100dvh-50px)] w-[225px] shrink-0 flex-col border-r border-gray-300">
      <div className="bg-vts-purple-300 mx-4 my-6 flex min-h-[135px] rounded-lg" />
      {leftNav?.map((section: any, index: number) => {
        return (
          <div className="flex flex-col" key={index}>
            {section.sectionName && (
              <h5 className="mb-2 ml-6 text-xs font-semibold text-gray-700 uppercase">
                {section.sectionName}
              </h5>
            )}
            <ul className="mb-8 text-sm">
              {section.items?.map((item: any) => {
                return (
                  <li
                    className="border-l-8 border-transparent px-4 py-2 text-gray-700"
                    key={item}
                  >
                    {item}
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

export default function MarketSidebar({ navItems }: NavSectionProps) {
  return <Section navItems={navItems} />;
}
