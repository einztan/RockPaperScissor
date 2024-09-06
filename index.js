    function ResetGame(){
        let rock    = "assets/rock.png";

        let playBTN = document.getElementById('playBTN');

        let PLAYER1 = document.getElementById('PLAYER1');
        let PLAYER2 = document.getElementById('PLAYER2');

        let Player1_IMG = document.getElementById("Player1_IMG");
        let Player2_IMG = document.getElementById("Player2_IMG");

        let LeaderBoard_1st_ROUND = document.getElementById('LeaderBoard_1st_ROUND');
        let Score_1st_ROUND = document.getElementById('Score_1st_ROUND');

        let LeaderBoard_2nd_ROUND = document.getElementById('LeaderBoard_2nd_ROUND');
        let Score_2nd_ROUND = document.getElementById('Score_2nd_ROUND');

        let LeaderBoard_3rd_ROUND = document.getElementById('LeaderBoard_3rd_ROUND');
        let Score_3rd_ROUND = document.getElementById('Score_3rd_ROUND');

        let REMARKS = document.getElementById('REMARKS');


        playBTN.style.transition="0.3s ease-in-out";
        playBTN.innerText="PLAY";

        PLAYER1.style.transition="0.3s ease-in-out";
        PLAYER1.style.backgroundColor="white";

        PLAYER2.style.transition="0.3s ease-in-out";
        PLAYER2.style.backgroundColor="white";

        Player1_IMG.src= rock;
        Player2_IMG.src= rock;

        LeaderBoard_1st_ROUND.style.backgroundColor="white";
        Score_1st_ROUND.innerText="0 - 0";

        LeaderBoard_2nd_ROUND.style.backgroundColor="white";
        Score_2nd_ROUND.innerText="0 - 0";

        LeaderBoard_3rd_ROUND.style.backgroundColor="white";
        Score_3rd_ROUND.innerText="0 - 0";

        REMARKS.innerText="---";
    }
  
    function DrawSFX(){
        let SoundEffect = new Audio("assets/EinzSFXbuzzer.mp3");
        SoundEffect.play();

        console.log("aduio played: Draw");
    }

    function PlayedSFX(){
        let SoundEffect = new Audio("assets/EinzSFXsnap.mp3");
        SoundEffect.play();

        console.log("aduio played: Played");
    }
    
    let click = 0;
    function Play(){
        let rock    = "assets/rock.png";
        let paper   = "assets/paper.png";
        let scissor = "assets/scissor.png";

        let PLAYER1 = document.getElementById('PLAYER1');
        let PLAYER2 = document.getElementById('PLAYER2');

        let Player1_IMG = document.getElementById("Player1_IMG");
        let Player2_IMG = document.getElementById("Player2_IMG");

        let randomPlayer1 = Math.floor( Math.random() * 3 ) + 1; 
        let randomPlayer2 = Math.floor( Math.random() * 3 ) + 1; 


        let LeaderBoard_1st_ROUND = document.getElementById('LeaderBoard_1st_ROUND');
        let Score_1st_ROUND = document.getElementById('Score_1st_ROUND');

        let LeaderBoard_2nd_ROUND = document.getElementById('LeaderBoard_2nd_ROUND');
        let Score_2nd_ROUND = document.getElementById('Score_2nd_ROUND');

        let LeaderBoard_3rd_ROUND = document.getElementById('LeaderBoard_3rd_ROUND');
        let Score_3rd_ROUND = document.getElementById('Score_3rd_ROUND');

        let REMARKS = document.getElementById('REMARKS');

        click += 1;

        // todo: PLAYER 1  
        if(randomPlayer1 === 1){
            Player1_IMG.src = rock;

            console.log( "player-1: " + randomPlayer1 );
        }
        else if(randomPlayer1 === 2){
            Player1_IMG.src = paper;

            console.log( "player-1: " + randomPlayer1 );

        }
        else if(randomPlayer1 === 3){
            Player1_IMG.src = scissor;

            console.log( "player-1: " + randomPlayer1 );
        }

        // todo: PLAYER 2  
        if(randomPlayer2 === 1){
            Player2_IMG.src = rock;

            console.log( "player-2: " + randomPlayer2 );
        }
        else if(randomPlayer2 === 2){
            Player2_IMG.src = paper;

            console.log( "player-2: " + randomPlayer2 );

        }
        else if(randomPlayer2 === 3){
            Player2_IMG.src = scissor;

            console.log( "player-2: " + randomPlayer2 );
        }

        /*
                ( PALETTE )
                colors: 
                  green  - #337e2c
                  red    - #C42020 
                  silver - #CFCFCF
                  dark grey - #727070  
        */

        /*
                patterns:

                [ 1 - 2 ]
                [ 1 - 3 ]

                [ 2 - 1 ]
                [ 2 - 3 ]

                [ 3 - 1 ]
                [ 3 - 2 ]

                [ 1 - 1 ]
                [ 2 - 2 ]
                [ 3 - 3 ]
        */ 

        
        if(click === 1){
            console.log("first round");
            PlayedSFX();

            // PLAYER win - lose pattern
            if(randomPlayer1 === 1 && randomPlayer2 === 2){
                console.log( "player score: 0 - 1" );

                LeaderBoard_1st_ROUND.style.backgroundColor="#CFCFCF";
                Score_1st_ROUND.innerHTML="0 - 1";
                
                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#337e2c";
            }
            else if(randomPlayer1 === 1 && randomPlayer2 === 3){
                console.log( "player score: 1 - 0" );

                LeaderBoard_1st_ROUND.style.backgroundColor="#CFCFCF";
                Score_1st_ROUND.innerHTML="1 - 0";
                
                PLAYER1.style.backgroundColor="#337e2c";
                PLAYER2.style.backgroundColor="#C42020";
            }
            else if(randomPlayer1 === 2 && randomPlayer2 === 1){
                console.log( "player score: 1 - 0" );

                LeaderBoard_1st_ROUND.style.backgroundColor="#CFCFCF";
                Score_1st_ROUND.innerHTML="1 - 0";
                
                PLAYER1.style.backgroundColor="#337e2c";
                PLAYER2.style.backgroundColor="#C42020";
            }
            else if(randomPlayer1 === 2 && randomPlayer2 === 3){
                console.log( "player score: 0 - 1" );

                LeaderBoard_1st_ROUND.style.backgroundColor="#CFCFCF";
                Score_1st_ROUND.innerHTML="0 - 1";
                
                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#337e2c";
            }
            else if(randomPlayer1 === 3 && randomPlayer2 === 1){
                console.log( "player score: 0 - 1" );

                LeaderBoard_1st_ROUND.style.backgroundColor="#CFCFCF";
                Score_1st_ROUND.innerHTML="0 - 1";
                
                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#337e2c";
            }
            else if(randomPlayer1 === 3 && randomPlayer2 === 2){
                console.log( "player score: 1 - 0" );

                LeaderBoard_1st_ROUND.style.backgroundColor="#CFCFCF";
                Score_1st_ROUND.innerHTML="1 - 0";
                
                PLAYER1.style.backgroundColor="#337e2c";
                PLAYER2.style.backgroundColor="#C42020";
            }

            // tie checker
            else if( randomPlayer1 === 1 && randomPlayer2 === 1 ){
                console.log( "player score: x - x" );

                LeaderBoard_1st_ROUND.style.backgroundColor="#CFCFCF";
                Score_1st_ROUND.innerHTML="- - -";

                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#C42020";

                DrawSFX();
            }
            else if( randomPlayer1 === 2 && randomPlayer2 === 2 ){
                console.log( "player score: x - x" );

                LeaderBoard_1st_ROUND.style.backgroundColor="#CFCFCF";
                Score_1st_ROUND.innerHTML="- - -";

                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#C42020";

                DrawSFX();
            }
            else if( randomPlayer1 === 3 && randomPlayer2 === 3 ){
                console.log( "player score: x - x" );

                LeaderBoard_1st_ROUND.style.backgroundColor="#CFCFCF";
                Score_1st_ROUND.innerHTML="- - -";

                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#C42020";

                DrawSFX();
            }
        }

        if(click === 2){
            console.log("first round");
            PlayedSFX();

            // PLAYER win - lose pattern
            if(randomPlayer1 === 1 && randomPlayer2 === 2){
                console.log( "player score: 0 - 1" );

                LeaderBoard_2nd_ROUND.style.backgroundColor="#727070";
                Score_2nd_ROUND.innerHTML="0 - 1";
                
                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#337e2c";
            }
            else if(randomPlayer1 === 1 && randomPlayer2 === 3){
                console.log( "player score: 1 - 0" );

                LeaderBoard_2nd_ROUND.style.backgroundColor="#727070";
                Score_2nd_ROUND.innerHTML="1 - 0";
                
                PLAYER1.style.backgroundColor="#337e2c";
                PLAYER2.style.backgroundColor="#C42020";
            }
            else if(randomPlayer1 === 2 && randomPlayer2 === 1){
                console.log( "player score: 1 - 0" );

                LeaderBoard_2nd_ROUND.style.backgroundColor="#727070";
                Score_2nd_ROUND.innerHTML="1 - 0";
                
                PLAYER1.style.backgroundColor="#337e2c";
                PLAYER2.style.backgroundColor="#C42020";
            }
            else if(randomPlayer1 === 2 && randomPlayer2 === 3){
                console.log( "player score: 0 - 1" );

                LeaderBoard_2nd_ROUND.style.backgroundColor="#727070";
                Score_2nd_ROUND.innerHTML="0 - 1";
                
                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#337e2c";
            }
            else if(randomPlayer1 === 3 && randomPlayer2 === 1){
                console.log( "player score: 0 - 1" );

                LeaderBoard_2nd_ROUND.style.backgroundColor="#727070";
                Score_2nd_ROUND.innerHTML="0 - 1";
                
                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#337e2c";
            }
            else if(randomPlayer1 === 3 && randomPlayer2 === 2){
                console.log( "player score: 1 - 0" );

                LeaderBoard_2nd_ROUND.style.backgroundColor="#727070";
                Score_2nd_ROUND.innerHTML="1 - 0";
                
                PLAYER1.style.backgroundColor="#337e2c";
                PLAYER2.style.backgroundColor="#C42020";
            }

            // tie checker
            else if( randomPlayer1 === 1 && randomPlayer2 === 1 ){
                console.log( "player score: x - x" );

                LeaderBoard_2nd_ROUND.style.backgroundColor="#727070";
                Score_2nd_ROUND.innerHTML="- - -";

                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#C42020";

                DrawSFX();
            }
            else if( randomPlayer1 === 2 && randomPlayer2 === 2 ){
                console.log( "player score: x - x" );

                LeaderBoard_2nd_ROUND.style.backgroundColor="#727070";
                Score_2nd_ROUND.innerHTML="- - -";

                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#C42020";

                DrawSFX();
            }
            else if( randomPlayer1 === 3 && randomPlayer2 === 3 ){
                console.log( "player score: x - x" );

                LeaderBoard_2nd_ROUND.style.backgroundColor="#727070";
                Score_2nd_ROUND.innerHTML="- - -";

                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#C42020";

                DrawSFX();
            }
        }

        if(click === 3){
            console.log("first round");
            PlayedSFX();

            // PLAYER win - lose pattern
            if(randomPlayer1 === 1 && randomPlayer2 === 2){
                console.log( "player score: 0 - 1" );

                LeaderBoard_3rd_ROUND.style.backgroundColor="#CFCFCF";
                Score_3rd_ROUND.innerHTML="0 - 1";
                
                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#337e2c";
            }
            else if(randomPlayer1 === 1 && randomPlayer2 === 3){
                console.log( "player score: 1 - 0" );

                LeaderBoard_3rd_ROUND.style.backgroundColor="#CFCFCF";
                Score_3rd_ROUND.innerHTML="1 - 0";
                
                PLAYER1.style.backgroundColor="#337e2c";
                PLAYER2.style.backgroundColor="#C42020";
            }
            else if(randomPlayer1 === 2 && randomPlayer2 === 1){
                console.log( "player score: 1 - 0" );

                LeaderBoard_3rd_ROUND.style.backgroundColor="#CFCFCF";
                Score_3rd_ROUND.innerHTML="1 - 0";
                
                PLAYER1.style.backgroundColor="#337e2c";
                PLAYER2.style.backgroundColor="#C42020";
            }
            else if(randomPlayer1 === 2 && randomPlayer2 === 3){
                console.log( "player score: 0 - 1" );

                LeaderBoard_3rd_ROUND.style.backgroundColor="#CFCFCF";
                Score_3rd_ROUND.innerHTML="0 - 1";
                
                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#337e2c";
            }
            else if(randomPlayer1 === 3 && randomPlayer2 === 1){
                console.log( "player score: 0 - 1" );

                LeaderBoard_3rd_ROUND.style.backgroundColor="#CFCFCF";
                Score_3rd_ROUND.innerHTML="0 - 1";
                
                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#337e2c";
            }
            else if(randomPlayer1 === 3 && randomPlayer2 === 2){
                console.log( "player score: 1 - 0" );

                LeaderBoard_3rd_ROUND.style.backgroundColor="#CFCFCF";
                Score_3rd_ROUND.innerHTML="1 - 0";
                
                PLAYER1.style.backgroundColor="#337e2c";
                PLAYER2.style.backgroundColor="#C42020";
            }

            // tie checker
            else if( randomPlayer1 === 1 && randomPlayer2 === 1 ){
                console.log( "player score: x - x" );

                LeaderBoard_3rd_ROUND.style.backgroundColor="#CFCFCF";
                Score_3rd_ROUND.innerHTML="- - -";

                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#C42020";

                DrawSFX();
            }
            else if( randomPlayer1 === 2 && randomPlayer2 === 2 ){
                console.log( "player score: x - x" );

                LeaderBoard_3rd_ROUND.style.backgroundColor="#CFCFCF";
                Score_3rd_ROUND.innerHTML="- - -";

                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#C42020";

                DrawSFX();
            }
            else if( randomPlayer1 === 3 && randomPlayer2 === 3 ){
                console.log( "player score: x - x" );

                LeaderBoard_3rd_ROUND.style.backgroundColor="#CFCFCF";
                Score_3rd_ROUND.innerHTML="- - -";

                PLAYER1.style.backgroundColor="#C42020";
                PLAYER2.style.backgroundColor="#C42020";

                DrawSFX();
            }

            /*
                (Pattern)

                ( ALL DRAW )
                1: ---, 2: --- ,3: --- = NaN
                
                ( PLAYER 1 ) with other draw rounds
                1:  1 - 0,   2: ---   ,   3: ---     
                1:  ---  ,   2: 1 - 0 ,   3: ---     
                1:  ---  ,   2: ---   ,   3: 1 - 0   

                1:  1 - 0,   2: 1 - 0 ,   3: ---
                1:  1 - 0,   2: ---   ,   3: 1 - 0
                1:  ---  ,   2: 1 - 0 ,   3: 1 - 0

                1:  1 - 0,   2: 1 - 0 ,   3: 1 - 0

                ( PLAYER 2 ) with other draw rounds
                1:  0 - 1,   2: ---   ,   3: ---  
                1:  ---  ,   2: 0 - 1 ,   3: ---     
                1:  ---  ,   2: ---   ,   3: 0 - 1   

                1:  0 - 1,   2: 0 - 1 ,   3: ---
                1:  0 - 1,   2: ---   ,   3: 0 - 1
                1:  ---  ,   2: 0 - 1 ,   3: 0 - 1

                1:  0 - 1,   2: 0 - 1 ,   3: 0 - 1 
                
                
                ( MIXED ) with draw
                ( player 1 )
                1:  1 - 0,   2: 0 - 1 ,   3: ---  
                1:  1 - 0,   2: ---   ,   3: 0 - 1
                1:  ---  ,   2: 1 - 0 ,   3: 0 - 1
                
                ( player 2 )
                1:  0 - 1,   2: 1 - 0 ,   3: ---  
                1:  0 - 1,   2: ---   ,   3: 1 - 0
                1:  ---  ,   2: 0 - 1 ,   3: 1 - 0

                ( ALL SCORED )
                ( player 1 )
                1:  1 - 0,   2: 1 - 0 ,   3: 0 - 1  
                1:  1 - 0,   2: 0 - 1 ,   3: 1 - 0 
                1:  0 - 1,   2: 1 - 0 ,   3: 0 - 0 
                
                ( player 2 )
                1:  0 - 1,   2: 0 - 1 ,   3: 1 - 0  
                1:  0 - 1,   2: 1 - 0 ,   3: 0 - 1 
                1:  1 - 0,   2: 0 - 1 ,   3: 0 - 0

            */ 

                // todo: all draw 
                if(Score_1st_ROUND.innerHTML==="- - -" && Score_2nd_ROUND.innerHTML==="- - -" && Score_3rd_ROUND.innerHTML==="- - -"){
                    console.log("remarks: all Draw!");

                    REMARKS.innerHTML="All Draw!";
                }

                // todo: player 1 with other draw rounds 
                else if(Score_1st_ROUND.innerHTML==="1 - 0" && Score_2nd_ROUND.innerHTML==="- - -" && Score_3rd_ROUND.innerHTML==="- - -"){
                    console.log("Player 1 wins - other rounds are Draw! 1 - 0, - - -, - - -");

                    REMARKS.innerHTML="Player-1 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="- - -" && Score_2nd_ROUND.innerHTML==="1 - 0" && Score_3rd_ROUND.innerHTML==="- - -"){
                    console.log("Player 1 wins - other rounds are Draw! - - -, 1 - 0, - - - ");

                    REMARKS.innerHTML="Player-1 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="- - -" && Score_2nd_ROUND.innerHTML==="- - -" && Score_3rd_ROUND.innerHTML==="1 - 0"){
                    console.log("Player 1 wins - other rounds are Draw! - - -, - - -, 1 - 0 ");

                    REMARKS.innerHTML="Player-1 wins!";
                }

                else if(Score_1st_ROUND.innerHTML==="1 - 0" && Score_2nd_ROUND.innerHTML==="1 - 0" && Score_3rd_ROUND.innerHTML==="- - -"){
                    console.log("Player 1 wins - other rounds are Draw! 1 - 0, 1 - 0, - - -");

                    REMARKS.innerHTML="Player-1 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="1 - 0" && Score_2nd_ROUND.innerHTML==="- - -" && Score_3rd_ROUND.innerHTML==="1 - 0"){
                    console.log("Player 1 wins - other rounds are Draw! 1 - 0, - - -, 1 - 0");

                    REMARKS.innerHTML="Player-1 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="- - -" && Score_2nd_ROUND.innerHTML==="1 - 0" && Score_3rd_ROUND.innerHTML==="1 - 0"){
                    console.log("Player 1 wins - other rounds are Draw! - - -, 1 - 0, 1 - 0");

                    REMARKS.innerHTML="Player-1 wins!";
                }

                else if(Score_1st_ROUND.innerHTML==="1 - 0" && Score_2nd_ROUND.innerHTML==="1 - 0" && Score_3rd_ROUND.innerHTML==="1 - 0"){
                    console.log("Player 1 wins! 1 - 0, 1 - 0, 1 - 0");

                    REMARKS.innerHTML="Player-1 wins!";
                }


                // todo: player 2 with other draw rounds 
                else if(Score_1st_ROUND.innerHTML==="0 - 1" && Score_2nd_ROUND.innerHTML==="- - -" && Score_3rd_ROUND.innerHTML==="- - -"){
                    console.log("Player 2 wins - other rounds are Draw! 0 - 2, - - -, - - -");

                    REMARKS.innerHTML="Player-2 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="- - -" && Score_2nd_ROUND.innerHTML==="0 - 1" && Score_3rd_ROUND.innerHTML==="- - -"){
                    console.log("Player 2 wins - other rounds are Draw! - - -, 0 - 1, - - - ");

                    REMARKS.innerHTML="Player-2 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="- - -" && Score_2nd_ROUND.innerHTML==="- - -" && Score_3rd_ROUND.innerHTML==="0 - 1"){
                    console.log("Player 2 wins - other rounds are Draw! - - -, - - -, 0 - 1 ");

                    REMARKS.innerHTML="Player-2 wins!";
                }

                else if(Score_1st_ROUND.innerHTML==="0 - 1" && Score_2nd_ROUND.innerHTML==="0 - 1" && Score_3rd_ROUND.innerHTML==="- - -"){
                    console.log("Player 2 wins - other rounds are Draw! 0 - 1, 0 - 1, - - -");

                    REMARKS.innerHTML="Player-2 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="0 - 1" && Score_2nd_ROUND.innerHTML==="- - -" && Score_3rd_ROUND.innerHTML==="0 - 1"){
                    console.log("Player 2 wins - other rounds are Draw! 0 - 1, - - -, 0 - 1");

                    REMARKS.innerHTML="Player-2 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="- - -" && Score_2nd_ROUND.innerHTML==="0 - 1" && Score_3rd_ROUND.innerHTML==="0 - 1"){
                    console.log("Player 2 wins - other rounds are Draw! - - -, 0 - 1, 0 - 1");

                    REMARKS.innerHTML="Player-2 wins!";
                }

                else if(Score_1st_ROUND.innerHTML==="0 - 1" && Score_2nd_ROUND.innerHTML==="0 - 1" && Score_3rd_ROUND.innerHTML==="0 - 1"){
                    console.log("Player 2 wins! 0 - 1, 0 - 1, 0 - 1");

                    REMARKS.innerHTML="Player-2 wins!";
                }


                // todo: mixed score with draw 

                // player 1
                else if(Score_1st_ROUND.innerHTML==="1 - 0" && Score_2nd_ROUND.innerHTML==="0 - 1" && Score_3rd_ROUND.innerHTML==="- - -"){
                    console.log("Player 1 wins - other rounds are Draw! 1 - 0, 0 - 1, - - -");

                    REMARKS.innerHTML="Tie!";
                }
                else if(Score_1st_ROUND.innerHTML==="1 - 0" && Score_2nd_ROUND.innerHTML==="- - -" && Score_3rd_ROUND.innerHTML==="0 - 1"){
                    console.log("Player 1 wins - other rounds are Draw! 1 - 0, - - -, 0 - 1");

                    REMARKS.innerHTML="Tie!";
                }
                else if(Score_1st_ROUND.innerHTML==="- - -" && Score_2nd_ROUND.innerHTML==="1 - 0" && Score_3rd_ROUND.innerHTML==="0 - 1"){
                    console.log("Player 1 wins - other rounds are Draw! - - -, 1 - 0, 0 - 1");

                    REMARKS.innerHTML="Tie!";
                }

                // player 2
                else if(Score_1st_ROUND.innerHTML==="0 - 1" && Score_2nd_ROUND.innerHTML==="1 - 0" && Score_3rd_ROUND.innerHTML==="- - -"){
                    console.log("Player 2 wins! 0 - 1, 1 - 0, - - -");

                    REMARKS.innerHTML="Tie!";
                }
                else if(Score_1st_ROUND.innerHTML==="0 - 1" && Score_2nd_ROUND.innerHTML==="- - -" && Score_3rd_ROUND.innerHTML==="1 - 0"){
                    console.log("Player 2 wins! 0 - 1, - - -, 1 - 0");

                    REMARKS.innerHTML="Tie!";
                }
                else if(Score_1st_ROUND.innerHTML==="- - -" && Score_2nd_ROUND.innerHTML==="0 - 1" && Score_3rd_ROUND.innerHTML==="1 - 0"){
                    console.log("Player 2 wins! - - -, 0 - 1, 1 - 0");

                    REMARKS.innerHTML="Tie!";
                }

                // TODO: all scored
                // PLAYER 1
                else if(Score_1st_ROUND.innerHTML==="1 - 0" && Score_2nd_ROUND.innerHTML==="1 - 0" && Score_3rd_ROUND.innerHTML==="0 - 1"){
                    console.log("Player 1 wins! 1 - 0, 1 - 0, 0 - 1");

                    REMARKS.innerHTML="Player 1 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="1 - 0" && Score_2nd_ROUND.innerHTML==="0 - 1" && Score_3rd_ROUND.innerHTML==="1 - 0"){
                    console.log("Player 1 wins! 1 - 0, 0 - 1, 1 - 0");

                    REMARKS.innerHTML="Player 1 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="0 - 1" && Score_2nd_ROUND.innerHTML==="1 - 0" && Score_3rd_ROUND.innerHTML==="1 - 0"){
                    console.log("Player 1 wins! 0 - 1, 1 - 0, 1 - 0");

                    REMARKS.innerHTML="Player 1 wins!";
                }

                // PLAYER 2
                else if(Score_1st_ROUND.innerHTML==="0 - 1" && Score_2nd_ROUND.innerHTML==="0 - 1" && Score_3rd_ROUND.innerHTML==="1 - 0"){
                    console.log("Player 2 wins! 0 - 1, 0 - 1, 1 - 0");

                    REMARKS.innerHTML="Player 2 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="0 - 1" && Score_2nd_ROUND.innerHTML==="1 - 0" && Score_3rd_ROUND.innerHTML==="0 - 1"){
                    console.log("Player 2 wins! 0 - 1, 1 - 0, 0 - 1");

                    REMARKS.innerHTML="Player 2 wins!";
                }
                else if(Score_1st_ROUND.innerHTML==="1 - 0" && Score_2nd_ROUND.innerHTML==="0 - 1" && Score_3rd_ROUND.innerHTML==="0 - 1"){
                    console.log("Player 2 wins! 1 - 0, 0 - 1, 0 - 1");

                    REMARKS.innerHTML="Player 2 wins!";
                }

                // todo: reset click and reset game
                
                
                // ResetGame();
        }
        if(click === 4){
            click = 0;
            ResetGame();
        }
}