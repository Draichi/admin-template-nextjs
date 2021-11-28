import ForceAuth from "components/auth/ForceAuth";
import useAppData from "data/hook/useAppData";
import Content from "./Content";
import Header from "./Header";
import SideMenu from "./SideMenu";

interface LayoutProps {
  title: string;
  subtitile: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { theme } = useAppData();
  return (
    <ForceAuth>
      <div className={`${theme} flex h-screen w-screen`}>
        <SideMenu></SideMenu>
        <div className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}>
          <Header title={props.title} subtitile={props.subtitile} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </ForceAuth>
  );
}
