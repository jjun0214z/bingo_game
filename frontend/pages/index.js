import { Provider } from "react-redux";
import store from "../redux/configureStore";
import Layout from "../components/Layout";
import PlateWrapper from "../components/PlateWrapper";
import GameButton from "../components/GameButton";

export default () => (
  <Provider store={store}>
    <Layout>
      <PlateWrapper />
      <GameButton />
    </Layout>
  </Provider>
);
