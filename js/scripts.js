//Internationalization

var aLangKeys=new Array();

aLangKeys['en']=new Array();
aLangKeys['es']=new Array();

aLangKeys['en']['home']='Home';
aLangKeys['en']['services']='Our Services';
aLangKeys['en']['about']='About us';
aLangKeys['en']['search']='Look for safe cleaning services';
aLangKeys['en']['info']='Information about the company, user ratings, etc';
aLangKeys['en']['request']='Request a service';
aLangKeys['en']['can']='You can request a service right now';
aLangKeys['en']['variety']='Variety of companies and services';
aLangKeys['en']['system']='We have a wide range of companies in our system that are at your service';
aLangKeys['en']['security']='Security and confidence';
aLangKeys['en']['enterprise']='Companies go through a rigorous credibility test, to ensure that the service that is offered on our platform is reliable';
aLangKeys['en']['weare']='We are a startup that develops innovative applications that help many people by providing many people providing practical and customised solutions';
aLangKeys['en']['ensures']='Ensure the cleanliness of your premises';
aLangKeys['en']['hire']='hire now';
aLangKeys['en']['start']='Start by searching through the diversity of our services';
aLangKeys['en']['our']='our application will help you';
aLangKeys['en']['platform']='Go to platform';
aLangKeys['en']['contact']='Contact :   +51 999 999 999'

aLangKeys['es']['home']='Inicio';
aLangKeys['es']['services']='Servicios';
aLangKeys['es']['about']='Nosotros';
aLangKeys['es']['search']='Busque servicios de limpieza seguros';
aLangKeys['es']['info']='Información sobre la empresa, puntuación de usuarios, etc.';
aLangKeys['es']['request']='Solicite un servicio';
aLangKeys['es']['can']='Puedes solicitar un servicio ahora mismo';
aLangKeys['es']['variety']='Variedad de empresas y servicios';
aLangKeys['es']['system']='Contamos en nuestro sistema con una amplia diversidad de empresas que están a su servicio';
aLangKeys['es']['security']='Seguridad y confianza';
aLangKeys['es']['enterprise']='Las empresas pasan por una rigurosa prueba de credibilidad, para asegurarnos que el servicio que es ofrecido en nuestra plataforma sea confiable';
aLangKeys['es']['weare']='Somos un startup que desarrolla aplicaciones innovadoras que ayudan a muchas personas brindando soluciones practicas y personalizadas';
aLangKeys['es']['ensures']='Asegura la limpieza de tu local';
aLangKeys['es']['hire']='contrata ya';
aLangKeys['es']['start']='Empieza buscando entre la diversidad de nuestros servicio';
aLangKeys['es']['our']='nuestra aplicación lo ayudará';
aLangKeys['es']['platform']='Ir a la Plataforma';
aLangKeys['es']['contact']='Contacto:   +51 999 999 999'

$(document).ready(function() {

    // onclick behavior
    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id

        // tranlate all translatable elements
        $('.tr').each(function(i){
            $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
        });
    } );
});