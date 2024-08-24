import { Main } from "./Components/main/Main";
import { Sidebar } from "./Components/Sidebar/Sidebar";

import { Provider } from "./Context/Provider";
function App() {
  return (
    <>
      <Provider>
        <main className="flex">
          <Sidebar />
          <Main />
        </main>
      </Provider>
    </>
  );
}

export default App;
