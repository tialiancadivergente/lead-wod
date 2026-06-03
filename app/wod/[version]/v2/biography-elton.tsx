"use client";

import React from "react";

export default function BiographyElton() {
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
			className={`min-h-[820px] md:min-h-[850px] flex flex-col items-center pb-0 p-4 md:p-0 justify-start overflow-hidden bg-[#000000] bg-[url('/images/wod/v2/bg_mobile_sugunda_dobra.webp')] md:bg-[url('/images/oro/v10/bg_segunda_dobra_desktop.webp')] bg-[length:125%_auto] md:bg-cover bg-top md:bg-center bg-no-repeat z-0`}
		>
			<div className="mx-auto lg:w-[1080px] w-full">
				<div className="flex flex-col items-center pt-[40px] md:pt-[60px]">
					<h2 className="md:hidden font-spectral font-bold uppercase text-[20px] leading-[125%] text-center mt-[270px]">
						<span className="block text-[#F4F0E1] whitespace-nowrap">
							O QUE VOCÊ IRÁ APRENDER
						</span>

						<span className="block text-[#C0964B]">
							N’O DESTRAVE
						</span>
					</h2>

					<h2 className="hidden md:block font-spectral font-bold uppercase text-[#F4F0E1] md:text-[34px] md:leading-[50px] text-center md:mt-0">
						O QUE VOCÊ IRÁ APRENDER
						<br />
						<span className="text-[#C0964B]">N’O DESTRAVE</span>
					</h2>

					<div className="flex flex-col md:flex-row items-start justify-end gap-[30px] md:gap-[60px] w-full">
						<div className="w-full md:max-w-[520px] md:ml-auto md:mr-[-80px] mt-[30px] md:mt-[70px]">
							<h3 className="font-spectral font-bold text-[#F4F0E1] text-[18px] md:text-[28px] leading-[24px] md:leading-[36px] mb-[24px]">
								A encarar a verdade
								<br />
								que evita há anos
							</h3>

							<div className="flex flex-col gap-[10px]">
								<div className="w-full min-h-[36px] md:min-h-[48px] rounded-[14px] border border-[#C0964B] bg-[#03110C]/80 px-4 py-4 flex items-center gap-4">
									<div className="w-[34px] h-[34px] rounded-full bg-[#C0964B] flex items-center justify-center shrink-0">
										<div className="text-[#03110C] text-[18px] font-bold leading-none">
											✓
										</div>
									</div>

									<p className="font-spectral font-normal text-[#F4F0E1] text-[18px] leading-[140%]">
										Por que sente{" "}
										<span className="font-bold">
											culpa quando começa a prosperar?
										</span>
									</p>
								</div>

								<div className="w-full min-h-[36px] md:min-h-[48px] rounded-[14px] border border-[#C0964B] bg-[#03110C]/80 px-4 py-4 flex items-center gap-4">
									<div className="w-[34px] h-[34px] rounded-full bg-[#C0964B] flex items-center justify-center shrink-0">
										<div className="text-[#03110C] text-[18px] font-bold leading-none">
											✓
										</div>
									</div>

									<p className="font-spectral font-normal text-[#F4F0E1] text-[18px] leading-[140%]">
										Por que tem{" "}
										<span className="font-bold">
											medo de dar certo e perder o controle?
										</span>
									</p>
								</div>

								<div className="w-full min-h-[36px] md:min-h-[48px] rounded-[14px] border border-[#C0964B] bg-[#03110C]/80 px-4 py-4 flex items-center gap-4">
									<div className="w-[34px] h-[34px] rounded-full bg-[#C0964B] flex items-center justify-center shrink-0">
										<div className="text-[#03110C] text-[18px] font-bold leading-none">
											✓
										</div>
									</div>

									<p className="font-spectral font-normal text-[#F4F0E1] text-[18px] leading-[140%]">
										Por que, mesmo sendo capaz,{" "}
										<span className="font-bold">
											não sustenta o sucesso que conquista?
										</span>
									</p>
								</div>
							</div>

							<button
								onClick={handleScrollToHero}
								className="w-full h-[56px] md:h-[60px] mt-[24px] mb-[24px] md:mb-[40px] rounded-full bg-[#C89E50] font-spectral font-bold text-white text-[20px] md:text-[24px] uppercase transition-all hover:brightness-110"
							>
								DESTRAVAR ACESSO
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}