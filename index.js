const mensaje = document.querySelector(".heart")

swal("Toca el corazon")

mensaje.addEventListener("click", ()=>{
    swal({
        title: "TE AMO",
        text: "Mi corazoncito hace BUM BUM por TI",
        buttons: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Cada dia me enamoro mas de ti " + "gracias por estar cada dia a mi lado " + "quedate toda la vida conmigo hasta viejitos" + "y dejame hacerte la persona mas feliz del mundo " + "ahora algo bonito <3: " + "Quien es Melanie, en mate mi solucion, en historia mi reina, en arte mi lienzo, y en geografia mi mundo", {
          });
        } 
      });
})

