const { createApp } = Vue;
createApp({
  data() {
    return {
      upbjjList: upbjjList,
      kategoriList: kategoriList,
      bahanAjar: [...bahanAjarList],
      filterUpbjj: "",
      filterKategori: "",
      filterReorder: false,
      filterKosong: false,
      sortBy: "judul",
      showForm: false,
      newItem: { kode:"", judul:"", kategori:"", upbjj:"", lokasiRak:"", qty:0, safety:10, harga:0, catatanHTML:"" }
    }
  },
  computed: {
    // 1.4 Computed - tidak perlu recompute (sesuai PDF)
    filteredStok() {
      let data = this.bahanAjar.filter(item => {
        let matchUpbjj = this.filterUpbjj ? item.upbjj === this.filterUpbjj : true;
        let matchKat = this.filterKategori ? item.kategori === this.filterKategori : true;
        let matchReorder = this.filterReorder ? item.qty < item.safety : true;
        let matchKosong = this.filterKosong ? item.qty === 0 : true;
        if(this.filterKosong) matchReorder = true; 
        return matchUpbjj && matchKat && matchReorder && matchKosong;
      });
      // Sort
      return data.sort((a,b) => {
        if(this.sortBy === 'judul') return a.judul.localeCompare(b.judul);
        if(this.sortBy === 'stok') return a.qty - b.qty;
        if(this.sortBy === 'harga') return a.harga - b.harga;
        return 0;
      });
    }
  },
  watch: {
    // 1.5 Wajib 2 Watchers
    filterUpbjj(newVal){
      console.log("Filter UT-Daerah ganti:", newVal);
      this.filterKategori = ""; // Dependent options
    },
    filterKategori(newVal){
      console.log("Filter kategori ganti:", newVal);
    }
  },
  methods: {
    statusClass(item){
      if(item.qty === 0) return 'kosong';
      if(item.qty < item.safety) return 'menipis';
      return 'aman';
    },
    statusText(item){
      if(item.qty === 0) return 'Kosong 🔴';
      if(item.qty < item.safety) return 'Menipis 🟠';
      return 'Aman 🟢';
    },
    resetFilter(){
      this.filterUpbjj=""; this.filterKategori=""; this.filterReorder=false; this.filterKosong=false; this.sortBy="judul";
    },
    tambahBahan(){
      if(!this.newItem.kode || !this.newItem.judul || this.newItem.qty < 0){
        alert("Validasi: Kode & Judul wajib, Qty tidak boleh minus!");
        return;
      }
      this.bahanAjar.push({...this.newItem});
      this.newItem = { kode:"", judul:"", kategori:"", upbjj:"", lokasiRak:"", qty:0, safety:10, harga:0, catatanHTML:"" };
      this.showForm=false;
    }
  }
}).mount('#appStok')