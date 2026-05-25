Land Cover Classification in Serang District using GEE
Repositori ini berisi skrip JavaScript untuk melakukan klasifikasi tutupan lahan di wilayah Kabupaten Serang menggunakan platform Google Earth Engine (GEE). Proyek ini memanfaatkan citra satelit Landsat 8 Level 2 (Surface Reflectance) untuk memetakan distribusi tutupan lahan di wilayah tersebut.

Deskripsi Proyek
Klasifikasi tutupan lahan dilakukan menggunakan algoritma supervised classification CART (Classification and Regression Trees). Data latih (training data) dikumpulkan berdasarkan fitur tutupan lahan lokal yang mencakup:

Forest (Hutan)

Ricefield (Sawah)

Residential Area (Permukiman)

Water Bodies (Perairan)

Dataset yang Digunakan
Satellites: Landsat 8 Collection 2 Level 2 (Surface Reflectance).

Periode: Januari 2020 – Desember 2020.

Preprocessing: Pemotongan citra (clip) berdasarkan ROI (Region of Interest) Kabupaten Serang dan pemilihan first image dengan tutupan awan terendah (sort by cloud cover).

Cara Menjalankan
Buka Google Earth Engine Code Editor.

Salin dan tempelkan kode dari file main.js di repositori ini ke dalam Code Editor.

Pastikan Anda telah mendefinisikan geometri ROI (Region of Interest) dan titik-titik sampel (Forest, ricefield, dll) dengan properti Class yang sesuai di Geometry Imports.

Klik Run untuk mengeksekusi skrip.

Hasil klasifikasi akan otomatis muncul di panel peta (Map View), dan hasil akurasi (Confusion Matrix, Overall Accuracy, Kappa) dapat dilihat pada tab Console.

Evaluasi Akurasi
Model ini dievaluasi menggunakan split validation dengan pembagian data 80% untuk pelatihan (trainSet) dan 20% untuk pengujian (testSet). Metrik akurasi yang dihasilkan meliputi:

Confusion Matrix: Menampilkan distribusi kelas prediksi vs kelas aktual.

Overall Accuracy: Persentase ketepatan model secara keseluruhan.

Kappa Coefficient: Metrik konsistensi model.

Struktur Repositori
/main.js: Skrip utama untuk klasifikasi dan visualisasi.

/README.md: Dokumentasi proyek.
