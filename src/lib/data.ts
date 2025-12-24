export const projects = [
  {
    id: "1",
    slug: "graha-residence-serpong",
    name: "Graha Residence Serpong",
    location: "BSD City, Tangerang Selatan",
    type: "2 Lantai, 3 Kamar Tidur",
    landArea: "90-120 m²",
    priceStart: 1200000000,
    priceDisplay: "Mulai 1,2 Miliar",
    status: "Now Selling" as const,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "Hunian premium di kawasan BSD City dengan konsep modern living dan fasilitas lengkap.",
    features: ["Lokasi strategis", "Akses tol langsung", "Dekat AEON Mall", "Sekolah internasional nearby"],
    unitTypes: [
      { name: "Tipe Azalea", bedrooms: 3, bathrooms: 2, landArea: "90 m²", buildingArea: "70 m²", price: 1200000000 },
      { name: "Tipe Begonia", bedrooms: 3, bathrooms: 3, landArea: "105 m²", buildingArea: "85 m²", price: 1450000000 },
      { name: "Tipe Camellia", bedrooms: 4, bathrooms: 3, landArea: "120 m²", buildingArea: "110 m²", price: 1850000000 },
    ],
    facilities: ["Clubhouse", "Swimming Pool", "Playground", "Jogging Track", "Masjid", "Security 24 Jam"],
  },
  {
    id: "2",
    slug: "graha-residence-bekasi",
    name: "Graha Residence Bekasi",
    location: "Jatisampurna, Bekasi",
    type: "2 Lantai, 4 Kamar Tidur",
    landArea: "105-150 m²",
    priceStart: 950000000,
    priceDisplay: "Mulai 950 Juta",
    status: "New Launching" as const,
    badge: "Promo DP 0%",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Hunian asri dan nyaman di kawasan Jatisampurna dengan harga terjangkau.",
    features: ["Kawasan berkembang", "Akses Jakarta Timur mudah", "Dekat pusat perbelanjaan", "Bebas banjir"],
    unitTypes: [
      { name: "Tipe Dahlia", bedrooms: 3, bathrooms: 2, landArea: "105 m²", buildingArea: "80 m²", price: 950000000 },
      { name: "Tipe Edelweiss", bedrooms: 4, bathrooms: 3, landArea: "130 m²", buildingArea: "100 m²", price: 1150000000 },
    ],
    facilities: ["Clubhouse", "Swimming Pool", "Playground", "Jogging Track", "Masjid", "Security 24 Jam"],
  },
  {
    id: "3",
    slug: "graha-residence-depok",
    name: "Graha Residence Depok",
    location: "Cinere, Depok",
    type: "1-2 Lantai",
    landArea: "72-100 m²",
    priceStart: 750000000,
    priceDisplay: "Mulai 750 Juta",
    status: "Limited Stock" as const,
    badge: undefined,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Hunian strategis di Cinere dengan akses mudah ke Jakarta Selatan.",
    features: ["Dekat Jakarta Selatan", "Akses Tol Cinere", "Kawasan hijau", "Transportasi mudah"],
    unitTypes: [
      { name: "Tipe Gardenia", bedrooms: 2, bathrooms: 1, landArea: "72 m²", buildingArea: "45 m²", price: 750000000 },
      { name: "Tipe Hibiscus", bedrooms: 3, bathrooms: 2, landArea: "84 m²", buildingArea: "65 m²", price: 890000000 },
    ],
    facilities: ["Clubhouse", "Playground", "Jogging Track", "Masjid", "Security 24 Jam"],
  },
  {
    id: "4",
    slug: "graha-residence-bogor",
    name: "Graha Residence Bogor",
    location: "Cibinong, Bogor",
    type: "2 Lantai, 3 Kamar",
    landArea: "84-110 m²",
    priceStart: 680000000,
    priceDisplay: "Mulai 680 Juta",
    status: "Coming Soon" as const,
    badge: undefined,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    description: "Hunian sejuk di Cibinong dengan harga sangat terjangkau.",
    features: ["Udara sejuk", "Harga terjangkau", "Akses tol ke Jakarta", "Pemandangan hijau"],
    unitTypes: [
      { name: "Tipe Jasmine", bedrooms: 2, bathrooms: 1, landArea: "84 m²", buildingArea: "50 m²", price: 680000000 },
      { name: "Tipe Kenanga", bedrooms: 3, bathrooms: 2, landArea: "96 m²", buildingArea: "70 m²", price: 820000000 },
    ],
    facilities: ["Clubhouse", "Swimming Pool", "Playground", "Jogging Track", "Masjid", "Security 24 Jam"],
  },
];

export const facilities = [
  { name: "Clubhouse", description: "Ruang serbaguna untuk acara keluarga", image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&q=80" },
  { name: "Swimming Pool", description: "Kolam renang dewasa dan anak", image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80" },
  { name: "Playground", description: "Taman bermain anak yang aman", image: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&q=80" },
  { name: "Jogging Track", description: "Jalur olahraga sepanjang 1.5km", image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80" },
  { name: "Masjid", description: "Musholla di setiap cluster", image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80" },
  { name: "Security 24 Jam", description: "CCTV dan satpam terlatih", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
];

export const promos = [
  { id: "1", title: "DP 0% untuk Semua Unit", description: "Miliki rumah impian tanpa uang muka!", validUntil: "31 Desember 2025", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" },
  { id: "2", title: "Free BPHTB & AJB", description: "Bebas biaya BPHTB dan Akta Jual Beli.", validUntil: "31 Desember 2025", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" },
  { id: "3", title: "Gratis Biaya KPR", description: "Bebas biaya administrasi dan provisi KPR.", validUntil: "31 Desember 2025", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
  { id: "4", title: "Bonus AC + Water Heater", description: "Bonus AC dan water heater untuk unit tertentu.", validUntil: "31 Desember 2025", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80" },
];

export const testimonials = [
  { name: "Keluarga Bapak Hendra", project: "Graha Residence Serpong", message: "Proses pembelian mudah dan transparan. Serah terima tepat waktu. Recommended!" },
  { name: "Ibu Ratna", project: "Graha Residence Bekasi", message: "Sudah 3 tahun tinggal di sini. Lingkungan aman, tetangga ramah, fasilitas lengkap." },
  { name: "Bapak Agus", project: "Graha Residence Depok", message: "Developer yang amanah. Kualitas bangunan sesuai yang dijanjikan." },
];

export const companyInfo = {
  name: "Graha Residence",
  tagline: "Hunian Impian Keluarga Indonesia",
  phone: "(021) 555-1234",
  whatsapp: "0811-1GRAHA",
  email: "info@graharesidence.co.id",
  address: "Menara Graha Lt. 15, Jl. Sudirman Kav. 52, Jakarta Selatan 12190",
};

export const bankPartners = ["Bank Mandiri", "Bank BCA", "Bank BNI", "Bank BRI", "Bank BTN", "Bank CIMB Niaga", "Bank Danamon", "Bank OCBC NISP", "Bank Panin", "Bank Permata"];
