Tentu, ini adalah versi README.md yang telah dirapikan, terstruktur, dan ditambahkan dengan simbol visual (emoji) agar terlihat lebih profesional dan menarik di GitHub Anda:

---

# 🌍 Land Cover Classification in Serang District

Repositori ini berisi skrip JavaScript untuk melakukan klasifikasi tutupan lahan di wilayah **Kabupaten Serang** menggunakan platform **[Google Earth Engine (GEE)](https://earthengine.google.com/)**.

---

## 📝 Deskripsi Proyek

Proyek ini bertujuan untuk memetakan distribusi tutupan lahan menggunakan citra satelit **Landsat 8 Level 2 (Surface Reflectance)**. Algoritma *Supervised Classification* **CART (Classification and Regression Trees)** digunakan untuk memproses data latih dan menghasilkan peta tutupan lahan.

### 🏷️ Kategori Tutupan Lahan

Data latih dikategorikan menjadi empat kelas utama:

* 🌲 **Forest** (Hutan)
* 🌾 **Ricefield** (Sawah)
* 🏠 **Residential Area** (Permukiman)
* 💧 **Water Bodies** (Perairan)

---

## 📊 Dataset & Spesifikasi

* 🛰️ **Satellites**: Landsat 8 Collection 2 Level 2 (Surface Reflectance).
* 📅 **Periode**: Januari 2020 – Desember 2020.
* ⚙️ **Preprocessing**:
* Pemotongan citra (*clip*) berdasarkan ROI Kabupaten Serang.
* Seleksi citra dengan tutupan awan terendah (*sort by cloud cover*).



---

## 🚀 Cara Menjalankan

1. Buka **[Google Earth Engine Code Editor](https://code.earthengine.google.com/)**.
2. Salin dan tempelkan kode dari file `main.js` ke dalam *Code Editor*.
3. Pastikan Anda telah mendefinisikan geometri **ROI** dan titik-titik sampel dengan properti `Class` yang sesuai pada *Geometry Imports*.
4. Klik tombol **Run** untuk mengeksekusi skrip.
5. Hasil klasifikasi akan muncul di panel peta, dan metrik akurasi dapat dilihat pada tab **Console**.

---

## 🎯 Evaluasi Akurasi

Model dievaluasi menggunakan *split validation* (80% pelatihan, 20% pengujian). Metrik yang dihasilkan meliputi:

* ✅ **Confusion Matrix**: Distribusi prediksi vs aktual.
* 📈 **Overall Accuracy**: Persentase ketepatan model secara keseluruhan.
* ✨ **Kappa Coefficient**: Metrik konsistensi model.

---

## 📂 Struktur Repositori

* `main.js` : Skrip utama untuk klasifikasi, visualisasi, dan uji akurasi.
* `README.md` : Dokumentasi proyek.

* ## 📂 Visualiasi GEE

* Berikut Visualisasi dari Hasil Pengolahan Citra Dengan GEE
  <img width="1919" height="925" alt="image" src="https://github.com/user-attachments/assets/b5a7e82f-cd38-4116-a850-eb0d7b7c2cdb" />


---
