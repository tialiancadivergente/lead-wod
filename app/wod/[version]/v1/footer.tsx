import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="bg-[#001016] py-[45px] md:py-[50px] px-4">
			<footer className="mx-auto lg:w-[1080px] w-full flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0">

				<div className="order-1 md:order-1">
					<Image
						src="/images/oro/v9/o-destrave-logotipo.webp"
						alt="Logotipo O Destrave"
						width={320}
						height={106}
						priority
						className="object-contain w-[285px] md:w-[320px] h-auto"
					/>
				</div>

				<div className="order-2 md:order-2">
					<p className="font-spectral font-bold text-[16px] md:text-[14px] leading-[24px] md:leading-[20px] text-white text-center">
						O Destrave 2025 © Todos os Direitos Reservados.
					</p>
				</div>

				<div className="order-3 md:order-3 font-spectral font-normal text-[14px] leading-[20px] text-white text-center md:text-right flex flex-col gap-1">
					<Link
						href="https://rc.odestrave.com.br/politica-de-privacidade"
						className="hover:opacity-80 transition-opacity"
					>
						Política de Privacidade
					</Link>

					<Link
						href="https://rc.odestrave.com.br/termos-de-uso"
						className="hover:opacity-80 transition-opacity"
					>
						Termos de uso
					</Link>
				</div>

			</footer>
		</div>
	);
}