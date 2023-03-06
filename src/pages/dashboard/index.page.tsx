import { Grid as G } from "@/components/Grid";
import { Layout } from "@/components/Template/Layout";
import { CardDashboard as C } from "./components/CardDashboard";

import { FiltroData } from "./components/FiltroData";

type ValueMainType = Record<"value" | "average" | "description", string> & {
  color: "red" | "blue" | "green";
  id: number;
};

export default function Dashboard() {
  const valuesMain: ValueMainType[] = [
    {
      id: 1,
      value: "R$ 312.321,00",
      average: "R$ 67,20",
      color: "red",
      description: "Receita total",
    },
    {
      id: 2,
      value: "R$ 74.421,00",
      average: "R$ 42,30",
      color: "blue",
      description: "Lucro total",
    },
    {
      id: 3,
      value: "R$ 3,12",
      average: "R$ 12,40",
      color: "green",
      description: "Lucro por venda",
    },
  ];

  return (
    <Layout>
      <FiltroData />
      <G.Container>
        {valuesMain.map(({ id, value, average, color, description }) => (
          <G.Item key={id} xs={3}>
            <C.Main
              value={value}
              average={average}
              color={color}
              description={description}
            />
          </G.Item>
        ))}
      </G.Container>
    </Layout>
  );
}
