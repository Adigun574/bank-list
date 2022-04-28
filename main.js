const bankList = document.getElementById('bank-list')
const bankUrl = "./banks.json"
let banks = []


const getBanks = () => {
    fetch(bankUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        banks = data
        renderBanks()
    })
}


const renderBanks = () => {
    let bankss = ''
    banks.forEach(bank => {
        bankss+=`
        <div class="bank-card">
            <div class="card-content">
                <div class="bank-logo">
                    <img src=${bank.logo} height="50px">
                </div>
                <div>
                    <h3>${bank.name}</h3>
                    <p><b>Type:</b> ${bank.type}</p>
                    <p><b>Address:</b> ${bank.address}</p>
                    <p><b>Management Team:</b></p>
                    <ul>
                        <li>Chairman: ${bank.management.chairman}</li>
                        <li>MD: ${bank.management.md}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    })
    bankList.innerHTML = bankss
}

getBanks()


