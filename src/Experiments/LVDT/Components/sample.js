import * as React from "react";
import { DiagramComponent, SymbolPaletteComponent, SnapConstraints } from "@syncfusion/ej2-react-diagrams";
import "./LVDT.css";
import img from "../images/img_ind.png";
import img_rev from "../images/img_ind_rev.png";
import rod from "../images/img_lohe_ki_rod.png";
import VLVDT from "../images/AC_voltage_source.png";
import Vmtr from "../images/voltmeter.png";
import ind_small from "../images/img_ind_small.png";
import "./LogicCircuit.css";


/**
 * Diagram Logic Circuit sample
 */
/* tslint:disable */

let orPort = [
    { id: "Or_port1", offset: { x: 0.01, y: 0.215 } },
    { id: "Or_port2", offset: { x: 0.26, y: 0.5 } },
    { id: "Or_port3", offset: { x: 0.01, y: 0.805 } },
    { id: "Or_port4", offset: { x: 0.99, y: 0.5 } }
];
let andPort = [
    { id: "And_port1", offset: { x: 0.01, y: 0.215 } },
    { id: "And_port2", offset: { x: 0.22, y: 0.5 } },
    { id: "And_port3", offset: { x: 0.01, y: 0.805 } },
    { id: "And_port4", offset: { x: 0.99, y: 0.5 } }
];
let notPort = [
    { id: "Not_port1", offset: { x: 0.01, y: 0.5 } },
    { id: "Not_port2", offset: { x: 0.99, y: 0.5 } }
];
let decorator = {
    height: 12,
    width: 12,
    shape: "Circle",
    style: { fill: "white", strokeColor: "#444", strokeWidth: 1 }
};
let diagramInstance;

