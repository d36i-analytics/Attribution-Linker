window.d36i_attribute = (clientTab, eventName) => {
    const xhttp = new XMLHttpRequest();
  
    xhttp.onload = () => {
        const data = JSON.parse(xhttp.responseText);
        data.event = eventName;
        
        window.dataLayer = window.dataLayer || [];
        dataLayer.push(data);
    };
  
    xhttp.onerror = () => {
        console.log('Error while sending GET request to D36i API');
    
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({ event: eventName });
    };
    
    xhttp.open('GET',
        'https://api.d36i.com/v1/attribute/' + 
        clientTab + '/' + window.location.search);

    xhttp.send();
}