// alert('ma is coming')

const maComing = () => {
    alert('ammu is coming. open the book')
}

const askPicnic = () => {
    const response = confirm('are you going to picnic')
    console.log(response)
    if (response === true) {
        alert('amake fee ta bkash kore de')
    }
    else {
        console.log('dure giye mor')
    }
}

const askName = () => {
    const name = prompt('what is your name?')

    if (name) {
        console.log(name)
    }
}