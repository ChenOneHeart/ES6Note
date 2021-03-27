
// decoratorsBeforeExport: true
@decorate
class Test {
}
function decorate(target) {
  target.name = 'class'
}
@decorate
class Cat {

}
console.dir(Test);
console.dir(Cat);