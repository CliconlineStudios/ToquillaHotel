let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("sharelink").style.display = "none";
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("habitacion").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("Piscina").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("habitacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("Piscina").style.display = "none";
    conta=0;
    contador=0;
    backarriba();
    backweb();
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {

    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("Piscina").style.display = "none";
    document.getElementById("habitacion").style.display = "none";
    conta=0;
    contador=1;
    ids1();

}

function habitacion() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("habitacion").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("Piscina").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
    
    
}

function restaurante() {
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("habitacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("Piscina").style.display = "none";
    conta=0;
    contador=2;
    backarriba();
    ids2();
    
    
}

function planes() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("habitacion").style.display = "none";
    document.getElementById("Piscina").style.display = "none";
    conta=0;
    contador=2; 
    ids2();
    backarriba();     
        
}



function Piscina() {
    document.getElementById("Piscina").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("habitacion").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2; 
    ids2();
    backarriba();  
        
}

function sharetj() {
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("habitacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("Piscina").style.display = "none";
    conta=0;
    contador=1;
    ids1();    
       
}


//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("habitacion").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("Piscina").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }
}
    
       //    menu laterl 

       var btns = document.getElementById("inicio"),
       informacion = document.getElementById("infomacion"),
       conta=0;
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });
   
   

  

    
function enviaR() {
 //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
 let telefono = "593996079530";
          
 let cliente = document.querySelector("#cliente").value;
 let edad = document.querySelector("#edad").value;
 let fecha = document.querySelector("#fecha").value;
 let hora = document.querySelector("#hora").value;
 let modulos = document.querySelector("#modulos").value;
 let resp = document.querySelector("#respuesta");

 resp.classList.remove("fail");
 resp.classList.remove("send");

 let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
       *Toquilla Hotel*%0A
       *Datos de la Reserva*%0A
       *Nombre*%0A
       ${cliente}%0A
       *Cantidad*%0A
       ${edad}%0A
       *Fecha de Reserva*%0A
       ${fecha}%0A
       *Hora de Entrada*%0A
       ${hora}%0A
       *Alojamiento*%0A
       ${modulos}%0A
       *Nota: Realiza el Pago del 50% y Asegura tu Reserva*%0A`;

 if (cliente === "" || edad === "" || fecha === "" || hora === "") {
   resp.classList.add("fail");
   resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
   return false;
 }
 resp.classList.remove("fail");
 resp.classList.add("send");
 resp.innerHTML = `Tu Reserva Fue Enviada, ${cliente}`;

 window.open(url);
}  
       
          
          //ALERTAS>
          function save(){
            let url = `https://drive.google.com/u/0/uc?id=11DPdmX4yTn25XqYtuvUnCyFkDHx9POeV&export=download`;
            window.open(url); 
           };
          
          function ftuser() {
              Swal.fire({
                  title: 'Pedernales Cojimies',
                  text: 'Alojamiento con Vista al Mar',
                  imageUrl: 'img/toquillalogo.png',
                  imageWidth: 200,
                  confirmButtonText: 'Añadir a Contactos',
                  showCloseButton: 'true',
                  showCancelButton: true,
            
              
                }).then((result) => {
                  if (result.isConfirmed) {
                    save();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Descarga Correcta',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  }
                })
          
           
          };
          
          function abrirpagos(){
            let urla = `https://toquillahotel.blogspot.com/p/opciones-de-pago.html`;
            window.open(urla); 
           };
    
    
           function verpagos(){
            let urlsp = `https://toquillahotel.blogspot.com/p/opciones-de-pago.html`;
            window.open(urlsp); 
           };
    
    
          function msjpagos() {
            Swal.fire({
                title: 'Opciones de Pago',
                icon: 'success',
                html:
               '<a href="https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Opciones%20de%20Pago%20https://toquillahotel.blogspot.com/p/opciones-de-pago.html" class="botonp" ><span class="fa fa-share-alt"></span >&nbsp;Compartir nro. Cuenta</a>',
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ver nro. Cuenta',
              })
              .then((result) => {
                if (result.isConfirmed) {
                  verpagos();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Información ',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              })
          
           
          };
          
          function msj2() {
            Swal.fire({
            showCloseButton: true,
            icon: 'success',
            title: 'Tarjeta Digital',
            text: 'Link Copiado a Portapapeles',
            footer: 'CliconlineStudios'
            });
          
           
          };


          function msj3() {
            sidebar();
            Swal.fire({
            showCloseButton: true,
            icon: 'success',
            title: 'Pets friendly',
            text: 'Se permite el ingreso de mascotas Perros y Gatos domesticados a Toquilla Hotel',
            footer: 'Aplica Condiciones'
            });
          
           
          };
    
    
    
    const $content = document.getElementById('textareacopy');
          $btncopy = document.getElementById ('btcopi');
          $title = document.getElementById ('titlelink')
    
          $btncopy.addEventListener('click', e => {
            $content.select();
            document.execCommand('copy')
            msj2();
          });
    
        
// share tarjeta

const shareData2 = {
    title: 'Toquilla Hotel',
    text: 'Enviado desde Cliconline App.Tarjeta Digital Toquilla Hotel',
    url: 'https://toquillahotel.blogspot.com',
    }
    
    
    // Share must be triggered by "user activation"
   
    var urltarjeta = 'https://toquillahotel.blogspot.com'
  
    function sharetarjeta(){
    if (navigator.share) {
        navigator
       .share(shareData2)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
        sharetj();
    }
    } 



    function alerta() {
        Swal.fire({
        showCloseButton: true,
        icon: 'success',
        text: 'Se Habilitara Próximamente ',
        footer: 'Tarjeta Digital Demo'
        });
      
       
      };
document.addEventListener('DOMContentLoaded', sms);


          function ligthmod(){
            let url = `https://ligthmod.blogspot.com/`;
            window.open(url); 
           }

          function sms (){
            Swal.fire({
              imageUrl: 'https://cliconlinestudios.github.io/LIGTHMOD/img/escena.png',
              text: 'Lámparas Inteligentes LIGTHMOD - Decora tus espacios y crea la escena perfecta controlando la intensidad de luz o el color con comandos de voz en alexa o google assistant android o iOS tables o celulares Visitanos y obten descuentos especiales',
              imageWidth: 400,
              confirmButtonText: 'Visitar Sitio',
              showCloseButton: 'true',
              showCancelButton: true,
              footer: 'Anuncio'
        
          
            }).then((result) => {
              if (result.isConfirmed) {
                ligthmod();
        
              }
            })
          
          };
      //suscripcion>
  function Caducada(){
    let url = `https://cliconline.github.io/CliconlineStudios/`;
    window.open(url); 
   }


          document.addEventListener('DOMContentLoaded', sus);

    function sus (){
        Swal.fire({
            position: 'bottom',
            icon: 'warning',
            title: 'Suscripción Caducada',
            text: 'Activa tu Tarjeta Digital',
            allowOutsideClick: false,
          footer: 'CliconlineStudios'
        }).then((result) => {
            if (result.isConfirmed) {
              Caducada();
            }
          })
    };
