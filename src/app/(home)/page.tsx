import SectionCarousel from "./components/sectionCarousel";

export default function Home() {
  return (
    <div>
      <SectionCarousel title = {"favoritos"} type="favorite"/>
      <SectionCarousel title = {"barbeiro"} type="store" storeType="barbeiros"/>

    </div>
  );
}
