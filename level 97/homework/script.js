let book = {
    title: "ვეფხისტყაოსანი",
    author: "შოთა რუსთაველი",
    pages: 200,
    releasedate: 1712,
    getInfo: function() {
        return `${this.title} დაწერილია ${this.author} მიერ, აქვს ${this.pages} გვერდი და გამოშვებულია ${this.releasedate} წელს.`;
    }   
};

console.log(book.getInfo());


