import { ReactNode } from "react"
import Link from "next/link";
type Prop = {
    children: ReactNode
}
const Header = (prop: Prop) => {
    return ( 
        <div>
            {/* header section */}
             <nav className="flex items-center  justify-between px-4 py-2 shadow-sm sticky top-0 bg-amber-800 z-50">
          <div className="flex items-center">
            <div className="font-bold text-white text-xl ml-4">presensi</div>
          </div>
          <div className="text-white font-semibold">
            <ul className="hidden md:flex gap-6 font-sans">
              <Link 
              href="/dashboard"
              className="hover:text-yellow-300 hover:underline cursor-pointer">
                dashboard
              </Link>
              <Link 
              href="/users"
              className="hover:text-yellow-300 hover:underline cursor-pointer">
                pengguna
              </Link>
              <Link 
              href="/kehadiran"
              className="hover:text-yellow-300 hover:underline cursor-pointer">
                kehadiran
              </Link>
              <Link 
              href="/hasil"
              className="hover:text-yellow-300 hover:underline cursor-pointer">
                hasil
              </Link>
            </ul>
          </div>
        </nav>
            {/* end of header section */}
            {/* content section */}
            <div>
                {prop.children}
            </div>
            {/* end of content section */}
        </div>
    )

 }
export default Header;