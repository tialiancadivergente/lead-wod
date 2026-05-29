"use client";

import React from "react";

export default function BiographyElton() {
	return (
		<section
			className={`min-h-[922px] md:min-h-[762px] flex flex-col items-center pb-14 p-4 md:p-0 justify-start overflow-hidden bg-[#000000] bg-[url('/images/oro/v10/bg_segunda_dobra_mobile.webp')] md:bg-[url('/images/oro/v10/bg_segunda_dobra_desktop.webp')] bg-cover bg-top md:bg-center bg-no-repeat z-0`}
		>
			<div className="mx-auto lg:w-[1080px] w-full">
				<div className="flex flex-col items-center pt-[40px] md:pt-[60px]">
					<h2 className="font-spectral font-bold text-[#F4F0E1] text-[18px] leading-[135%] md:text-[34px] md:leading-[50px] text-center mt-[340px] md:mt-0">
						O que você irá aprender
						<br />
						<span className="text-[#C0964B]">n’O DESTRAVE</span>
					</h2>

					<div className="flex flex-col md:flex-row items-start justify-end gap-[30px] md:gap-[60px] w-full">
						<div className="w-full md:max-w-[520px] md:ml-auto md:mr-[-80px] mt-[340px] -translate-y-[280px] md:translate-y-0 md:mt-[70px]">
							<h3 className="font-spectral font-bold text-[#F4F0E1] text-[18px] leading-[24px] md:text-[28px] md:leading-[36px] mb-[24px]">
								A encarar a verdade
								<br />
								que evita há anos
							</h3>

							<div className="flex flex-col gap-[10px]">
								<div className="w-full min-h-[36px] md:min-h-[48px] rounded-[10px] border border-[#C0964B] bg-[#03110C]/80 px-4 py-3 flex items-center gap-3">
									<div className="w-[20px] h-[20px] rounded-full border border-[#C0964B] flex items-center justify-center text-[#C0964B] text-[12px] shrink-0">
										✓
									</div>

									<p className="font-spectral font-normal text-[#F4F0E1] text-[14px] md:text-[14px] leading-[140%]">
										Por que sente{" "}
										<span className="font-bold">
											culpa quando começa a prosperar?
										</span>
									</p>
								</div>

								<div className="w-full min-h-[36px] md:min-h-[48px] rounded-[10px] border border-[#C0964B] bg-[#03110C]/80 px-4 py-3 flex items-center gap-3">
									<div className="w-[20px] h-[20px] rounded-full border border-[#C0964B] flex items-center justify-center text-[#C0964B] text-[12px] shrink-0">
										✓
									</div>

									<p className="font-spectral font-normal text-[#F4F0E1] text-[14px] md:text-[14px] leading-[140%]">
										Por que tem{" "}
										<span className="font-bold">
											medo de dar certo e perder o controle?
										</span>
									</p>
								</div>

								<div className="w-full min-h-[36px] md:min-h-[48px] rounded-[10px] border border-[#C0964B] bg-[#03110C]/80 px-4 py-3 flex items-center gap-3">
									<div className="w-[20px] h-[20px] rounded-full border border-[#C0964B] flex items-center justify-center text-[#C0964B] text-[12px] shrink-0">
										✓
									</div>

									<p className="font-spectral font-normal text-[#F4F0E1] text-[14px] md:text-[14px] leading-[140%]">
										Por que, mesmo sendo capaz,{" "}
										<span className="font-bold">
											não sustenta o sucesso que conquista?
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}