//defines nodes as logic gates on the symbol palette
let items = [

  {
    id: "ind_small",
    width: 70,
    height: 50,
    offsetX: 20,
    offsetY: 20,
    fillColor: "white",
    borderWidth: 5,
    shape: {
      type: "Image",
      source: ind_small,
      style: { strokeColor: "transparent" },
    },
    ports: [
      {
        name: "inds_port1",
        offset: { x: 0, y: 0.5 },
        visibility: true,
        fillColor: "red",
        size: 12,
      },
      {
        name: "inds_port2",
        offset: { x: 1, y: 0.5 },
        visibility: true,
        fillColor: "red",
        size: 12,
      },
    ],
  },
  {
    id: "VLVDT",
    shape: {
      type: "Image",
      source: VLVDT,
      style: { strokeColor: "transparent" },
    },
    ports: [
      {
        name: "VLVDT_port1",
        offset: { x: 0.01, y: 0.5 },
        visibility: true,
        fillColor: "red",
        size: 12,
      },
      {
        name: "VLVDT_port2",
        offset: { x: 0.99, y: 0.5 },
        visibility: true,
        fillColor: "red",
        size: 12,
      },
    ],
  },
  {
    id: "img_rev",
    shape: {
      type: "Image",
      source: img_rev,
      style: { strokeColor: "transparent" },
    },
    ports: [
      {
        name: "imgrev_port1",
        offset: { x: 0.01, y: 0.5 },
        visibility: true,
        fillColor: "red",
        size: 12,
      },
      {
        name: "imgrev_port2",
        offset: { x: 0.99, y: 0.5 },
        visibility: true,
        fillColor: "red",
        size: 12,
      },
    ],
  },
  {
    id: "Vmtr",
    shape: {
      type: "Image",
      source: Vmtr,
      style: { strokeColor: "transparent" },
    },
    ports: [
      {
        name: "Vmtr_port1",
        offset: { x: 0.01, y: 0.5 },
        visibility: true,
        fillColor: "red",
        size: 12,
      },
      {
        name: "Vmtr_port2",
        offset: { x: 0.99, y: 0.5 },
        fillColor: "red",
        size: 12,
      },
    ],
  },
  { id: "rod", shape: { type: "Image", source: rod, style: { strokeColor: "transparent" } } },
];
/* tslint:enable */
let connections = [
    {
        id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' }, style: { strokeWidth: 1, strokeColor: '#757575' }
    },  
    {
        id: 'Link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 }, cornerRadius: 5,
        targetDecorator: { shape: 'None' }, style: { strokeWidth: 1, strokeColor: '#757575' }
    }, 
];
const SAMPLE_CSS = `
.sb-mobile-palette {
  width: 240px;
  height: 100%;
  float: left;
}

.sb-mobile-palette-bar {
  display: none;
}

.container-fluid {
  padding-bottom: 15px;
}

.sb-mobile-diagram {
  width: calc(100% - 242px);
  height: 100%;
  float: left;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-left: none;
}

@media (max-width: 550px) {

  .sb-mobile-palette {
      z-index: 19;
      position: absolute;
      display: none;
      transition: transform 300ms linear, visibility 0s linear 300ms;
      width: 39%;
      height: 100%;
  }

  .sb-mobile-palette-bar {
      display: block;
      width: 100%;
      background: #fafafa;
      padding: 10px 10px;
      border: 0.5px solid #e0e0e0;
      min-height: 40px;
  }

  .sb-mobile-diagram {
      width: 100%;
      height: 100%;
      float: left;
      left: 0px;
  }

  #palette-icon {
      font-size: 20px;
  }
}

.sb-mobile-palette-open {
  position: absolute;
  display: block;
  right: 15px;
}

.e-toggle-palette::before {
  content: "\e700"
}

.material #logicCircuit #palette-space .e-accordion {
  border: none;
}

.material #logicCircuit #palette-space {
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.bootstrap #logicCircuit .sb-mobile-diagram {
  height: calc(100% - 5px);
  margin-top: 5px;
  border-radius: 4px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}

.fabric #logicCircuit .sb-mobile-diagram {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
`;
function createNode(id, offsetX, offsetY, height, width, pathData, ports) {
    // update node properties
    let node = {};
    node.id = id;
    node.offsetX = offsetX;
    node.offsetY = offsetY;
    node.height = height;
    node.width = width;
    node.shape = { type: "Image", source: pathData };
    node.ports = ports;
    return node;
}
// Create Connectors to connect two logic gates
function createConnector(id, sourcePoint, targetPoint, sourceID, targetID, sourcePortID, targetPortID, sourceDecorator, targetDecorator, annotation, segments, isStraight) {
    // update connector properties
    let connector = {};
    connector.id = id;
    connector.sourcePoint = sourcePoint;
    connector.targetPoint = targetPoint;
    connector.sourceID = sourceID;
    connector.targetID = targetID;
    connector.type = isStraight ? "Straight" : "Orthogonal";
    connector.sourcePortID = sourcePortID;
    connector.targetPortID = targetPortID;
    // update connector annotation properties
    connector.annotations = [
        {
            content: annotation.content,
            offset: 0,
            margin: {
                left: annotation.margin && annotation.margin.left
                    ? annotation.margin.left : 0,
                top: annotation.margin && annotation.margin.top ? annotation.margin.top : 0
            },
            style: {
                fontFamily: "Segoe UI",
                textWrapping: "NoWrap",
                fontSize: 14
            }
        }
    ];
    // update connector decorators
    connector.sourceDecorator = sourceDecorator;
    connector.targetDecorator = targetDecorator;
    // update connector segments
    if (segments) {
        connector.segments = [
            { length: 100, direction: "Right", type: "Orthogonal" }
        ];
    }
    return connector;
}
function LogicCircuit() {
    function rendereComplete() {
        diagramInstance.fitToPage();
        addEvents();
    }
    // Create nodes as logic gates
    let isMobile;
    function addEvents() {
        isMobile = window.matchMedia("(max-width:550px)").matches;
        if (isMobile) {
            let paletteIcon = document.getElementById("palette-icon");
            if (paletteIcon) {
                paletteIcon.addEventListener("click", openPalette, false);
            }
        }
    }
    function openPalette() {
        let paletteSpace = document.getElementById("palette-space");
        isMobile = window.matchMedia("(max-width:550px)").matches;
        if (isMobile) {
            if (!paletteSpace.classList.contains("sb-mobile-palette-open")) {
                paletteSpace.classList.add("sb-mobile-palette-open");
            }
            else {
                paletteSpace.classList.remove("sb-mobile-palette-open");
            }
        }
    }
    return (<div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <div id="logicCircuit" style={{ width: "100%", height: "600px" }}>
          <div className="sb-mobile-palette-bar">
            <div id="palette-icon" style={{ float: "right" }} className="e-ddb-icons1 e-toggle-palette"/>
          </div>
          <div id="palette-space" className="sb-mobile-palette">
            <SymbolPaletteComponent id="symbolpalette" expandMode="Multiple" palettes={[
            {
                id: "flow",
                expanded: true,
                symbols: items,
                title: "Flow Shapes"
            },
            {
                id: "connectors",
                expanded: true,
                symbols: connections,
                title: "Connectors"
            }
        ]} width={"100%"} height={"600px"} symbolHeight={60} symbolWidth={62} symbolPreview={{ height: 50, width: 50 }} getNodeDefaults={(symbol) => {
            symbol.style.strokeColor = '#757575';
        }} getSymbolInfo={(symbol) => {
            return { fit: true };
        }}/>
          </div>
          <div id="diagram-space" className="sb-mobile-diagram">
            <DiagramComponent id="diagram" ref={diagram => (diagramInstance = diagram)} width={"100%"} height={"100%"} snapSettings={{
            constraints: SnapConstraints.None
        }} nodes={null} connectors={null} //Sets the default values of a node
     getNodeDefaults={(node) => {
            node.style.strokeWidth = 1;
            node.style.strokeColor = '#444';
        }} //Sets the default values of a connector
     getConnectorDefaults={(connector) => {
            if (connector.id !== 'line16') {
                connector.targetDecorator.shape = 'None';
            }
            connector.style = { strokeWidth: 1, strokeColor: '#444' };
            connector.cornerRadius = 5;
            return connector;
        }}/>
          </div>
        </div>
      </div>
    </div>);
}
export default LogicCircuit;