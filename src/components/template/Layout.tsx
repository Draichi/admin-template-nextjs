import Content from "./Content";
import Header from "./Header";
import SideMenu from "./SideMenu";

interface LayoutProps {
  title: string;
  subtitile: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <SideMenu></SideMenu>
      <Header title={props.title} subtitile={props.subtitile} />
      <Content>{props.children}</Content>
    </div>
  );
}
