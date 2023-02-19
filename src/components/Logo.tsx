import {
  Circle,
  Layout,
  Text,
  Node,
  NodeProps,
  Rect,
  Image,
} from "@motion-canvas/2d/lib/components";
import { createRef, makeRef, Reference } from "@motion-canvas/core/lib/utils";
import BlueA from "../../images/path55.png";
import RedC from "../../images/path49.png";
import { all, chain, waitFor } from "@motion-canvas/core/lib/flow";
import { easeInSine } from "@motion-canvas/core/lib/tweening";

function* showText(logoText: Reference<Text>) {
  yield* chain(waitFor(0.128), logoText().text("OACS", 0.7));
}
export interface LogoProps extends NodeProps {}

export class Logo extends Node {
  private readonly background = createRef<Circle>();
  private readonly space = createRef<Circle>();
  private readonly whiteCircle = createRef<Circle>();
  private readonly logo = createRef<Layout>();
  private readonly logoIcon = createRef<Layout>();
  private readonly stars = createRef<Layout>();
  private readonly starsItems = [] as Rect[];
  private readonly logoText = createRef<Text>();
  private readonly blueA = createRef<Image>();
  private readonly redC = createRef<Image>();

  public constructor(props?: LogoProps) {
    super({
      ...props,
    });

    this.add(
      <Layout ref={this.logo}>
        <Text
          ref={this.logoText}
          fill="#fafafa"
          fontFamily={"'Noto Sans TC', sans-serif"}
          scaleY={6}
          scaleX={6}
        />
        <Layout ref={this.logoIcon}>
          <Circle
            ref={this.background}
            width={240}
            height={240}
            scaleY={18}
            scaleX={18}
            fill="#774b9e"
          />
          ,
          <Circle
            ref={this.space}
            width={48}
            height={48}
            scaleX={0}
            scaleY={0}
            fill="#000000"
          />
          ,
          <Layout ref={this.stars} scale={0.1}>
            <Rect
              ref={makeRef(this.starsItems, 1)}
              fill="#FFF"
              scaleY={1}
              scaleX={1}
              rotation={45}
              width={14}
              height={14}
              x={140}
            />
            <Rect
              ref={makeRef(this.starsItems, 0)}
              fill="#FFF"
              scaleY={1}
              scaleX={1}
              rotation={45}
              width={14}
              height={14}
              x={60}
              y={-130}
            />
            <Rect
              ref={makeRef(this.starsItems, 3)}
              fill="#FFF"
              scaleY={1}
              scaleX={1}
              rotation={45}
              width={14}
              height={14}
              x={-140}
              y={50}
            />
            <Rect
              ref={makeRef(this.starsItems, 2)}
              fill="#FFF"
              scaleY={1}
              scaleX={1}
              rotation={45}
              width={14}
              height={14}
              x={-60}
              y={-140}
            />
            <Rect
              ref={makeRef(this.starsItems, 4)}
              fill="#FFF"
              scaleY={1}
              scaleX={1}
              rotation={45}
              width={14}
              height={14}
              x={70}
              y={140}
            />
          </Layout>
          <Circle
            ref={this.whiteCircle}
            width={48}
            height={48}
            scaleX={0}
            scaleY={0}
            fill="#fafafa"
          />
          ,
          <Image ref={this.redC} src={RedC} scale={0} />
          <Image ref={this.blueA} src={BlueA} position={[0, 800]} />
        </Layout>
      </Layout>
    );
  }

  public *IntroAnimation(duration: number) {
    yield* all(
      this.background().scale(2.4, 1.2),
      this.space().scale(7.6, 1.2),
      this.whiteCircle().scale(4.2, 1.2)
    );

    yield* all(
      this.logoIcon().position.x(-400, 1.2),
      this.logoText().position.x(300, 1.2),
      this.logoIcon().scale(0.75, 1.8),
      showText(this.logoText)
    );
    yield* all(this.blueA().position.y(0, 1.42), this.redC().scale(1, 0.72));
    yield* all(this.blueA().scale(1.25, 0.5), this.stars().scale(1, 0.9));
    yield* all(
      this.space().scale(7.8, 1.2).to(8, easeInSine(1.2)).to(7.8, easeInSine(1.2)),
      ...this.starsItems.map((star, index) => {
        const alter = index % 2 === 1 ? -1 : 1;

        const prevPosition = star.position.y();
        return star.position
          .y(prevPosition + alter * 8, easeInSine(1.2))
          .to(prevPosition + alter * -7, easeInSine(1.8));
      })
    );
  }
}
