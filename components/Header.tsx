import Image from "next/image";
import IconMenu from "../public/icon-menu.svg";
import Logo from "../public/logo.svg";
import IconCart from "../public/icon-cart.svg";
import ImageAvatar from "../public/image-avatar.png";

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center mb-8">
      <div className="flex flex-row items-end gap-4">
        <button className="cursor-pointer">
          <Image src={IconMenu} alt="Menu icon" loading="eager" className="w-[16] h-[15]" />
        </button>
        <Image src={Logo} alt="Logo" loading="eager" className="w-[138] h-[20]" />
      </div>
      <div className="flex flex-row items-center gap-4">
        <Image src={IconCart} alt="Cart icon" loading="eager" className="w-[22] h-[20]" />
        <Image src={ImageAvatar} alt="Avatar" loading="eager" className="w-[25] h-[25] rounded-full" />
      </div>
    </header>
  );
}
