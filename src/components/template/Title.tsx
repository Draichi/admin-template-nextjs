interface TitleProps {
  title: string;
  subtitile: string;
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitile}</h2>
    </div>
  );
}
