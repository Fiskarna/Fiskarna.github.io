function dooropen(door) {

// change here to set todays date

daynow=new Date().getUTCDate("2");

if (daynow==door-1) {alert("Come back tomorrow!");return false;}
if (door==daynow+7) {alert("You\'ll have to wait 1 week before you can open that one!"); return false;}
if (door==daynow+14) {alert("You\'ll have to wait 2 weeks before you can open that one!"); return false;}
if (door==daynow+21) {alert("You\'ll have to wait 3 weeks before you can open that one!"); return false;}
if (door>daynow) {alert("You\'ll have to wait "+(door-daynow)+" days before you can open that one!"); return false;}

document.getElementById("box").innerHTML = myArray[door];

$('');

}


var x=20;
var y=30;
var rows=5;
var cols=5;
var spacinghoriz=135;
var spacingvert=135;


myArray = new Array();

myArray[1] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 1</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Female code: <span style="color: #f45b5c; ">c0mfybr0wnb34u</span><br>Male code: <span style="color: #f45b5c; ">br0wnh4nd50m3</span><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[2] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 2</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;"><img src="http://en.virtualpopstar.com/layout/nl/images/popdollars.png" alt="Popdollar" style="vertical-align: middle;"> Popdollar code: <span style="color: #f45b5c; ">ClmCl@imCoins</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[3] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 3</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Female code: <span style="color: #f45b5c; ">aVeryMusicalXmas</span><br>Male code: <span style="color: #f45b5c; ">C4asu4lXm4S3</span><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[4] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 4</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Female code: <span style="color: #f45b5c; ">XX</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[5] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 5</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;"><img src="http://en.virtualpopstar.com/layout/nl/images/popdollars.png" alt="Popdollar" style="vertical-align: middle;"> Popdollar code: <span style="color: #f45b5c; ">PlzRd33mMe</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');


myArray[6] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 6</div><div style="text-align: left; font-size: 12px; line-height: 18px; font-family: sans-serif; margin: 5px auto 0px; overflow: auto; height: 88px; width: 450px;">Today, you need to solve a riddle to get your code. The riddle can be found on one of VP\'s social media pages. There are two riddles; one for female avatars and one for male. When you think you know the answer, come back here to the calendar and put your answer into the box below. If you\'re correct, the code will show up.<br><br><div style="width: 382px; margin: 0px auto; display: block;"><div id="Answer_Box_R1" style="width: 191px;margin-bottom: 10px;float: left;text-align: center;"><span >Answer for female code</span><br><input type="text" id="SMTriddle1" placeholder="enter your answer here" style="border: none;padding: 2px;font-size: 12px;line-height: 18px;font-family: sans-serif;width: 180px;text-align: center;"><br><button onclick="SMTriddle1()" style=" border: none; background-color: #f45b5c; margin: 5px 0 0 0; width: 120px; cursor: pointer; color: #000; height: 28px; line-height: 27px;font-family: sans-serif;font-size: 11px;">Check my answer!</button> </div><div id="Answer_Box_R2" style="width: 191px;margin-bottom: 10px;float: left;text-align: center;"><span>Answer for male code</span><br><input type="text" id="SMTriddle2" placeholder="enter your answer here" style="border: none;padding: 2px;font-size: 12px;line-height: 18px;font-family: sans-serif;width: 180px;text-align: center;"><br><button onclick="SMTriddle2()" style=" border: none; background-color: #f45b5c; margin: 5px 0 0 0; width: 120px; cursor: pointer; color: #000; height: 28px; line-height: 27px;font-family: sans-serif;font-size: 11px;">Check my answer!</button> </div></div></div>');

