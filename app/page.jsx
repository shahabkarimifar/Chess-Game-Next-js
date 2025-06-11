import "./page.scss";
import MainBoard from "@/components/MainBoard";
import ShadowBoard from "@/components/ShadowBoard";
export default function Home() {
  return (
    <div className="page">
      <MainBoard />
      <ShadowBoard />
    </div>
  );
}
