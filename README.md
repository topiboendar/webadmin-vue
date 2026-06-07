# webadmin.io - Vue Version 🚀

Per tanggal 7 Juni 2026 pukul 20:30 WIB, proyek **webadmin.io** resmi bermigrasi ke ekosistem **Vue 3 + Vite**. 

Proyek ini merupakan hasil *refactoring* dari template HTML flat lama menjadi komponen berbasis Vue 3 yang modular. Desain komponen ini dibuat fleksibel agar bisa digunakan secara independen maupun di-*reuse* ke *framework crossover* lain (seperti Laravel) di masa mendatang.

## 🛠️ Tech Stack & Fitur Utama
* **Vue 3 (Composition API)** - Arsitektur komponen reaktif yang modular.
* **Vite** - *Build tool* kencang untuk kenyamanan *development*.
* **Vue Router** - Manajemen rute halaman (`/`, `/login`, `/register`, `/table`).
* **Tailwind CSS Ready** - Kerangka kerja CSS untuk kustomisasi UI selanjutnya.

## 📁 Struktur Proyek
```text
src/
├── assets/       # Gambar dan aset statis
├── components/   # Komponen UI reusable
├── router/       # Konfigurasi Vue Router
├── views/        # Halaman utama (Home, Login, Register, Table)
├── App.vue       # Root component
└── main.js       # Entry point aplikasi

## 🚀 Cara Menjalankan Lokal
```bash
# Instal dependensi
npm install

# Jalankan server development
npm run dev -- --port 8080 --host

# Build untuk production
npm run build
```

created by <3 gunawnjs