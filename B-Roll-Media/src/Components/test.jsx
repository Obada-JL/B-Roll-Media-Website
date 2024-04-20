import React, { useState, useEffect, useRef } from "react";
function Test() {
  const content = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 2" },
    { id: 5, text: "Item 2" },
    { id: 6, text: "Item 2" },
    { id: 7, text: "Item 2" },
    { id: 8, text: "Item 2" },
    { id: 9, text: "Item 2" },
    { id: 10, text: "Item 2" },
    // ... add more items
  ];

  const [itemsToShow, setItemsToShow] = useState([]); // Visible items
  const [hasMore, setHasMore] = useState(true); // Flag for more items

  const contentRef = useRef(null); // Reference to scrollable container

  useEffect(() => {
    setItemsToShow(content.slice(0, 2)); // Show first 10 items initially
  }, []); // Run only once on component mount

  const handleScroll = () => {
    const container = contentRef.current;
    const { scrollLeft, scrollWidth } = container;

    // Check if user has scrolled near the end (adjust threshold as needed)
    if (scrollLeft + container.clientWidth >= scrollWidth - 50) {
      const newItems = content.slice(
        itemsToShow.length,
        itemsToShow.length + 2
      );
      setItemsToShow((prevItems) => [...prevItems, ...newItems]);
      setHasMore(newItems.length > 0); // Update flag for more items
    }
  };

  useEffect(() => {
    const container = contentRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [contentRef, itemsToShow]); // Re-attach scroll listener on changes

  return (
    <div ref={contentRef} style={{ display: "flex" }}>
      {itemsToShow.map((item) => (
        <div key={item.id} style={{ padding: "10px" }}>
          {item.text}
        </div>
      ))}
      {!hasMore && <p>No more items to display.</p>}
    </div>
  );
}

export default Test;
