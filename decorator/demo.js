function log() {
  console.log("hello lsner")
}

class Person {
  @log
  saySome(){
    console.log("say")
  }

}
let a = new Person()
console.log(a.saySome())