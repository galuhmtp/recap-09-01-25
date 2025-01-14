// var | let memungkinkan kita untuk mengubah nilainya setelah kita isi

// function replaceName(){

//     let name = prompt("siapakah anda?", "");
//     document.getElementById("name").innerHTML = name
// }

// addEventListener dia akan mendengarkan event apapun yang terjadi dalam html. Setiap di click dia akan menjelaskan sebuah function
// document.getElementById("gantinama").addEventListener("click" , function() {
//     replaceName();
// })


//

function validateForm() {
    const nama = document.forms['message-form']['name-input'].value
    const angka = 11
    
    if (nama == '') {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong";
        
        return false
    }

    setName(nama);

    return false;

}

function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById('error-name').innerHTML = "";
}
