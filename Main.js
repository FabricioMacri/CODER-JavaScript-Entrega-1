//En esta entrega quice hacer una aplicacion de estilo consola para un restaurante donde el usuario ingresa su pedido
// y puede elegir opciones de pago para luego imprimir su ticket con su pedido. 

alert("Bienvenido al sistema del restaurante.");

let Estado = true;
let subEstado = true;
let respuestaMenu = 0;
let agregarItem = 0;
let Total = 0;

function pagarTarjeta(Monto, cuotas){

    //Esta funcion calcula los intereses segun la cantidad de cuotas y se lo agrega al total de compra

    let Interes = 0.05;

    if(cuotas > 1){

        Interes = Interes * cuotas;
        Monto = Monto + (Interes * Monto);

    }
    return Monto;
}
function pagarMercadopago(Monto){

    //Esta funcion le agrega un 10% de interes al total de compra

    Monto += Monto *0.1;
    return Monto;
}

while(Estado){

    //Muestro el menu en un while para poder hacer control de entradas y volver a mostrarlo si el usuario ingresa algo invalido

    respuestaMenu = +prompt("Seleccione lo que desea para su pedido:\n"
        + "1.Hamburguesa completa con papas fritas ....$1500\n"
        + "2.Milanesa con guarnición .....................................$1800\n"
        + "3.Ravioles de J&Q .....................................................$1200\n"
        + "4.Ensalada césar .........................................................$1000"
    );

    if (respuestaMenu > 0 && respuestaMenu <= 4){

        //Segun lo que el usuario elige guardo el monto en el total

        switch(respuestaMenu){

            case 1:
                Total = 1500;
                break;
            case 2:
                Total = 1800;
                break;
            case 3:
                Total = 1200;
                break;
            case 4:
                Total = 1000;
                break;

        }
        while(subEstado){

            //Doy la opcion de agregar todo lo que el usuario quiera, cuando no ingresa como se indica se corta el ciclo

            agregarItem = +prompt("¿Desea agregar algo a su pedido?\n"
                +"Si quiere hacerlo ingrese una opción, de lo contratio haga click en aceptar\n"
                + "1.Hamburguesa completa con papas fritas ....$1500\n"
                + "2.Milanesa con guarnición .....................................$1800\n"
                + "3.Ravioles de J&Q .....................................................$1200\n"
                + "4.Ensalada césar .........................................................$1000"
            );

            if (agregarItem == 0) {
                
                //Si no agregan nada salgo de los ciclos

                Estado = false;
                subEstado = false;
                break;
            };
            if (agregarItem > 0 && agregarItem <= 4){

                //Voy sumando las cosas que me van agregando al total

                switch(agregarItem){

                    case 1:
                        Total += 1500;
                        break;
                    case 2:
                        Total += 1800;
                        break;
                    case 3:
                        Total += 1200;
                        break;
                    case 4:
                        Total += 1000;
                        break;
                }
            }
            //Si ingresan algo incorrecto lo informo y continua el ciclo
            if (agregarItem < 0 || agregarItem > 4) alert("La opción ingresada es incorrecta.");
        }
    }
    else{
    //Si ingresan algo incorrecto lo informo y continua el ciclo
    alert("La opción ingresada es incorrecta.");
    }
}

//Reinicio mis variables y comienzo un nuevo ciclo para el medio de pago y re calcular el total segun corresponda

Estado = true;
subEstado = true;
respuestaMenu = 0
respuestaCuotas = 0;

alert("El total de su compra es de: " + Total);

while(Estado){

    //Pregunto por el medio de pago con un while haciendo control de entradas

    respuestaMenu = +prompt("Seleccione un medio de pago:\n"
        + "1.Efectivo\n"
        + "2.Tarjeta de crédito(5% de recargo por cada cuota)\n"
        + "3.Mercado Pago(10% de recargo)"
    );

    switch(respuestaMenu){

        case 1:
            //Como en efectivo no hay intereses directamente se termina el ciclo
            Estado = false;
            break;
        case 2:
            while(subEstado){

                //Pregunto la cantidad de cuotas, tambien usando un while para hacer control de entradas

                respuestaCuotas = +prompt("Ingrese una cantidad de cuotas entre 1 y 12:");

                if(respuestaCuotas >= 1 && respuestaCuotas <= 12){

                    //En caso de recibir una cantidad de cuotas correctas invoco a la funcion 
                    //que calcula el nuevo total y salgo del ciclo

                    Total = pagarTarjeta(Total, respuestaCuotas);
                    subEstado = false;
                    Estado = false;
                    break;
                    
                }
                else {
                    alert("La opción ingresada es incorrecta.");
                }

            }
            break;
        case 3:

        //Inovoco a la funcion que que le agrega al total los intereses por este medio de pago
        
        Total = pagarMercadopago(Total);
            Estado = false;
            break;
            
        default:

            alert("La opción ingresada es incorrecta.");

    }
}

let medioPago;

//Segun la opcion antes elegida guardo un string con el nombre de medio de pago para luego informarlo

if (respuestaMenu == 1) medioPago = "Efectivo";
if (respuestaMenu == 2) medioPago = "Tarjeta de crédito";
if (respuestaMenu == 3) medioPago = "Mercado Pago";

//Informo al usuario de los datos de su compra

alert("Información de compra: \n\n"
+ "Medio de pago: " + medioPago + "\n\n"
+ "Total: $" + Total
)
