const divSize = document.getElementById('divSize');


setTimeout(function () {
    divSize.innerText = "10";
    setTimeout(function () {
        divSize.innerText = "9";
        setTimeout(function () {

            divSize.innerText = "8";
            setTimeout(function () {

                divSize.innerText = "7";
                setTimeout(function () {

                    divSize.innerText = "6";
                    setTimeout(function () {

                        divSize.innerText = "5";
                        setTimeout(function () {

                            divSize.innerText = "4";
                            setTimeout(function () {

                                divSize.innerText = "3";
                                setTimeout(function () {

                                    divSize.innerText = "2";
                                    setTimeout(function () {

                                        divSize.innerText = "1";
                                        setTimeout(function () {

                                            divSize.innerText = "Happy Independence Day!";

                                        }, 1000);


                                    }, 1000);


                                }, 1000);


                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);
    }, 1000);
}, 1000);

