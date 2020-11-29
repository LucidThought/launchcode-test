import RootPage from "./components/rootPage";
import RootTitleBar from "./components/rootTitleBar";

import "./components/root.scss";

function App() {
  return (
    <div className="no-border">
      <RootTitleBar />
      <RootPage />
    </div>
  );
}

export default App;
