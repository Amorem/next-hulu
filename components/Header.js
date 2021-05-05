import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header>
      <div>
        <HeaderItem />
      </div>
      <h1>Header</h1>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
