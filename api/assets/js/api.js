const app = document.getElementById('app')


refreshData=(data)=>{
  console.log('data',data)
  var refreshData=data
  refreshData.map((el)=>{
    console.log(el.name)

    document.getElementById('innerData').innerHTML+=`
     
      <td>`+el.name+`</td>
      <td>`+el.cpf+`</td>
      <td>`+el.RG+`</td>
      <td>`+el.email+`</td>
      <td>`+el.numero+`</td>
    
    `
  })
  
}
 
initApp=()=>{
    
    arrData=[{
      name:'Vinicius Araujo de Souza',
      cpf:40678967865,
      rg:486153897,
      email:'harmony.dgt@gmail.com',
      whatsapp:'12981021517'
    },{
      name:'Thais Mariano de Lima',
      cpf:41901293807,
      rg:468342579,
      email:'thais.harmony@gmail.com',
      whatsapp:'12981021517'
    }]


    console.log(arrData)

    
    
    app.innerHTML=`
        <header>
            <div class='brand'>
                <img class='logo' src='assets/img/logo.png' alt='logo-brand'>
            </div>
            <div class='site'>
                 <a class='btn-small' href='../index.html'>Visite o site</a>
            </div>
        </header>
        <main>
            <div class='data-table'>
            <h2>Dados cadastrados no seu site!</h2>

            <table>
              <tr>
                <th>NOME</th>
                <th>CPF</th>
                <th>RG</th>
                <th>E-mail</th>
                <th>Whatsapp</th>
              </tr>
              <tbody id='innerData'>
               
              </tbody>
           
            
             
            </table>
            
            </div>
        </main>
        <footer>
        Copyright 2023® - Harmony 
         </footer>
    `

    // arrData.map((el)=>{
    //   console.log(el.name)

    //   document.getElementById('innerData').innerHTML+=`
       
    //     <td>`+el.name+`</td>
    //     <td>`+el.cpf+`</td>
    //     <td>`+el.rg+`</td>
    //     <td>`+el.email+`</td>
    //     <td>`+el.whatsapp+`</td>
      
    //   `
    // })
}
app ? initApp() : console.log('init err')


/* <tr>
<td>Vinicius Araujo de Souza</td>
<td>416.725.628.54</td>
<td>52.685.964.7</td>
<td>harmony.dgt@gmail.com</td>
<td>12981021517</td>
</tr> */