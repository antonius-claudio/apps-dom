if (title == 'Product') {
    let tableView = document.createElement('table');
    divBodyContent.appendChild(tableView);
    let trHead = document.createElement('tr');
    trHead.setAttribute('class', 'head-table');
    tableView.appendChild(trHead);
    trHead.innerHTML = '<th>ID</th><th>Item</th><th>Stock</th><th>Price</th><th>Delete</th>';
    
    let trBody = [];
    for (let i = 0; i < 10; i++) {
        let td = [];
        trBody[i] = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            let alpha = 'abcdefghijklmnopqrstuvwxyz';
            td[j] = document.createElement('td');
            trBody[i].appendChild(td[j]);
            if (j == 0)
                td[j].innerHTML = i+1;
            else if (j == 1)
                td[j].innerHTML = 'Item ' + alpha[i];
            else if (j == 2)
                td[j].innerHTML = Math.round(Math.random()*100);
            else if (j == 3) {
                let rupiah = String(Math.round(Math.random()*100000));
                td[j].innerHTML = rup(rupiah);
            }
            else if (j == 4) {
                let buttonDelete = document.createElement('button');
                td[j].appendChild(buttonDelete);
                buttonDelete.innerHTML = 'X';
                buttonDelete.setAttribute('class', 'button-red');
                buttonDelete.setAttribute('onclick', `remov(${i})`);
                buttonDelete.addEventListener('click', function(event) {
                    event.defaultPrevented()
                });
            }
        }
        tableView.append(trBody[i]);
    }
    let buttonInsert = document.createElement('button');
    divBodyContent.appendChild(buttonInsert);
    buttonInsert.innerHTML = 'Insert';
    buttonInsert.setAttribute('class', 'button-green')
    buttonInsert.setAttribute('onclick', 'insert()');
    buttonInsert.addEventListener('click', function(event) {
        event.preventDefault()
    });
    function insert() {
        divBodyContent.removeChild(buttonInsert);
        let divFormProduct = document.createElement('div');
        divFormProduct.setAttribute('class', 'form-product head-content');
        divContent.appendChild(divFormProduct);
        let h1Create = document.createElement('h1');
        h1Create.innerHTML = 'Insert Product';
        divFormProduct.appendChild(h1Create);

        let formProduct = document.createElement('form');
        formProduct.setAttribute('class', 'body-content');
        formProduct.setAttribute('action', '#');
        divContent.appendChild(formProduct);

        let divlabelItem = document.createElement('div');
        divlabelItem.style.height = '30pt';
        formProduct.appendChild(divlabelItem);
        let labelItem = document.createElement('label');
        labelItem.setAttribute('for', 'item');
        labelItem.innerHTML = 'Item :';
        let inputItem = document.createElement('input');
        inputItem.setAttribute('type', 'text');
        inputItem.setAttribute('name', 'item');
        inputItem.setAttribute('id', 'item');
        divlabelItem.appendChild(labelItem);
        divlabelItem.appendChild(inputItem);

        let divlabelStock = document.createElement('div');
        divlabelStock.style.height = '30pt';
        formProduct.appendChild(divlabelStock);
        let labelStock = document.createElement('label');
        labelStock.setAttribute('for', 'stock');
        labelStock.innerHTML = 'Stock :';
        let inputStock = document.createElement('input');
        inputStock.setAttribute('type', 'text');
        inputStock.setAttribute('name', 'stock');
        inputStock.setAttribute('id', 'stock');
        divlabelStock.appendChild(labelStock);
        divlabelStock.appendChild(inputStock);

        let divlabelPrice = document.createElement('div');
        divlabelPrice.style.height = '30pt';
        formProduct.appendChild(divlabelPrice);
        let labelPrice = document.createElement('label');
        labelPrice.setAttribute('for', 'price');
        labelPrice.innerHTML = 'Price :';
        let inputPrice = document.createElement('input');
        inputPrice.setAttribute('type', 'text');
        inputPrice.setAttribute('name', 'price');
        inputPrice.setAttribute('id', 'price');
        divlabelPrice.appendChild(labelPrice);
        divlabelPrice.appendChild(inputPrice);

        let buttonadd = document.createElement('button');
        buttonadd.setAttribute('onclick', 'add()');
        buttonadd.innerHTML = 'Add';
        buttonadd.setAttribute('class', 'button-green')
        buttonadd.addEventListener('click', function (event) {
            event.preventDefault()
        });
        formProduct.appendChild(buttonadd);
    }
    function add() {
        let valueItem = document.getElementById('item');
        let valueStock = document.getElementById('stock');
        let valuePrice = document.getElementById('price');

        let trNew = document.createElement('tr');
        let count = 0;
        while(trBody[count]!=undefined){
            count++;
        }
        trBody[count] = document.createElement('tr');

        tableView.appendChild(trBody[count]);

        let tdNewNo = document.createElement('td');
        tdNewNo.innerHTML = count+1;
        trBody[count].appendChild(tdNewNo);
        let tdNewItem = document.createElement('td');
        tdNewItem.innerHTML = valueItem.value;
        trBody[count].appendChild(tdNewItem);
        let tdNewStock = document.createElement('td');
        tdNewStock.innerHTML = valueStock.value;
        trBody[count].appendChild(tdNewStock);
        let tdNewPrice = document.createElement('td');
        tdNewPrice.innerHTML = rup(valuePrice.value);
        trBody[count].appendChild(tdNewPrice);
        
        let tdNewDelete = document.createElement('td');
        trBody[count].appendChild(tdNewDelete);
        let buttonNewDelete = document.createElement('button');
        tdNewDelete.appendChild(buttonNewDelete);
        buttonNewDelete.innerHTML = 'X';
        buttonNewDelete.setAttribute('class', 'button-red');
        buttonNewDelete.setAttribute('onclick', `remov(${count})`);
        buttonNewDelete.addEventListener('click', function(event) {
            event.defaultPrevented()
        });
    }
    function rup(rupiah) {
        let reverserupiah = '';
        for (let k = rupiah.length; k > 0; k-=3) {
            
            if (rupiah[k-2] == undefined) {
                reverserupiah += rupiah[k-1];
            } else if (rupiah[k-3] == undefined) {
                reverserupiah += rupiah[k-1] + rupiah[k-2];
            } else {
                if (rupiah[k-4] == null) {
                    reverserupiah += rupiah[k-1] + rupiah[k-2] + rupiah[k-3];
                    
                } else reverserupiah += rupiah[k-1] + rupiah[k-2] + rupiah[k-3] + '.';
            }
        }
        let newRupiah = '';
        for (let l = reverserupiah.length-1; l >= 0 ; l--) {
            newRupiah += reverserupiah[l];
        }
        return 'Rp ' + newRupiah;
    }
    function remov(i) {
        tableView.removeChild(trBody[i]);
    }
}
