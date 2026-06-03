"use client";

import React from "react";

export default function Biography() {
	const handleScrollToHero = () => {
		const hero = document.getElementById("hero");

		if (hero) {
			hero.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<section
			className={`min-h-[1600px] md:min-h-[1630px] md:h-[1630px] flex flex-col items-center pb-14 p-4 md:p-0 justify-start overflow-hidden bg-[#031B22] bg-[url('/images/wod/v1/bg_mobile_segunda_dobra.webp')] md:bg-[url('/images/oro/v9/bg_bio_wod_desktop.webp')] bg-cover bg-top md:bg-center z-0`}
		>
			<div className="mx-auto sm:px-4 lg:w-[1080px] w-full">
				<div className="mt-[420px] md:mt-[140px] flex justify-end w-full">
					<div className="w-full md:max-w-[680px] text-left md:mr-[-180px]">
						<div className="font-spectral font-bold text-[#F4F0E1] text-[22px] leading-[28px] md:text-[34px] md:leading-[50px]">
							<span className="md:hidden">
								O DESTRAVE é o momento em que você encara a verdade que evita há
								anos.
							</span>

							<span className="hidden md:block">
								O DESTRAVE é o momento em que você encara
								<br />a verdade que evita há anos.
							</span>
						</div>

						<div className="font-spectral font-normal text-[#F4F0E1] text-[16px] leading-[22px] md:text-[24px] md:leading-[36px] mt-6 md:mt-10">
							<p>Você vai entender:</p>

							<ul className="list-disc pl-6 mt-3 md:mt-4 flex flex-col gap-1 md:gap-2 text-[16px] leading-[22px] md:text-[24px] md:leading-[34px]">
								<li>Por que você sente culpa quando começa a prosperar;</li>

								<li>Por que tem medo de dar certo e perder o controle;</li>

								<li>
									Por que, mesmo capaz, não sustenta o sucesso
									<br />
									que conquista.
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="flex justify-start mt-[340px] xs:mt-[440px] 2xs:mt-[460px] sm:mt-[540px] md:mt-[380px] w-full">
					<div className="w-full md:max-w-[650px] md:ml-[-40px] text-[#D3CAC0]">
						<div className="font-spectral font-bold text-[#F4F0E1] text-[24px] leading-[135%] md:text-[34px] md:leading-[50px]">
							<span className="md:hidden block max-w-[340px]">
								Vamos descobrir e destravar juntos o que está te impedindo de avançar.
							</span>

							<span className="hidden md:block">
								Vamos descobrir e destravar juntos
								<br />
								o que está te impedindo de avançar.
							</span>
						</div>

						<div className="font-spectral font-normal text-[#F4F0E1] text-[16px] leading-[24px] md:text-[24px] md:leading-[36px] mt-[28px] md:mt-[34px] mb-[16px] md:mb-[38px]">
							Você vai ganhar:
						</div>

						<div className="flex flex-col gap-[12px] md:gap-[27px] w-fit max-w-full">
							<div className="border border-[#B7A36D] rounded-[14px] px-[10px] py-[5px] md:px-[14px] md:py-[8px] font-spectral font-bold text-[#F4F0E1] text-[18px] leading-[22px] md:text-[24px] md:leading-[34px]">
								Um Diagnóstico de Permissão Personalizado
							</div>

							<div className="border border-[#B7A36D] rounded-[14px] px-[10px] py-[5px] md:px-[14px] md:py-[8px] font-spectral font-bold text-[#F4F0E1] text-[18px] leading-[22px] md:text-[24px] md:leading-[34px]">
								Ferramentas de desbloqueio financeiro
							</div>

							<div className="border border-[#B7A36D] rounded-[14px] px-[10px] py-[5px] md:px-[14px] md:py-[8px] font-spectral font-bold text-[#F4F0E1] text-[18px] leading-[22px] md:text-[24px] md:leading-[34px]">
								Análise dos padrões emocionais que controlam sua vida
							</div>

							<div className="border border-[#B7A36D] rounded-[14px] px-[10px] py-[5px] md:px-[14px] md:py-[8px] font-spectral font-bold text-[#F4F0E1] text-[18px] leading-[22px] md:text-[24px] md:leading-[34px]">
								Plano de ação pra destravar resultados reais.
							</div>

							<button
								onClick={handleScrollToHero}
								className="w-full rounded-full bg-[#C0964B] py-[14px] px-6 font-spectral font-extrabold text-[16px] leading-[24px] uppercase text-center text-[#ffff] mt-[10px] hover:brightness-110 transition-all"
							>
								Destravar acesso
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}