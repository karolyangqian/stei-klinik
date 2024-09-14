'use client';
import Link from "next/link";
import Image from "next/image";

export interface navProps {
    gambar: string;
    judul: string;
    href: string; // Add href prop
    onClick?: () => void;
}

const Navbar = ({ judul, gambar, href, onClick }: navProps) => {
    return (
        <nav className="flex items-center justify-start border-[1px] border-[#006769] rounded-[10px] h-[40px] w-[290px] mt-5 bg-[#ffffff]" style={{ marginLeft: "33px" }}>
            <Link href={href? href : ""} onClick={onClick}> {/* Use the href prop */}
                <div className="flex justify-start items-center pl-3">
                    <Image src={gambar} alt={judul} width={23} height={23} />
                    <p className="text-black pl-3">{judul}</p>
                </div>
            </Link>
        </nav>
    )
}

export default Navbar;
