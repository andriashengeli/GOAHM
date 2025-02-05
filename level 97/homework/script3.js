let film = {
   title: "სონიკი",
   director:"ჯეფ ფაულერი",
   relasedate:"2020",
   duration: "99 minutes",
   getmovieinfo: function() {
    return ` სახელი ${this.title} შემმქმნელი ${this.director} გამოშვების წელი ${this.relasedate} ხანგრძლივობა ${this.duration} `;
   }
}

console.log(film.getmovieinfo());