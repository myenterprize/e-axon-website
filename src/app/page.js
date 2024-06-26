import Banner from "@/Components/banner/Banner";
import BridgingStrategy from "@/Components/bridging-strategy/BridgingStrategy";
import CallToAction from "@/Components/call-to-action/CallToAction";
import CounterSection from "@/Components/counter-section/CounterSection";
import FooterSection from "@/Components/footer/Footer";
import Method from "@/Components/how-we-do-it/Method";
import Menu from "@/Components/menu/Menu";
import Partnership from "@/Components/partnership/Partnership";
import RightChoice from "@/Components/right-choice/RightChoice";
import TrustedBusiness from "@/Components/trusted-business/TrustedBusiness";
import WhatWeDo from "@/Components/what-we-do/WhatWeDo";

export default function Page() {
  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Menu />
      <Banner />
      <TrustedBusiness />
      <BridgingStrategy />
      <RightChoice />
      <CounterSection />
      <Partnership />
      <WhatWeDo />
      <Method/>
      <CallToAction />
      <FooterSection />
    </div>
  )
}
