import Image from "next/image";
import logo from '@/../public/images/rml_v2.png';
import { cn } from "@/lib/utils";

function Logo({className}: {className: string}) {
  return (
   <div className="flex flex-col items-center p-2">
    <Image
    src={logo}
    alt="Render Metrics Labs Logo"
    width={500}
    height={500}
    className={cn(className)}
    />
   </div>
  )
}

export default Logo