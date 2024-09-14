// 'use client';

import Navbar from "./navbar";
import Header from "../Header/logo";
import Pita from "../Header/pita";
import { signOut } from "next-auth/react";
import { loginIsRequiredServer } from "@/lib/auth";
import LogoutButton from "./logoutbutton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Image from "next/image";
import UserIcon from '@/public/user.png';

export default async function Setting () {
  await loginIsRequiredServer();
  const session = await getServerSession(authOptions);
  console.log("Page session", session);
  return (
      <div className=" bg-[#ffffff] h-screen w-full">
      <Header/>
      <Pita judul="Profil dan Pengaturan"/>
        <div className="flex ">
          <div className="h-[370px] w-[350px] bg-[#DAEED5] " style={{marginTop:"220px", marginLeft:"800px"}}>
            <div className="pt-2">
              <div className="flex justify-center items-center h-[50px] w-[290px] bg-[#40A578] mx-8 mt-14">
                <p className="font-bold text-center">
                  {session?.user?.name}
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <Navbar gambar="/icon_chat lines_.png" judul="Chat Dokter" href="/chat-dokter"/>
                <Navbar gambar="/icon_password_.png" judul="Ganti Password" href="/gantipassword" />
                <LogoutButton/>
              </div>
            </div>
          </div>
          <div
            className="h-[100px] w-[100px] bg-[#F4F3F3] rounded-full absolute top-0"
            style={{ marginLeft: "925px", marginTop:"160px"}}
          >
            <Image
              className="rounded-full"
              src={session?.user?.image ? session.user.image : UserIcon}
              alt={"Profile Picture"}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
  );
}
