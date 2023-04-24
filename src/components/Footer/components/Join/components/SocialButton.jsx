import React from "react";

function SocialButton(props) {
  const { link, icon } = props;
  return (
    <a href={link}>
      <button
        className="bg-sky-600/75 hover:bg-blue-400"
        style={{
          width: "54px",
          height: "54px",
          marginTop: "8px",
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
          appearance: "button",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "22px",
            letterSpacing: "0.01em",
            fill: "white",
            color: "white",
            cursor: "pointer",
          }}
        >
          {icon}
        </div>
      </button>
    </a>
  );
}

export default SocialButton;
