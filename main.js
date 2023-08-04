let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let registrar = document.getElementById("modal-button");
let bienvenida = document.getElementById("bienvenida");
let contraseña = document.getElementById("contraseña");
let noIngreso = document.getElementById("noIngreso");
let demorasPago = document.getElementById("demorasPago");
let solicitoUsuario = document.getElementById("solicitoUsuario");
let cbuEquivocado = document.getElementById("cbuEquivocado");
let sistemaPagos = document.getElementById("sistemaPagos");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputNombre = document.getElementById("name").value;
  let inputCBU = document.getElementById("number").value;
  let inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `⚠️ *NO ENVIAR DINERO SIN CONSULTAR CBU SEGUNDOS ANTES* ⚠️
‼️( *LOS CBU CAMBIAN, PUEDE PERDER SU DINERO, QUEDA AVISADO* )‼️

*DATOS DE LA CUENTA*
Nombre Completo: *${inputNombre}*
CBU: *${inputCBU}*
Alias: *${inputAlias}*

💰 *MÍNIMO DE CARGA $1.000* 💰

*ENVIAR:*
🔻COMPROBANTE
🔻USUARIO de la PLATAFORMA

*INGRESÁ ACÁ PARA JUGAR:* https://casinocityvip.com`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;
  console.log(user);

  const texto = `🔸 *USUARIO REGISTRADO* 🔸
👤 *TU USUARIO:* ${user}
🔐 *CONTRASEÑA:* vip123

*CONSULTA CBU PARA INGRESAR DINERO*⤵️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});

bienvenida.addEventListener("click", () => {
  const texto = `Bienvenido/a a...
🔥 *HELL CITY ONLINE* 🔥
El mejor sitio de entretenimiento: https://casinocityvip.com 🎰

💸 *24HS ABIERTO* 💸
Contamos con muchos juegos para que te diviertas y multipliques tu dinero🍀

💰 *CARGA MÍNIMA $1.000*
💰 *RETIRO MÍNIMO $2.000*

*PARA COMENZAR A JUGAR CON NOSOTROS*⤵️

Envianos tu *NOMBRE* y *APELLIDO* así te generamos un usuario y te *REGALAMOS* un *100%* de *BONIFICACIÓN EN TU PRIMER CARGA* 🙌🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

contraseña.addEventListener("click", () => {
  const texto = `🔓 *CONTRASEÑA RESTABLECIDA* 🔓
Por favor, recargá la página y si es posible, *copiá y pegá* los datos así se evitan errores de tipeo y, por lo tanto, no se bloquea el usuario😜`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `🥵Tu transferencia todavía no impactó, *tené en cuenta que a veces las transferencias se demoran.*⏱️

🪙 Si el dinero no ingresa a nuestra cuenta bancaria, no tenemos autorizado cargar las fichas 🪙

🙌🏻 *Aguardá un momento y cuando llegue tu transferencia tus fichas van a ser cargadas* 🙌🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitoUsuario.addEventListener("click", () => {
  const texto = `🙏🏻Por favor🙏🏻, *SIEMPRE debajo de CADA COMPROBANTE* necesito que escribas por separado tu *USUARIO* de la *PLATAFORMA* para poder automatizar la carga de fichas🪙⤵️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

cbuEquivocado.addEventListener("click", () => {
  const texto = `🚫Te informo que enviaste dinero a un CBU con el cual no estamos trabajando actualmente. En el mensaje de carga especificamos previamente que *SIEMPRE* se consulte segundos antes el CBU vigente antes de enviar dinero.🚫

Por favor, aguardá con paciencia a que ingresemos a esa cuenta y verifiquemos que el dinero haya ingresado. PUEDE *DEMORAR UNAS HORAS*.‼️
*HAY QUE SER RESPONSABLE CON TU DINERO DEBIDO A QUE SI SE ENVÍA DINERO A UNA CUENTA INACTIVA A LA QUE NO TENEMOS ACCESO, LO PIERDE*😬`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaPagos.addEventListener("click", () => {
  const texto = `🔸A continuación te dejamos el *link directo* para comunicarte con *Maddie* encargada del *sistema de pagos* ⬇️

https://wa.link/yzmq1d`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
