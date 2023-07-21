
class FormEngine{
    async render(){
        const response=await fetch('http://localhost:3000/formulario/Paciente')

        const form=await response.json()
        
        const formHtml=document.createElement("form")

        formHtml.classList.add("container")

        for (const[key,value] of Object.entries(form.properties)){

            const label=document.createElement('label')
            label.innerHTML=key
            formHtml.appendChild(label)
            const input=document.createElement('input')
            input.name=key
            input.classList.add("form-control")

            if(value.type=='integer'){
                input.type="number"
            }else{
                input.type="text"
            }
            formHtml.appendChild(input)
        }
        document.body.appendChild(formHtml)
    }
}

const miFormEngine=new FormEngine
miFormEngine.render()