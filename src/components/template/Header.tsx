import Title from "./Title";

interface HeaderProps {
  title: string;
  subtitile: string;
}

export default function Header(props: HeaderProps) {
  return (
    <div>
      <Title {...props} />
    </div>
  );
}