myArray[7] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 7</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Male code: <span style="color: #f45b5c; ">XX</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[8] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 8</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;"><img src="http://en.virtualpopstar.com/layout/nl/images/credits.png" alt="Credits" style="vertical-align: middle;"> Credits code: <span style="color: #f45b5c; ">ILikeSh1nyC0ins</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[9] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 9</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;"><img src="http://en.virtualpopstar.com/layout/nl/images/popdollars.png" alt="Popdollar" style="vertical-align: middle;"> Popdollar code: <span style="color: #f45b5c; ">ILiekC0desT00</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[10] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 10</div><div style="text-align: left; font-size: 12px; line-height: 18px; font-family: sans-serif; margin: 5px auto 0px; overflow: auto; height: 88px; width: 450px;">Today, you need to solve a riddle to get your code. The riddle can be found on one of VP\'s social media pages. There are two riddles; one for female avatars and one for male. When you think you know the answer, come back here to the calendar and put your answer into the box below. If you\'re correct, the code will show up.<br><br><div style="width: 382px; margin: 0px auto; display: block;"><div id="Answer_Box_R1" style="width: 191px;margin-bottom: 10px;float: left;text-align: center;"><span >Answer for female code</span><br><input type="text" id="SMTriddle1" placeholder="enter your answer here" style="border: none;padding: 2px;font-size: 12px;line-height: 18px;font-family: sans-serif;width: 180px;text-align: center;"><br><button onclick="SMTriddle1()" style=" border: none; background-color: #f45b5c; margin: 5px 0 0 0; width: 120px; cursor: pointer; color: #000; height: 28px; line-height: 27px;font-family: sans-serif;font-size: 11px;">Check my answer!</button> </div><div id="Answer_Box_R2" style="width: 191px;margin-bottom: 10px;float: left;text-align: center;"><span>Answer for male code</span><br><input type="text" id="SMTriddle2" placeholder="enter your answer here" style="border: none;padding: 2px;font-size: 12px;line-height: 18px;font-family: sans-serif;width: 180px;text-align: center;"><br><button onclick="SMTriddle2()" style=" border: none; background-color: #f45b5c; margin: 5px 0 0 0; width: 120px; cursor: pointer; color: #000; height: 28px; line-height: 27px;font-family: sans-serif;font-size: 11px;">Check my answer!</button> </div></div></div>');


myArray[11] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 11</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Female code: <span style="color: #f45b5c; ">XX</span><br>Male code: <span style="color: #f45b5c; ">XX</span><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[12] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 12</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Female code: <span style="color: #f45b5c; ">XX</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[13] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 13</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Female code: <span style="color: #f45b5c; ">XX</span><br>Male code: <span style="color: #f45b5c; ">XX</span><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[14] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 14</div><div style="margin: 0px auto; width: 372px;"><div style="text-align: left;font-size: 12px;line-height: 18px;font-family: sans-serif;margin: 5px auto 0px;overflow: visible;height: 90px;width: 400px;"><div style="float: left;width: 110px;height: 90px;border-left: 1px solid #FFF;padding-left: 3px;">What does Frosty the Snowman take when he gets sick?<br><br>A chill pill!</div><div style="float: left;width: 150px;height: 90px;margin-left: 6px;border-left: 1px solid #FFF;padding-left: 3px;">What kind of food do you get when you cross a blizzard with a polar bear?<br><br>A brrr-grrr! </div><div style="float: left;width: 97px;height: 90px;margin-left: 6px;border-left: 1px solid #FFF;padding-left: 3px;">What do elves learn in school?<br><br><br>The Elf-abet!</div></div></div>');

myArray[15] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 15</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Male code: <span style="color: #f45b5c; ">XX</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[16] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 16</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;"><img src="http://en.virtualpopstar.com/layout/nl/images/popdollars.png" alt="Popdollar" style="vertical-align: middle;"> Popdollar code: <span style="color: #f45b5c; ">H0pR1GHT0v3r</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[17] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 17</div><div style="text-align: left; font-size: 12px; line-height: 18px; font-family: sans-serif; margin: 5px auto 0px; overflow: auto; height: 88px; width: 450px;">Today, you need to solve a riddle to get your code. The riddle can be found on one of VP\'s social media pages. There are two riddles; one for female avatars and one for male. When you think you know the answer, come back here to the calendar and put your answer into the box below. If you\'re correct, the code will show up.<br><br><div style="width: 382px; margin: 0px auto; display: block;"><div id="Answer_Box_R1" style="width: 191px;margin-bottom: 10px;float: left;text-align: center;"><span >Answer for female code</span><br><input type="text" id="SMTriddle1" placeholder="enter your answer here" style="border: none;padding: 2px;font-size: 12px;line-height: 18px;font-family: sans-serif;width: 180px;text-align: center;"><br><button onclick="SMTriddle1()" style=" border: none; background-color: #f45b5c; margin: 5px 0 0 0; width: 120px; cursor: pointer; color: #000; height: 28px; line-height: 27px;font-family: sans-serif;font-size: 11px;">Check my answer!</button> </div><div id="Answer_Box_R2" style="width: 191px;margin-bottom: 10px;float: left;text-align: center;"><span>Answer for male code</span><br><input type="text" id="SMTriddle2" placeholder="enter your answer here" style="border: none;padding: 2px;font-size: 12px;line-height: 18px;font-family: sans-serif;width: 180px;text-align: center;"><br><button onclick="SMTriddle2()" style=" border: none; background-color: #f45b5c; margin: 5px 0 0 0; width: 120px; cursor: pointer; color: #000; height: 28px; line-height: 27px;font-family: sans-serif;font-size: 11px;">Check my answer!</button> </div></div></div>');

