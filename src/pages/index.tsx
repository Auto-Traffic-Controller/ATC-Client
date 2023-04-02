import {
  AttackLogSection,
  BlockIPSection,
  Header,
  TrafficSection,
  UsageSection,
} from "components";
import { HomeContent, SectionWrap } from "styles/HomeStyle";

export default function Home() {
  return (
    <>
      <Header />
      <HomeContent>
        <SectionWrap>
          <TrafficSection />
          <UsageSection />
        </SectionWrap>
        <SectionWrap>
          <AttackLogSection />
          <BlockIPSection />
        </SectionWrap>
      </HomeContent>
    </>
  );
}
