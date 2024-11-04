const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock canvas context
const mockCtx = {
  clearRect: jest.fn(),
  fillRect: jest.fn(),
  fillStyle: "",
  font: "",
  fillText: jest.fn(),
  beginPath: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  stroke: jest.fn(),
};

// Mock HTMLCanvasElement.prototype.getContext to return mockCtx
global.HTMLCanvasElement.prototype.getContext = () => mockCtx;

// Mock requestAnimationFrame
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
  return 0;
};

// Suppress console.log during tests
global.console.log = jest.fn();

const { JSDOM } = require("jsdom");

// Set up DOM environment
const dom = new JSDOM(`<!DOCTYPE html><body></body>`, {
  runScripts: "outside-only",
});
global.window = dom.window;
global.document = dom.window.document;

// Create and set up mock canvas
const mockCanvas = document.createElement("canvas");
mockCanvas.id = "gameCanvas";
mockCanvas.width = 800;
mockCanvas.height = 600;

// Mock getContext to return mockCtx
mockCanvas.getContext = jest.fn(() => mockCtx);

// Append canvas to the document body
document.body.appendChild(mockCanvas);

// Mock requestAnimationFrame
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);

// Disable console.log
jest.spyOn(console, "log").mockImplementation(() => {});
