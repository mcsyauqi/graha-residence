export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  city: string;
  type: string;
  landArea: string;
  priceStart: number;
  priceDisplay: string;
  status: "Now Selling" | "New Launching" | "Limited Stock" | "Coming Soon";
  badge?: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  unitTypes: UnitType[];
  facilities: string[];
  mapUrl?: string;
}

export interface UnitType {
  name: string;
  bedrooms: number;
  bathrooms: number;
  landArea: string;
  buildingArea: string;
  price: number;
  priceDisplay: string;
  floors: number;
  image: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  validUntil: string;
  terms: string[];
  image: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  project: string;
  message: string;
  rating: number;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "graha-residence-serpong",
    name: "Graha Residence Serpong",
    location: "BSD City, Tangerang Selatan",
    city: "Tangerang Selatan",
    type: "2 Lantai, 3 Kamar Tidur",
    landArea: "90-120 m²",
    priceStart: 1200000000,
    priceDisplay: "Mulai 1,2 Miliar",
    status: "Now Selling",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    ],
    description:
      "Graha Residence Serpong adalah hunian premium di kawasan BSD City yang menawarkan konsep modern living dengan fasilitas lengkap. Lokasi strategis dekat dengan pusat bisnis, pendidikan, dan hiburan.",
    features: [
      "Lokasi strategis di BSD City",
      "Akses tol langsung",
      "Dekat AEON Mall & The Breeze",
      "Sekolah internasional nearby",
      "Rumah sakit 10 menit",
      "Stasiun Rawa Buntu 5 menit",
    ],
    unitTypes: [
      {
        name: "Tipe Azalea",
        bedrooms: 3,
        bathrooms: 2,
        landArea: "90 m²",
        buildingArea: "70 m²",
        price: 1200000000,
        priceDisplay: "Rp 1,2 Miliar",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      },
      {
        name: "Tipe Begonia",
        bedrooms: 3,
        bathrooms: 3,
        landArea: "105 m²",
        buildingArea: "85 m²",
        price: 1450000000,
        priceDisplay: "Rp 1,45 Miliar",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
      {
        name: "Tipe Camellia",
        bedrooms: 4,
        bathrooms: 3,
        landArea: "120 m²",
        buildingArea: "110 m²",
        price: 1850000000,
        priceDisplay: "Rp 1,85 Miliar",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
      },
    ],
    facilities: [
      "Clubhouse",
      "Swimming Pool",
      "Children Playground",
      "Jogging Track",
      "Masjid",
      "24 Hour Security",
    ],
  },
  {
    id: "2",
    slug: "graha-residence-bekasi",
    name: "Graha Residence Bekasi",
    location: "Jatisampurna, Bekasi",
    city: "Bekasi",
    type: "2 Lantai, 4 Kamar Tidur",
    landArea: "105-150 m²",
    priceStart: 950000000,
    priceDisplay: "Mulai 950 Juta",
    status: "New Launching",
    badge: "Promo DP 0%",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    description:
      "Graha Residence Bekasi hadir dengan konsep hunian asri dan nyaman di kawasan Jatisampurna. Cocok untuk keluarga muda yang menginginkan kualitas hidup lebih baik dengan harga terjangkau.",
    features: [
      "Kawasan berkembang pesat",
      "Akses ke Jakarta Timur mudah",
      "Dekat Giant & Transmart",
      "Sekolah favorit nearby",
      "Bebas banjir",
      "Udara masih segar",
    ],
    unitTypes: [
      {
        name: "Tipe Dahlia",
        bedrooms: 3,
        bathrooms: 2,
        landArea: "105 m²",
        buildingArea: "80 m²",
        price: 950000000,
        priceDisplay: "Rp 950 Juta",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      },
      {
        name: "Tipe Edelweiss",
        bedrooms: 4,
        bathrooms: 3,
        landArea: "130 m²",
        buildingArea: "100 m²",
        price: 1150000000,
        priceDisplay: "Rp 1,15 Miliar",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      },
      {
        name: "Tipe Frangipani",
        bedrooms: 4,
        bathrooms: 4,
        landArea: "150 m²",
        buildingArea: "130 m²",
        price: 1400000000,
        priceDisplay: "Rp 1,4 Miliar",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
    ],
    facilities: [
      "Clubhouse",
      "Swimming Pool",
      "Children Playground",
      "Jogging Track",
      "Masjid",
      "24 Hour Security",
      "Mini Market",
    ],
  },
  {
    id: "3",
    slug: "graha-residence-depok",
    name: "Graha Residence Depok",
    location: "Cinere, Depok",
    city: "Depok",
    type: "1-2 Lantai",
    landArea: "72-100 m²",
    priceStart: 750000000,
    priceDisplay: "Mulai 750 Juta",
    status: "Limited Stock",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    ],
    description:
      "Graha Residence Depok berlokasi strategis di Cinere dengan akses mudah ke Jakarta Selatan. Hunian nyaman dengan harga terjangkau dan lingkungan asri.",
    features: [
      "Dekat dengan Jakarta Selatan",
      "Akses Tol Cinere",
      "Dekat Cinere Mall",
      "Kawasan hijau dan asri",
      "Sekolah dan RS nearby",
      "Transportasi umum mudah",
    ],
    unitTypes: [
      {
        name: "Tipe Gardenia",
        bedrooms: 2,
        bathrooms: 1,
        landArea: "72 m²",
        buildingArea: "45 m²",
        price: 750000000,
        priceDisplay: "Rp 750 Juta",
        floors: 1,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
      {
        name: "Tipe Hibiscus",
        bedrooms: 3,
        bathrooms: 2,
        landArea: "84 m²",
        buildingArea: "65 m²",
        price: 890000000,
        priceDisplay: "Rp 890 Juta",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      },
      {
        name: "Tipe Iris",
        bedrooms: 3,
        bathrooms: 2,
        landArea: "100 m²",
        buildingArea: "80 m²",
        price: 1050000000,
        priceDisplay: "Rp 1,05 Miliar",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      },
    ],
    facilities: [
      "Clubhouse",
      "Children Playground",
      "Jogging Track",
      "Masjid",
      "24 Hour Security",
    ],
  },
  {
    id: "4",
    slug: "graha-residence-bogor",
    name: "Graha Residence Bogor",
    location: "Cibinong, Bogor",
    city: "Bogor",
    type: "2 Lantai, 3 Kamar",
    landArea: "84-110 m²",
    priceStart: 680000000,
    priceDisplay: "Mulai 680 Juta",
    status: "Coming Soon",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    ],
    description:
      "Graha Residence Bogor akan hadir di kawasan Cibinong yang berkembang pesat. Nikmati udara sejuk khas Bogor dengan harga yang sangat terjangkau.",
    features: [
      "Udara sejuk khas Bogor",
      "Harga paling terjangkau",
      "Kawasan berkembang",
      "Akses ke Jakarta via Tol",
      "Dekat dengan Cibinong Junction",
      "Pemandangan hijau",
    ],
    unitTypes: [
      {
        name: "Tipe Jasmine",
        bedrooms: 2,
        bathrooms: 1,
        landArea: "84 m²",
        buildingArea: "50 m²",
        price: 680000000,
        priceDisplay: "Rp 680 Juta",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
      },
      {
        name: "Tipe Kenanga",
        bedrooms: 3,
        bathrooms: 2,
        landArea: "96 m²",
        buildingArea: "70 m²",
        price: 820000000,
        priceDisplay: "Rp 820 Juta",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      },
      {
        name: "Tipe Lavender",
        bedrooms: 3,
        bathrooms: 2,
        landArea: "110 m²",
        buildingArea: "85 m²",
        price: 950000000,
        priceDisplay: "Rp 950 Juta",
        floors: 2,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      },
    ],
    facilities: [
      "Clubhouse",
      "Swimming Pool",
      "Children Playground",
      "Jogging Track",
      "Masjid",
      "24 Hour Security",
      "Urban Farming Area",
    ],
  },
];

