// Dummy data SITTA UT - sesuai instruksi Tugas Praktik 2
const upbjjList = [
  "UT-Jakarta", "UT-Bandung", "UT-Surabaya", "UT-Medan", 
  "UT-Makassar", "UT-Denpasar", "UT-Palangkaraya"
];

const kategoriList = [
  "Pendidikan", "Ekonomi", "Teknik", "Hukum", "FISIP"
];

const bahanAjarList = [
  { kode: "MK01", judul: "Pengantar Pendidikan", kategori: "Pendidikan", upbjj: "UT-Jakarta", lokasiRak: "A1-01", qty: 150, safety: 50, harga: 75000, catatanHTML: "<b>Edisi Revisi</b> 2024" },
  { kode: "MK02", judul: "Manajemen Ekonomi", kategori: "Ekonomi", upbjj: "UT-Bandung", lokasiRak: "B2-03", qty: 20, safety: 50, harga: 82000, catatanHTML: "<i>Stok menipis</i>" },
  { kode: "MK03", judul: "Algoritma Pemrograman", kategori: "Teknik", upbjj: "UT-Surabaya", lokasiRak: "C1-05", qty: 0, safety: 30, harga: 95000, catatanHTML: "<span style='color:red'>Segera Re-order</span>" },
  { kode: "MK04", judul: "Hukum Pidana", kategori: "Hukum", upbjj: "UT-Medan", lokasiRak: "A2-02", qty: 80, safety: 40, harga: 70000, catatanHTML: "Stok Aman" },
  { kode: "MK05", judul: "Sosiologi Politik", kategori: "FISIP", upbjj: "UT-Makassar", lokasiRak: "D3-01", qty: 10, safety: 25, harga: 68000, catatanHTML: "Perlu cek" },
  { kode: "MK06", judul: "Statistika Dasar", kategori: "Pendidikan", upbjj: "UT-Jakarta", lokasiRak: "A1-10", qty: 200, safety: 60, harga: 90000, catatanHTML: "<b>Best Seller</b>" },
  { kode: "MK07", judul: "Jaringan Komputer", kategori: "Teknik", upbjj: "UT-Denpasar", lokasiRak: "C2-08", qty: 5, safety: 20, harga: 110000, catatanHTML: "Edisi Baru" },
  { kode: "MK08", judul: "Akuntansi Biaya", kategori: "Ekonomi", upbjj: "UT-Palangkaraya", lokasiRak: "B1-04", qty: 60, safety: 30, harga: 77000, catatanHTML: "Aman" }
];

const paketList = [
  { kodePaket: "PKG01", namaPaket: "Paket Semester 1 Pendidikan", harga: 165000, isi: ["MK01 - Pengantar Pendidikan", "MK06 - Statistika Dasar"] },
  { kodePaket: "PKG02", namaPaket: "Paket Semester 1 Teknik", harga: 205000, isi: ["MK03 - Algoritma Pemrograman", "MK07 - Jaringan Komputer"] },
  { kodePaket: "PKG03", namaPaket: "Paket Ekonomi & Hukum", harga: 152000, isi: ["MK02 - Manajemen Ekonomi", "MK04 - Hukum Pidana"] }
];

const ekspedisiList = ["JNE Reguler", "JNE Express"];