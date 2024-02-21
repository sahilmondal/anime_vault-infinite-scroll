import Image from "next/image";
import logo from "@/public/logo.svg";
const Navbar = () => {
  return (
    <nav className="max-w-[1200px] mx-auto py-12 2xl:px-0 px-12">
      <Image src={logo} alt="logo" className="w-20 h-20" />
    </nav>
  );
};

export default Navbar;
