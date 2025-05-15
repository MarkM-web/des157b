(function(){
    let globalData;
    async function getData() {
        const myMoods = await fetch('data2.json');
        const data = await myMoods.json();
        console.log(data);
        globalData = data;
        // document.querySelector('#moods').innerHTML = outputHTML1(data);
        document.querySelector('#picker').innerHTML = createSelectList(data);
    }

    function createSelectList(data){
        let html = '<option value="none">---</option>';
        // let html = '';
        const dataPoints = Object.keys(data);
        console.log(dataPoints);
        dataPoints.forEach(function (eachPoint){
            html += `<option value="${eachPoint}">${data[eachPoint].date}</option>`;
        });
        return html;
    }

    document.querySelector('#picker').addEventListener('change', function(){
        const newValue = this.value;
        updateInterface(newValue, globalData);
    });

    function updateInterface(value, jsonData){
        let html = '';
        let hour = jsonData[value].wakeTime.charAt(1);

        if (value === "none"){
            // console.log('foo');
        
        } else {
            html += '<p>';
            html += `On April ${jsonData[value].date} I woke up at ${jsonData[value].wakeTime}.`;
            html += '</p>';
        }
        document.querySelector('#result').innerHTML = html;
        // console.log(jsonData[value].wakeTime);
        // console.log(jsonData[value].wakeTime.charAt(1));
        if(hour == '7'){
            document.querySelector('#myimg').innerHTML = `<img src="images/sun1.svg">`
        } else if (hour == '8'){
            document.querySelector('#myimg').innerHTML = `<img src="images/sun2.svg">`
        } else {
            document.querySelector('#myimg').innerHTML = `<img src="images/sun3.svg">`
            console.log("oops");
        }

    }


    getData();
})();