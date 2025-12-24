import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calculateKPR(
  hargaProperti: number,
  uangMukaPercent: number,
  tenorTahun: number,
  sukuBunga: number
) {
  const totalUangMuka = (hargaProperti * uangMukaPercent) / 100;
  const totalPinjaman = hargaProperti - totalUangMuka;
  const bungaBulanan = sukuBunga / 100 / 12;
  const jumlahCicilan = tenorTahun * 12;

  const cicilanPerBulan =
    (totalPinjaman * bungaBulanan * Math.pow(1 + bungaBulanan, jumlahCicilan)) /
    (Math.pow(1 + bungaBulanan, jumlahCicilan) - 1);

  return {
    cicilanPerBulan: Math.round(cicilanPerBulan),
    totalUangMuka: Math.round(totalUangMuka),
    totalPinjaman: Math.round(totalPinjaman),
  };
}
