import { Footer } from "@/components/ui/footer";
import logoImage from "@/pictures/logo_prepped.png";

export default function SiteFooter() {
  return <Footer className="mt-2" logoSrc={logoImage.src} companyName="KPDF" />;
}

