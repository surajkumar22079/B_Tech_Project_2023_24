import * as React from "react";
import { DiagramComponent, SymbolPaletteComponent, SnapConstraints } from "@syncfusion/ej2-react-diagrams";
import img from "../images/img_ind.png"
import img_rev from "../images/img_ind_rev.png"
import rod from "../images/img_lohe_ki_rod.png"
import Vsrc from "../images/AC_voltage_source.png"
import "./LogicCircuit.css";
/**
 * Diagram Logic Circuit sample
 */
/* tslint:disable */

let notData = "M0,50.5 L 23,50.5Z M82,50.5 L 100,50.5Z  M75.5,50.5 L23.5,78.5 L23.5,22.5 L75.5,50.5Z M 79,50.5 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,1Z";
/* tslint:enable */

// defines the shapes connection points

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
let nodes = [
    createNode("Not1", 157, 267, 58, 75, notData, notPort),
];
/* tslint:disable */
let connectors = [
    createConnector("line3", { x: 140, y: 195 }, null, null, "OR1", null, "Or_port3", decorator, null, { content: "C", margin: { left: -20 } }, true),
    createConnector("line11", null, null, "Not3", "OR3", "Not_port2", "Or_port2", null, null, { content: "B'", margin: { left: 0, top: -20 } }),
];
//defines nodes as logic gates on the symbol palette
let items = [

    { id: 'not', shape: { type: "Image", source: img }, ports: notPort },
    { id: 'Vsrc', shape: { type: "Image", source: Vsrc }, ports: notPort },
    { id: 'img_rev', shape: { type: "Image", source: img_rev }, ports: notPort },

    { id: 'rod', shape: { type: "Image", source: rod }  }
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
    }
];

function createNode(id, offsetX, offsetY, height, width, pathData, ports) {
    // update node properties
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
        <div className="control-section">
            <div id="logicCircuit" style={{ width: "100%", height: "600px" }}>
                <div className="sb-mobile-palette-bar">
                    <div id="palette-icon" style={{ float: "right" }} className="e-ddb-icons1 e-toggle-palette" />
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
                    ]} width={"100%"} height={"600px"} symbolHeight={60} symbolWidth={62} symbolPreview={{ height: 60, width: 250 }} getNodeDefaults={(symbol) => {
                        symbol.style.strokeColor = '#757575';
                    }} getSymbolInfo={(symbol) => {
                        return { fit: false };
                    }} />
                </div>
                <div id="diagram-space" className="sb-mobile-diagram">
                    <DiagramComponent id="diagram" ref={diagram => (diagramInstance = diagram)} width={"90%"} height={"100%"} snapSettings={{
                        constraints: SnapConstraints.None
                    }}  //Sets the default values of a node
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
                        }} />
                </div>
            </div>
        </div>
    </div>);
}
export default LogicCircuit;