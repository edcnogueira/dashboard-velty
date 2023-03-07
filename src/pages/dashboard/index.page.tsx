import { Grid as G } from "@/components/Grid";
import { Layout } from "@/components/Template/Layout";
import { CardDashboard as C, DescType } from "./components/CardDashboard";

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

  const valuesDesc: DescType[] = [
    {
      id: 1,
      description: "Clientes Ativos",
      value: "3.321",
      percentage: "+2,6%(+12)",
      color: "success",
    },
    {
      id: 2,
      description: "Novos Ativos",
      value: "12",
      percentage: "+15,3%(+2)",
      color: "success",
    },
    {
      id: 3,
      description: "Clientes adicionados",
      value: "42",
      percentage: "+42,6%(+8)",
      color: "success",
    },

    {
      id: 4,
      description: "LTV",
      value: "R$ 142,32",
      percentage: "-22,6%(+R$ 12,20)",
      color: "danger",
    },
    {
      id: 5,
      description: "Turnover",
      value: "24,3%",
      subValue: "32",
      percentage: "+42,6%(+3)",
      color: "success",
    },
    {
      id: 6,
      description: "Turnover recuperado",
      value: "54,42%",
      subValue: "12",
      percentage: "+32,6%(+6)",
      color: "success",
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
      <div className="mt-5">
        <G.Container>
          {valuesDesc.map(({ id, description, value, subValue, color, percentage }) => (
            <G.Item key={id} xs={2}>
              <C.Desc
                description={description}
                value={value}
                subValue={subValue && subValue}
                color={color}
                percentage={percentage}
              />
            </G.Item>
          ))}
        </G.Container>
      </div>
    </Layout>
  );
}
