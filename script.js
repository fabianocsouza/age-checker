const checkButton = document.getElementById('button');


checkButton.addEventListener('click', () =>{
    const currentYear = new Date().getFullYear();
    const userYear = Number(document.getElementById('year').value);

    if(userYear == 0 || userYear > currentYear)
        alert('😱[ERRO]👎🏽 Verifique os dados e tente novamente!❌');
    
    const userGender = document.getElementsByName('gender');
    const age = currentYear - userYear;
    let gender = (userGender[0].checked)? 'Men': 'Women';
   
    const userData = {
        age,
        gender
    };

    const image = imageByAge(userData);

    //extra language.
    gender =( gender == 'Men')?'Homem':'Mulher';

    const result = document.querySelector('#result');
    result.style.textAlign = 'center';
    result.innerHTML = `Detectamos <strong>${gender}</strong> com idade <strong>${age}</strong> anos.`;
    result.appendChild(image);
  
})

function imageByAge(userData){
    const {age, gender} = userData;
    const image = document.createElement('img');

    if(age >= 0 && age < 10){
        //bebay
        image.setAttribute('src', `./assets/photo-baby-${gender}.png`);

    }else if(age < 21){
        //young
        image.setAttribute('src', `./assets/photo-young-${gender}.png`);

    }else if(age < 50){
        //adult
        image.setAttribute('src', `./assets/photo-adult-${gender}.png`);

    }else{
        //old aged
        image.setAttribute('src', `./assets/photo-oldAged-${gender}.png`)
    }

    return image;
}