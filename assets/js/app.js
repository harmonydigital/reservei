const app = document.getElementById('app')

 

if(app){
    app.innerHTML=`
        <header>
            <div class='brand'>
                <img src='assets/img/reservei.png' alt='reservei logo'>
            </div>
          
        </header>
        <main>  
        
            <div class='flex-container'>
                <div class="content-text">
                    <h1 class=" ">
                        Reservar, leve e intuitivo.
                    </h1>
                    <h4>notificações 
                    de Reservas em tempo real grátis</h4>
                </div>
 

            </div>


            <div class='container'> 
                <img class='mockup' src='assets/img/desktop.png' alt='img'>
            </div>

            <div class='container' hidden > 
                <h2 class=' animate__animated animate__backInRight'>
                Clique no botão abaixo e receba seu acesso 100% grátuito a comunidade vip no telegram
                </h2>
                <a class=' animate__animated animate__pulse' href="https://t.me/ComunidadeCassinoMilionario">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                     Comprar
                </a>
              
             </div>

             <div class='highligts'>
                <div class='flex-container'>
                    <div class="content-text">
                        <h1 class=" ">  Gerêncie de onde estiver.  </h1>
                        <h5>pelo celular, tablet ou computador.</h5>
                    </div> 
                </div>
             
            <div class='coluns'>
             <div class='flex-container'>
                    <div class="">
                        <h4 class="">  O que faz.  </h4>
                        <ul>
                            <li>Formulário de reservas.</li>
                            <li>Gerenciador de conteúdo.</li>
                            <li>Disponivel para celular, tablet ou Desktop.</li> 
                        </ul> 
                    </div> 
                    <div class="mockup">
                        <img class='mockup' src='assets/img/model.png' alt='img'> 
                    </div> 
                    <div class="">
                        <h4 class=" ">  Sobre o app. </h4>
                    <ul>
                        <li>notificações   de Reservas em tempo real grátis</li>
                        <li>notificações   de Reservas em tempo real grátis</li>
                        <li>notificações   de Reservas em tempo real grátis</li> 
                    </ul>
                
                </div> 
             </div> 


                </div>

            </div>



 

            

            <div class='display'>
            <div>
                <h4> Recursos do app</h4>
            </div>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                <div class="swiper-slide"> <img src='assets/img/model.png'></div>
                <div class="swiper-slide"> <img src='assets/img/model.png'></div>
                <div class="swiper-slide"> <img src='assets/img/model.png'></div>
                <div class="swiper-slide"> <img src='assets/img/model.png'></div>
                
                </div>
              <!--  <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div> -->
                <div class="swiper-pagination"></div>
            </div>
            </div>






        </main>
        <footer>
             Copyright 2023® - Manauara 
        </footer>
    `
}

