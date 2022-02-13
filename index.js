// const createCar = (name,model) => {
//    return{name,model}
// }

const createCar = (name,model) => ({name,model})


const ford = createCar('Ford','Focus')

console.log(ford)

const yearField = 'year' 

const bmw = {
   name: 'BMW',
   ['model']: 'X6 Sport',
   [yearField]: 2018,
   // logFields(){
   //    console.log(this.name, this.model, this.year)
   // }
   //новый вид записи
   logFields(){
      const{name,model,year} = this
      console.log(name, model, year)
   }

}

console.log(bmw)
bmw.logFields()

//const year = bmw.year
const {year} = bmw
console.log(year)