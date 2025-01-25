import React, { useRef, useEffect } from "react";
import {
  DiagramComponent,
  SymbolPaletteComponent,
  SnapConstraints,
} from "@syncfusion/ej2-react-diagrams"; 
import img from "./images/img_ind.png";
import img_rev from "./images/img_ind_rev.png";
import rod from "./images/img_lohe_ki_rod.png";
import Vsrc from "./images/AC_voltage_source.png";
import Vmtr from "./images/voltmeter.png";
import ind_small from "./images/img_ind_small.png";
import "./LogicCircuit.css";

function LogicCircuit() {
  var Shapes = ["Resistor", "GatePulse", "Diode", "Thyristor", "Voltmeter", "AC"];
  var ports = ["Resistor_port1", "Resistor_port2", "GatePulse_port1", "GatePulse_port2", "Diode_port1", "Diode_port2", "Thyristor_port1", "Thyristor_port2", "Thyristor_port3", "Voltmeter_port1", "Voltmeter_port2", "AC_Port1", "AC_port2"];
  var connector = ["Link1", "Link2"];

  const diagramInstance = useRef(null);
  function showAlert() {
    if (!diagramInstance.current) {
      alert("Diagram working area is empty! Please draw the circuit first.");
    } else {
      const diagram = diagramInstance.current;
      const connectors = diagram.connectors;
      console.log(diagram.connectors);

      let correctConnections = true; // Assume all connections are correct by default

      // console.log(connectors.length);

      if (connectors.length === 0) {
        correctConnections = false;
      }
      else {
        for (let i = 0; i < connectors.length; i++) {
          const connector = connectors[i];
          const sourcePort = connector.sourcePortID;
          const targetPort = connector.targetPortID;
          // console.log(sourcePort);
          // console.log(targetPort);
          // Implement your connection logic here
          // Check if the connections are correct based on your criteria
          if (
            !(
              (sourcePort === "Vsrc_port1" && targetPort === "imgrev_port1") ||
              (sourcePort === "imgrev_port1" && targetPort === "Vsrc_port1") ||
              (sourcePort === "Vsrc_port2" && targetPort === "imgrev_port2") ||
              (sourcePort === "imgrev_port2" && targetPort === "Vsrc_port2") ||
              (sourcePort === "inds_port1" && targetPort === "Vmtr_port1") ||
              (sourcePort === "Vmtr_port1" && targetPort === "inds_port1") ||
              (sourcePort === "inds_port2" && targetPort === "Vmtr_port2") ||
              (sourcePort === "Vmtr_port2" && targetPort === "inds_port2")
            )
          ) {
            correctConnections = false;
            break; // Exit the loop if an incorrect connection is found
          }
        }
      }

      if (correctConnections) {
        alert("Correct Connections");
      } else {
        alert("Wrong Connections");
      }
    }
  }




  useEffect(() => {
    const checkButton = document.getElementById("check-button");
    if (checkButton) {
      checkButton.addEventListener("click", showAlert);
    }
  }, []);



  
  
  const items = [

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
      id: "Vsrc",
      shape: {
        type: "Image",
        source: Vsrc,
        style: { strokeColor: "transparent" },
      },
      ports: [
        {
          name: "Vsrc_port1",
          offset: { x: 0.01, y: 0.5 },
          visibility: true,
          fillColor: "red",
          size: 12,
        },
        {
          name: "Vsrc_port2",
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

  const connections = [

    {
      id: "Link1",
      type: "Orthogonal",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: "None" },
      style: { strokeWidth: 1, strokeColor: "#757575" },
    },
    {
      id: "Link2",
      type: "Straight",
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      cornerRadius: 5,
      targetDecorator: { shape: "None" },
      style: { strokeWidth: 1, strokeColor: "#757575" },
    },
  ];

  function createNode(id, offsetX, offsetY, height, width, pathData, ports) {
    let node = {};
    node.id = id;
    node.offsetX = offsetX;
    node.offsetY = offsetY;
    node.height = height;
    node.width = width;
    node.shape = { type: "Path", data: pathData };
    node.ports = ports;
    return node;
  }

  function createConnector(id, sourcePoint, targetPoint, sourceID, targetID, sourcePortID, targetPortID, sourceDecorator, targetDecorator, annotation, segments, isStraight) {
    let connector = {};
    connector.id = id;
    connector.sourcePoint = sourcePoint;
    connector.targetPoint = targetPoint;
    connector.sourceID = sourceID;
    connector.targetID = targetID;
    connector.type = isStraight ? "Straight" : "Orthogonal";
    connector.sourcePortID = sourcePortID;
    connector.targetPortID = targetPortID;
    connector.annotations = [
      {
        content: annotation.content,
        offset: 0,
        margin: {
          left: annotation.margin && annotation.margin.left ? annotation.margin.left : 0,
          top: annotation.margin && annotation.margin.top ? annotation.margin.top : 0,
        },
        style: {
          fontFamily: "Segoe UI",
          textWrapping: "NoWrap",
          fontSize: 14,
        },
      },
    ];
    connector.sourceDecorator = sourceDecorator;
    connector.targetDecorator = targetDecorator;
    if (segments) {
      connector.segments = [
        { length: 100, direction: "Right", type: "Orthogonal" },
      ];
    }
    return connector;
  }

  useEffect(() => {
    diagramInstance.current.fitToPage();
    addEvents();
  }, []);

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
      } else {
        paletteSpace.classList.remove("sb-mobile-palette-open");
      }
    }
  }

  return (
    <div className="control-pane">
      <div className="control-section">
        <div id="logicCircuit" style={{ width: "100%", height: "600px" }}>
          <div className="sb-mobile-palette-bar">
            <div id="palette-icon" style={{ float: "right" }} className="e-ddb-icons1 e-toggle-palette" />
          </div>
          <div id="palette-space" className="sb-mobile-palette">
            <SymbolPaletteComponent
              id="symbolpalette"
              expandMode="Multiple"
              palettes={[
                {
                  id: "flow",
                  expanded: true,
                  symbols: items,
                  title: "Components",
                },
                {
                  id: "connectors",
                  expanded: true,
                  symbols: connections,
                  title: "Connectors",
                },
              ]}
              width={"100%"}
              height={"600px"}
              symbolHeight={60}
              symbolWidth={62}
              symbolPreview={{ height: 60, width: 222 }}
              getNodeDefaults={(symbol) => {
                symbol.style.strokeColor = "#757575";
              }}
              getSymbolInfo={(symbol) => {
                return { fit: false };
              }}
            />
          </div>
          <div id="diagram-space" className="sb-mobile-diagram">
            <DiagramComponent
              id="diagram"
              ref={diagramInstance}
              width={"100%"}
              height={"100%"}
              snapSettings={{
                constraints: SnapConstraints.None,
              }}
              getNodeDefaults={(node) => {
                node.style.strokeWidth = 0;
                node.style.strokeColor = "#444";
              }}
              getConnectorDefaults={(connector) => {
                if (connector.id !== "line16") {
                  connector.targetDecorator.shape = "None";
                }
                connector.style = { strokeWidth: 2.5, strokeColor: "#444" };
                connector.cornerRadius = 5;
                return connector;
              }}
            />
          </div>
        </div>
        <button id="check-button" onClick={showAlert}>
          Check Connections
        </button>
      </div>
    </div>
  );
}

export default LogicCircuit;