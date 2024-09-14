import Image from "next/image";
import Banner from '@/public/Banner.png'
import Logo from '@/public/Logo.png'
import Spotlight from '@/public/Spotlight.png'
import Artikel from '@/public/Artikel.png'
import Header from '@/app/Header/logo'
import Link from "next/link"
import Footer from '@/app/Footer/footerhome'

export default function Home() {
  return (
    <div className="flex flex-col bg-white text-black h-screen">
        <div className="bg-[#006769] text-center p-4 text-[#d9d9d9] font-bold text-3xl mb-4">NOMOR DARURAT</div>
        <div className="flex flex-row flex-wrap justify-center bg-white text-black space-y-4 space-x-4 items-center px-2">
            <div className="bg-[#006769] rounded-md p-2 shadow-lg">
                <div className="font-bold text-[#d9d9d9] mb-2">Unit Reaksi Cepat ITB Jatinangor</div>
                <div className="bg-[#40A578] rounded-sm font-bold p-2">
                    <div>Bambang Sutoyo</div>
                    <div>Kemahasiswaan ITB Jatinangor</div>
                    <div>0895370678392</div>
                </div>
            </div>
            <div className="bg-[#006769] rounded-md p-2 shadow-lg">
                <div className="font-bold text-[#d9d9d9] mb-2">Ambulans ITB Jatinangor (24 Jam)</div>
                <div className="flex-col space-y-2">
                    <div className="bg-[#40A578] rounded-sm font-bold p-2">
                        <div>Afif</div>
                        <div>K3L Jatinangor</div>
                        <div>081314967460</div>
                    </div>
                    <div className="bg-[#40A578] rounded-sm font-bold p-2">
                        <div>Cahyadi</div>
                        <div>K3L DKIJ</div>
                        <div>081224176916</div>
                    </div>
                    <div className="bg-[#40A578] rounded-sm font-bold p-2">
                        <div>Dayat</div>
                        <div>K3L ITB Jatinangor</div>
                        <div>081910046144</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4">
            <div className="text-center font-semibold text-[#006769] m-2">
                Pusat kesehatan yang bekerja sama dengan ITB Jatinangor
            </div>
            <div className="flex flex-wrap justify-center items-center">
                <div className="text-[#006769] font-bold border-2 border-[#006769] rounded-2xl px-4 py-2 m-2">Klinik Kesehatan Unpad</div>
                <div className="text-[#006769] font-bold border-2 border-[#006769] rounded-2xl px-4 py-2">Puskesmas Jatinangor</div>
            </div>
        </div>
    </div>
  );
}