myArray[18] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 18</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">QUIZ<br><br>+++Female code: <span style="color: #f45b5c; ">XX</span><br>Male code: <span style="color: #f45b5c; ">XX</span><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[19] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 19</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;"><img src="http://en.virtualpopstar.com/layout/nl/images/popdollars.png" alt="Popdollar" style="vertical-align: middle;"> Popdollar code: <span style="color: #f45b5c; ">H@ppYH0l1D@y5</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[20] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 20</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Female code: <span style="color: #f45b5c; ">XX</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[21] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 21</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;"><img src="http://en.virtualpopstar.com/layout/nl/images/manager-icon.png" alt="Manager" style="vertical-align: middle;"> Manager code: <span style="color: #f45b5c; ">M@ng3r4u</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[22] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 22</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Female code: <span style="color: #f45b5c; ">XX</span><br>Male code: <span style="color: #f45b5c; ">XX</span><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[23] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 23</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;"><img src="http://en.virtualpopstar.com/layout/nl/images/credits.png" alt="Credits" style="vertical-align: middle;"> Credits code: <span style="color: #f45b5c; ">SH1NYG0LDisSH1NY</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[24] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 24</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;">Female code: <span style="color: #f45b5c; ">g0ddessU4ask21</span><br>Male code: <span style="color: #f45b5c; ">bl0bblobbl0b</span><br><em>Limited!</em><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');

myArray[25] = ('<div style="font-size: 25px;margin-top: -5px;font-weight: bold;text-align: center;">Day 25</div><div style="text-align: center; font-size: 12px; line-height: 18px; font-family: sans-serif; margin-top: 15px;"><img src="http://en.virtualpopstar.com/layout/nl/images/manager-icon.png" alt="Manager" style="vertical-align: middle;"> Manager code: <span style="color: #f45b5c; ">M0r3F0rU</span><br><br><br><div style="position: absolute;width: 397px;bottom: 10px;">Redeem <a href="http://en.virtualpopstar.com/financial/couponclaim" target="_blank" style="color: #000; font-weight: bold;">here</a></div></div>');


var doorno=1;
for (h=0;h<rows;++h)
{
for(g=0; g<cols; ++g, ++doorno)
{
$('#knockin').append('<div class="button" id="door'+doorno+'" onClick="dooropen('+doorno+');" style="cursor: pointer; width: 123px; height: 136px; text-align: center; float: left; margin-right: 11px; margin-bottom: 11px; font-size: 0px; font-weight: bold; position: relative;">'+doorno+'<div id="image'+doorno+'" style="background-image: url(https://i.imgur.com/zdo4NUO.png);"></div></div>');}
}






