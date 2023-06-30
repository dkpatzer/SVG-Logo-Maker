class Shapes{
  constructor(text, textColor, shapeColor){
    
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
  }
  render(){
      return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
  }

}

module.exports = Shapes;
  
  a