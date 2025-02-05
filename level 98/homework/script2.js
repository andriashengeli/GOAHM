let book = {
    name: "დიდოსტატის მარჯვენა",
    author: "მიხეილ ჯავახიშვილის",
    year: "1936",
    fullname: function() {
        return ` წიგნის სახელი ${this.name}. ავტორი ${this.author} გამოშვების თარიღი ${this.year}`;
    }

}

console.log(book.fullname());