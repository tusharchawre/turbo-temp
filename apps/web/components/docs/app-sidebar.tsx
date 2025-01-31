import { DocsConfig } from "@/config/docs";
import { Separator } from "../ui/separator";
import { SidebarItem } from "./sidebarItem";

export const AppSidebar = ({ config }: { config: DocsConfig }) => {
  const items = config.sidebarNav;

  return items.length ? (
    <div className="w-[16rem] h-full flex justify-between font-sans mx-2">
      <div className="w-full px-6 py-12 overflow-y-auto h-full">
        {items.map((item, idx) => (
          <div className="mb-7" key={idx}>
            <h4 className="rounded-md px-2 py-1 text-sm font-semibold">
              {item.title}
            </h4>
            {item.items?.map((item, idx) => (
              <SidebarItem key={idx} href={item.href!} title={item.title} />
            ))}
          </div>
        ))}
      </div>
      <Separator orientation="vertical" className="h-full" />
    </div>
  ) : null;
};
