

// This handler will be executed only once when the cursor
// moves over the unordered list
document.getElementById("info").addEventListener(
    "mouseenter",
    () => {
        // highlight the mouseenter target
        document.getElementById("muestraData").style.textAlign = "left";
        document.getElementById("muestraData").innerHTML = `
        <br>
        <b>telefono : </b> 
        (848) 830-4113
        <br>
        <br>
        <b>domicilio : </b>
        5748 Sunset St
        <br>
        <br>
        <b>nacimiento : </b>
        8/3/19100
        <br>
        <br>
        <b>Email : </b>
        francis.hamilton@example.com
        <br>
        <br>
        `
        document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/watercolour-background-with-leaves_91008-323.jpg')";
        document.getElementById("nombre").style.color = "black"
    }
);
document.getElementById("experiencia").addEventListener(
    "mouseenter",
    () => {
        // highlight the mouseenter target
        document.getElementById("muestraData").style.textAlign = "center";
        document.getElementById("muestraData").innerHTML = `
        <h3 style="text-decoration: underline;">freelance</h3>
        <b>desde</b> 2018 <b>hasta</b> 2020
        <p>desarollador de paginas web, aplicaciones y apis</p>
        <em>tecnologias usadas : </em> html, css, javascript
        <br>
        <br>
        <h3 style="text-decoration: underline;">Globant</h3>
        <b>desde</b> 2020 <b>hasta</b> 2021
        <p>desarollador de paginas web y aplicaciones mobile</p>
        <em>tecnologias usadas : </em> html, css, javascript, kotlin, react
        <br>
        <br>
        <h3 style="text-decoration: underline;">PedidosYa</h3>
        <b>desde</b> 2021 <b>hasta</b>2022
        <p>desarollador y mantenimiento de aplicaciones y modulos</p>
        <em>tecnologias usadas : </em> html, css, javascript, python, php, ruby
        <br>
        <br>
        `
        /*document.body.style.background = "#f3f3f3 url('https://img.freepik.com/premium-photo/wood-table-city-center-modern-office-background_31965-1375.jpg') no-repeat right top";*/
        document.body.style.backgroundImage = "url('https://img.freepik.com/premium-photo/wood-table-city-center-modern-office-background_31965-1375.jpg')";
        document.getElementById("nombre").color = black
    }
);
document.getElementById("habilidades").addEventListener(
    "mouseenter",
    () => {
        // highlight the mouseenter target
        document.getElementById("muestraData").style.textAlign = "right";
        document.getElementById("muestraData").innerHTML = `
        <br>
        <h1>Iniciativa</h1>
        Me considero una persona con iniciativa, independencia y autonomía. Me encuentro muy comodo con trabajadores inquietos y curiosos. cada nuevo proyecto es un simbolo de compromiso y productividad.
        <br>
        <br>
        <h1>Trabajo en equipo</h1>
        Dispongo de plena disposición para integrarte en grupos. facilidad para asumir roles, mi objetivo es que cada uno de los integrantes se pueda desarrollar más y mejor a medida que el proyecto avanza.
        <br>
        <br>
        <h1>Creatividad</h1>
        Dos palabras que me definen son creatividad e innovación, tengo dias en los que me convierto en una maquina de generar ideas innovadoras y valiosas.
        <br>
        <br>
        <br>
        `
        document.body.style.backgroundImage = "url('https://i.pinimg.com/474x/83/13/e5/8313e5ae4e7994a141eceebd08e47edf.jpg')";
        document.getElementById("nombre").color = black
    }
);