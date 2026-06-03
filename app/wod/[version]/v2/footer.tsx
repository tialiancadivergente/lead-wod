import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="bg-[#001017] py-[36px] px-4">
			<footer className="mx-auto lg:w-[1080px] w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">

				<div className="order-1">
					<Image
						src="/images/oro/v9/o-destrave-logotipo.webp"
						alt="Logotipo O Destrave"
						width={280}
						height={90}
						priority
						className="object-contain"
					/>
				</div>

				<div className="order-2">
					<p className="font-spectral font-bold text-white text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-center whitespace-nowrap">
						O Destrave 2025 © Todos os Direitos Reservados.
					</p>
				</div>

				<div className="order-3 font-spectral font-normal text-white text-[16px] leading-[28px] text-center md:text-right flex flex-col">
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