export const facilities: Facility[] = [
  {
    id: "1",
    name: "Clubhouse",
    description:
      "Ruang serbaguna untuk acara keluarga, pertemuan warga, dan berbagai aktivitas komunitas.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=800&q=80",
  },
  {
    id: "2",
    name: "Swimming Pool",
    description:
      "Kolam renang untuk dewasa dan anak dengan desain modern dan air yang selalu terjaga kebersihannya.",
    icon: "Waves",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
  },
  {
    id: "3",
    name: "Children Playground",
    description:
      "Taman bermain yang aman dan nyaman untuk anak-anak dengan berbagai wahana permainan.",
    icon: "Baby",
    image: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&q=80",
  },
  {
    id: "4",
    name: "Jogging Track",
    description:
      "Jalur olahraga sepanjang 1.5km yang dikelilingi taman hijau untuk aktivitas lari dan jalan santai.",
    icon: "Footprints",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80",
  },
  {
    id: "5",
    name: "Masjid",
    description:
      "Musholla dengan kapasitas besar di setiap cluster untuk kemudahan beribadah warga.",
    icon: "Moon",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
  },
  {
    id: "6",
    name: "Security 24 Jam",
    description:
      "Sistem keamanan terintegrasi dengan CCTV dan satpam terlatih yang bertugas 24 jam.",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export const promos: Promo[] = [
  {
    id: "1",
    title: "DP 0% untuk Semua Unit",
    description:
      "Miliki rumah impian tanpa perlu menyiapkan uang muka! Program khusus akhir tahun 2025.",
    validUntil: "31 Desember 2025",
    terms: [
      "Berlaku untuk semua unit di semua proyek",
      "Pengajuan KPR melalui bank rekanan",
      "Tidak dapat digabung dengan promo lain",
      "Kuota terbatas",
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    badge: "Promo Terpopuler",
  },
  {
    id: "2",
    title: "Free BPHTB & AJB",
    description:
      "Bebas biaya BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan) dan Akta Jual Beli.",
    validUntil: "31 Desember 2025",
    terms: [
      "Berlaku untuk pembelian cash dan KPR",
      "Maksimal nilai BPHTB Rp 50 juta",
      "Berlaku untuk akad sebelum 31 Januari 2026",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    id: "3",
    title: "Gratis Biaya KPR",
    description:
      "Bebas biaya administrasi, provisi, dan asuransi KPR untuk pembelian di bulan ini.",
    validUntil: "31 Desember 2025",
    terms: [
      "Berlaku untuk bank rekanan tertentu",
      "Maksimal Rp 25 juta",
      "Wajib akad dalam 60 hari",
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
  },
  {
    id: "4",
    title: "Bonus AC + Water Heater",
    description:
      "Dapatkan bonus AC 1 PK untuk setiap kamar dan water heater untuk pembelian unit tertentu.",
    validUntil: "31 Desember 2025",
    terms: [
      "Berlaku untuk tipe rumah tertentu",
      "AC merk terkenal dengan garansi",
      "Pemasangan gratis",
    ],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Keluarga Bapak Hendra",
    project: "Graha Residence Serpong",
    message:
      "Proses pembelian mudah dan transparan. Serah terima tepat waktu. Recommended!",
    rating: 5,
  },
  {
    id: "2",
    name: "Ibu Ratna",
    project: "Graha Residence Bekasi",
    message:
      "Sudah 3 tahun tinggal di sini. Lingkungan aman, tetangga ramah, fasilitas lengkap.",
    rating: 5,
  },
  {
    id: "3",
    name: "Bapak Agus",
    project: "Graha Residence Depok",
    message:
      "Developer yang amanah. Kualitas bangunan sesuai yang dijanjikan.",
    rating: 5,
  },
];

export const companyInfo = {
  name: "Graha Residence",
  tagline: "Hunian Impian Keluarga Indonesia",
  founded: 2005,
  experience: 19,
  unitsSold: 20000,
  projectsCompleted: 15,
  description:
    "Developer properti terpercaya dengan 19 tahun pengalaman membangun hunian berkualitas untuk keluarga Indonesia.",
  vision:
    "Menjadi developer properti terdepan yang menghadirkan hunian berkualitas, terjangkau, dan berkelanjutan untuk keluarga Indonesia.",
  mission: [
    "Membangun hunian berkualitas dengan standar konstruksi terbaik",
    "Menyediakan skema pembayaran yang fleksibel dan terjangkau",
    "Menciptakan lingkungan yang aman, nyaman, dan asri",
    "Memberikan pelayanan terbaik sebelum dan sesudah penjualan",
  ],
  values: [
    {
      title: "Integritas",
      description: "Menjalankan bisnis dengan jujur dan transparan",
    },
    {
      title: "Kualitas",
      description: "Mengutamakan standar tertinggi dalam setiap proyek",
    },
    {
      title: "Inovasi",
      description: "Terus berinovasi untuk memenuhi kebutuhan pelanggan",
    },
    {
      title: "Kepedulian",
      description: "Peduli terhadap pelanggan dan lingkungan",
    },
  ],
  address: "Menara Graha Lt. 15, Jl. Sudirman Kav. 52, Jakarta Selatan 12190",
  phone: "(021) 555-1234",
  whatsapp: "0811-1GRAHA",
  email: "info@graharesidence.co.id",
  socialMedia: {
    instagram: "https://instagram.com/graharesidence",
    facebook: "https://facebook.com/graharesidence",
    youtube: "https://youtube.com/graharesidence",
  },
};

export const bankPartners = [
  "Bank Mandiri",
  "Bank BCA",
  "Bank BNI",
  "Bank BRI",
  "Bank BTN",
  "Bank CIMB Niaga",
  "Bank Danamon",
  "Bank OCBC NISP",
  "Bank Panin",
  "Bank Permata",
  "Bank Maybank",
  "Bank UOB",
  "Bank DBS",
  "Bank Mega",
  "Bank Sinarmas",
];
