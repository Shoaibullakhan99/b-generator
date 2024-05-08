import { useState } from "react";
import BillDetails from "./components/BillDetails";
import ItemList from "./components/ItemList";
import TotalAmount from "./components/TotalAmount";
import {jsPDF} from "jspdf";
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  const handleAddition = (item) => {
    setItems([...items, item]);
  } 

  const handleDeletion = (index) => {
    const updateItems = [...items];
    updateItems.splice(index, 1);
    setItems(updateItems);
  }

  const calculateTotalAmount = () => {
    return items.reduce((total, item) =>
    total+ item.quantity * item.price, 0
    );
  }

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    pdf.text('Invoice', 20, 20);

    // //Adding items to pdf
    // items.forEach((item, index) => {
    //   const ypos = 30 + index * 10;
    //   pdf.text(
    //     `Item: ${item.item},
    //          Quantity: ${item.quantity},
    //     `
    //   )
    // })
    //Adding total amount to pdf
    const TotalAmount = calculateTotalAmount();
    pdf.text( `Total Amount: $${TotalAmount.toFixed(2)}`, 20, 180);

    //save the pdf
    pdf.save('Invoice.pdf');
  }

  return (
    <div className="App">
        <h1>Bill / Invoice Generator</h1>
        <BillDetails  onAddItem={handleAddition}/>
        <ItemList items={items} onDeleteItem={handleDeletion} />
        <TotalAmount total={calculateTotalAmount()} />
        <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  );
}

export default App;
