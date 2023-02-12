import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";
import "./styles/global.css";
import "./styles/variables.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </StrictMode>
);
