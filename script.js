var grid = document.getElementById("container");
const button1 = document.getElementById('reset');
const button2  = document.getElementById('colorset');
var z = 0;
const container = document.getElementById('container');
GenColor  = "Blue";
const title = document.getElementById('head');


button1.addEventListener('click', (e) => {         
    
    
    let x = prompt('Enter pixels per unit');
    var y = 640/ x;

    
        container.innerHTML = '';

    grid.style.cssText = "display: grid;grid-template-rows: repeat(" + x + "," + y + "px) ; grid-template-columns: repeat(" + x + "," + y +"px) ;";
    
    for(var i=0; i<x;i++)
    {
        for(var j=0; j<x; j++)
        {   
            
            const divi = document.createElement('div');
            divi.className='square';
            divi.style.cssText = 'display: inline-block;vertical-align: middle;text-align: center;background-color: white;  height: ' + y + 'px; width: ' + y +' px;';
            container.appendChild(divi);
            divi.addEventListener('mouseover', (e) => {
                divi.style.backgroundColor  =  "" + GenColor + "" ;
            });
            const button1 = document.getElementById('reset');
            button1.addEventListener('click', (e) => {
                divi.style.backgroundColor = "White";
            });
        
        }

    }

});

function removeElements(elements) {
    for (var i=0; i<elements.length; i++) {
      elements[i].parentNode.removeChild(elements[i]);
    }
}


grid.style.cssText = "display: grid;grid-template-rows: repeat(" + 16 + "," + 40 + "px) ; grid-template-columns: repeat(" + 16 + "," + 40 +"px) ;";
    

for(var i=0; i<16;i++)
    {
        for(var j=0; j<16; j++)
        {   
            
            const divi = document.createElement('div');
        
            divi.className='square';
            divi.style.cssText = 'display: inline-block;vertical-align: middle;text-align: center;background-color: white;  height: ' + 40 + 'px; width: ' + 40 +' px;';
            container.appendChild(divi);
            divi.addEventListener('mouseover', (e) => {
                divi.style.backgroundColor  = " " + GenColor + ""; 
            });
            const button1 = document.getElementById('reset');
            button1.addEventListener('click', (e) => {
                divi.style.backgroundColor = "White";
            });
        
        }

    }




button2.addEventListener('click', (e) => {    


var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
		
		}
		GenColor=color;
		head.style.color=GenColor;
		
});
