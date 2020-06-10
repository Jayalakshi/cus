const name = document.getElementById('name')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submitb',(e) =>{

   let messages = []
   if (name.value === '' || name.value == null){

         messages.push('name is required')

   }

   if(messages.length > 0){ 
   e.preventDefault()

   errorElemen.innerText = messages.join(',')

   }

}