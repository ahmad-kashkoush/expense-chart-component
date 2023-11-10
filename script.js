'use strict';
const getData = async function () {
    const jsonData = await fetch('./data.json');
    const data = await jsonData.json();
    return data;
}
const init = async function () {
    const data = await getData();
    console.log(data);
    const tot = data.map(ele => ele.amount).reduce((acc, ele) => acc + ele, 0);
    // console.log(tot);
    const elements = [...document.querySelectorAll('.day-bar')];
    elements.forEach((ele, i) => {
        console.log(data[i]);
        const heightValue = ((data[i].amount + 80) / tot) * 100;
        const bar = ele.querySelector('.bar');
        bar.setAttribute('data-amount', data[i].amount);
        bar.setAttribute('style', `--height:${heightValue}%`);
        // console.log(bar);
    })
}
init();
