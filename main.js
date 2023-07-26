document.addEventListener('DOMContentLoaded', () => {

        const page = document.querySelector('section');
        const cancel = document.querySelector('i');
        const audio = new Audio('./images/audio1.mp3');
        const click = new Audio('./images/click1.mp3')

    document.querySelector('.btn').onclick = ()=> {

        page.style.display = 'block';
        audio.play();
        click.play();
    };

    cancel.onclick = ()=> {

        page.style.display = 'none';
        audio.pause();
        click.play();
    };

        const change = document.querySelector('#change');
        const p = document.querySelector('p');

    change.onclick = ()=> {
        if(p.innerHTML === ' عليك أن تعرف: احتضان التحديات كفرص ، اتبع قلبك بشجاعة لا تتزعزع ، ثق بنفسك ، لأنك تمتلك إمكانات كبيرة ، ودع المثابرة تقودك إلى الانتصار.', change.innerHTML === 'Somali'){
            p.innerHTML = 'Waa inaad ogaataa: u dulqaado caqabadaha sida fursadaha, Qalbigaaga u raac geesinimo aan leexleexad lahayn. Isku kalsoonow naftaada, waayo waxaad leedahay karti weyn Adkaysiguna ha kugu hanuuniyo guusha.';
            change.innerHTML = 'العربي'
        }else{
            p.innerHTML = ' عليك أن تعرف: احتضان التحديات كفرص ، اتبع قلبك بشجاعة لا تتزعزع ، ثق بنفسك ، لأنك تمتلك إمكانات كبيرة ، ودع المثابرة تقودك إلى الانتصار.';
            change.innerHTML = 'Somali';
        };

        click.play();
    };

});