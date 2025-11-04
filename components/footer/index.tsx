import { ReactNode } from "react"

type Prop = {
    children: ReactNode
}
const Footer = (prop: Prop) => {
    return (
        <>
            {/* footer section */}
            <footer className="w-full p-5 bg-amber-800 mt-90">
                <h1 className="text-white font bold text-xl text-center">
                    cOPYRIGHT 2025 - MLZ
                </h1>
            </footer>
            {/* end of footer section */}
        </>
    );
}
export default Footer;