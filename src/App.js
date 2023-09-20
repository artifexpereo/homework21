import "./App.css";
import store from "./store";
import { Form } from "./components/form/Form";
import { Provider } from "react-redux";
import { Posts } from "./components/posts/Posts";

function App() {
  return (
    <Provider store={store}>
      <Form />
      <Posts /> 
    </Provider>
  );
}

export default App;
