import "./App.css";
import { Route } from "react-router-dom";
import ChatScreen from "./Pages/ChatScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Route path="/" exact component={ChatScreen} />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
