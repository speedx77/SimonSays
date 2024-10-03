
       

        

        function beginLevel() {

            //selectRandomSimon()
            //selectRandomSimon()
            setTimeout(selectRandomSimon);
            //setTimeout(selectRandomSimon)

            $("h1").html("Level " + level);
            

            //userSelectSimon();
            //console.log("ar length: " + simonArray.length);

            for (var i = 0; i < simonArray.length; i++){

                if (userSimonArray.toString() === simonArray.toString()) {
                    level++
                    beginLevel();
                    console.log("for loop ran")

                }

                else if (userSimonArray.toString != userSimonArray.toString()) {
                    endGame();
                }



            }

            /*

            $(".simon").click( function () {

                animateSimonClick($(this).html());
                playSimonAudio($(this).html());
                userSimonArray.push($(this).html());
                console.log(userSimonArray);


                /*
                for (var i = 0; i < simonArray.length; i ++) {

                    if (userSimonArray[i].toString() != simonArray[i].toString()) {
                            endGame();
                            gameState = false;
                            
                        }

                    else {
                        console.log("winner")
                    }

                }
                
                

            })

            

            for (var i = 0; i < levelNum; i++) {

                

                
                //var storedSimon = selectRandomSimon()
                
                
                $(".simon").click( function () {

                    animateSimonClick($(this).html());
                    playSimonAudio($(this).html());
                    userSimonArray.push($(this).html());
                    clickNum++;
                    console.log(clickNum)

                    for (var i = 0; i < simonArray.length; i ++) {

                        if (userSimonArray[i].toString() != simonArray[i].toString()) {
                            endGame();
                            gameState = false;
                            
                        }

                        else {
                            
                            if (clickNum === levelNum) {
                                //$(".simon").off("click");
                                level++;
                                console.log("clickNum: " +clickNum)
                                console.log("level: " +  levelNum);
                                console.log("i: " + i);
                                //$(".simon").off("click");
                                beginLevel(i)
                            }
                            
                        }

                    }

                    })

            }
            

            */


        }



        function beginGameLoop () {

            
            

            for (var i = 0; i < 5; i++) {
                
                $("h1").html("Level " + level);


                
                var clickNum = 0;
                //var storedSimon = selectRandomSimon()
                setTimeout( selectRandomSimon, 1000)

                $(".simon").click( function () {


                    animateSimonClick($(this).html());
                    playSimonAudio($(this).html());
                    userSimonArray.push($(this).html());
                    clickNum++;
                    console.log(clickNum)

                    for (var i = 0; i < simonArray.length; i ++) {

                        if (userSimonArray[i].toString() != simonArray[i].toString()) {
                            endGame();
                            gameState = false;
                        }

                        else {
                            
                            if (clickNum === level) {
                                $(".simon").off("click");
                                level++;
                                console.log("level: " +  level);
                                console.log("i: " +i);
                            }
                            
                        }

                    }

                })

            }

            /*
            while (gameState = true) {

                

                

            }

            */



        }

        function beginGame () {

            $(".simon").click( function () {

                animateSimonClick($(this).html());
                playSimonAudio($(this).html());
                userSimonArray.push($(this).html())
                clickNum++

                if (clickNum === 1) {
                    $(".simon").off("click")
                }
                //$(".simon").off("click");
                var userSimon = ($(this).html());
                console.log(userSimonArray)

                if (simonArray.toString() === userSimonArray.toString()) {

                    //nextLevel();

                    
                    userSimonArray = []
                    level++;
                    $("h1").html("Level " + level);

                    setTimeout( selectRandomSimon, 1000)

                    //selectRandomSimon()

                    $(".simon").click( function () {

                        animateSimonClick($(this).html());
                        playSimonAudio($(this).html());
                        userSimonArray.push($(this).html())

                        //for loop?

                        if(userSimonArray[0].toString() != simonArray[0].toString()) {
                            endGame();
                        }

                        clickNum++
                        if (clickNum === 3) {

                            $(".simon").off("click")
                            var userSimon = ($(this).html());
                            console.log(userSimonArray)
                            console.log(simonArray)

                            if (simonArray.toString() === userSimonArray.toString()) {
                                level++;
                                $("h1").html("Level " + level);

                                
                            }

                        else {
                            endGame();
                        }

                            /*
                            if (clickNum === 5) {
                                $(".simon").off("click")
                                var userSimon = ($(this).html());
                                console.log(userSimon)

                            }
                            */
                                

                        }


                        
                    

                    })

                }

            })

        }

    














































        function beginLevel2 () {

                //console.log("begin")
                $("h1").html("Level " + level);
                selectRandomSimon()
                //console.log("storedSimon: " + storedSimon)

                $(".simon").on("click", function () {

                    animateSimonClick($(this).html());
                    playSimonAudio($(this).html());
                    userSimonArray.push($(this).html())
                    clickNum++
                    //console.log(clickNum)
                    //console.log(simonArray[0])

                    if (userSimonArray[clickNum - 1] != simonArray[clickNum - 1]) {
                        $(".simon").off("click")
                        endGame();
                    }

                    if (userSimonArray.toString() === simonArray.toString()) {
                        console.log("you won 1")

                        userSimonArray = [];
                        level++
                        $("h1").html("Level " + level);

                        setTimeout( selectRandomSimon, 1000)

                        $(".simon").on("click", function () {

                
                        animateSimonClick($(this).html());
                        playSimonAudio($(this).html());
                        userSimonArray.push($(this).html())
                        clickNum++

                        if (clickNum === 2) {

                            if (userSimonArray.toString() === simonArray.toString()) {
                            console.log("you won 2")
                        }

                        }


                        

                        })

                    }

                })


        }

        function nextLevel2() {

            userSimonArray = [];
            level++
            $("h1").html("Level " + level);

            setTimeout( selectRandomSimon, 1000)

            console.log(clickNum)
            clickNum++

            $(".simon").on("click", function () {

                
                animateSimonClick($(this).html());
                playSimonAudio($(this).html());
                userSimonArray.push($(this).html())
                
                

                if (userSimonArray[1].toString() != simonArray[1].toString()) {
                    $(".simon").off("click")
                    endGame();
                }

                if (userSimonArray.toString() === simonArray.toString()) {
                    nextLevel2();
                }

                })



        }


        function nextLevel() {

            userSimonArray = []

                        level++;
                        $("h1").html("Level " + level);

                        setTimeout( selectRandomSimon, 1000)

                        //selectRandomSimon()

                        $(".simon").click( function () {

                            animateSimonClick($(this).html());
                            playSimonAudio($(this).html());
                            userSimonArray.push($(this).html())

                            //for loop?

                            if(userSimonArray[0].toString() != simonArray[0].toString()) {
                                endGame();
                            }

                            clickNum++

                            if (clickNum === 3) {

                                $(".simon").off("click")
                                var userSimon = ($(this).html());
                                console.log(userSimonArray)
                                console.log(simonArray)

                                if (simonArray.toString() === userSimonArray.toString()) {
                                    level++;
                                    $("h1").html("Level " + level);


                                    nextLevel();


                                    
                                }

                            else {
                                endGame();
                            }

                                /*
                                if (clickNum === 5) {
                                    $(".simon").off("click")
                                    var userSimon = ($(this).html());
                                    console.log(userSimon)

                                }
                                    */

                            }


                            
                        

                        })

                        


            }
                /*
                $(".simon").click( function () {

                    animateSimonClick($(this).html());
                    playSimonAudio($(this).html());
                    userSimonArray.push($(this).html())
                    clickNum++

                    if (clickNum === 1) {
                        $(".simon").off("click")
                    }
                    //$(".simon").off("click");
                    var userSimon = ($(this).html());
                    console.log(userSimonArray)

                    if (simonArray.toString() === userSimonArray.toString()) {

                        //nextLevel();

                        
                        userSimonArray = []
                        level++;
                        $("h1").html("Level " + level);

                        setTimeout( selectRandomSimon, 1000)

                        //selectRandomSimon()

                        $(".simon").click( function () {

                            animateSimonClick($(this).html());
                            playSimonAudio($(this).html());
                            userSimonArray.push($(this).html())

                            //for loop?

                            if(userSimonArray[0].toString() != simonArray[0].toString()) {
                                endGame();
                            }

                            clickNum++
                            if (clickNum === 3) {

                                $(".simon").off("click")
                                var userSimon = ($(this).html());
                                console.log(userSimonArray)
                                console.log(simonArray)

                                if (simonArray.toString() === userSimonArray.toString()) {
                                    level++;
                                    $("h1").html("Level " + level);

                                    
                                }

                            else {
                                endGame();
                            }

                                /*
                                if (clickNum === 5) {
                                    $(".simon").off("click")
                                    var userSimon = ($(this).html());
                                    console.log(userSimon)

                                }
                                    
                                    

                            }


                            
                        

                        })

                        

                            
                    }

                    else {
                        //gameState = false
                        endGame();
                        
                    }
                })

                */

                //console.log(level)

                

                

            
        

        //return simonArray items for level

        //on click +1?

        
    


        