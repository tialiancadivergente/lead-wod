"use client";

import React from "react";
import {
	LeadCaptureForm,
	LeadCaptureSubmitData,
} from "./lead-capture-form-wod";

interface ContainerProps {
	titleRedLine: React.ReactNode | null;
	redLine: React.ReactNode | null;
	formName: string;
	onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
	submitError?: string | null;
}

export default function HeroSection({
	titleRedLine,
	redLine,
	formName,
	onSubmit,
	submitError,
}: ContainerProps) {
	return (
		<section
			id="hero"
			className={`relative h-[970px] md:h-[928px] flex flex-col items-center p-4 md:p-0 justify-start md:justify-center overflow-hidden bg-[#071117] bg-[url('/images/wod/v1/bg_mobile_primeira_dobra.webp')] md:bg-[url('/images/oro/v9/bg_hero_wod_desktop.webp')] bg-cover bg-center z-0`}
		>
			<div
				className={`mx-auto sm:px-4 2md:pt-6 pt-2 relative lg:w-[1080px] w-full flex justify-center md:justify-start`}
			>
				<div className="w-full 2md:max-w-[528px] max-w-[440px] mt-[70px] md:-mt-[100px] md:ml-[-40px]">
					<div className="mt-[180px] md:mt-0 mb-0 flex justify-center md:justify-start">
						<img
							src="/images/oro/v9/logo_destrave.png"
							alt="Logotipo Destrave"
							className="w-full max-w-[240px] md:max-w-[300px] h-auto object-contain select-none pointer-events-none md:-ml-[28px]"
						/>
					</div>

					<div className="-mt-20 md:-mt-24">
						<div className="text-[#F4F0E1] font-spectral font-normal text-xs md:text-[14px] leading-none text-center md:text-left">
							Terça-feira, às 20h | Online e gratuito
						</div>

						<div className="mt-2 mb-2 text-center md:text-left">
							<div
								className={`hidden md:block 2md:text-[36px] md:text-[36px] leading-[120%] text-left text-[#f4f0e1] font-spectral font-normal normal-case [&_*]:normal-case`}
							>
								{titleRedLine}
							</div>

							<h1 className="md:hidden text-[28px] leading-[120%] text-center text-[#C0964B] font-spectral font-bold normal-case">
								<span className="block">Destrave sua profissão</span>
								<span className="block">e alcance promoção,</span>
								<span className="block">reconhecimento e</span>
								<span className="block">liberdade em 1 dia.</span>
							</h1>
						</div>

						<div className="mb-4 mt-1 text-[#D3CAC0] font-extralight font-spectral text-center md:text-left">
							<div className="md:hidden leading-[125%]">
								<p className="text-[20px] font-bold mb-3">
									Sem trocar de carreira, sem mais cursos, sem continuar travado.
								</p>

								<p className="text-[18px] mb-3">
									Descubra o que está te bloqueando de evoluir — e vire essa
									chave de forma definitiva.
								</p>

								<p className="text-[18px] font-bold">
									Faça sua inscrição 100% grátis para o evento online:
								</p>
							</div>

							<div className="hidden md:block 2md:text-2xl text-base">
								{redLine ? (
									redLine
								) : (
									<>
										Descubra como{" "}
										<span className="font-bold text-[#C0964B]">
											AUMENTAR O SEU NÍVEL DE PERMISSÃO
										</span>{" "}
										e melhorar seus resultados nas finanças, nos relacionamentos
										e na saúde.
									</>
								)}
							</div>
						</div>

						<div className="max-w-lg mx-auto md:mx-0">
							<LeadCaptureForm
								formName={formName}
								onSubmit={onSubmit}
								submitError={submitError}
								emailInputClassName="w-full h-[58px] border border-[#B7A36D] flex rounded-full flex-1 px-7 py-3 bg-[#0F1717]/80 text-[#F4F0E1]"
								ddiSelectClassName="h-[58px] py-3 pl-10 pr-2 bg-[#0F1717]/80 rounded-l-full border border-[#B7A36D] border-r-[0px] text-[#F4F0E1] focus:outline-none"
								phoneInputClassName="w-full !h-[58px] px-4 py-3 rounded-r-full bg-[#0F1717]/80 text-[#F4F0E1] focus:outline-none border border-[#B7A36D] border-l-[0px]"
								buttonClassName="w-full h-[58px] font-raleway font-extrabold text-[#000000] rounded-full px-6 text-[15px] uppercase tracking-wide transition-all hover:brightness-105 bg-[#C0964B]"
							/>

							<div className="mt-4 md:mt-8 flex items-center justify-center gap-1 md:gap-2 text-center">
								<div className="text-[16px] leading-none shrink-0">⚠️</div>

								<p className="text-white font-spectral text-[14px] font-bold md:text-[16px] md:font-semibold leading-[140%]">
									Cadastre-se para entrar no Grupo Exclusivo e receber os
									materiais.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}