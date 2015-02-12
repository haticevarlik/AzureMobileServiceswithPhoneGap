
$(document).ready(function () {
    // Client isminde bir MobileServiceClient instance'� olu�turuyoruz.
    //Buraya yazaca��n�z bilgileri Mobile service'e t�klay�p, ard�ndan "Connect your app"
    //b�l�m�nden g�rebilirsiniz.
    var client = new WindowsAzure.MobileServiceClient(
    'Buraya mobile service url si yaz�lacak.',
    'Buraya application key yaz�lmal�');

    //tblPerson yerine ba�ka herhangi bir isimde yaz�labilir.
    //�nemli olan tablo ve s�tun adlar�n� do�ru bir �ekilde girmektir.
    tblPerson = client.getTable('person');
    tblPerson.insert({ name: 'hatice', surname: 'varl�k' });

    //Bu k�sm�n Mobile Service ile bir ilgisi yok. Sadece kullan�c�y� bilgilendirmek
    //i�in kullan�yorum.
    alert("Kayd�n�z yap�lm��t�r.");
});