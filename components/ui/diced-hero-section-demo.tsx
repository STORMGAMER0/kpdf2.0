import { DicedHeroSection } from "@/components/ui/diced-hero-section";

export function DemoLTR() {
  return (
    <DicedHeroSection
      topText="Our Mission"
      mainText="Inspire. Educate. Mentor."
      subMainText="Our mission is to inspire, educate and mentor the youth of West Africa, equipping them with the skills and knowledge needed to excel in leadership, employability, and entrepreneurship. We are committed to nurturing a generation of confident and capable individuals who are poised to make a positive impact in their communities and beyond."
      buttonText="Support the Mission"
      slides={[
        {
          title: "Mentorship",
          image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1974&auto=format&fit=crop",
        },
        {
          title: "Leadership",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: "Employability",
          image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: "Entrepreneurship",
          image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
        },
      ]}
      topTextStyle={{ color: "var(--diced-hero-section-top-text)", fontSize: "0.9rem" }}
      mainTextStyle={{
        fontSize: "3.2rem",
        gradient:
          "linear-gradient(45deg, var(--diced-hero-section-main-gradient-from), var(--diced-hero-section-main-gradient-to))",
      }}
      subMainTextStyle={{ color: "var(--diced-hero-section-sub-text)", fontSize: "1.02rem" }}
      buttonStyle={{
        backgroundColor: "var(--diced-hero-section-button-bg)",
        color: "var(--diced-hero-section-button-fg)",
        borderRadius: "2rem",
        hoverColor: "var(--diced-hero-section-button-hover-bg)",
        hoverForeground: "var(--diced-hero-section-button-hover-fg)",
      }}
      separatorColor="var(--diced-hero-section-separator)"
      mobileBreakpoint={1000}
      fontFamily="inherit"
      componentBorderRadius="1.5rem"
      backgroundColor="rgba(10,61,107,0.92)"
      maxContentWidth="100%"
    />
  );
}
