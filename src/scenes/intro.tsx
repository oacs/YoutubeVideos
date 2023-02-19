import {
  Circle,
  Layout,
  Node,
  View2D,
  Text,
  Image,
  Rect,
} from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, chain, waitFor } from "@motion-canvas/core/lib/flow";
import {
  createRef,
  makeRef,
  Reference,
  useRandom,
} from "@motion-canvas/core/lib/utils";
import BlueA from "../../images/path55.png";
import RedC from "../../images/path49.png";
import { easeInSine } from "@motion-canvas/core/lib/tweening";
import { Logo } from "../components/Logo";

export default makeScene2D(function* (view: View2D) {
  const logoRef = createRef<Logo>();
  view.add(<Logo ref={logoRef} />);
  yield * logoRef().IntroAnimation(0);
});
