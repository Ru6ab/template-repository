import Link from "next/link";

export default function(){
    return <><h1 className="text-green-500 bg-white">contact nested in about</h1>

    <Link href='/about' className="text-white">go to about</Link>
    </>

}