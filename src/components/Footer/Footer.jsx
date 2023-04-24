import React from "react";
import opensea from "../../assets/svg/opensea-white.svg";
import Join from "./components/Join/Join";
import StayInTheLoopForm from "./components/StayInTheLoopForm";

const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "64px",
        }}
      >
        <StayInTheLoopForm />
        <Join />
      </div>
      <div
        style={{
          paddingBottom: "40px",
          marginBottom: "20px",
          borderBottom: "1px solid rgba(229, 232, 235, 0.25)",
          display: "flex",
          color: "rgb(255, 255, 255)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            paddingTop: "85px",
            display: "flex",
            color: "rgb(255, 255, 255)",
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              display: "flex",
              width: "initial",
              height: "initial",
              opacity: "1",
              border: "0",
              background: "none",
              position: "relative",
              textAlign: "left",
              color: "rgb(255, 255, 255)",
            }}
          >
            <img
              style={{
                boxSizing: "border-box",
                border: "none",
                display: "flex",
                width: "40px",
                textAlign: "left",
                fill:"blue"
              }}
              src={opensea}
              alt="opensea"
            />
          </span>
          <a
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: "20px",
              fontWeight: "600",
              marginTop: "8px",
              marginBottom: "8px",
              cursor: "pointer",
              textAlign: "left",
            }}
            href="https://wwww.opensea.io"
          >
            OpenSea
          </a>
          <div
            style={{
              fontSize: "16px",
              color: "rgb(251, 253, 255)",
              display: "block",
              boxSizing: "border-box",
              textAlign: "left",
              width: "45%",
              fontWeight: "400",
            }}
          >
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </div>
        </div>
        <div
          style={{
            height: "fit-content",
            width: "100%",
            alignItems: "center",
            paddingTop: "85px",
            justifyContent: "space-around",
            flexWrap: "wrap",
            display: "flex",
            color: "rgb(255, 255, 255)",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              color: "rgb(255, 255, 255)",
              height: "50%",
              width: "50%",
              paddingTop: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "rgb(255, 255, 255)",
                lineHeight: "110%",
                display: "block",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
              }}
            >
              Marketplace
            </h3>
            <ul style={{ display: "block", color: "rgb(255, 255, 255)" }}>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="all nfts"
                  className="hover:font-bold"
                >
                  All NFTS
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="art"
                  className="hover:font-bold"
                >
                  Art
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="gaming"
                  className="hover:font-bold"
                >
                  Gaming
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="membership"
                  className="hover:font-bold"
                >
                  Memberships
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="pfps"
                  className="hover:font-bold"
                >
                  PFPs
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="photography"
                  className="hover:font-bold"
                >
                  Photography
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              flexDirection: "column",
              color: "rgb(255, 255, 255)",
              height: "50%",
              width: "50%",
              paddingTop: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "rgb(255, 255, 255)",
                lineHeight: "110%",
                display: "block",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
              }}
            >
              My Account
            </h3>
            <ul style={{ display: "block", color: "rgb(255, 255, 255)" }}>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="profile"
                  className="hover:font-bold"
                >
                  Profiles
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="favorite"
                  className="hover:font-bold"
                >
                  Favorite
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="watchlist"
                  className="hover:font-bold"
                >
                  Watchlist
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="collections"
                  className="hover:font-bold"
                >
                  My collections
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="create"
                  className="hover:font-bold"
                >
                  Create
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="setting"
                  className="hover:font-bold"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              flexDirection: "column",
              color: "rgb(255, 255, 255)",
              height: "50%",
              width: "50%",
              paddingTop: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "rgb(255, 255, 255)",
                lineHeight: "110%",
                display: "block",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
              }}
            >
              Resources
            </h3>
            <ul style={{ display: "block", color: "rgb(255, 255, 255)" }}>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="blog"
                  className="hover:font-bold"
                >
                  Blog
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="learn"
                  className="hover:font-bold"
                >
                  Learn
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="helpcenter"
                  className="hover:font-bold"
                >
                  Help Center
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="faqs"
                  className="hover:font-bold"
                >
                  User Content FAQs
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="taxes"
                  className="hover:font-bold"
                >
                  Taxes
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="partners"
                  className="hover:font-bold"
                >
                  Partners
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="devplatform"
                  className="hover:font-bold"
                >
                  Developer Platform
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="status"
                  className="hover:font-bold"
                >
                  Platform Status
                </a>
              </li>
            </ul>
          </div>
          <div
            style={{
              flexDirection: "column",
              color: "rgb(255, 255, 255)",
              height: "50%",
              width: "50%",
              paddingTop: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "rgb(255, 255, 255)",
                lineHeight: "110%",
                display: "block",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
              }}
            >
              Company
            </h3>
            <ul style={{ display: "block", color: "rgb(255, 255, 255)" }}>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="blog"
                  className="hover:font-bold"
                >
                  About
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="learn"
                  className="hover:font-bold"
                >
                  Careers
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="helpcenter"
                  className="hover:font-bold"
                >
                  Ventures
                </a>
              </li>
              <li
                style={{
                  fontSize: "14PX",
                  marginTop: "12px",
                  display: "list-item",
                }}
              >
                <a
                  style={{
                    color: "rgb(251, 253, 255)",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  href="faqs"
                  className="hover:font-bold"
                >
                  Grants
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "12px",
          marginTop: "20px",
          flexWrap: "wrap",
          display: "flex",
        }}
      >
        <div style={{ display: "flex", boxSizing: "border-box" }}>
          <p
            style={{
              boxSizing: "border-box",
              display: "block",
              marginBlockStart: "1em",
              marginBlockEnd: "1em",
              marginInlineStart: "0px",
              marginInlineEnd: "0px",
            }}
          >
            © 2018 - 2023 Ozone Networks, Inc
          </p>
        </div>
        <div style={{ display: "flex", boxSizing: "border-box"}}>
          <a
            className="hover:font-bold"
            style={{
              color: "rgb(251, 253, 255)",
              fontSize: "12px",
              boxSizing: "border-box",
              cursor: "pointer",
              marginRight:"15px"
            }}
            href="privacy"
          >
            Privacy Policy
          </a>
          <a
            className="hover:font-bold"
            style={{
              color: "rgb(251, 253, 255)",
              fontSize: "12px",
              boxSizing: "border-box",
              cursor: "pointer",
              marginRight:"15px"
            }}
            href="termsofservice"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
