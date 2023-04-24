import React from "react";

const SearchFeed = () => {
  return (
    <div style={{ width: "100%", marginRight: "32px", marginLeft: "48px", marginTop: "4px" }}>
      <input
        style={{
          padding: "12px 24px",
          boxSizing: "border-box",
          borderRadius: "12px",
          width: "73%",
          background: "rgba(255,255,255)",
          marginRight: "400px"
        }}
        className="font-semibold text-gray-400 border border-solid"
        placeholder="Search items, collections, and accounts"
      />
    </div>
  );
};

export default SearchFeed;
