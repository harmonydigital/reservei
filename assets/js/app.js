const app = document.getElementById('app')
var modal=document.getElementById('modal')

  


modaltoggle=()=>{
    modal.classList.toggle('show')
    window.scrollTo(0, 0);

}

if(app){
    app.innerHTML=`
        <header>
            <div>
                <img class='logo' src='assets/img/logo.png'> 
            </div>
            <div class='social'>
                <a href='' target='_blank'><i class="fa-brands fa-facebook"></i></a>
                <a href='' target='_blank'><i class="fa-brands fa-instagram"></i></a>
            </div>
        </header>
        <main>  
        
            <div class='flex-container first-section'>
                <div class="content-text">
                    <span class="flag">crédito
                    grupo smidi</span>
                    <h1 class=" ">
                    agóra ficou
                    ainda mais fácil.
                    </h1>

                    <a class='getbuttonsmall openModal' href=''>
                        Cadastre-se
                    </a>
                </div>

                <div class='cover  '>
                    <img src='assets/img/cover-mb.png'>
                </div>

            </div>


            <div class='container getLead'> 
                <h2 class=''>
                Clique no botão abaixo e faça agora seu cartão SMIDI
                </h2>
                <a class='openModal animate__animated animate__pulse' href="https://t.me/ComunidadeCassinoMilionario">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    CADASTRE-SE AGORA
                </a>
                <div class='telegram'>
                   <!-- <img style="  width: 80px;  " src='assets/img/telegram.png'> -->
        
                </div>
             </div> 

            <div class='section-half'> 

                <div>
                   <h2>4 vantagens 
                   para você fazer seu cadastro agora mesmo!
                   </h2> 
                   <a class='getbuttonsmall openModal' href=''>
                        Cadastre-se
                    </a>
                </div>  

                    <div class='highligts'> 
                 
                        <div class='card first'>
                            <span class='flag'>Cartão aprovado na hora</span> 
                        </div> 

                        <div class='card'>
                            <span class='flag'>Limite Inicial de 1.000,00</span> 
                        </div> 

                        <div class='card'>
                            <span class='flag'>parcele em até 12x sem juros</span> 
                        </div> 

                        <div class='card'>
                            <span class='flag'>Use seu cartão nas 9 lojas do Grupo.</span> 
                        </div> 
                    </div>  
            </div>

            

            <div class='display'>
            <div class='flex-container'>
            <div class="content-text">
                <span class="flag">crédito
                grupo smidi</span>
                <h3 class=" ">
                preencha seu cadastro e faça parte do grupo smidi
                </h3>

                <a class='getbuttonsmall openModal' href=''>
                    Cadastre-se
                </a>
            </div>

            <div class='cover smidicard'>
                <img src='assets/img/cardsmidi.png'>
            </div>

        </div>

            </div>






        </main>
        <footer>
             Copyright 2023® - Harmony 
        </footer>
    `



   

    var btnGetModal=document.querySelectorAll('.openModal')
    var arr = Array.prototype.slice.call(btnGetModal)



    arr.map((el)=>{ 
        el.addEventListener('click',(event)=>{

            event.preventDefault()
            if(modal){
                modal.classList.toggle('show')
                window.scrollTo(0, 0);
            }
             
        })
    })
  

}

