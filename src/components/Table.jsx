import React from 'react'

import nakAmigos from "../img/nakamigos.jpg";
import boredApe from "../img/boredape.png"
import moonBirds from "../img/moonbirds.png"
import lensProfile from "../img/lensprotocol.jpg"
import nfdKey from "../img/nfdkey.jpg"
import envision from "../img/envision.png"
import elements from "../img/8lements.jpg"
import xsHunter from "../img/xhunter.jpg"
import undead from "../img/genuineundead.webp"
import beanz from "../img/beanz.png"


const Table = () => {
  return (
    <>
    <div style={{ marginTop: "15px", marginLeft: "65px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div style={{ paddingRight: "300px" }}>
            <span
              style={{ fontSize: "12px", fontWeight: "600", color: "gray" }}
            >
              COLLECTION
            </span>
          </div>
          <div style={{ paddingRight: "85px" }}>
            <span
              style={{ fontSize: "12px", fontWeight: "600", color: "gray" }}
            >
              FLOOR PRICE
            </span>
          </div>
          <div>
            <span
              style={{ fontSize: "12px", fontWeight: "600", color: "gray" }}
            >
              VOLUME
            </span>
          </div>
          <div style={{ paddingRight: "300px", paddingLeft: "95px" }}>
            <span
              style={{ fontSize: "12px", fontWeight: "600", color: "gray" }}
            >
              COLLECTION
            </span>
          </div>
          <div style={{ paddingRight: "85px" }}>
            <span
              style={{ fontSize: "12px", fontWeight: "600", color: "gray" }}
            >
              FLOOR PRICE
            </span>
          </div>
          <div>
            <span
              style={{ fontSize: "12px", fontWeight: "600", color: "gray" }}
            >
              VOLUME
            </span>
          </div>
        </div>
      </div>
      <div role={"table"} tabIndex="0">
        <div role={"row"} style={{ display: "flex", paddingLeft: "65px", paddingTop:"25px", fontWeight:"500", fontSize:"22px", color:"gray", alignItems:"center" }}>
          1
          <div>
            <img
              src={nakAmigos}
              alt="logo"
              style={{ width: "70px", borderRadius:"15px", height:"70px", marginLeft:"15px", padding:"5px", display:"flex"}}
            />
          </div>
          <div>
            <span style={{paddingLeft:"15px", color:"black", fontWeight:"600", fontSize:"17px"}}>Nakamigos</span>
            <span style={{paddingLeft:"160px", color:"black", fontWeight:"600", fontSize:"17px"}}>0.09 ETH</span>
            <span style={{paddingLeft:"85px", color:"black", fontWeight:"600", fontSize:"17px"}}>47.4 ETH</span>
            </div>
            <div role={"row"} style={{ display: "flex", paddingLeft: "65px", paddingTop:"10px", fontWeight:"500", fontSize:"22px", color:"gray", alignItems:"center" }}>
          6
          <div>
            <img
              src={envision}
              alt="logo"
              style={{ width: "70px", borderRadius:"15px", height:"70px", marginLeft:"15px", padding:"5px", display:"flex"}}
            />
          </div>
          <div>
            <span style={{paddingLeft:"15px", color:"black", fontWeight:"600", fontSize:"17px"}}>Project Envision</span>
            <span style={{paddingLeft:"175px", color:"black", fontWeight:"600", fontSize:"17px"}}>0.04 ETH</span>
            <span style={{paddingLeft:"84px", color:"black", fontWeight:"600", fontSize:"17px"}}>2.6 ETH</span>
            </div>
        </div>
        </div>
      </div>
      <div role={"table"} tabIndex="0">
        <div role={"row"} style={{ display: "flex", paddingLeft: "65px", paddingTop:"10px", fontWeight:"500", fontSize:"22px", color:"gray", alignItems:"center" }}>
          2
          <div>
            <img
              src={boredApe}
              alt="logo"
              style={{ width: "70px", borderRadius:"15px", height:"70px", marginLeft:"15px", padding:"5px", display:"flex"}}
            />
          </div>
          <div>
            <span  style={{paddingLeft:"15px", color:"black", fontWeight:"600", fontSize:"17px"}}>Bored Ape Kennel Club</span>
            <span  style={{paddingLeft:"65px", color:"black", fontWeight:"600", fontSize:"17px"}}>6.45 ETH</span>
            <span style={{paddingLeft:"85px", color:"black", fontWeight:"600", fontSize:"17px"}}>291.1 ETH</span>
            </div>
            <div role={"row"} style={{ display: "flex", paddingLeft: "63px", paddingTop:"10px", fontWeight:"500", fontSize:"22px", color:"gray", alignItems:"center" }}>
          7
          <div>
            <img
              src={elements}
              alt="logo"
              style={{ width: "70px", borderRadius:"15px", height:"70px", marginLeft:"15px", padding:"5px", display:"flex"}}
            />
          </div>
          <div>
            <span style={{paddingLeft:"15px", color:"black", fontWeight:"600", fontSize:"17px"}}>8lements</span>
            <span style={{paddingLeft:"225px", color:"black", fontWeight:"600", fontSize:"17px"}}>0.04 ETH</span>
            <span style={{paddingLeft:"84px", color:"black", fontWeight:"600", fontSize:"17px"}}>2.2 ETH</span>
            </div>
        </div>
        </div>
      </div>
      <div role={"table"} tabIndex="0">
        <div role={"row"} style={{ display: "flex", paddingLeft: "65px", paddingTop:"25px", fontWeight:"500", fontSize:"22px", color:"gray", alignItems:"center" }}>
          3
          <div>
            <img
              src={moonBirds}
              alt="logo"
              style={{ width: "70px", borderRadius:"15px", height:"70px", marginLeft:"15px", padding:"5px", display:"flex"}}
            />
          </div>
          <div>
            <span style={{paddingLeft:"15px", color:"black", fontWeight:"600", fontSize:"17px"}}>Moonbirds</span>
            <span style={{paddingLeft:"160px", color:"black", fontWeight:"600", fontSize:"17px"}}>3.64 ETH</span>
            <span style={{paddingLeft:"84px", color:"black", fontWeight:"600", fontSize:"17px"}}>147.6 ETH</span>
            </div>
            <div role={"row"} style={{ display: "flex", paddingLeft: "63px", paddingTop:"10px", fontWeight:"500", fontSize:"22px", color:"gray", alignItems:"center" }}>
          8
          <div>
            <img
              src={xsHunter}
              alt="logo"
              style={{ width: "70px", borderRadius:"15px", height:"70px", marginLeft:"15px", padding:"5px", display:"flex"}}
            />
          </div>
          <div>
            <span style={{paddingLeft:"15px", color:"black", fontWeight:"600", fontSize:"17px"}}>Xs Hunters</span>
            <span style={{paddingLeft:"212px", color:"black", fontWeight:"600", fontSize:"17px"}}>0.01 ETH</span>
            <span style={{paddingLeft:"84px", color:"black", fontWeight:"600", fontSize:"17px"}}>0.40 ETH</span>
            </div>
        </div>
        </div>
      </div>
      <div role={"table"} tabIndex="0">
        <div role={"row"} style={{ display: "flex", paddingLeft: "65px", paddingTop:"25px", fontWeight:"500", fontSize:"22px", color:"gray", alignItems:"center" }}>
          4
          <div>
            <img
              src={lensProfile}
              alt="logo"
              style={{ width: "70px", borderRadius:"15px", height:"70px", marginLeft:"15px", padding:"5px", display:"flex"}}
            />
          </div>
          <div>
            <span style={{paddingLeft:"15px", color:"black", fontWeight:"600", fontSize:"17px"}}>Lens Protocol Profiles</span>
            <span style={{paddingLeft:"77px", color:"black", fontWeight:"600", fontSize:"17px"}}>0.12 ETH</span>
            <span style={{paddingLeft:"89px", color:"black", fontWeight:"600", fontSize:"17px"}}>5 ETH</span>
            </div>
            <div role={"row"} style={{ display: "flex", paddingLeft: "93px", paddingTop:"10px", fontWeight:"500", fontSize:"22px", color:"gray", alignItems:"center" }}>
          9
          <div>
            <img
              src={undead}
              alt="logo"
              style={{ width: "70px", borderRadius:"15px", height:"70px", marginLeft:"15px", padding:"5px", display:"flex"}}
            />
          </div>
          <div>
            <span style={{paddingLeft:"15px", color:"black", fontWeight:"600", fontSize:"17px"}}>Genuine Undead</span>
            <span style={{paddingLeft:"168px", color:"black", fontWeight:"600", fontSize:"17px"}}>0.19 ETH</span>
            <span style={{paddingLeft:"84px", color:"black", fontWeight:"600", fontSize:"17px"}}>5 ETH</span>
            </div>
        </div>
        </div>
      </div>
      <div role={"table"} tabIndex="0">
        <div role={"row"} style={{ display: "flex", paddingLeft: "65px", paddingTop:"25px", fontWeight:"500", fontSize:"22px", color:"gray", alignItems:"center" }}>
          5
          <div>
            <img
              src={nfdKey}
              alt="logo"
              style={{ width: "70px", borderRadius:"15px", height:"70px", marginLeft:"15px", padding:"5px", display:"flex"}}
            />
          </div>
          <div>
            <span style={{paddingLeft:"15px", color:"black", fontWeight:"600", fontSize:"17px"}}>Secret NFD Keys</span>
            <span style={{paddingLeft:"117px", color:"black", fontWeight:"600", fontSize:"17px"}}>0.04 ETH</span>
            <span style={{paddingLeft:"85px", color:"black", fontWeight:"600", fontSize:"17px"}}>1.7 ETH</span>
            </div>
            <div role={"row"} style={{ display: "flex", paddingLeft: "75px", paddingTop:"10px", fontWeight:"500", fontSize:"22px", color:"gray",alignItems:"center" }}>
          10
          <div>
            <img
              src={beanz}
              alt="logo"
              style={{ width: "70px", borderRadius:"15px", height:"70px", marginLeft:"15px", padding:"5px", display:"flex"}}
            />
          </div>
          <div>
            <span style={{paddingLeft:"25px", color:"black", fontWeight:"600", fontSize:"17px"}}>BEANZ Official</span>
            <span style={{paddingLeft:"173px", color:"black", fontWeight:"600", fontSize:"17px"}}>1.44 ETH</span>
            <span style={{paddingLeft:"84px", color:"black", fontWeight:"600", fontSize:"17px"}}>138 ETH</span>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Table