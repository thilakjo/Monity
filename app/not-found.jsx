import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-monity-50 text-monity-800">
      <h1
        className="
    text-[7rem] 
    font-extrabold 
    leading-none 
    tracking-tight 
    mb-2 
    bg-gradient-to-r 
    from-green-600  /* Starting color: built-in green-600 */
    via-green-700   /* Middle gradient color: built-in green-700 */
    to-green-800    /* Ending color: built-in green-800 */
    bg-clip-text 
    text-transparent
  "
      >
        404
      </h1>

      <h2 className="text-3xl font-semibold mb-3 text-monity-700">
        Page Not Found
      </h2>
      <p className="max-w-md text-monity-600 mb-6 text-lg">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved. <br />
        Let&apos;s get you back on track.
      </p>
      <Link href="/">
        <Button className="bg-monity-500 hover:bg-monity-600 text-black px-6 py-3 text-sm font-medium rounded-xl shadow-md transition">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
