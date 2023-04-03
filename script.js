//--------------------------------------------------------------------------------------------//
// Prduto //
const prod = [ 
    {
        id: 0,
        nome: 'Água Mineral - Voss',
        img: 'Voss C Gás.jpg',
        quant: 0,
        price: 32.99,
        sum: 32.99,
        desc: ''
    },
    {
        id: 1,
        nome: 'Água C/ Gás - Voss',
        img: 'Voss C Gás.jpg',
        quant: 0,
        price: 36.99,
        sum: 36.99,
        desc: ''
    },
    {
        id: 2,
        nome: 'Água Portuguesa - Chic',
        img: 'Chic.jpeg',
        quant: 0,
        price: 59.99,
        sum: 59.99,
        desc: ''
    },
    {
        id: 3,
        nome: 'Água Sul Africana - Karoo',
        img: 'Karoo.jpeg',
        quant: 0,
        price: 35.99,
        sum: 35.99,
        desc: ''
    },
    {
        id: 4,
        nome: 'Água De Cacto - True Nopal',
        img: 'Nopal.jpeg',
        quant: 0,
        price: 125.66,
        sum: 125.66,
        desc: ''
    },
    {
        id: 5,
        nome: 'Água Mineral - Oxygizer',
        img: 'Oxygizer.jpeg',
        quant: 0,
        price: 52.55,
        sum: 52.50,
        desc: ''
    },
    {
        id: 6,
        nome: 'Água Finlandesa - Veen',
        img: 'Veen.jpeg',
        quant: 0,
        price: 35.99,
        sum: 35.99,
        desc: ''
    },
    {
        id: 7,
        nome: 'Água Vulcanica - Waiakea',
        img: 'Vulcanica.jpeg',
        quant: 0,
        price: 111.33,
        sum: 111.33,
        desc: ''
    },
    {
        id: 8,
        nome: 'Água de Carvão Ativo - Blk',
        img: 'aguablk.jpg',
        quant: 0,
        price: 35.18,
        sum: 35.18,
        desc: ''
    },
]
//--------------------------------------------------------------------------------------------//
function Lojainit(){
    var contProd = document.getElementById(`produtos`);
    prod.map((val)=>{  
       contProd.innerHTML += `
        <div class="produtosingle">
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</p>
            <p>R$ `+val.price+`</p>
            <a key="`+val.id+`" href="#" class="buy">Comprar</a>
        </div>
        `;
    }) 
}
Lojainit(); 
function Modal(){
    modal.showModal()
    Opbasket()
}



function AddP(id){
    prod[id].quant += 1
    prod[id].price += prod[id].sum
    modal.close()
    modal.showModal()
    console.log(prod);
    Opbasket()
    }
    
    



function RmvQ(id){
    prod[id].quant -= 1
    prod[id].price -= prod[id].sum
    modal.close()
    modal.showModal()
    console.log(prod);
    Opbasket()
    if (prod[id].quant == 0){
        prod[id].price = prod[id].sum

}
}

function Buy(){
    modal.close()
    modalS.showModal()
    Oppaym()
}

