import Link from "next/link";
import { Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <div className="bg-gray-900 text-gray-300 py-5 mt-20">
            <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-between items-center">
                <Text className="text-sm mb-4 lg:mb-0 lg:mr-8">&copy; 2024 Develop8 Studio. All rights reserved.</Text>
                <div className="flex flex-wrap lg:flex-nowrap gap-5">
                    <Link href="/" className="hover:text-white">Terms of Service</Link>
                    <Link href="/" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/contact" className="hover:text-white">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}