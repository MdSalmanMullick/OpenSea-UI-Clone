import React from "react";

function StayInTheLoopForm() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <div style={{ width: "fit-content" }}>Stay in the loop</div>
      <div
        style={{
          fontSize: "16px",
          fontWeight: "400",
          paddingTop: "12px",
          width: "fit-content",
          margin: 0,
        }}
      >
        Join our mailing list to stay in the loop with our newest feature
        releases, NFT drops, and tips and tricks for navigating OpenSea.
      </div>
      <form
        style={{
          marginTop: "16px",
          color: "rgb(53, 56, 64)",
          width: "fit-content",
        }}
        action=""
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              paddingRight: "8px",
              flexDirection: "column",
              display: "flex",
              color: "rgb(53, 56, 64)",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "rgb(53, 56, 64)",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                  marginTop: "16px",
                  color: "rgb(53, 56, 64)",
                  textAlign: "center",
                }}
              >
                <label
                  style={{
                    color: "rgb(4, 17, 29)",
                    border: "0px",
                    height: "1px",
                    amrgin: "-1px",
                    overflowX: "hidden",
                    position: "absolute",
                    width: "1px",
                    fontWeight: "600",
                    fontSize: "16px",
                    cursor: "default",
                  }}
                  htmlFor=""
                >
                  Email address
                </label>
              </div>
              <div
                style={{
                  width: "450px",
                  background: "rgb(255, 255, 255)",
                  cursor: "text",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "12px",
                  border: "1px solid rgb(227, 227, 277)",
                  color: "rgb(4, 17, 29)",
                  padding: "12px",
                  height: "48px",
                  fontSize: "16px",
                }}
              >
                <input
                  style={{
                    cursor: "text",
                    textOverflow: "ellipsis",
                    backgroundColor: "white",
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: "16px",
                    lineHeight: "26px",
                    minHeight: "26px",
                  }}
                  type="email"
                  name="email"
                  placeholder="Your email address"
                />
              </div>
            </div>
          </div>
          <button
            className="bg-sky-600/75 hover:bg-blue-400"
            style={{
              whiteSpace: "nowrap",
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "12px",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "22px",
              letterSpacing: "0.01em",
              padding: "17px 24px",
              border: "1px solid rgb(32, 129, 226)",
              color: "rgb(255, 255, 255)",
              margin: "14px 8px 8px",
              height: "50px",
              width: "162px",
              cursor: "pointer",
            }}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default StayInTheLoopForm;
