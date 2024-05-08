import { useState } from "react";
import BillDetails from "./components/BillDetails";
import ItemList from "./components/ItemList";
import TotalAmount from "./components/TotalAmount";

function App() {
  const [items, setItems] = useState([]);


  return (
    <div className="App">
        <h1>Bill / Invoice Generator</h1>
        <BillDetails  onAddItem={{handleAddition}}/>
        <ItemList items={items} onDeleteItem={{handleDeletion}} />
        <TotalAmount total={calculateTotalAmount()} />
        <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
}

export default App;
