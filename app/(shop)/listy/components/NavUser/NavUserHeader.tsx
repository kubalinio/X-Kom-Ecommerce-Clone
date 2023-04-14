import Link from "next/link";

export const NavUserHeader = () => (
    // Prop name user
    <div className="min-h-[52px]">
        <p className="text-[#4d4d4d]">
            Cześć,
            {/* Dynamicznie nazwy when auth */}
        </p>
        <Link href='/logowanie' className="text-lg font-bold lg:mb-3">
            Zaloguj się
        </Link>
    </div>
)