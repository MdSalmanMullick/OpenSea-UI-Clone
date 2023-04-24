import React from "react";
import Table from "./Table";


const NFTList = () => {
  return (
    <>
      <div
        className="flex"
        style={{
          background: "white",
          marginTop: "45px",
          marginLeft: "30px",
        }}
      >
        <div>
          <h1
            className="cursor-pointer"
            style={{
              background: "white",
              color:"black",
              marginLeft: "30px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Trending
          </h1>
        </div>

        <div>
          <h1
            className="cursor-pointer text-gray-400 hover:text-black"
            style={{
              background: "white",
              marginLeft: "30px",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Top
          </h1>
        </div>

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div>
              <button
                style={{
                  padding: "8px 12px",
                  width: "48px",
                  borderRight: "none",
                  fontSize: "16px",
                  height: "48px",
                  boxShadow: "none",
                  borderColor: "rgb(227, 227, 227)",
                  color: "rgb(4, 17, 29)",
                  backgroundColor: "rgba(229, 232, 235, 0.5)",
                  borderTopLeftRadius: "12px",
                  borderBottomLeftRadius: "12px",
                  position: "relative",
                  left: "550px",
                  border: "1px solid rgb(227,227,227)",
                }}
              >
                1h
              </button>
            </div>

            <div>
              <button
                style={{
                  padding: "8px 12px",
                  width: "48px",
                  borderRight: "none",
                  fontSize: "16px",
                  height: "48px",
                  boxShadow: "none",
                  borderColor: "rgb(227, 227, 227)",
                  color: "gray",
                  backgroundColor: "white",
                  borderRadius: "0px",
                  position: "relative",
                  left: "550px",
                  borderRightWidth: "0px",
                  borderLeftWidth: "0px",
                  border: "1px solid rgb(227,227,227)",
                }}
              >
                6h
              </button>
            </div>

            <div>
              <button
                style={{
                  padding: "8px 12px",
                  width: "48px",
                  borderRight: "none",
                  fontSize: "16px",
                  height: "48px",
                  boxShadow: "none",
                  borderColor: "rgb(227, 227, 227)",
                  color: "gray",
                  backgroundColor: "white",
                  borderRadius: "0px",
                  position: "relative",
                  left: "550px",
                  border: "1px solid rgb(227,227,227)",
                }}
              >
                24h
              </button>
            </div>

            <div>
              <button
                style={{
                  padding: "8px 12px",
                  width: "48px",
                  borderRight: "none",
                  fontSize: "16px",
                  height: "48px",
                  boxShadow: "none",
                  borderColor: "rgb(227, 227, 227)",
                  color: "gray",
                  backgroundColor: "white",
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "12px",
                  position: "relative",
                  left: "550px",
                  border: "1px solid rgb(227,227,227)",
                }}
              >
                7d
              </button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <button
              style={{
                padding: "8px 12px",
                border: "1px solid rgb(227,227,227)",
                fontWeight: "700",
                fontSize: "16px",
                color: "rgb(53,56,64)",
                borderRadius: "12px",
                position: "relative",
                left: "570px",
                height: "48px",
              }}
            >
              All Chains ⌄
            </button>
          </div>
        </div>

        <div>
          <div>
            <button
              style={{
                padding: "11px 24px",
                border: "1px solid rgb(227,227,227)",
                fontWeight: "700",
                fontSize: "16px",
                color: "rgb(53,56,64)",
                borderRadius: "12px",
                position: "relative",
                left: "590px",
                height: "48px",
              }}
            >
              View all
            </button>
          </div>
        </div>
      </div>
      <Table />
    </>
  );
};

export default NFTList;
