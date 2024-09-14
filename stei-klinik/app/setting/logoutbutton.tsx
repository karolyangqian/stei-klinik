'use client';
import Navbar from "./navbar"
import { signOut } from "next-auth/react"

const LogoutButton = () => {
  return (
    <Navbar gambar="/logout.png" judul="Keluar" href="" 
      onClick={async () => {
        console.log("Signed out");
        await signOut({callbackUrl: "/"});
        }} />
  )
}

export default LogoutButton