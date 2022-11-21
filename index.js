function MethodForArticle() {
    this.allInfo = function () {
        this.allInfo = function (){
        for(const key in Article ){
          console.log(`${key} = ${Article[key]}`) };
    this.sale = function (discount) {
        console.log(this.price - discount);
      }
  }
}
}
  function Article(dress) {
    this.name = dress;
    this.price = 1200;
    this.currency = grn;
  }
  Article.prototype = new MethodForArticle();

  
  console.log(Article.sale());



