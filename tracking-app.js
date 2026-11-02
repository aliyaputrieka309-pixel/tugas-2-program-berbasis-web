const { createApp } = Vue;
createApp({
  data(){
    return {
      paketList: paketList,
      ekspedisiList: ekspedisiList,
      upbjjList: upbjjList,
      trackingList: [
        { noDO:"DO2025-001", nim:"041234567", nama:"Aliya", ekspedisi:"JNE Reguler", paket: paketList[0], tgl: new Date().toLocaleDateString(), total: paketList[0].harga }
      ],
      form: { nim:"", nama:"", ekspedisi:"JNE Reguler", paketKode:"" },
      selectedPaket: null
    }
  },
  computed: {
    nextDONumber(){
      let num = this.trackingList.length + 1;
      return `DO2025-${String(num).padStart(3,'0')}`;
    }
  },
  watch: {
    'form.paketKode'(newVal){
      this.selectedPaket = this.paketList.find(p=>p.kodePaket===newVal) || null;
      console.log("Paket ganti:", newVal);
    },
    'form.ekspedisi'(newVal){
      console.log("Ekspedisi ganti:", newVal);
    }
  },
  methods: {
    tambahDO(){
      if(!this.form.nim || !this.form.nama || !this.selectedPaket){
        alert("NIM, Nama, Paket wajib diisi!");
        return;
      }
      this.trackingList.push({
        noDO: this.nextDONumber,
        nim: this.form.nim,
        nama: this.form.nama,
        ekspedisi: this.form.ekspedisi,
        paket: this.selectedPaket,
        tgl: new Date().toLocaleDateString(),
        total: this.selectedPaket.harga
      });
      this.form.nim=""; this.form.nama=""; this.form.paketKode=""; this.selectedPaket=null;
    }
  }
}).mount('#appTracking')