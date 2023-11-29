function shuffleNames() {
    var names = ['431004723 : Shorouk Mabkhout Alwani ' , '421002539 : Lama Murdhi Alanazi',
     '431010315 : Aliyah Dhaif Allah Al-Balawi', '421009316 : Shatha Abdul Rahman Al-Sadfani '];
    names.sort(() => Math.random() - 0.5);

    var membersList = document.getElementById('membersList');
    membersList.innerHTML = '';

    names.forEach(function (name) {
        var listItem = document.createElement('li');
        
        listItem.textContent = name;
        membersList.appendChild(listItem);
    });
}

shuffleNames();