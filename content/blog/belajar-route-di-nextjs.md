---
{
  slug: "belajar-route-di-nextjs",
  title: "belajar-route-di-nextjs",
  image: "/images/image-3.jpg",
  date: "13.01.2022",
  author: "Admin",
  description: "Pelajari cara kerja routing di Next.js, mulai dari static route, nested route, dynamic route hingga route groups pada App Router.",
}
---

# Belajar Route di Next.js

## Apa Itu Routing?

Routing adalah mekanisme yang digunakan untuk menentukan halaman mana yang akan ditampilkan berdasarkan URL yang diakses oleh pengguna.

Salah satu keunggulan Next.js adalah sistem routing berbasis folder (file-system routing). Dengan pendekatan ini, developer tidak perlu membuat konfigurasi route secara manual seperti pada React Router.

## Struktur Routing pada App Router

Misalnya kita memiliki struktur folder berikut:

```txt
app/
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

Maka URL yang dihasilkan adalah:

| Folder               | URL      |
| -------------------- | -------- |
| app/page.tsx         | /        |
| app/about/page.tsx   | /about   |
| app/contact/page.tsx | /contact |

Setiap file `page.tsx` akan otomatis menjadi halaman yang dapat diakses melalui browser.

## Membuat Static Route

Contoh halaman About:

```tsx
export default function AboutPage() {
  return <h1>Halaman About</h1>;
}
```

Simpan pada:

```txt
app/about/page.tsx
```

Kemudian akses:

```txt
http://localhost:3000/about
```

## Membuat Nested Route

Next.js juga mendukung route bertingkat.

Struktur folder:

```txt
app/
└── blog/
    └── page.tsx
```

Akan menghasilkan URL:

```txt
/blog
```

Jika ditambah:

```txt
app/
└── blog/
    └── tutorial/
        └── page.tsx
```

Maka URL yang dihasilkan:

```txt
/blog/tutorial
```

## Dynamic Route

Dynamic Route digunakan ketika URL bersifat dinamis.

Contoh:

```txt
app/
└── blog/
    └── [slug]/
        └── page.tsx
```

File tersebut dapat menangani banyak URL seperti:

```txt
/blog/belajar-nextjs
/blog/latihan-route-nextjs
/blog/tutorial-react
```

Mengambil nilai slug:

```tsx
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <h1>{slug}</h1>;
}
```

## Dynamic Route dengan Markdown

Dynamic route sering digunakan untuk membuat blog.

Contoh struktur:

```txt
content/
└── blog/
    ├── belajar-nextjs.md
    └── latihan-route-nextjs.md
```

Kemudian slug digunakan untuk menentukan file yang akan dibaca:

```ts
const post = await getPost(slug);
```

Dengan cara ini satu halaman dapat menampilkan banyak artikel tanpa perlu membuat file route baru untuk setiap postingan.

## Layout Route

Next.js menyediakan file `layout.tsx` untuk membungkus halaman dalam suatu route.

Contoh:

```txt
app/
└── blog/
    ├── layout.tsx
    └── page.tsx
```

Layout tersebut akan digunakan oleh semua halaman yang berada di dalam folder `blog`.

## Route Groups

Route Group digunakan untuk mengelompokkan route tanpa memengaruhi URL.

Contoh:

```txt
app/
└── (marketing)/
    ├── about/
    └── contact/
```

URL yang dihasilkan tetap:

```txt
/about
/contact
```

Folder `(marketing)` tidak muncul pada URL.

## Kesimpulan

Routing di Next.js menggunakan pendekatan file-system routing sehingga lebih sederhana dan mudah dipahami. Dengan App Router, developer dapat membuat static route, nested route, dynamic route, layout, dan route group hanya melalui struktur folder. Pendekatan ini membuat pengembangan aplikasi menjadi lebih cepat dan terorganisir.
