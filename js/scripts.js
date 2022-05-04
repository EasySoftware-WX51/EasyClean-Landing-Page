var array=new Array();

array['en']=new Array();
array['es']=new Array();

array['en']['home']='Home';
array['en']['services']='Our Services';
array['en']['about']='About us';
array['en']['search']='Look for safe cleaning services';
array['en']['info']='Information about the company, user ratings, etc';
array['en']['request']='Request a service';
array['en']['can']='You can request a service right now';
array['en']['variety']='Variety of companies and services';
array['en']['system']='We have a wide range of companies in our system that are at your service';
array['en']['security']='Security and confidence';
array['en']['enterprise']='Companies go through a rigorous credibility test, to ensure that the service that is offered on our platform is reliable';
array['en']['weare']='We are a startup that develops innovative applications that help many people by providing many people providing practical and customised solutions';
array['en']['ensures']='Ensure the cleanliness of your premises';
array['en']['hire']='hire now';
array['en']['start']='Start by searching through the diversity of our services';
array['en']['our']='our application will help you';
array['en']['platform']='Go to platform';
array['en']['contact']='Contact :   +51 999 999 999'

array['es']['home']='Inicio';
array['es']['services']='Servicios';
array['es']['about']='Nosotros';
array['es']['search']='Busque servicios de limpieza seguros';
array['es']['info']='Información sobre la empresa, puntuación de usuarios, etc.';
array['es']['request']='Solicite un servicio';
array['es']['can']='Puedes solicitar un servicio ahora mismo';
array['es']['variety']='Variedad de empresas y servicios';
array['es']['system']='Contamos en nuestro sistema con una amplia diversidad de empresas que están a su servicio';
array['es']['security']='Seguridad y confianza';
array['es']['enterprise']='Las empresas pasan por una rigurosa prueba de credibilidad, para asegurarnos que el servicio que es ofrecido en nuestra plataforma sea confiable';
array['es']['weare']='Somos un startup que desarrolla aplicaciones innovadoras que ayudan a muchas personas brindando soluciones practicas y personalizadas';
array['es']['ensures']='Asegura la limpieza de tu local';
array['es']['hire']='contrata ya';
array['es']['start']='Empieza buscando entre la diversidad de nuestros servicio';
array['es']['our']='nuestra aplicación lo ayudará';
array['es']['platform']='Ir a la Plataforma';
array['es']['contact']='Contacto:   +51 999 999 999'

$(document).ready(function() {
    $('.lang').click( function() {
        var lang = $(this).attr('id');
        $('.tr').each(function(i){
            $(this).text(array[lang][ $(this).attr('key') ]);
        });
    } );
});