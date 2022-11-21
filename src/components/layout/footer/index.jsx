import FooterLogo from "./components/FooterLogo";
import FooterNav from "./components/FooterNav";
import SocialLinks from "./components/SocialLinks";
const Footer = () => {
  return (
    <footer className="p-3 shadow md:px-6 md:py-6 w-full">
      <hr className="my-2 border-gray-600 sm:mx-auto  lg:my-3" />
      <div className="md:flex md:items-center md:justify-between pt-1 text-center">
        <FooterLogo />
        <SocialLinks />
        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;
