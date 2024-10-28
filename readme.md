# Tugas Praktikum Pemrograman Mobile

Nama: Panky Bintang Pradana Yosua <br>
NIM: H1D022077 <br>
Shift Baru: F <br>
Shift KRS: D <br>

## Snapshot Halaman Utama

![Halaman Utama](./snapshots/homepage.png)

## Keterangan

### 1. Memilih Komponen

Untuk menambahkan komnponen di Halaman Ionic, kita perlu mengunjungi dokumentasi resmi Ionic. Berikut adalah link nya [dokumentasi Ionic](https://ionicframework.com/docs/components)

Teknologi yang digunakan pada aplikasi ini adalah Ionic dengan React untuk menyusun UI. Komponen-komponen yang saya gunakan untuk ditambahkan:

- [Card](https://ionicframework.com/docs/api/card) https://ionicframework.com/docs/api/card
- [List](https://ionicframework.com/docs/api/list) https://ionicframework.com/docs/api/list
- [Icon](https://ionicframework.com/docs/api/icon) https://ionicframework.com/docs/api/icon

Misal, untuk menambahkan komponen Card, copy kode yang dimaksud ke bagian kode yang akan ditambahkan. Karena aplikasi ini menggunakan Ionic dan React, maka kode yang dicopy perlu dipastikan berupa kode react. Caranya dengan memilih tab React pada bagian atas preview komponen.

![Ionic Card Component](./snapshots/1.%20dokumentasi%20ionic%20component%20card.png)

### 2. Meletakkan kode di dalam struktur kode yang dimaksud

Setelah menyalin/copy, letakkan kode pada bagian yang akan ditambahkan. Pada aplikasi ini, card diletakkan di Tab1.tsx bagian atas setelah `<IonHeader>`. Setelah itu, modifikasi hal hal yang perlu dimodifikasi.

![Put on what u mean](./snapshots/2.%20letakkan%20pada%20kode.png)

### 3. Mengubah warna

Warna juga dapat diubah dengan `css`. Aplikasi ini warna background-nya diubah pada file `src\theme\variables.css` menjadi putih secara global.

```css
/* For information on how to create your own theme, please see:
http://ionicframework.com/docs/theming/ */
:root {
  --ion-background-color: #ffffff;
}
```

Lalu, <i>comment</i> kode pada `src\App.tsx` supaya dark mode tidak berdampak pada aplikasi.

```typescript
/* import '@ionic/react/css/palettes/dark.always.css'; */
// import "@ionic/react/css/palettes/dark.class.css";
// import "@ionic/react/css/palettes/dark.system.css";
```
