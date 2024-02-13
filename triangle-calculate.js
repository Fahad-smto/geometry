function triangleCalculate(){
    //teiangleBase
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    const triangleHeight =document.getElementById('triangleHeight')
    const triangleHeightText = triangleHeight.value;
    const height= parseFloat(triangleHeightText)
    console.log(height);

    //calculate area
    const area =0.5* base * height
    console.log ('Area of the triangle is', area);

    //triangle-area 
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}
//teiangleHight
