# Catatan Belajar Next.js

## 1. Routing di Next.js

* Memahami bahwa sistem routing di Next.js berbasis struktur folder pada direktori `app/`.
* Setiap folder merepresentasikan sebuah route.
* Menggunakan **dynamic route** seperti `app/blog/[slug]/page.tsx` untuk membuat halaman yang dinamis berdasarkan parameter URL.
* Memahami bahwa `slug` dapat digunakan sebagai parameter route untuk menampilkan data yang berbeda pada setiap halaman.

## 2. Komponen dan TypeScript

* Belajar membangun komponen menggunakan TypeScript.
* Memahami penggunaan interface untuk mendefinisikan tipe data `props`.
* Mempelajari bagaimana data dari route (`params`) digunakan di dalam komponen halaman.

## 3. Fetch Data dari Headless CMS (Strapi)

* Belajar mengambil data dari API menggunakan `fetch`.
* Menghubungkan aplikasi Next.js dengan Headless CMS Strapi.
* Melakukan normalisasi data hasil API agar sesuai dengan struktur data yang digunakan aplikasi.
* Mengubah konten Markdown menjadi HTML menggunakan library `marked`.

## 4. Rendering di Next.js

* Memahami konsep **Server Components** sebagai default pada App Router.
* Mempelajari perbedaan halaman statis dan halaman dinamis.
* Menggunakan `generateStaticParams()` untuk menghasilkan halaman secara statis (SSG).
* Menggunakan `dynamicParams` untuk mengatur perilaku route dinamis.
* Menggunakan `revalidate` untuk menerapkan **Incremental Static Regeneration (ISR)** sehingga halaman dapat diperbarui secara berkala tanpa perlu melakukan build ulang.

## 5. SEO

* Belajar membuat metadata halaman menggunakan `generateMetadata()`.
* Mengatur title dan description secara dinamis berdasarkan data artikel.

## 6. Hal yang Dipahami

* Struktur folder pada App Router menentukan URL aplikasi.
* `slug` menjadi identitas unik sebuah halaman dan digunakan untuk mengambil data yang sesuai dari API.
* Server Components memungkinkan pengambilan data langsung di server tanpa perlu menggunakan API tambahan di sisi klien.
* ISR (`revalidate`) memberikan keseimbangan antara performa halaman statis dan data yang tetap terbaru.
* Integrasi Next.js dengan Strapi memudahkan pembuatan blog atau CMS berbasis Headless.
