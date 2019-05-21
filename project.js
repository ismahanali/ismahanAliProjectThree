$(function () {
    $('#questions').hide();
    $('#answers').hide();

    const character = [
        {
            name: "Thomas Barrow",
            scandal: "yes",
            personality: "mess",
            visitor: "fee",
            image: './images/barrow.png',
            counter: 0

        }, {
            name: "Sybil Branson",
            scandal: "no",
            personality: "angel",
            visitor: "oblige",
            image: './images/sybil.png',
            counter: 0

        }, {
            name: "Violet Crawley",
            scandal: "sometimes",
            personality: "witty",
            visitor: "bye",
            image: './images/violet.jpg',
            counter: 0

        }
    ]

    $('.sent').on('click', function (event) {
        event.preventDefault();
        const answer1 = $('input[name=scandal]:checked', 'form').val();
        const answer2 = $('input[name=personality]:checked', 'form').val();
        const answer3 = $('input[name=visitor]:checked', 'form').val();
        const inputAnswer = {
            scandal: answer1,
            personality: answer2,
            visitor: answer3,
        }

        if (answer2 === 'witty') {
            $(".result").attr("src", "images/violet.jpg");
            $('.picture').html("Violet Crowley");
        } else if (answer1 === 'yes') {
            $(".result").attr("src", "images/barrow.png");
            $('.picture').html("Thomas Barrow");
        } else if (answer3 === 'fee') {
            $(".result").attr("src", "images/barrow.png");
            $('.picture').html("Thomas Barrow");
        } else if (answer3 === 'bye') {
            $(".result").attr("src", "images/violet.jpg");
            $('.picture').html("Violet Crowley");
        } else if (answer3 === 'oblige') {
            $(".result").attr("src", "images/sybil.png");
            $('.picture').html("Sybil Branson");
        } else if (answer3 === 'fee') {
            $(".result").attr("src", "images/barrow.png");
            $('.picture').html("Thomas Barrow");
        } else if (answer2 !== 'angel') {
            $(".result").attr("src", "images/sybil.png");
            $('.picture').html("Sybil Branson");
        } else {



            for (const i = 0; i < character.length; i++) {
                if (inputAnswer.scandal === character[i].scandal) {
                    character[i].counter += 1;
                }
                if (inputAnswer.personality === character[i].personality) {
                    character[i].counter += 1;
                }
                if (inputAnswer.visitor === character[i].visitor) {
                    character[i].counter += 1;
                }
            }; //for loop end

            function characterResult(character) {
                const max = {};
                for (const i = 0; i < character.length; i++) {
                    if (character[i].counter > (max.counter || 0)) {
                        max = character[i];
                    }
                }
                return max;
            }

            const casting = characterResult(character);

            $('.result').attr('src', casting.image);
            const downton = casting.name;
            $('.picture').html(downton);
        }
    });

    $('.resetTest').on('click', function () {
        window.location.reload(true);
    });

    $('.takeTest').on('click', function () {
        $('header').hide();
        $('#questions').fadeIn();
    });

    $('.submitTest').on('click', function () {
        $('#questions').hide();
        $('#answers').fadeIn();
    });
});

// code inspired heavily by DoggyDoppleganger project example