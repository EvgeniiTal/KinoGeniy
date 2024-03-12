import { Layout } from "../../Layout";
import { Carousels } from "../Carousels";
import { RandomCard } from "../RandomCard";

export function MainPage () {
  return (
    <Layout>
      <RandomCard />
      <Carousels />
      <Carousels />
      <Carousels />
      <Carousels />
    </Layout>
  )
}
