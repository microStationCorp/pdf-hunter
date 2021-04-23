import SearchComponent from "./components/Search";
import ResultComponent from "./components/Result";
import TitleComponent from "./components/Title";

function App() {
  return (
    <div>
      <TitleComponent title="PDF Hunter" />
      <SearchComponent />
      <ResultComponent />
    </div>
  );
}

export default App;
