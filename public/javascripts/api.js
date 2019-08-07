const app1 = document.getElementById('root1');

const container1 = document.createElement('table');
container1.setAttribute('class',container1);
app1.appendChild(container1);


//http request to the remote API
var request = new XMLHttpRequest();

// open the connection
request.open('GET','https://api.icowatchlist.com/public/v1/',true);

//get the data into onload function
request.onload = function(){
    var data = JSON.parse(this.response);
  // var c=data
    if(request.status >=200 && request.status<400) {
       
        Object.keys(data).forEach(icos =>{
            
            // console.log(data[icos].live.length);
            var count=0; 
            for(var i=0;i<data[icos].finished.length;i++)
           
            {
                if (data.ico.finished[i].price_usd=="NA" ||i>15) {
                  i++;
                }
                else{ 
                    count=count+1;
            const link = document.createElement('a')
            link.setAttribute('href', data.ico.finished[i].website_link)
            const card = document.createElement('tr')
            card.setAttribute('class', 'card')
            const td1 = document.createElement('td')
            const img = document.createElement('img');
            var x = data[icos].finished[i].image;
            img.setAttribute('src',x)
            // img.setAttribute('height','40px')
            // img.setAttribute('width','120px')

            const td2 = document.createElement('td')
            td2.textContent = data.ico.finished[i].name;

            
            const td3 = document.createElement('td');
            td3.textContent = "$" + data.ico.finished[i].price_usd;
            td1.appendChild(img);
            container1.appendChild(card);
            card.appendChild(link)
            link.appendChild(td1);
            card.appendChild(td2);
            card.appendChild(td3);
        
            }
        }
       
        console.log(count);
        })
    
        
            
        
    }

    else{
        console.log('error');
    }

}

//send the request 
request.send();



