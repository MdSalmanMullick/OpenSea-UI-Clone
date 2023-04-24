import React from "react";
import NFT from "../img/what-is-nft.png";
import buyNFT from "../img/how-to-buy-nft.png";
import minting from "../img/what-is-minting.png";
import web3 from "../img/stay-protected-web3.png";
import createNFT from "../img/how-to-create-nft.png"

const Card = (props) => {
  return (
    <div
      style={{
        transform: "translate3d(0px, 0px, 0px)",
        position: "relative",
        height: "100%",
        zIndex: "1",
        display: "flex",
        transitionProperty: "transform",
        boxSizing: "content-box",
        marginLeft: "30px",
      }}
    >
      <div
        className="hover:-translate-y-2 transition duration-500 ease-in-out"
        style={{
          width: "243.4px",
          marginRight: "16px",
          backfaceVisibility: "hidden",
          flexShrink: "0",
          height: "100%",
          position: "relative",
          boxSizing: "border-box",
          display: "block",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "100%",
            margin: "4px 0px 16px",
            boxSizing: "border-box",
          }}
        >
          <a
            style={{ boxSizing: "border-box", cursor: "pointer" }}
            href="https://opensea.io/learn/what-are-nfts"
          >
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow: "rgb(0 0 0 / 8%) 0px 4px 16px",
                marginTop: "8px",
                boxSizing: "border-box",
                display: "block",
              }}
            >
              <div
                style={{
                  height: "0px",
                  paddingBottom: "66.6667%",
                  position: "relative",
                  boxSizing: "border-box",
                  display: "block",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflowX: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    inset: "0px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      inset: "0px",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      display: "block",
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                      backgroundColor: "rgb(255, 255, 255)",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      cursor: "pointer",
                    }}
                    src={props.icon1 ? props.icon1 : NFT}
                    alt=""
                  />
                </span>
              </div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "left",
                    overflowX: "hidden",
                    display: "flex",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                >
                    <div
                    style={{
                      display: "block",
                      overflowX: "hidden",
                      textOverflow: "ellipsis",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "rgb(4, 17, 29)",
                      fontSize: "16px",
                      height: "48px",
                      boxSizing: "border-box",
                    }}
                  >
                    {props.title1 ? props.title1 : "What is an NFT?"}
                  </div>
                  
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        className="hover:-translate-y-2 transition duration-500 ease-in-out"
        style={{
          width: "243.4px",
          marginRight: "16px",
          backfaceVisibility: "hidden",
          flexShrink: "0",
          height: "100%",
          position: "relative",
          boxSizing: "border-box",
          display: "block",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "100%",
            margin: "4px 0px 16px",
            boxSizing: "border-box",
          }}
        >
          <a
            style={{ boxSizing: "border-box", cursor: "pointer" }}
            href="https://opensea.io/learn/what-are-nfts"
          >
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow: "rgb(0 0 0 / 8%) 0px 4px 16px",
                marginTop: "8px",
                transition:
                  "box-shadow 0.25s ease-in-out 0s, transform 0.25s ease 0s",
                boxSizing: "border-box",
                display: "block",
              }}
            >
              <div
                style={{
                  height: "0px",
                  paddingBottom: "66.6667%",
                  position: "relative",
                  boxSizing: "border-box",
                  display: "block",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflowX: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    inset: "0px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      inset: "0px",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                      backgroundColor: "rgb(255, 255, 255)",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      overflowClipMargin: "content-box",
                      overflow: "clip",
                      cursor: "pointer",
                    }}
                    src={props.icon2 ? props.icon2 : buyNFT}
                    alt=""
                  />
                </span>
              </div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "left",
                    overflowX: "hidden",
                    display: "flex",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                >
                    <div
                    style={{
                      display: "block",
                      overflowX: "hidden",
                      textOverflow: "ellipsis",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "rgb(4, 17, 29)",
                      fontSize: "16px",
                      height: "48px",
                      boxSizing: "border-box",
                    }}
                  >
                   {props.title2 ? props.title2 : "How to buy an NFT"}
                  </div>
                  
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        className="hover:-translate-y-2 transition duration-500 ease-in-out"
        style={{
          width: "243.4px",
          marginRight: "16px",
          backfaceVisibility: "hidden",
          flexShrink: "0",
          height: "100%",
          position: "relative",
          boxSizing: "border-box",
          display: "block",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "100%",
            margin: "4px 0px 16px",
            boxSizing: "border-box",
          }}
        >
          <a
            style={{ boxSizing: "border-box", cursor: "pointer" }}
            href="https://opensea.io/learn/what-are-nfts"
          >
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow: "rgb(0 0 0 / 8%) 0px 4px 16px",
                marginTop: "8px",
                transition:
                  "box-shadow 0.25s ease-in-out 0s, transform 0.25s ease 0s",
                boxSizing: "border-box",
                display: "block",
              }}
            >
              <div
                style={{
                  height: "0px",
                  paddingBottom: "66.6667%",
                  position: "relative",
                  boxSizing: "border-box",
                  display: "block",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflowX: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    inset: "0px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      inset: "0px",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                      backgroundColor: "rgb(255, 255, 255)",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      overflowClipMargin: "content-box",
                      overflow: "clip",
                      cursor: "pointer",
                    }}
                    src={props.icon3 ? props.icon3 : minting}
                    alt=""
                  />
                </span>
              </div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "left",
                    overflowX: "hidden",
                    display: "flex",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                >
                    
                  <div
                    style={{
                      display: "block",
                      overflowX: "hidden",
                      textOverflow: "ellipsis",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "rgb(4, 17, 29)",
                      fontSize: "16px",
                      height: "48px",
                      boxSizing: "border-box",
                    }}
                  >
                    {props.title3 ? props.title3 : "What is minting?"}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        className="hover:-translate-y-2 transition duration-500 ease-in-out"
        style={{
          width: "243.4px",
          marginRight: "16px",
          backfaceVisibility: "hidden",
          flexShrink: "0",
          height: "100%",
          position: "relative",
          boxSizing: "border-box",
          display: "block",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "100%",
            margin: "4px 0px 16px",
            boxSizing: "border-box",
          }}
        >
          <a
            style={{ boxSizing: "border-box", cursor: "pointer" }}
            href="https://opensea.io/learn/what-are-nfts"
          >
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow: "rgb(0 0 0 / 8%) 0px 4px 16px",
                marginTop: "8px",
                transition:
                  "box-shadow 0.25s ease-in-out 0s, transform 0.25s ease 0s",
                boxSizing: "border-box",
                display: "block",
              }}
            >
              <div
                style={{
                  height: "0px",
                  paddingBottom: "66.6667%",
                  position: "relative",
                  boxSizing: "border-box",
                  display: "block",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflowX: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    inset: "0px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      inset: "0px",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                      backgroundColor: "rgb(255, 255, 255)",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      overflowClipMargin: "content-box",
                      overflow: "clip",
                      cursor: "pointer",
                    }}
                    src={props.icon4 ? props.icon4 : web3}
                    alt=""
                  />
                </span>
              </div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "left",
                    overflowX: "hidden",
                    display: "flex",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      overflowX: "hidden",
                      textOverflow: "ellipsis",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "rgb(4, 17, 29)",
                      fontSize: "16px",
                      height: "48px",
                      boxSizing: "border-box",
                    }}
                  >
                    {props.title4 ? props.title4 : "How to stay protected in web3"}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        className="hover:-translate-y-2 transition duration-500 ease-in-out"
        style={{
          width: "243.4px",
          marginRight: "16px",
          backfaceVisibility: "hidden",
          flexShrink: "0",
          height: "100%",
          position: "relative",
          boxSizing: "border-box",
          display: "block",
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "relative",
            width: "100%",
            margin: "4px 0px 16px",
            boxSizing: "border-box",
          }}
        >
          <a
            style={{ boxSizing: "border-box", cursor: "pointer" }}
            href="https://opensea.io/learn/what-are-nfts"
          >
            <div
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                boxShadow: "rgb(0 0 0 / 8%) 0px 4px 16px",
                marginTop: "8px",
                transition:
                  "box-shadow 0.25s ease-in-out 0s, transform 0.25s ease 0s",
                boxSizing: "border-box",
                display: "block",
              }}
            >
              <div
                style={{
                  height: "0px",
                  paddingBottom: "66.6667%",
                  position: "relative",
                  boxSizing: "border-box",
                  display: "block",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflowX: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: "1",
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    inset: "0px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      inset: "0px",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      objectFit: "cover",
                      backgroundColor: "rgb(255, 255, 255)",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      overflowClipMargin: "content-box",
                      overflow: "clip",
                      cursor: "pointer",
                    }}
                    src={props.icon5 ? props.icon5 : createNFT}
                    alt=""
                  />
                </span>
              </div>
              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "left",
                    overflowX: "hidden",
                    display: "flex",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      display: "block",
                      overflowX: "hidden",
                      textOverflow: "ellipsis",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "rgb(4, 17, 29)",
                      fontSize: "16px",
                      height: "48px",
                      boxSizing: "border-box",
                    }}
                  >
                    {props.title5 ? props.title5 : "How to create an NFT on OpenSea"}
                    
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
