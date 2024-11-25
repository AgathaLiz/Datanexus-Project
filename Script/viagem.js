document.addEventListener("DOMContentLoaded", function() {
    const numArray = [200, 180, 160, 140, 120, 100, 80, 60, 40, 20, 0];
    const paisArray = ["EUA","Portugal","Paraguai","Reino Unido", "Japão", "Itália", "Espanha", "Alemanha", "Canadá", "França"];

   const data = [{
    x: numArray,
    y: paisArray,
    type:"bar",
    orientation: "h",
    marker: {color:"rgba(171, 71, 252, 0.778)"}
   }];

   const layout = {title: "Top 10 países que mais recebem Brasileiros!",
    font: { size: 16, color: 'rgb(39, 4, 67)', style:'oblique'}
   };

   Plotly.newPlot("myPlot", data, layout);
});



