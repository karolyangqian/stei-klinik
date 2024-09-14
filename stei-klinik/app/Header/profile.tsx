import Link from "next/link";
import Image from "next/image";
import UserIcon from '@/public/user.png';
import SettingsIcon from '@/public/gear.png';
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface userprops {
    nama: string | null | undefined;
    imagesrc?: string | StaticImport;
}

const Profile = ({nama, imagesrc}: userprops) => {
    return(
        <a href="/setting">
            <div className="flex items-center space-x-4">
                <p className="text-[#B4B4B4] font-bold text-[20px]">{nama}</p>
                <Image 
                    src={imagesrc ? imagesrc : UserIcon}
                    alt="user" 
                    className="rounded-full"
                    width={40}
                    height={40}/>
            </div>
        </a>
    )
}

export default Profile;