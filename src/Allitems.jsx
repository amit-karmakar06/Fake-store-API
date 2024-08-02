import React, { useContext, useEffect, useState } from "react";
import { ItemsContext } from "./items";

const Allitems = () => {
  const {
    setCart,
    items,
    setItems,
    handleFilterItems,
    filteredItems,
    setFilteredItems,
  } = useContext(ItemsContext);
  const [search, setSearch] = useState("");

  const dataFetch = async () => {
    try {
      const fetchedData = await fetch("https://fakestoreapi.com/products");
      const jsonData = await fetchedData.json();
      setItems(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (search === "") return setFilteredItems(items);

    handleFilterItems(search);
  };

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  useEffect(() => {
    dataFetch();
  }, []);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f8f9fa" }}>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Type the item you want to search"
        style={{
          padding: "0.5rem",
          width: "50%",
          maxWidth: "100vw",
          margin: "0 auto",
          display: "block",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 3fr))",
          justifyContent: "center",
          maxWidth:"100vw"
        }}
      >
        {filteredItems.map((item) => (
          <div
            style={{
              backgroundColor: "#fff",
              padding: "1rem",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
            key={item.id}
          >
            <img
              src={item.image}
              style={{ objectFit: "cover", width: "150px", height: "150px", marginBottom: "1rem" }}
              alt={item.title}
            />
            <p style={{ fontWeight: "bold", color:"black", fontSize: "1rem", marginBottom: "0.5rem" }}>{item.title}</p>
            <p style={{ color: "#28a745", fontSize: "1.2rem", marginBottom: "0.5rem" }}>${item.price}</p>
            <button
              onClick={() => handleAddToCart(item)}
              style={{
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allitems;