function SMTriddle1(){var a=document.getElementById("SMTriddle1").value.toUpperCase();"R S J F"===a||"R, S, J, F"===a||"R,S,J,F"===a||"RSJF"===a||"RUDOLPH SNOWY JINGLES FROSTY"===a||"RUDOLPH, SNOWY, JINGLES, FROSTY"===a||"RUDOLPH,SNOWY,JINGLES,FROSTY"===a||"RUDOLPHSNOWYJINGLESFROSTY"===a||" R S J F"===a||" R, S, J, F"===a||" R,S,J,F"===a||" RSJF"===a||" RUDOLPH SNOWY JINGLES FROSTY"===a||" RUDOLPH, SNOWY, JINGLES, FROSTY"===a||" RUDOLPH,SNOWY,JINGLES,FROSTY"===a||" RUDOLPHSNOWYJINGLESFROSTY"===a||"R S J F "===a||"R, S, J, F "===a||"R,S,J,F "===a||"RSJF "===a||"RUDOLPH SNOWY JINGLES FROSTY "===a||"RUDOLPH, SNOWY, JINGLES, FROSTY "===a||"RUDOLPH,SNOWY,JINGLES,FROSTY "===a||"RUDOLPHSNOWYJINGLESFROSTY "===a||" R S J F "===a||" R, S, J, F "===a||" R,S,J,F "===a||" RSJF "===a||" RUDOLPH SNOWY JINGLES FROSTY "===a||" RUDOLPH, SNOWY, JINGLES, FROSTY "===a||" RUDOLPH,SNOWY,JINGLES,FROSTY "===a||" RUDOLPHSNOWYJINGLESFROSTY "===a?document.getElementById("Answer_Box_R1").innerHTML="You got it right!<br>Female code: <span style='color: #f45b5c; '>FireBreathingLizard</span><br><br>Redeem <a href='http://en.virtualpopstar.com/financial/couponclaim' target='_blank' style='color: #000; font-weight: bold;'>here</a>":window.alert("Try again!")}

function SMTriddle2(){var a=document.getElementById("SMTriddle2").value.toUpperCase();" 23 "===a||" 23 CANDY CANES "===a||" 23 CANDY CANES"===a||" 23"===a||"23 "===a||"23 CANDY CANES "===a||"23 CANDY CANES"===a||"23"===a?document.getElementById("Answer_Box_R2").innerHTML="You got it right!<br>Male code: <span style='color: #f45b5c; '>fluffmeup</span><br><br>Redeem <a href='http://en.virtualpopstar.com/financial/couponclaim' target='_blank' style='color: #000; font-weight: bold;'>here</a>":window.alert("Try again!")}

function SMTriddle3(){var a=document.getElementById("SMTriddle3").value.toUpperCase();" A SNOW MAN "===a||" A SNOW MAN"===a||" A SNOWMAN "===a||" A SNOWMAN"===a||" SNOW MAN "===a||" SNOW MAN"===a||" SNOWMAN "===a||" SNOWMAN"===a||"A SNOW MAN "===a||"A SNOW MAN"===a||"A SNOWMAN "===a||"A SNOWMAN"===a||"SNOW MAN "===a||"SNOW MAN"===a||"SNOWMAN "===a||"SNOWMAN"===a?document.getElementById("Answer_Box_R3").innerHTML="You got it right!<br>Female code: <span style='color: #f45b5c; '>ch33rch3rry0n</span><br><em>Limited!</em><br>Redeem <a href='http://en.virtualpopstar.com/financial/couponclaim' target='_blank' style='color: #000; font-weight: bold;'>here</a>":window.alert("Try again!")}

function SMTriddle4(){var a=document.getElementById("SMTriddle4").value.toUpperCase();" IT IS CHRISTMAS EVE "===a||" IT IS CHRISTMAS EVE"===a||" IT IS CHRISTMAS, EVE "===a||" IT IS CHRISTMAS, EVE"===a||" IT'S CHRISTMAS EVE "===a||" IT'S CHRISTMAS EVE"===a||" IT'S CHRISTMAS, EVE "===a||" IT'S CHRISTMAS, EVE"===a||" ITS CHRISTMAS EVE "===a||" ITS CHRISTMAS EVE"===a||" ITS CHRISTMAS, EVE "===a||" ITS CHRISTMAS, EVE"===a||"IT IS CHRISTMAS EVE "===a||"IT IS CHRISTMAS EVE"===a||"IT IS CHRISTMAS, EVE "===a||"IT IS CHRISTMAS, EVE"===a||"IT'S CHRISTMAS EVE "===a||"IT'S CHRISTMAS EVE"===a||"IT'S CHRISTMAS, EVE "===a||"IT'S CHRISTMAS, EVE"===a||"ITS CHRISTMAS EVE "===a||"ITS CHRISTMAS EVE"===a||"ITS CHRISTMAS, EVE "===a||"ITS CHRISTMAS, EVE"===a?document.getElementById("Answer_Box_R4").innerHTML="You got it right!<br>Male code: <span style='color: #f45b5c; '>r0wr0wy0urb04t112441</span><br><em>Limited!</em><br>Redeem <a href='http://en.virtualpopstar.com/financial/couponclaim' target='_blank' style='color: #000; font-weight: bold;'>here</a>":window.alert("Try again!")}

