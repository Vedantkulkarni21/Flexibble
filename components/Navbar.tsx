
import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constants";

import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";
import {signOut} from 'next-auth/react'
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={116}
            height={43}
            alt='logo'
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        {session?.user ?  (
          <>
          
          <ProfileMenu session={session}/>
            <Link href="C:\Users\Dell\Desktop\nextjs13_flexibble\app\favicon.ico">
                Share work
            </Link>

          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;







// <ProfileMenu session={session}/>
//             {session?.user?.image
//             && (
//             <link href={`/profile/${session?.user?.id}`}>
//               <Image
//                 src={session.user.image}
//                 width={40}
//                 height={40}
//                 className="rounded-full"
//                 alt={session.user.name}
//               />
//             </link>
//             )}


{/* <button type="button" className="text-sm" onClick={signOut}>
              sign out
            </button> */}