
$(document).ready(function () {
    // Client isminde bir MobileServiceClient instance'ý oluþturuyoruz.
    //Buraya yazacaðýnýz bilgileri Mobile service'e týklayýp, ardýndan "Connect your app"
    //bölümünden görebilirsiniz.
    var client = new WindowsAzure.MobileServiceClient(
    'Buraya mobile service url si yazýlacak.',
    'Buraya application key yazýlmalý');

    //tblPerson yerine baþka herhangi bir isimde yazýlabilir.
    //Önemli olan tablo ve sütun adlarýný doðru bir þekilde girmektir.
    tblPerson = client.getTable('person');
    tblPerson.insert({ name: 'hatice', surname: 'varlýk' });

    //Bu kýsmýn Mobile Service ile bir ilgisi yok. Sadece kullanýcýyý bilgilendirmek
    //için kullanýyorum.
    alert("Kaydýnýz yapýlmýþtýr.");
});