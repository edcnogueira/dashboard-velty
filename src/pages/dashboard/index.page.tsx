import { Layout } from "@/components/Template/Layout";
import { CardDashboard as C } from "./components/CardDashboard";

import { FiltroData } from "./components/FiltroData";

export default function Dashboard() {
  return (
    <Layout>
      <FiltroData />
      <C.Main color="red" />
      <C.Main color="blue" />
      <C.Main color="green" />
    </Layout>
  );
}
