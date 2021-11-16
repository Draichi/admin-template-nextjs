import useAppData from "data/hook/useAppData";
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
      <div className={`flex flex-grow justify-end`}>
        <ThemeButton {...themeProps} />
      </div>
    </div>
  );
}
