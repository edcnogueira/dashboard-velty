import { usePathname, useRouter } from "next/navigation";
import { ButtonHTMLAttributes, Fragment, ReactNode } from "react";
import { Text } from "../Text";

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  selected?: boolean;
}

const Barra = () => <Text color="secondary">/</Text>;

export function Navigarion() {
  const path = usePathname();
  const router = useRouter();
  const allTabs: Array<string> | undefined = path?.split("/");
  const allPaths: Array<string> | undefined = [];

  const Tab = ({ children, selected = false, ...rest }: TabProps) => {
    return <Text color="secondary">{children}</Text>;
  };
  return (
    <div className="flex flex-row gap-1">
      <Tab onClick={() => router.push("/")}>Principal</Tab>
      {allTabs?.map((tab, index) => {
        if (tab) {
          allPaths.push(`${allPaths}/${tab}`);
          return (
            <Fragment key={tab}>
              <Barra />
              <Tab
                selected={allTabs.length === index + 1 ? true : false}
                onClick={() => router.push(allPaths[index - 1])}
              >
                {tab[0].toUpperCase() + tab.slice(1)}
              </Tab>
            </Fragment>
          );
        }

        return;
      })}
    </div>
  );
}
