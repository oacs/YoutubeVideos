import { makeProject } from "@motion-canvas/core/lib";
import "./global.css";
import Intro from "./scenes/intro?scene";

export default makeProject({
  scenes: [Intro],
  background: "#141414",
});
