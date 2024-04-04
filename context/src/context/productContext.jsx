/*
    * Context API:
    * Uygulamada birden çok bileşenin ihtiyacı olan 
    * verileri bileşenlerden bağımsız bir şekilde konumlanan
    * merkezlerde yönetmeye yarar.

    * Context tuttuğumuz stateleri bileşenlere doğrudan aktarım yapabilen state yönetim aracıdır.s
*/

import { createContext, useEffect, useState } from "react";
import api from "../utils/api";
//* 1.adım: context yapısının temelini oluştur.
export const ProductContext = createContext();
//* 2.adım:Verileri bileşenlere aktaracak olan sağlayıcıyı ve onun tuttuğu verileri tanımlama
export function ProductProvider({ children }) {
  // ürünlerin verisi
  const [products, setProducts] = useState();
  // gösterilecek kategorinin verisi
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // hangi adrese istek atılacağını belirle
    const url =
      selectedCategory === "all"
        ? "/products" // bütün ürünler
        : `/products/category/${selectedCategory}`; // seçili kategoriye göre alt ürünler
    api.get(url).then((res) => setProducts(res.data));
  }, [selectedCategory]);

  /*
   * 3.adım: Sağlayıcı fonksiyonları mutlaka Provieder'ı return etmeli ve App'i sarmalamalı
   * Value olarak eklenen değerler projedeki bileşenler tarafından erişilebilir olur.
   */
  return (
    <ProductContext.Provider
      value={{ products, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
