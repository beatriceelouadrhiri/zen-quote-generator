
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button');
    var container = document.getElementById('container');
    var imagesArray = ['zen1.jpg', 'zen2.jpg', 'zen3.jpg','zen4.jpg','zen5.jpg','zen6.jpg','zen7.jpg','zen8.jpg','zen9.jpg','zen10.jpg','zen11.jpg','zen12.jpg','zen13.jpg','zen14.jpg','zen15.jpg','zen16.jpg','zen17.jpg','zen18.jpg','zen19.jpg','zen20.jpg','zen21.jpg','zen22.jpg','zen23.jpg','zen24.jpg','zen25.jpg','zen26.jpg','zen27.jpg','zen28.jpg','zen29.jpg','zen30.jpg','zen31.jpg','zen32.jpg','zen33.jpg','zen34.jpg','zen35.jpg','zen36.jpg','zen37.jpg','zen38.jpg','zen39.jpg','zen40.jpg','zen41.jpg','zen42.jpg','zen43.jpg','zen44.jpg','zen45.jpg','zen46.jpg','zen47.jpg','zen48.jpg','zen49.jpg','zen50.jpg'];

    button.addEventListener('click', function() {
        var num = Math.floor(Math.random() * (imagesArray.length));
        document.zenImage.src = imagesArray[num];
    }, false);
}, false);
