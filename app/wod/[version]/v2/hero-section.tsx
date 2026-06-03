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
			className={`relative h-[973px] md:h-[860px] flex flex-col items-center p-4 md:p-0 justify-start md:justify-center overflow-hidden bg-[#071117] bg-[url('/images/wod/v2/bg_mobile_primeira_dobra.webp')] md:bg-[url('/images/oro/v10/bg_desktop.webp')] bg-cover bg-center z-0`}
		>
			<style jsx global>{`
				@media (max-width: 767px) {
					.hero-redline-mobile,
					.hero-redline-mobile * {
						font-size: 18px !important;
						line-height: 112% !important;
					}

					.hero-redline-mobile p:nth-of-type(n + 2),
					.hero-redline-mobile p:nth-of-type(n + 2) *,
					.hero-redline-mobile div:nth-of-type(n + 2),
					.hero-redline-mobile div:nth-of-type(n + 2) * {
						font-size: 14px !important;
					}

					.hero-redline-mobile {
						display: flex !important;
						flex-direction: column !important;
						gap: 0px !important;
					}

					.hero-redline-mobile p,
					.hero-redline-mobile div {
						margin: 0 !important;
						padding: 0 !important;
					}

					.hero-redline-mobile br {
						display: none !important;
					}
				}
			`}</style>

			<div
				className={`mx-auto sm:px-4 2md:pt-6 pt-2 relative lg:w-[1080px] w-full flex justify-center md:justify-start`}
			>
				<div className="w-full 2md:max-w-[528px] max-w-[420px] md:max-w-[520px] mt-[90px] md:-mt-[60px] md:ml-[-40px]">
					<div className="mt-[180px] md:mt-0 mb-0 flex justify-start">
						<img
							src="/images/oro/v9/logo_destrave.png"
							alt="Logotipo Destrave"
							className="w-full max-w-[240px] md:max-w-[300px] h-auto object-contain select-none pointer-events-none -ml-[28px]"
						/>
					</div>

					<div className="-mt-20 md:-mt-24">
						<div
							className={`text-[#F4F0E1] font-spectral font-normal text-xs md:text-[14px] leading-none mt-0 text-left`}
						>
							Terça-feira, às 20h | Online e gratuito
						</div>

						<div className="mt-2 mb-2 text-left">
							<h1
								className={`2md:text-[36px] text-[24px] md:text-[36px] leading-[105%] text-left text-[#f4f0e1] font-spectral font-normal uppercase`}
							>
								<span className="block whitespace-nowrap text-[#C0964B]">
									DESTRAVE SUA PROFISSÃO
								</span>

								<span className="block text-[#C0964B]">
									E ALCANCE PROMOÇÃO,
								</span>

								<span className="block text-[#C0964B]">
									RECONHECIMENTO E
								</span>

								<span className="block text-[#C0964B]">
									LIBERDADE EM 1 DIA.
								</span>
							</h1>
						</div>

						<div className="hero-redline-mobile mb-5 mt-2 text-[#D3CAC0] 2md:text-2xl text-base font-extralight font-spectral leading-[160%]">
							{redLine ? (
								redLine
							) : (
								<>
									<p>
										Sem trocar de carreira, sem mais cursos, sem continuar
										travado.
									</p>

									<p>
										Descubra o que está te bloqueando de evoluir — e vire essa
										chave de forma definitiva.
									</p>

									<p>Faça sua inscrição 100% grátis para o evento online:</p>
								</>
							)}
						</div>

						<div className="max-w-lg">
							<LeadCaptureForm
								formName={formName}
								onSubmit={onSubmit}
								submitError={submitError}
								emailInputClassName="w-full h-[58px] border border-[#B7A36D] flex rounded-full flex-1 px-7 py-3 bg-[#0F1717]/80 text-[#F4F0E1]"
								ddiSelectClassName="h-[58px] py-3 pl-10 pr-2 bg-[#0F1717]/80 rounded-l-full border border-[#B7A36D] border-r-[0px] text-[#F4F0E1] focus:outline-none"
								phoneInputClassName="w-full !h-[58px] px-4 py-3 rounded-r-full bg-[#0F1717]/80 text-[#F4F0E1] focus:outline-none border border-[#B7A36D] border-l-[0px]"
								buttonClassName="w-full h-[58px] font-raleway font-extrabold text-[#000000] rounded-full px-6 text-[15px] uppercase tracking-wide transition-all hover:brightness-105 bg-[#C0964B]"
							/>

							<div className="mt-6 flex items-center justify-start md:justify-center gap-2 text-left md:text-center">
								<div className="text-[16px] leading-none">⚠️</div>

								<p className="text-white font-spectral text-[14px] md:text-[16px] font-normal md:font-semibold leading-[140%]">
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