import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="bg-[#001017] py-[36px] px-4">
			<footer className="mx-auto lg:w-[1080px] w-full flex flex-col items-center justify-center text-center">
				<Image
					src="/images/oro/v9/o-destrave-logotipo.webp"
					alt="Logotipo O Destrave"
					width={260}
					height={90}
					priority
					className="object-contain mb-[28px]"
				/>

				<p className="font-spectral font-bold text-white text-[16px] leading-[24px] mb-[28px]">
					O Destrave 2025 © Todos os Direitos Reservados.
				</p>

				<div className="font-spectral font-normal text-white text-[16px] leading-[28px] flex flex-col items-center">
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