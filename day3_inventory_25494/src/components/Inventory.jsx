import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 1,
    notebooks: 13,
    pens: 40,
    inkpens:30
  });
    // Create add and remove functions here that changes the
    // state.
    //books update
    const bookupdate=(value)=>{
      if(inv.books+value<0)
      {
        console.log("hi here")
        return alert("can't be below zero");
      }
      
      setInv({
        books: inv.books+value,
        notebooks: inv.notebooks,
        pens: inv.pens,
        inkpens:inv.inkpens
      });
      
    }

    const notebookupdate=(value)=>{
      if(inv.notebooks+value<0)
      {
        return alert("can't be below zero");
      }
      setInv({
        books: inv.books,
        notebooks: inv.notebooks+value,
        pens: inv.pens,
        inkpens:inv.inkpens
      });
      
    }

    const penupdate=(value)=>{
      if(inv.pens+value<0)
      {
        return alert("can't be below zero");
      }
      setInv({
        books: inv.books,
        notebooks: inv.notebooks,
        pens: inv.pens+value,
        inkpens:inv.inkpens
      });
      
    }

    const inkpenupdate=(value)=>{
      if(inv.inkpens+value<0)
      {
        return alert("can't be below zero");
      }

      setInv({
        books: inv.books,
        notebooks: inv.notebooks,
        pens: inv.pens,
        inkpens:inv.inkpens+value
      });
      
    }
    

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books:{inv.books} </span>
        <button onClick={()=>{bookupdate(1)}} className="circlularButton">+</button>
        <button onClick={()=>{bookupdate(-1)}} className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks:{inv.notebooks} </span>
        <button onClick={()=>{notebookupdate(1)}} className="circlularButton">+</button>
        <button onClick={()=>{notebookupdate(-1)}} className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen:{inv.pens} </span>
        <button onClick={()=>{penupdate(1)}} className="circlularButton">+</button>
        <button onClick={()=>{penupdate(-1)}} className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens:{inv.inkpens} </span>
        <button onClick={()=>{inkpenupdate(1)}} className="circlularButton">+</button>
        <button onClick={()=>{inkpenupdate(-1)}} className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens+inv.inkpens}
    </div>
  );
};
