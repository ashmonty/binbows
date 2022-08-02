import "../styles/globals.css";
import "98.css";

import { Provider } from "react-redux";
import store from "../store/store.js";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
