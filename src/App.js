import { useState } from "react";
import SearchBar from "./component/SearchBar";
import SearchResultList from "./component/SearchResultList";



function App() {
  const [results, setResults] = useState([])
  return (
   <>
   <div className="bg-slate-600	h-screen flex flex-col items-center">
      <SearchBar setResults={setResults}/>
      <SearchResultList results={results}/>
    </div>
   </>
  );
}

export default App;
