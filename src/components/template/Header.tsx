import useAppData from "data/hook/useAppData";
import Avatar from "./Avatar";
import ThemeButton from "./ThemeButton";
import Title from "./Title";

interface HeaderProps {
  title: string;
  subtitile: string;
}

export default function Header(props: HeaderProps) {
  const themeProps = useAppData();
  return (
    <div className={`flex`}>
      <Title {...props} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ThemeButton {...themeProps} />
        <Avatar className="ml-3" />
      </div>
    </div>
  );
}
