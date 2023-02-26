const postsBlock = document.querySelector(".posts_block-container")
const showPostsBtn = document.querySelector(".posts_block button")

//преобразуем стрелочные функции по типу:
//переменная = () => содержимое функции

function addPost(title, body){
//postTitle это h3 элемент внутри html класса
        // const postTitle = document.querySelector(".posts_block-container h3")
//postBody это span элемент внутри html класса
        // const postBody = document.querySelector(".posts_block-container span")
//4 строки выше преобразуем, создавая "h3" и "span" в JS
        const postTitle = document.createElement("h3")
        const postBody = document.createElement("span")
//создадим <p> в котром будут лежать "h3" и "span" как закоментировано в html
        const postItem = document.createElement("p")

//обращаемся к элементу html и в этот элемент кладём данные
        postTitle.innerText = title
        postBody.innerText = body

//передадим <p> в postsBlock <div>> нашего кода методом .append
        postsBlock.append(postItem)
//порядок передачи в метод данных имеет значение, он сохранится
        postsBlock.append(postTitle, postBody)
}

function getPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        //then принимает в себя функцию, а функция наш запрос response
        //когда у нас всего один аргумент в функции дополнительные скобки не нужны
        //метод response.json() мы используем, чтобы превратить json в объект или массив
                .then( response => response.json())                
        //data это наш объект, переведённый из json формата
                .then( data => {
        //цикл вывода всех имеющихся постов
                        for(item of data){
        //item как i в цикле - любое название
                        addPost(item.title, item.body)}
                })
        //catch ловит ошибки и принимает их, не обязателен, но явл. хорошей практикой
        //обработка ошибок
                .catch( err => console.log(err.message))
}

// function createPost(title, body, userId) {
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: 'POST',
// //перед отправкой запроса надо сделать объект строкой
//                 body: JSON.stringify ({
//                         // title: title,
//                         // body: body,
//                         // userId: userId,
//                         title,
//                         body,
//                         userId,
//                 }),
//                 headers: {
//                         'Content-type': 'application/json; charset=UTF-8'
//                 },
//         })
//         .then( response => {
//                 console.log(response)
//                 return response.json()
//         })
//         .catch( err => console.log(err.message))  
// }

// createPost("title", "body", 15)

showPostsBtn.onclick = getPosts