const createPost = (title,text = 'Default text',date = new Date().toLocaleDateString()) =>{
   // date = date || new Date().toLocaleDateString()
return{
   title, //если равны ключ и значение
   text1: text,
   date 
}
}

const post = createPost('Скоро новый год!')

console.log(post)