function SMTriddle5(){var a=document.getElementById("SMTriddle5").value.toUpperCase();" COMET "===a||" COMET"===a||"COMET "===a||"COMET"===a?document.getElementById("Answer_Box_R5").innerHTML="You got it right!<br>Female code: <span style='color: #f45b5c; '>alliwantforxmasisearmuffs</span><br><em>Limited! 175 claims</em><br>Redeem <a href='http://en.virtualpopstar.com/financial/couponclaim' target='_blank' style='color: #000; font-weight: bold;'>here</a>":window.alert("Try again!")}









$( '.block_mid.search' ).prepend( '<div id="SearchBox">Search</div>' );
$('head').append('<style>.boxyIcons{text-shadow: 0px 0px 2px #ac4141, 0px 0px 2px #ac4141, 0px 0px 2px #ac4141, 0px 0px 2px #ac4141, 0px 0px 2px #ac4141;} HTML {background-color: #b9203e; background-position: top center; background-attachment: scroll; background-size: auto; background-image: url(https://i.imgur.com/ZLttcj5.png); background-repeat: repeat;} .achievement-container.leftmenu {display: none;} .block_content_bottom {height: 11px; background-image: none; background-color: #f45b5c; margin-bottom: 4px;} .block_content_title {line-height: 28px;} .block_content_top {height: 28px; background-image: none; background-color: #f45b5c; margin-top: 3px;} .block_menu_multi {background-color: #f45b5c; background-image: none; border: none; color: #FFF; height: 28px; line-height: 29px; margin-bottom: 6px; margin-left: 0px; padding-left: 22px; width: 183px;} .block_menu_multi::after {content: "+"; position: relative; float: right; top: -1px; right: 6px; font-size: 21px; font-family: monospace;} .block_menu_multi:hover {background-color: #f45b5c;} .block_menu_multi_active {background-color: #f45b5c; background-image: none;} .block_menu_multi_active::after {content: "_"; position: relative; float: right; top: -10px; right: 8px; width: 8px; text-align: right; overflow: hidden; font-size: 21px; font-family: monospace;} .block_menu_single {background-color: #f45b5c; background-image: none; background-repeat: no-repeat; background-position: top right; border: none; color: #FFF; height: 28px; line-height: 29px; margin-bottom: 6px; margin-left: 0px; padding-left: 22px; width: 183px;} .block_menu_single.active {background-color: #f45b5c; background-image: none;} .block_menu_single.active:hover {background-color: #f45b5c;} .block_menu_single:hover {background-color: #f45b5c; background-image: none;} .block_mid.search {text-align: center; background: #fff; margin-bottom: 21px; margin-left: 0px; width: 205px; border-bottom: solid 11px #f45b5c; padding-bottom: 5px;} .block_submenu {margin-left: 10px; padding-left: 0px;} .content_container {margin-top: 11px;} .content_left_area {width: 205px; margin-right: 6px;} .header_bg {height: 132px;} .header_container {height: 132px; background-color: #feeaea; margin-bottom: 26px; border-bottom: 12px solid #f45b5c;} .top_menu_container {background-color: #f45b5c;} input[type="checkbox"] {vertical-align: sub;} input[type="submit"] {background-image: none; background-color: #f45b5c; height: 24px; line-height: 24px; width: 139px; margin: 14px 0px 10px 2px;} input[type="submit"].dark {background-color: #f45b5c; background-image: none; height: 20px; line-height: 15px; margin-top: 12px; width: 95px;} input[type="submit"].dark:hover {background-color: #f45b5c;} input[type="submit"]:hover {background-color: #f45b5c;} #SearchBox {background-color: #f45b5c; color: #FFF; height: 28px; line-height: 29px; padding-left: 22px; width: 183px; text-align: left;} .comment-content iframe {max-width: 100%;} hr {border: 0px transparent;} .ON {animation-name: example;animation-duration: 0.6s;animation-timing-function: ease;animation-delay: 0s;animation-iteration-count: 1;animation-direction: alternate;animation-fill-mode: forwards;-webkit-animation-name: example;-webkit-animation-duration: 0.6s;-webkit-animation-timing-function: ease;-webkit-animation-delay: 0s;-webkit-animation-iteration-count: 1;-webkit-animation-direction: alternate;-webkit-animation-fill-mode: forwards;-moz-animation-name: example;-moz-animation-duration: 0.6s;-moz-animation-timing-function: ease;-moz-animation-delay: 0s;-moz-animation-iteration-count: 1;-moz-animation-direction: alternate;-moz-animation-fill-mode: forwards;-o-animation-name: example;-o-animation-duration: 0.6s;-o-animation-timing-function: ease;-o-animation-delay: 0s;-o-animation-iteration-count: 1;-o-animation-direction: alternate;-o-animation-fill-mode: forwards;} @-webkit-keyframes example { from { -webkit-transform: perspective(300) rotateY(0deg); -webkit-transform-origin: 0% 50%; } to { -webkit-transform: perspective(300) rotateY(-90deg); -webkit-transform-origin: 0% 50%; }}#image1{width: 123px; height: 136px; background-position: 2px -2px; margin: 0;} #image2{width: 123px; height: 136px; background-position: -130px -2px; margin: 0;} #image3{width: 123px; height: 136px; background-position: -267px -2px; margin: 0;} #image4{width: 123px; height: 136px; background-position: -399px -2px; margin: 0;} #image5{width: 123px; height: 136px; background-position: -534px -2px; margin: 0;} #image6{width: 123px; height: 136px; background-position: 0px -151px; margin: 2;} #image7{width: 123px; height: 136px; background-position: -132px -148px; margin: 0;} #image8{width: 123px; height: 136px; background-position: -266px -148px; margin: 0;} #image9{width: 123px; height: 136px; background-position: -401px -148px; margin: 0;} #image10{width: 123px; height: 136px; background-position: -535px -148px; margin: 0;} #image11{width: 123px; height: 136px; background-position: 4px -294px; margin: 0;} #image12{width: 123px; height: 136px; background-position: -131px -294px; margin: 0;} #image13{width: 123px; height: 136px; background-position: -264px -294px; margin: 0;} #image14{width: 123px; height: 136px; background-position: -399px -293px; margin: 0;} #image15{width: 123px; height: 136px; background-position: -534px -293px; margin: 0;} #image16{width: 123px; height: 136px; background-position: 3px -441px; margin: 0;} #image17{width: 123px; height: 136px; background-position: -130px -440px; margin: 0;} #image18{width: 123px; height: 136px; background-position: -265px -440px; margin: 0;} #image19{width: 123px; height: 136px; background-position: -399px -440px; margin: 0;} #image20{width: 123px; height: 136px; background-position: -534px -441px; margin: 0;} #image21{width: 123px; height: 136px; background-position: 2px -589px; margin: 0;} #image22{width: 123px; height: 136px; background-position: -131px -589px; margin: 0;} #image23{width: 123px; height: 136px; background-position: -267px -589px; margin: 0;} #image24{width: 123px; height: 136px; background-position: -400px -590px; margin: 0;} #image25{width: 123px; height: 136px; background-position: -536px -589px; margin: 0;}</style>'); 


