   var factura=document.getElementById("tablaProducto");
   var id = document.getElementById("txtProductoId").value ;
   var nombre= document.getElementById("txtProductoNombre").value;
   var precio=document.getElementById("txtProductoPrecio").value;
   var cantidad=document.getElementById("txtProductoCantidad").value;    
   
function agregarProducto(){
   

   factura.push([id,nombre,precio,cantidad])
   
   var tabla="<table>";
   for(var i=1; i<=factura.length; i++){
       tabla+="<tr>";
       for(var j=1; j<=factura.length(4); j++){
           if(j==0){
            tabla+="<td>"+id+"/td";
        }else if(j==1){
            tabla+="<td>"+nombre+"/td"
        }else if(j==2){
            tabla+="<td>"+precio+"/td"
        }else if(j==3){
            tabla+="<td>"+cantidad+"/td"
        }else if(j==4){
            tabla+="<td>"+subTotal()+"/td"
        }
       }   
       tabla+="</tr>";
   }
   tabla+="</table>";

}

function subTotal(){
var subTotal=0.0;
subTotal=precio*cantidad;
sumaSubTotal(subTotal);
return subTotal;
}

function sumaSubTotal(subTotal){
var sumaSubTotal=0;
sumaSubTotal+=subTotal;
sumaSubTotal.innertHTML=""
descuento(sumaSubTotal);
}

function descuentoIsvTotal(sumaSubTotal){
var descuento=0;
var isv=0;
var Total=0;
descuento=sumaSubTotal*0.10;
isv=sumaSubTotal*0.15;
total=sumaSubTotal-descuento+isv;
return total;
}



