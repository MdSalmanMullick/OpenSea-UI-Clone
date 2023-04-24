import React from "react";

const Categories = () => {
  return (
    <div className="flex space-x-4 font-semibold">
      <h1 className="cursor-pointer text-black hover:text-gray-600">
        Explore
        </h1>
        
      <h1 className="cursor-pointer text-black hover:text-gray-600">
        Stats 
        {/* <div className="dropdown-items" style={{color:"black", backgroundColor:"rgb(255, 255, 255)", borderRadius:"6px"}}>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Ranking</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Activity</div>
        </div> */}
        </h1>
        
      <h1 className="cursor-pointer text-black hover:text-gray-600">
        Resources
        {/* <div className="dropdown-items" style={{color:"black", backgroundColor:"rgb(255, 255, 255)", borderRadius:"6px"}}>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Blog</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Learn</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Help Center</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>User Content FAQs</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Taxes</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Partners</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Developer Platform</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Platform Status</div>
        </div> */}
        </h1>
        
      <h1 className="cursor-pointer text-black hover:text-gray-600">
        Create
        </h1>
      <div className="flex space-x-4 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black hover:text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {/* <div className="dropdown-items" style={{color:"black", backgroundColor:"rgb(255, 255, 255)", borderRadius:"6px"}}>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Profiles</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Favorite</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Watchlist</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>My Collection</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Create</div>
          <div style={{width:"auto", padding:"8px", cursor:"pointer", boxShadow:"rgb(0 0 0 / 8%) 0px 2px 2px"}}>Settings</div>
        </div> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black hover:text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-black hover:text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Categories;
