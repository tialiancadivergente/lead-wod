"use client";

import React from "react";
import { Laptop, ChartNoAxesCombined, SquarePen } from "lucide-react";

export default function Biography() {
	return (
		<section className="w-full overflow-hidden bg-[#001313] border-y border-[#007C83]">
			<div className="mx-auto lg:w-[1080px] w-full grid grid-cols-3 md:grid-cols-3 gap-0 md:gap-0 py-[30px] md:py-[40px] px-2 md:px-0 bg-[radial-gradient(50%_90%_at_50%_100%,_rgba(16,68,72,0.75)_0%,_rgba(16,68,72,0.4)_38%,_rgba(16,68,72,0)_100%)]">
				<div className="flex flex-col items-center justify-start text-center min-w-0 px-1">
					<Laptop
						size={46}
						strokeWidth={2.5}
						className="text-[#007C83] mb-3 md:mb-6 w-[38px] h-[38px] md:w-[46px] md:h-[46px]"
					/>

					<p className="font-raleway font-extrabold text-white text-[12px] md:text-[20px] leading-[14px] md:leading-[24px]">
						100% Online
					</p>
				</div>

				<div className="flex flex-col items-center justify-start text-center min-w-0 px-1">
					<ChartNoAxesCombined
						size={46}
						strokeWidth={2.5}
						className="text-[#007C83] mb-3 md:mb-6 w-[38px] h-[38px] md:w-[46px] md:h-[46px]"
					/>

					<p className="font-raleway font-extrabold text-white text-[12px] md:text-[20px] leading-[14px] md:leading-[24px]">
						Do zero ao
						<br />
						avançado
					</p>
				</div>

				<div className="flex flex-col items-center justify-start text-center min-w-0 px-1">
					<SquarePen
						size={46}
						strokeWidth={2.5}
						className="text-[#007C83] mb-3 md:mb-6 w-[38px] h-[38px] md:w-[46px] md:h-[46px]"
					/>

					<p className="font-raleway font-extrabold text-white text-[12px] md:text-[20px] leading-[14px] md:leading-[24px]">
						Aula prática
						<br />
						(passo a passo)
					</p>
				</div>
			</div>
		</section>
	);
}