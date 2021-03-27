const redColor = (target)=>{
  target.color = "red"
}

const color = (color)=> {
  return (target) => {
    target.color = color
    target.prototype.color = color
  }
}

@color("blue")
class Animal {
  constructor(name) {
    this.name = name
  }
}
export {Animal}