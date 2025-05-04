import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductVideoPage = () => {
  return (
    <div className="min-h-screen bg-[#0D0D2B] text-white px-4 py-12 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-6">Lihat Produk Kami Beraksi</h1>
      <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        Tonton demo aplikasi kasir dan sistem digital kami yang dirancang khusus untuk membantu UMKM mengelola bisnis secara efisien.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Video 1 */}
        <Card className="bg-[#1B1B3A] border-none shadow-lg rounded-2xl">
          <CardContent className="p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Demo Aplikasi Kasir"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="text-xl font-semibold mt-4">Demo Aplikasi Kasir UMKM</h2>
            <p className="text-gray-400 mt-1">Lihat bagaimana fitur pencatatan transaksi, laporan harian, dan manajemen stok bekerja secara realtime.</p>
          </CardContent>
        </Card>

        {/* Video 2 */}
        <Card className="bg-[#1B1B3A] border-none shadow-lg rounded-2xl">
          <CardContent className="p-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
                title="Demo Website UMKM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="text-xl font-semibold mt-4">Demo Website UMKM</h2>
            <p className="text-gray-400 mt-1">Simak bagaimana website usaha dapat membantu promosi online dan menerima pesanan digital.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Button className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg rounded-xl">
          Hubungi Kami Untuk Demo Lengkap
        </Button>
      </div>
    </div>
  );
};

export default ProductVideoPage;
