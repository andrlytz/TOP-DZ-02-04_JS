let s = 0
let c1 = 0 
let c2 = 0
let c3 = 0
let arr1 = []

function random (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return counter = Math.floor(Math.random() * (max - min + 1)) + min;
}

let en = random(10,18)

$('#enemy').text('Число оппонента: ' + en)

function f1() {
    let num = random(1,6)
    switch (num) {
        case 1: 
            $('#cub1').attr('src', '1.png')
            c1 = num
            // arr1.push(num)
            break
        case 2:
            $('#cub1').attr('src', '2.png')
            c1 = num
            // arr1.push(num)
            break
        case 3:
            $('#cub1').attr('src', '3.png')
            c1 = num
            // arr1.push(num)
            break
        case 4:
            $('#cub1').attr('src', '4.png')
            c1 = num
            // arr1.push(num)
            break
        case 5:
            $('#cub1').attr('src', '5.png')
            c1 = num
            // arr1.push(num)
            break
        case 6:
            $('#cub1').attr('src', '6.png')
            c1 = num
            // arr1.push(num)
            break
    }
}
function f2() {
    let num = random(1,6)
    switch (num) {
        case 1: 
            $('#cub2').attr('src', '1.png')
            c2 = num
            // arr1.push(num)
            break
        case 2:
            $('#cub2').attr('src', '2.png')
            c2 = num
            // arr1.push(num)
            break
        case 3:
            $('#cub2').attr('src', '3.png')
            c2 = num
            // arr1.push(num)
            break
        case 4:
            $('#cub2').attr('src', '4.png')
            c2 = num
            // arr1.push(num)
            break
        case 5:
            $('#cub2').attr('src', '5.png')
            c2 = num
            // arr1.push(num)
            break
        case 6:
            $('#cub2').attr('src', '6.png')
            c2 = num
            // arr1.push(num)
            break
    }
}

function f3() {
    let num = random(1,6)
    switch (num) {
        case 1: 
            $('#cub3').attr('src', '1.png')
            c3 = num
            // arr1.push(num)
            break
        case 2:
            $('#cub3').attr('src', '2.png')
            c3 = num
            // arr1.push(num)
            break
        case 3:
            $('#cub3').attr('src', '3.png')
            c3 = num
            // arr1.push(num)
            break
        case 4:
            $('#cub3').attr('src', '4.png')
            c3 = num
            // arr1.push(num)
            break
        case 5:
            $('#cub3').attr('src', '5.png')
            c3 = num
            // arr1.push(num)
            break
        case 6:
            $('#cub3').attr('src', '6.png')
            c3 = num
            // arr1.push(num)
            break
    }
}

function f5() {
    if (c1 ==1 && c2 ==2 && c3 == 3) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
    }
    if (c1 ==1 && c2 ==3 && c3 == 2) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
    }
    if (c1 ==2 && c2 ==1 && c3 == 3) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
    }
    if (c1 ==2 && c2 ==3 && c3 == 1) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
    }
    if (c1 ==3 && c2 ==1 && c3 == 2) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
    }
    if (c1 ==3 && c2 ==2 && c3 == 1) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
    }
}

function f6() {
    if (c1 == 4 && c2 == 5 && c3 == 6) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
        arr1.push(0)
    }
    if (c1 ==4 && c2 ==6 && c3 == 5) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
        arr1.push(0)
    }
    if (c1 ==5 && c2 ==4 && c3 == 6) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
        arr1.push(0)
    }
    if (c1 ==5 && c2 ==6 && c3 == 4) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
        arr1.push(0)
    }
    if (c1 ==6 && c2 ==4 && c3 == 5) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
        arr1.push(0)
    }
    if (c1 ==6 && c2 ==5 && c3 == 4) {
        arr1.push(c1)
        arr1.push(c2)
        arr1.push(c3)
        arr1.push(0)
    }
}


// function f4(value) {
//     console.log('ok1')
//     return value < 4;
// }



// function f5(value) {
//     console.log('ok1')
//     return value > 5;
// }



$('#start').click(function () {
    if (s<=3) {
        f1()
        f2()
        f3()
        s++
    }
    else {
        alert ('Попытки закончились, нажмите кнопку конец хода!')
    }
})

$('#but1').click(function () {
    if (s<=3) {
        f1()
        s++
    }
    else {
        alert ('Попытки закончились, нажмите кнопку конец хода!')
    }
})

$('#but2').click(function () {
    if (s<=3) {
        f2()
        s++
    }
    else {
        alert ('Попытки закончились, нажмите кнопку конец хода!')
    }
})

$('#but3').click(function () {
    if (s<=3) {
        f3()
        s++
    }
    else {
        alert ('Попытки закончились, нажмите кнопку конец хода!')
    }
})

    // const arr2 = arr1.filter(f4);
    // const arr3 = arr1.filter(f5);

$('#but4').click(function (){
    let sum = c1+c2+c3
    f5()
    f6()
    if (arr1.length == 3) {
       alert ('Ты жестко проиграл!!!!')
    //    document.location.reload()
       return
    }
    if (arr1.length == 4) {
        alert ('Красивая победа!')
        // document.location.reload()
        return
    }
    if (sum > en) {
        alert ('Победа!')
        document.location.reload()
        return
    }
    if (sum < en) {
        alert ('Проиграл!')
        document.location.reload()
        return
    }
    if (sum == en) {
        alert ('Ничья!')
        document.location.reload()
        return
    }
})
