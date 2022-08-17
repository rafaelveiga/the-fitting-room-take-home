import Header from "./components/Header";
import PhotoList from "./components/PhotoList";
import PexelsService from "./services/pexels";

function App() {
  return (
    <div className="App">
      <Header />

      <PhotoList />
    </div>
  );
}

export default App;
