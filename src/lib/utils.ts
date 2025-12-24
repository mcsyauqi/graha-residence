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

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(num);
}

export function calculateKPR(
  hargaProperti: number,
  uangMukaPercent: number,
  tenorTahun: number,
  sukuBunga: number
): {
  cicilanPerBulan: number;
  totalUangMuka: number;
  totalPinjaman: number;
  totalBayar: number;
} {
  const totalUangMuka = (hargaProperti * uangMukaPercent) / 100;
  const totalPinjaman = hargaProperti - totalUangMuka;
  const bungaBulanan = sukuBunga / 100 / 12;
  const jumlahCicilan = tenorTahun * 12;

  // Rumus anuitas
  const cicilanPerBulan =
    (totalPinjaman * bungaBulanan * Math.pow(1 + bungaBulanan, jumlahCicilan)) /
    (Math.pow(1 + bungaBulanan, jumlahCicilan) - 1);

  const totalBayar = cicilanPerBulan * jumlahCicilan + totalUangMuka;

  return {
    cicilanPerBulan: Math.round(cicilanPerBulan),
    totalUangMuka: Math.round(totalUangMuka),
    totalPinjaman: Math.round(totalPinjaman),
    totalBayar: Math.round(totalBayar),
  };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}