var parent = $('.block_content_inner')[0];
for( var i = 0; i < parent.childNodes.length; i++ ) {
  var current_child = parent.childNodes[ i ];
  if( current_child.nodeType == 3 )
    parent.removeChild( current_child );
}

$( ".block_content_inner > a[href^='/home/profile?user=']" ).replaceWith( '<span> Brought to you by the teams of VP :&#41;</span>' );





$(document).ready(function(){

    daynow=new Date().getUTCDate();

// change below to enable more flippy days

    $( ".button" ).click(function() {
        $( this ).toggleClass( "ON" );
        $( ($( this ).prev(".boxyIcons")) ).css( "visibility", "visible" );
    });


// change below to position boxy icons
$( '<div class="boxyIcons" onClick="dooropen(1);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; cursor: pointer; margin: 0;  ">&nbsp;</div>' ).insertBefore( '#door1' ); 

$( '<div class="boxyIcons" onClick="dooropen(2);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; margin: 0 0px 0px 134px; cursor: pointer; ">&nbsp; </div>' ).insertBefore( '#door2' ); 

$( '<div class="boxyIcons" onClick="dooropen(3);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; cursor: pointer; margin: 0 0px 0px 267px;  ">&nbsp;</div>' ).insertBefore( '#door3' ); 

$( '<div class="boxyIcons" onClick="dooropen(4);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; cursor: pointer; margin: 0 0px 0px 401px;  ">&nbsp;</div>' ).insertBefore( '#door4' ); 

$( '<div class="boxyIcons" onClick="dooropen(5);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; cursor: pointer; margin: 0 0px 0px 533px;  ">&nbsp;</div>' ).insertBefore( '#door5' ); 

$( '<div class="boxyIcons" onClick="dooropen(6);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; margin: 150px 0px 0px 2px; cursor: pointer; ">&nbsp;</div>' ).insertBefore( '#door6' ); 

$( '<div class="boxyIcons" onClick="dooropen(7);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; cursor: pointer; margin: 150px 0px 0px 134px; cursor: pointer; ">&nbsp;</div>' ).insertBefore( '#door7' ); 

$( '<div class="boxyIcons" onClick="dooropen(8);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; cursor: pointer; margin: 150px 0px 0px 267px;  ">&nbsp;</div>' ).insertBefore( '#door8' ); 

$( '<div class="boxyIcons" onClick="dooropen(9);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; cursor: pointer; margin: 150px 0px 0px 401px;  ">&nbsp;</div>' ).insertBefore( '#door9' ); 

$( '<div class="boxyIcons" onClick="dooropen(10);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; cursor: pointer; margin: 150px 0px 0px 533px;  ">&nbsp;</div>' ).insertBefore( '#door10' ); 

$( '<div class="boxyIcons" onClick="dooropen(11);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 136px; font-size: 12px; font-family: sans-serif; visibility: hidden; margin: 296px 0px 0px 3px; cursor: pointer; ">&nbsp; </div>' ).insertBefore( '#door11' ); 

$( '<div class="boxyIcons" onclick="dooropen(12);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px; font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 296px 0px 0px 136px;">&nbsp;</div>' ).insertBefore( '#door12' ); 

$( '<div class="boxyIcons" onclick="dooropen(13);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px; font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 296px 0px 0px 267px;">&nbsp;</div>' ).insertBefore( '#door13' ); 

$( '<div class="boxyIcons" onclick="dooropen(14);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 281px 0px 0px 401px;">&nbsp;</div>' ).insertBefore( '#door14' ); 

$( '<div class="boxyIcons" onClick="dooropen(15);" style="width: 123px; height: 136px; position: absolute; text-align: center; line-height: 119px; font-size: 12px; font-family: sans-serif; visibility: hidden; cursor: pointer; margin: 296px 0px 0px 533px;">&nbsp;</div>' ).insertBefore( '#door15' );

$( '<div class="boxyIcons" onclick="dooropen(16);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 440px 0px 0px 3px;">&nbsp;</div>' ).insertBefore( '#door16' );

$( '<div class="boxyIcons" onclick="dooropen(17);" style="width: 123px;height: 136px;position: absolute;text-align: center;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 440px 0px 0px 134px;">&nbsp;</div>' ).insertBefore( '#door17' );

$( '<div class="boxyIcons" onclick="dooropen(18);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 440px 0px 0px 267px;">&nbsp;</div>' ).insertBefore( '#door18' );

$( '<div class="boxyIcons" onclick="dooropen(19);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 440px 0px 0px 401px;">&nbsp;</div>' ).insertBefore( '#door19' ); 

$( '<div class="boxyIcons" onclick="dooropen(20);" style="width: 123px;height: 136px;position: absolute;text-align: center;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 440px 0px 0px 533px;">&nbsp;</div>' ).insertBefore( '#door20' );

$( '<div class="boxyIcons" onclick="dooropen(21);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 585px 0px 0px 3px;">&nbsp;</div>' ).insertBefore( '#door21' ); 

$( '<div class="boxyIcons" onclick="dooropen(22);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 585px 0px 0px 134px;">&nbsp;</div>' ).insertBefore( '#door22' );

$( '<div class="boxyIcons" onclick="dooropen(23);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 585px 0px 0px 267px;">&nbsp;</div>' ).insertBefore( '#door23' );

$( '<div class="boxyIcons" onclick="dooropen(24);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 585px 0px 0px 401px;">&nbsp;</div>' ).insertBefore( '#door24' );

$( '<div class="boxyIcons" onclick="dooropen(25);" style="width: 123px;height: 136px;position: absolute;text-align: center;line-height: 136px;font-size: 12px;font-family: sans-serif;visibility: hidden;cursor: pointer;margin: 585px 0px 0px 533px;">&nbsp;</div>' ).insertBefore( '#door25' );


$( '#door1' ).click( function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'Sets!' );};} );
$( '#door2' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( '<span>&nbsp;<img src="http://en.virtualpopstar.com/layout/nl/images/popdollars.png" style="vertical-align: middle;">&nbsp;</span>' );};} );
$( '#door3' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'Small gifts!' );};} );
$( '#door4' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'Female set!' );};} );
$( '#door5' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( '<span>&nbsp;<img src="http://en.virtualpopstar.com/layout/nl/images/popdollars.png" style="vertical-align: middle;">&nbsp;</span>' );};} );
$( '#door6' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'SMT ?? something' );};} );
$( '#door7' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'Male set!' );};} );
$( '#door8' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( '<span>&nbsp;<img src="http://en.virtualpopstar.com/layout/nl/images/credits.png" style="vertical-align: middle;">&nbsp;</span>' );};} );
$( '#door9' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( '<span>&nbsp;<img src="http://en.virtualpopstar.com/layout/nl/images/popdollars.png" style="vertical-align: middle;">&nbsp;</span>' );};} );
$( '#door10' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'SMT ?' );};} );
$( '#door11' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'single items for both' );};} );
$( '#door12' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'Female set!' );};} );
$( '#door13' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'single items for both' );};} );
$( '#door14' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'article, NT?' );};} );
$( '#door15' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'FLAGS quiz for single items for both' );};} );
$( '#door16' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( '<span>&nbsp;<img src="http://en.virtualpopstar.com/layout/nl/images/popdollars.png" style="vertical-align: middle;">&nbsp;</span>' );};} );
$( '#door17' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'SMT?' );};} );
$( '#door18' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'Male set!' );};} );
$( '#door19' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( '<span>&nbsp;<img src="http://en.virtualpopstar.com/layout/nl/images/popdollars.png" style="vertical-align: middle;">&nbsp;</span>' );};} );
$( '#door20' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'Female set!' );};} );
$( '#door21' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( '<span>&nbsp;<img src="http://en.virtualpopstar.com/layout/nl/images/manager-icon.png" style="vertical-align: middle;">&nbsp;</span>' );};} );
$( '#door22' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( 'Sets!' );};} );
$( '#door23' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( '<span>&nbsp;<img src="http://en.virtualpopstar.com/layout/nl/images/credits.png" style="vertical-align: middle;">&nbsp;</span>' );};} );
$( '#door24' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( '?' );};} );
$( '#door25' ).click(function() {if ( $( this ).hasClass( 'ON' ) ) {$( this ).prev( '.boxyIcons' ).html( '<span>&nbsp;<img src="http://en.virtualpopstar.com/layout/nl/images/manager-icon.png" style="vertical-align: middle;">&nbsp;</span>' );};} );



$( '<div id="stickyComment" class="comment-container" style="width: 60%; padding: 5px; margin-top: 10px; border-radius: 4px; background-color: #fffede; border: 1px solid gray;"><div style="float: right;cursor: pointer;width: 50px;text-align: right;"><span class="item-comment-quote">Quote</span></div><div class="comment-content"><span class="item-comment-author" style=" display: block !important; margin-bottom: 5px;"><b>Stickied comment by Fiskarna</b><br /></span><span style="color: #fe4032; ">&#128308;</span> All codes between day 1-13 are <b>unlimited</b>.<br><span style="color: #fe4032; ">&#128308;</span> Most codes between day 14-25 are <b>limited with 450 claims</b>. Since they are limited, please only claim them on your main account.<br><span style="color: #fe4032; ">&#128308;</span> All PD codes are limited. Read more <a href="http://en.virtualpopstar.com/social/forum?category=3&topic=157662" target="_blank" style="text-decoration: underline; color: #000;">here</a><br><br>The calendar is updated <em>manually</em>, and not always at the same time. If today&apos;s box isn&apos;t open yet, come back in a while &lpar;&colon;</div></div>' ).insertBefore( '.comment-container:first' );
});