function Opbasket(){
    var contBasket = document.getElementById(`basket`);
    contBasket.innerHTML = "";
    prod.map((val)=>{  
       if(val.quant > 0){contBasket.innerHTML += `
       <div class="basketsingle">
            <img src="`+val.img+`"/>
            <p class ="basketnm">`+val.nome+`</p>
            <div class ="basketinf">
               <p>Quantidade: `+val.quant+`| Preço:R$ `+val.price.toFixed(2)+`</p>
           </div>
           <div class="basketbtn">
                <span><button value="Mickey" class ="addb" onclick="AddP(`+val.id+`)">Adicionar</button>
                <button value="Mickey" onclick="RmvQ(`+val.id+`)">Remover</button></span>    
           </div>
           <div class="buybtn">
                <button onclick="Buy()">Prosseguir</button>
            </div>
           
       </div>
       `;
        
    }
    }) 
}
//--------------------------------------------------------------------------------------------//
function Oppaym(){
    var contPaym = document.getElementById(`paym`);
    contPaym.innerHTML = "";
    var pricefin = 0
    prod.map((val)=>{  
       if(val.quant > 0){
        pricefin += val.price
    }
    })
    contPaym.innerHTML += `
        <p>Preço:R$ `+pricefin.toFixed(2)+`</p>
        <p>Frete:R$ `+100+`.00</p>
        <p>Preço Final:R$ `+(pricefin + 100).toFixed(2)+`</p>
        <hr>
        <form>
            <input type="radio" id="visa" name="fav_language" value="visa">
            <label for="visa">Visa</label><br>
            <input type="radio" id="master" name="fav_language" value="master">
            <label for="master">Mastercard</label><br>
            <input type="radio" id="american" name="fav_language" value="american">
            <label for="american">American Express</label>
        </form>
        <hr>
        <div class="paycard">
            <div class="">
                <label id="labelcep" for="cep">CEP</label>
                <input type="text" id="cep" placeholder=" " required />
            </div>
            <div class="">
                <label id="labelcpf" for="cpf">CPF/CNPJ</label>
                <input type="text" id="cpf" placeholder=" " required />
            </div>
            <div class="">
                <label id="labelnomep" for="nomep">Nome do Portador</label>
                <input type="text" id="nomep" placeholder=" " required />
            </div>
            <div class="">
                <label id="labelval" for="val">Data de Validade</label>
                <input type="date" id="val" placeholder=" " required />
            </div>
            <div class="">
                <label id="labelnumc" for="numc">Número do Cartão</label>
                <input type="text" id="numc" placeholder=" " required />
            </div>
            <div class="">
            <label id="labelcod" for="cod">Código de Segurança</label> 
            <input type="text" id="cod" placeholder=" " required />
            </div>
        </div>
        <button>Finalizar Compra</button>
       `;
    let cep = document.querySelector('#cep')
    let labelCEP = document.querySelector('#labelcep')
    let validCEP = false
    cep.addEventListener('keyup', () => {
        var cepRegex =  /^[0-9]{5}-[0-9]{3}$/;
        validc = cepRegex.test(cep.value);
        console.log(validc)
        if(validc == false){
        labelCEP.setAttribute('style', 'color: red')
        labelCEP.innerHTML = 'O CEP não está Correto'
        cep.setAttribute('style', 'border-color: red')
        validCEP = false
      } if(validc == true) {
        labelCEP.setAttribute('style', 'color: green')
        labelCEP.innerHTML = 'CEP'
        cep.setAttribute('style', 'border-color: green')
        validCEP = true
      }
    })
    let nome = document.querySelector('#nomep')
    let labelNome = document.querySelector('#labelnomep')
    let validNome = false
    nome.addEventListener('keyup', () => {
        if(nome.value.length > 19){
            labelNome.setAttribute('style', 'color: red')
            labelNome.innerHTML = 'Nome *Insira no máximo 19 caracteres'
            nome.setAttribute('style', 'border-color: red')
            validNome = false
          } else {
          labelNome.setAttribute('style', 'color: green')
          labelNome.innerHTML = 'Nome'
          nome.setAttribute('style', 'border-color: green')
          validNome = true
        }
      })
    let cartao = document.querySelector('#numc')
    let labelcartao = document.querySelector('#labelnumc')
    let validcartao = false
    cartao.addEventListener('keyup', () => {
        var visaRegex = /^4[0-9]{12,15}$/;
        var masterRegex = /^5[1-5]{1}[0-9]{14}$/;
        var americaRegex = /^3(4|7){1}[0-9]{13}$/;
        let validV = visaRegex.test(cartao.value);
        let validM = masterRegex.test(cartao.value);
        let validA = americaRegex.test(cartao.value);
        if((validV == true || validM == true || validA == true) && cartao.value.length == 16){
            labelcartao.setAttribute('style', 'color: green')
            labelcartao.innerHTML = 'Número do Cartão'
            cartao.setAttribute('style', 'border-color: green')
            validcartao = true
      } else {
            labelcartao.setAttribute('style', 'color: red')
            labelcartao.innerHTML = 'O Cartão não está Correto'
            cartao.setAttribute('style', 'border-color: red')
            validcartao = false
      }
    })
    let cod = document.querySelector('#cod')
    let labelcod = document.querySelector('#labelcod')
    let validcod = false
    cod.addEventListener('keyup', () => {
        if(cod.value.length != 3){
            labelcod.setAttribute('style', 'color: red')
            labelcod.innerHTML = 'O CVC tem 3 caracteres'
            cod.setAttribute('style', 'border-color: red')
            validcod = false
          } if(cod.value.length == 3) {
          labelcod.setAttribute('style', 'color: green')
          labelcod.innerHTML = 'Código de Segurança'
          cod.setAttribute('style', 'border-color: green')
          validcod = true
        }
      })
           
}

//--------------------------------------------------------------------------------------------//
 
const modal = document.getElementById('basket')
const modalS = document.getElementById('paym')

var link = document.getElementsByClassName('buy');
for(var i = 0; i < link.length; i++){
    link[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        prod[key].quant++;
        console.log(prod);
        Modal();
        return false;
    })
}
//--------------------------------------------------------------------------------------------//