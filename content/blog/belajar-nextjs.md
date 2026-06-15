# Belajar Next.js

## Apa itu Next.js?

Next.js adalah framework React yang digunakan untuk membangun aplikasi web modern dengan performa tinggi. Framework ini menyediakan berbagai fitur bawaan seperti routing, rendering di server (SSR), static site generation (SSG), API routes, dan optimasi gambar tanpa perlu konfigurasi yang rumit.

## Mengapa Memilih Next.js?

Beberapa alasan mengapa Next.js populer di kalangan developer:

* Mudah dipelajari bagi yang sudah memahami React.
* Mendukung SEO dengan lebih baik dibandingkan aplikasi React biasa.
* Memiliki performa tinggi berkat rendering di server.
* Mendukung pengembangan full-stack melalui API Routes.
* Dokumentasi lengkap dan komunitas yang besar.

## Instalasi

Untuk membuat proyek Next.js baru, jalankan perintah berikut:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

Setelah server berjalan, buka browser dan akses `http://localhost:3000`.

## Struktur Dasar Proyek

Beberapa folder penting dalam proyek Next.js:

* `app/` atau `pages/` : Halaman aplikasi.
* `public/` : Menyimpan file statis seperti gambar.
* `components/` : Komponen yang dapat digunakan kembali.
* `styles/` : File CSS atau styling.

## Membuat Halaman

Contoh halaman sederhana:

```jsx
export default function Home() {
  return (
    <h1>Halo Next.js!</h1>
  );
}
```

File tersebut akan otomatis menjadi halaman utama aplikasi.

## Data Fetching

Next.js menyediakan beberapa cara mengambil data:

* Server Components
* Static Generation (SSG)
* Server Side Rendering (SSR)
* Client-side Fetching

Pemilihan metode bergantung pada kebutuhan performa dan frekuensi perubahan data.

## Kesimpulan

Next.js adalah pilihan yang sangat baik untuk membangun aplikasi web modern. Dengan fitur bawaan yang lengkap, developer dapat fokus pada pengembangan fitur bisnis tanpa perlu menghabiskan banyak waktu untuk konfigurasi proyek. Menguasai React terlebih dahulu akan sangat membantu dalam proses belajar Next.js.
