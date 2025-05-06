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
        if (value === "none"){
            // console.log('foo');
        
        } else {
            html += '<p>';
            html += `On April ${jsonData[value].date} I woke up at ${jsonData[value].wakeTime}.`;
            html += '</p>';
        }
        document.querySelector('#result').innerHTML = html;

    }


    getData();
})();