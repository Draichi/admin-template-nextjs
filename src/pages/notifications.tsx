import Layout from "components/template/Layout";
import useAppData from "data/hook/useAppData";

export default function Notifications() {
  const { updateTheme } = useAppData();
  return (
    <Layout title="Notification" subtitile="Working in progress">
      <button onClick={updateTheme}>aa</button>
    </Layout>
  );
}
