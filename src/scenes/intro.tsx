import { View2D } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef } from "@motion-canvas/core/lib/utils";
import { Logo } from "../components/Logo";

export default makeScene2D(function* (view: View2D) {
  const logoRef = createRef<Logo>();
  view.add(<Logo ref={logoRef} />);
  yield* logoRef().IntroAnimation(0);
});
