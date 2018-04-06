/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

//Top Row Buttons
//Statements-Present-Switch-Btn
//Statements-Present-ToStatementPast-Btn
//Statements-Present-ToStatementFuture-Btn
//Statements-Present-Speak-Btn

//Footer Buttons
//Statements-Present-ToStatements-Btn
//Statements-Present-ToQuestions-Btn
//Statements-Present-ToIfThen-Btn
//Statements-Present-ToNouns-Btn
//Statements-Present-ToSenses-Btn

//Global Sentence Values (defaulted to first of each column)
var LastSentenceSelections = ["1", "11", "111", "1111"]
var SentenceColor = "SentenceDefault";
var lastValues;


//////////////////////////////// 
//Global Utility Functions
///////////////////////////////

function isAndroid() {
    if (device.platform.match(/android/i)) {
        return true;
    }
    return false;
}

//Display the Sentence on a specific page
function XDisplaySentence(targetId, WordIdPrefix, punctuation) {
    //alert('Display Function');
    //Build the Sentence
    var sentence = "".concat($(WordIdPrefix + LastSentenceSelections[0]).text(), " ", $(WordIdPrefix + LastSentenceSelections[1]).text(), " ", $(WordIdPrefix + LastSentenceSelections[2]).text(), " ", $(WordIdPrefix + LastSentenceSelections[3]).text(), punctuation);

    $(targetId).text(sentence);//Display the sentence in the header
} 

//Display the Sentence on a specific page
function DisplaySentence2(screenIdEnum) {
    var targetId;//Id of sentence dom element
    var wordIdPrefix;//first half word segment Id to copy
    var punctuation;//end of sentence
    //alert("DisplaySentence2");
    //Set the ID prefixes
    switch (screenIdEnum) {
        case ScreenId.StatementsPast:
            targetId = "#Statements-Past-Sentence";
            wordIdPrefix = "#Statements-Past-Word-";
            punctuation = ".";
            break;
        case ScreenId.StatementsPresent:
            targetId = "#Statements-Present-Sentence";
            wordIdPrefix = "#Statements-Present-Word-";
            punctuation = ".";
            break;
        case ScreenId.StatementsFuture:
            targetId = "#Statements-Future-Sentence";
            wordIdPrefix = "#Statements-Future-Word-";
            punctuation = ".";
            break;
        case ScreenId.SwitchPast:
            targetId = "#Switch-Past-Sentence";
            wordIdPrefix = "#Switch-Past-Word-";
            punctuation = "?";
            break;
        case ScreenId.SwitchPresent:
            targetId = "#Switch-Present-Sentence";
            wordIdPrefix = "#Switch-Present-Word-";
            punctuation = "?";
            break;
        case ScreenId.SwitchFuture:
            targetId = "#Switch-Future-Sentence";
            wordIdPrefix = "#Switch-Future-Word-";
            punctuation = "?";
            break;
        default:
            Alert("Error");//error
            break;
    }

    //alert(targetId + wordIdPrefix + punctuation); 

    //Set Color
    var color = "SentenceDefault";
    //alert(":" + $(wordIdPrefix + LastSentenceSelections[1]).text() + ":");
    switch ($(wordIdPrefix + LastSentenceSelections[1]).text().trim()) {
        case "happy":
            color = "SentenceHappy";
            break;
        case "peaceful":
            color = "SentencePeaceful";
            break;
        case "sad":
            color = "SentenceSad";
            break;
        case "angry":
            color = "SentenceAngry";
            break;
        case "disappointed":
            color = "SentenceDisappointed";
            break;
        case "frustrated":
            color = "SentenceFrustrated";
            break;
        case "scared":
            color = "SentenceScared";
            break;
        case "proud":
            color = "SentenceProud";
            break;
        default:
            color = "SentenceDefault";
            break;
    }
    SentenceColor = color;
    //alert(color);
    //Build the Sentence
    //var sentence = "".concat($(wordIdPrefix + LastSentenceSelections[0]).text(), " ", $(wordIdPrefix + LastSentenceSelections[1]).text(), " ", $(wordIdPrefix + LastSentenceSelections[2]).text(), " ", $(wordIdPrefix + LastSentenceSelections[3]).text(), punctuation);
    var sentence = "";
    //currentValues = inst.getArrayVal();

    if (LastSentenceSelections[0] != lastValues[0]) {
        //alert("1st Changed");
        sentence = "".concat($(wordIdPrefix + LastSentenceSelections[0]).text(), "...");
        $(targetId).text(sentence);//Display the sentence in the header
        $(targetId).removeClass("SentenceHappy SentencePeaceful SentenceSad SentenceAngry SentenceDisappointed SentenceFrustrated SentenceScared SentenceProud SentenceDefault");
        //no color shown with first selection
    }
    else if (LastSentenceSelections[1] != lastValues[1]) {
        //alert("2nd Changed");
        sentence = "".concat($(wordIdPrefix + LastSentenceSelections[0]).text(), " ", $(wordIdPrefix + LastSentenceSelections[1]).text(), "...");
        $(targetId).text(sentence);//Display the sentence in the header
        $(targetId).removeClass("SentenceHappy SentencePeaceful SentenceSad SentenceAngry SentenceDisappointed SentenceFrustrated SentenceScared SentenceProud SentenceDefault");
        $(targetId).addClass(SentenceColor);
    }
    else if (LastSentenceSelections[2] != lastValues[2]) {
        //alert("3rd Changed");
        sentence = "".concat($(wordIdPrefix + LastSentenceSelections[0]).text(), " ", $(wordIdPrefix + LastSentenceSelections[1]).text(), " ", $(wordIdPrefix + LastSentenceSelections[2]).text(), "...");
        $(targetId).text(sentence);//Display the sentence in the header
        $(targetId).removeClass("SentenceHappy SentencePeaceful SentenceSad SentenceAngry SentenceDisappointed SentenceFrustrated SentenceScared SentenceProud SentenceDefault");
        $(targetId).addClass(SentenceColor);
    }
    else if (LastSentenceSelections[3] != lastValues[3]) {
        //alert("4th Changed");
        sentence = "".concat($(wordIdPrefix + LastSentenceSelections[0]).text(), " ", $(wordIdPrefix + LastSentenceSelections[1]).text(), " ", $(wordIdPrefix + LastSentenceSelections[2]).text(), " ", $(wordIdPrefix + LastSentenceSelections[3]).text(), punctuation);
        $(targetId).text(sentence);//Display the sentence in the header
        $(targetId).removeClass("SentenceHappy SentencePeaceful SentenceSad SentenceAngry SentenceDisappointed SentenceFrustrated SentenceScared SentenceProud SentenceDefault");
        $(targetId).addClass(SentenceColor);
    }
    else {
        //alert("No Change");
        sentence = "".concat($(wordIdPrefix + LastSentenceSelections[0]).text(), " ", $(wordIdPrefix + LastSentenceSelections[1]).text(), " ", $(wordIdPrefix + LastSentenceSelections[2]).text(), " ", $(wordIdPrefix + LastSentenceSelections[3]).text(), punctuation);
        $(targetId).text(sentence);//Display the sentence in the header
        $(targetId).removeClass("SentenceHappy SentencePeaceful SentenceSad SentenceAngry SentenceDisappointed SentenceFrustrated SentenceScared SentenceProud SentenceDefault");
        $(targetId).addClass(SentenceColor);

    }
    lastValues = LastSentenceSelections;



    //alert(wordIdPrefix + LastSentenceSelections[0]);
    //alert(sentence);
} 

//Enum for screen ID
var ScreenId = {
    StatementsPast: 1,
    StatementsPresent: 2,
    StatementsFuture: 3,
    SwitchPast: 4,
    SwitchPresent: 5,
    SwitchFuture: 6
};

function ClearSentences(){
    LastSentenceSelections = null;//reset sentence selections
    $(".Sentence").text("");//Display blank the sentences in the headers
} 

//Set Control and Display Sentence
function XSetInputControl(InputId, targetId, WordIdPrefix, punctuation) {
    //alert('Input function');
    var inst = $(InputId).mobiscroll('getInst');//Get instance of the tree control for the page you are switching to

   // inst.hide();

    //if the setValue function exists
    if (Object.keys(inst).some(function (k) { return ~k.indexOf("setValue") })) {

        try {
            inst.setValue(LastSentenceSelections, true); //set values to match the last sentence
        }
        catch (err) {
            alert(err);
        }

    }
    //inst.show();//Trigger OnShow Event 

    //Update Sentence
    DisplaySentence(targetId, WordIdPrefix, punctuation);
}


//Set Control and Display Sentence
function SetInputControl2(screenIdEnum) {
    

    var inst; //instance of source control

    //Get instance of the tree control for the page you are switching to
    switch (screenIdEnum) {
        case ScreenId.StatementsPast:
            inst = $("#Statements-Past-Input").mobiscroll('getInst');
            break;
        case ScreenId.StatementsPresent:
            inst = $("#Statements-Present-Input").mobiscroll('getInst');
            break;
        case ScreenId.StatementsFuture:
            inst = $("#Statements-Future-Input").mobiscroll('getInst');
            break;
        case ScreenId.SwitchPast:
            inst = $("#Switch-Past-Input").mobiscroll('getInst');
            break;
        case ScreenId.SwitchPresent:
            inst = $("#Switch-Present-Input").mobiscroll('getInst');
            break;
        case ScreenId.SwitchFuture:
            inst = $("#Switch-Future-Input").mobiscroll('getInst');
            break;
        default:
            Alert("Error");//error
            break; 
    }
    
    inst.hide();
    //if the setValue function exists
    if (Object.keys(inst).some(function (k) { return ~k.indexOf("setArrayVal") })) {
        //alert(LastSentenceSelections);
        try {
            inst.setArrayVal(LastSentenceSelections); //set values to match the last sentence
            //alert(screenIdEnum); 
        }
        catch (err) {
            alert(err);
        }

    }
    inst.show();//Trigger OnShow Event 

    //Update Sentence
    DisplaySentence2(screenIdEnum);
    
}




var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
     
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {

        document.addEventListener('deviceready', this.onDeviceReady, false);
        


        /// Footer Buttons BEGIN/////////////////////////////////////////////////////
        $(".ResetSentences").click(function (){
            ClearSentences();
        });
        /// END Footer Buttons/////////////////////////////////////////////////////

        

        /// Speak Button BEGIN//////////////////////////////////////////////////////

        $("#Statements-Past-Sentence").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Statements-Past-Sentence").textContent, $('input[name=radio-choice-v-6]:checked').val());
        });
        $("#Statements-Present-Sentence").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Statements-Present-Sentence", $('input[name=radio-choice-v-6]:checked').val()).textContent);
        });
        $("#Statements-Future-Sentence").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Statements-Future-Sentence", $('input[name=radio-choice-v-6]:checked').val()).textContent);
        });

        //Switch to Question
        $("#Switch-Past-Sentence").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Switch-Past-Sentence").textContent, $('input[name=radio-choice-v-6]:checked').val());
        });
        $("#Switch-Present-Sentence").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Switch-Present-Sentence", $('input[name=radio-choice-v-6]:checked').val()).textContent);
        });
        $("#Switch-Future-Sentence").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Switch-Future-Sentence", $('input[name=radio-choice-v-6]:checked').val()).textContent);
        });
          

        //Statements Speak Buttons
        $("#Statements-Past-Speak-Btn").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Statements-Past-Sentence").textContent, $('input[name=radio-choice-v-6]:checked').val());
        });
        $("#Statements-Present-Speak-Btn").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Statements-Present-Sentence", $('input[name=radio-choice-v-6]:checked').val()).textContent);
        });
        $("#Statements-Future-Speak-Btn").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Statements-Future-Sentence", $('input[name=radio-choice-v-6]:checked').val()).textContent);
        });
        
        //Switch to Question
        $("#Switch-Past-Speak-Btn").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Switch-Past-Sentence").textContent, $('input[name=radio-choice-v-6]:checked').val());
        });
        $("#Switch-Present-Speak-Btn").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Switch-Present-Sentence", $('input[name=radio-choice-v-6]:checked').val()).textContent);
        });
        $("#Switch-Future-Speak-Btn").bind("click", function (event, ui) {
            responsiveVoice.speak(document.getElementById("Switch-Future-Sentence", $('input[name=radio-choice-v-6]:checked').val()).textContent);
        });
        
        //If-Then
        //IfThen-Past-Speak-Btn
        //IfThen-Present-Speak-Btn
        //IfThen-Future-Speak-Btn

        //Nouns
        //Nouns-Past-Speak-Btn
        //Nouns-Present-Speak-Btn
        //Nouns-Future-Speak-Btn

        //Senses
        //Senses-Past-Speak-Btn
        //Senses-Present-Speak-Btn
        //Senses-Future-Speak-Btn

      

        /// END Speak Button //////////////////////////////////////////////////////
        

        
        /// Tense Switching Buttons //////////////////////////////////////////////////////

 
        //Statements
        $("#Statements-Present-ToStatementsPast-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Statements-Past-Input', '#Statements-Past-Sentence', '#Statements-Past-Word-', ".");
            SetInputControl2(ScreenId.StatementsPast);
        });

        $("#Statements-Present-ToStatementsFuture-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Statements-Future-Input', '#Statements-Future-Sentence', '#Statements-Future-Word-', ".");
            SetInputControl2(ScreenId.StatementsFuture);
        });

        $("#Statements-Present-ToSwitchPresent-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Switch-Present-Input', '#Switch-Present-Sentence', '#Switch-Present-Word-', "?");
            SetInputControl2(ScreenId.SwitchPresent);
        });

        $("#Statements-Past-ToStatementsPresent-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Statements-Present-Input', '#Statements-Present-Sentence', '#Statements-Present-Word-', ".");
            SetInputControl2(ScreenId.StatementsPresent);
        });

        $("#Statements-Past-ToStatementsFuture-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Statements-Future-Input', '#Statements-Future-Sentence', '#Statements-Future-Word-', ".");
            SetInputControl2(ScreenId.StatementsFuture);
        });

        $("#Statements-Past-ToSwitchPast-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Switch-Past-Input', '#Switch-Past-Sentence', '#Switch-Past-Word-', "?");
            SetInputControl2(ScreenId.SwitchPast);
        });


        $("#Statements-Future-ToStatementsPresent-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Statements-Present-Input', '#Statements-Present-Sentence', '#Statements-Present-Word-', ".");
            SetInputControl2(ScreenId.StatementsPresent);
        });
            
        $("#Statements-Future-ToStatementsPast-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Statements-Past-Input', '#Statements-Past-Sentence', '#Statements-Past-Word-', ".");
            SetInputControl2(ScreenId.StatementsPast);
        });

        $("#Statements-Future-ToSwitchFuture-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Switch-Future-Input', '#Switch-Future-Sentence', '#Switch-Future-Word-', "?");
            SetInputControl2(ScreenId.SwitchFuture);
        });


        
         //Switch to Question
        $("#Switch-Present-ToSwitchPast-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Switch-Past-Input', '#Switch-Past-Sentence', '#Switch-Past-Word-', "?");
            SetInputControl2(ScreenId.SwitchPast);
        });

        $("#Switch-Present-ToSwitchFuture-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Switch-Future-Input', '#Switch-Future-Sentence', '#Switch-Future-Word-', "?");
            SetInputControl2(ScreenId.SwitchFuture);
        });

        $("#Switch-Present-ToStatementsPresent-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Statements-Present-Input', '#Statements-Present-Sentence', '#Statements-Present-Word-', "?");
            SetInputControl2(ScreenId.StatementsPresent);
        });

        $("#Switch-Past-ToSwitchPresent-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Switch-Present-Input', '#Switch-Present-Sentence', '#Switch-Present-Word-', "?");
            SetInputControl2(ScreenId.SwitchPresent);
        });

        $("#Switch-Past-ToSwitchFuture-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Switch-Future-Input', '#Switch-Future-Sentence', '#Switch-Future-Word-', "?");
            SetInputControl2(ScreenId.SwitchFuture);
        });

        $("#Switch-Past-ToStatementsPast-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Statements-Past-Input', '#Statements-Past-Sentence', '#Statements-Past-Word-', "?");
            SetInputControl2(ScreenId.StatementsPast);
        });
        
        $("#Switch-Future-ToSwitchPresent-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Switch-Present-Input', '#Switch-Present-Sentence', '#Switch-Present-Word-', "?");
            SetInputControl2(ScreenId.SwitchPresent);
        });

        $("#Switch-Future-ToSwitchPast-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Switch-Past-Input', '#Switch-Past-Sentence', '#Switch-Past-Word-', "?");
            SetInputControl2(ScreenId.SwitchPast);
        });

        $("#Switch-Future-ToStatementsFuture-Btn").bind("click", function (event, ui) {
            //Set input control on new page to match the existing sentence and display the sentence
            //SetInputControl('#Statements-Future-Input', '#Statements-Future-Sentence', '#Statements-Future-Word-', "?");
            SetInputControl2(ScreenId.StatementsFuture);
        });




       
        //If-Then
        //IfThen-Past-ToIfThenPresent-Btn
        //IfThen-Past-ToIfThenFuture-Btn
        //IfThen-Present-ToIfThenPast-Btn
        //IfThen-Present-ToIfThenFuture-Btn
        //IfThen-Future-ToIfThenPresent-Btn
        //IfThen-Future-ToIfThenPast-Btn

        //Nouns
        //Nouns-Past-ToNounsPresent-Btn
        //Nouns-Past-ToNounsFuture-Btn
        //Nouns-Present-ToNounsPast-Btn
        //Nouns-Present-ToNounsFuture-Btn 
        //Nouns-Future-ToNounsPresent-Btn
        //Nouns-Future-ToNounsPast-Btn

        //Senses
        //Senses-Past-ToSensesPresent-Btn
        //Senses-Past-ToSensesFuture-Btn
        //Senses-Present-ToSensesPast-Btn
        //Senses-Present-ToSensesFuture-Btn
        //Senses-Future-ToSensesPresent-Btn
        //Senses-Future-ToSensesPast-Btn

       
        /// END Tense Switching Buttons //////////////////////////////////////////////////////

        


        /// Configuration Buttons //////////////////////////////////////////////////////
        $("#Configuration-ExitApp-Btn").bind("click", function (event, ui) {
            //alert(Object.keys(navigator));
            try {//try to close the app
                if (navigator.app) {
                    navigator.app.exitApp();
                }
                else if (navigator.device && navigator.device.exitApp) {
                    navigator.device.exitApp();
                }
                else {
                    alert("Not Supported");//window.close();
                }
                 
            }
            catch (err) {
                alert(err);
            }
        });
        /// END Configuration Buttons //////////////////////////////////////////////////////






    },
    onDeviceReady: function() {


        setTimeout(function () {
            $(':mobile-pagecontainer').pagecontainer('change', '#StatementsPresent', {
                transition: 'flip',
                changeHash: false,
                reverse: true,
                showLoadMsg: true
            });
        }, 5000);

        var touchScroll = function (event) {
            event.preventDefault();
        };

        //this will disable the scroll
         $(".Page").bind('touchmove', touchScroll);
        
        
        //Mobiscroll defaults
         var scrollWidth = 1024;//$('#Statements-Present-Content').width() - 10;
         var scrollHeight = $('#Statements-Present-Content').height();
        var numRows = 8;// for fire tablet
        var rowHeight = 60; // for fire
        //alert(scrollWidth);
        if (scrollWidth < 800) {
            numRows = 5;//for small screen
            rowHeight = 30; //for small screen
        }
        var minWidth = 100;
        //alert(scrollHeight + ":" + $(window).height() + "|" + $(window).width());
        var theme = 'jqm';  
        var circular = [false, false, false, false];  
         
		 
        //////////////////////////////////////////////
        //Sentence Present Tense (Page ID = StatementsPresent    Default View)
        //////////////////////////////////////////////
        $('#Statements-Present-Input').mobiscroll().treelist({
            display: 'inline',
            layout: 'liquid',
            maxWidth: scrollWidth,
            rows: numRows,
            showLabel: false,
            theme: theme, 
            height: rowHeight,
            width: minWidth,
            circular: circular,
            onShow: function (html, instance) {
                $("input[id$='_dummy'], .scroll-list label").hide();;//Hide scroller header
            },
            onChange: function (valuetext, inst) {

                var values = inst.getArrayVal();//get currently selected items (as array)
                LastSentenceSelections = values; //save for switching the type of sentence
                //alert(LastSentenceSelections);
                //DisplaySentence('#Statements-Present-Sentence', '#Statements-Present-Word-', ".");
                DisplaySentence2(ScreenId.StatementsPresent);
            },
            onInit: function (event, inst) {
                lastValues = inst.getArrayVal();
                //alert(inst.getArrayVal());
            }
        }); 

         
        //////////////////////////////////////////////
        //Sentence Past Tense (Page ID = StatementsPast)
        //////////////////////////////////////////////
        $('#Statements-Past-Input').mobiscroll().treelist({
            display: 'inline',
            layout: 'liquid',
            maxWidth: scrollWidth,
            rows: numRows,
            showLabel: false,
            theme: theme,
            height: rowHeight,
            width: minWidth,
            circular: circular,
            onShow: function (html, instance) {
                $("input[id$='_dummy'], .scroll-list label").hide();;//Hide scroller header
            },
            onChange: function (valuetext, inst) {

                var values = inst.getArrayVal(); //get valeus of selected items (as array)
                LastSentenceSelections = values; //save for switching the type of sentence

                //DisplaySentence('#Statements-Past-Sentence', '#Statements-Past-Word-', ".");
                DisplaySentence2(ScreenId.StatementsPast);
            },
            onInit: function (event, inst) {
                lastValues = inst.getArrayVal();
                //alert(inst.getArrayVal());
            }
        });


        //////////////////////////////////////////////
        //Sentence Future Tense (Page ID = StatementsFuture)
        //////////////////////////////////////////////
        $('#Statements-Future-Input').mobiscroll().treelist({
            display: 'inline',
            layout: 'liquid',
            maxWidth: scrollWidth,
            rows: numRows,
            showLabel: false,
            theme: theme,
            height: rowHeight,
            width: minWidth,
            circular: circular,
            onShow: function (html, instance) {
                $("input[id$='_dummy'], .scroll-list label").hide();//Hide scroller header
            },
            onChange: function (valuetext, inst) {

                var values = inst.getArrayVal(); //get valeus of selected items (as array)
                LastSentenceSelections = values; //save for switching the type of sentence

                //DisplaySentence('#Statements-Future-Sentence', '#Statements-Future-Word-', ".");
                DisplaySentence2(ScreenId.StatementsFuture);
            },
            onInit: function (event, inst) {
                lastValues = inst.getArrayVal();
                //alert(inst.getArrayVal());
            }
        });

        //////////////////////////////////////////////
        //Question Past Tense (Page ID = SwitchPast)
        //////////////////////////////////////////////
        $('#Switch-Past-Input').mobiscroll().treelist({
            display: 'inline',
            layout: 'liquid',
            maxWidth: scrollWidth,
            rows: numRows,
            showLabel: false,
            theme: theme,
            height: rowHeight,
            width: minWidth,
            circular: circular,
            onShow: function (html, instance) {
                $("input[id$='_dummy'], .scroll-list label").hide();;//Hide scroller header
            },
            onChange: function (valuetext, inst) {

                var values = inst.getArrayVal(); //get valeus of selected items (as array)
                LastSentenceSelections = values; //save for switching the type of sentence

                //DisplaySentence('#Switch-Past-Sentence', '#Switch-Past-Word-', ".");
                DisplaySentence2(ScreenId.SwitchPast);
            },
            onInit: function (event, inst) {
                lastValues = inst.getArrayVal();
                //alert(inst.getArrayVal());
            }
        });

        //////////////////////////////////////////////
        //Question Present Tense (Page ID = SwitchPresent    Default View)
        //////////////////////////////////////////////
        $('#Switch-Present-Input').mobiscroll().treelist({
            display: 'inline',
            layout: 'liquid',
            maxWidth: scrollWidth,
            rows: numRows,
            showLabel: false,
            theme: theme,
            height: rowHeight,
            width: minWidth,
            circular: circular,
            onShow: function (html, instance) {
                $("input[id$='_dummy'], .scroll-list label").hide();;//Hide scroller header
            },
            onChange: function (valuetext, inst) {

                var values = inst.getArrayVal();//get currently selected items (as array)
                LastSentenceSelections = values; //save for switching the type of sentence

                //DisplaySentence('#Switch-Present-Sentence', '#Switch-Present-Word-', ".");
                DisplaySentence2(ScreenId.SwitchPresent);
            },
            onInit: function (event, inst) {
                lastValues = inst.getArrayVal();
                //alert(inst.getArrayVal());
            }
        });



        //////////////////////////////////////////////
        //Question Future Tense (Page ID = SwitchFuture)
        //////////////////////////////////////////////
        $('#Switch-Future-Input').mobiscroll().treelist({
            display: 'inline',
            layout: 'liquid',
            maxWidth: scrollWidth,
            rows: numRows,
            showLabel: false,
            theme: theme,
            height: rowHeight,
            width: minWidth,
            circular: circular,
            onShow: function (html, instance) {
                $("input[id$='_dummy'], .scroll-list label").hide();//Hide scroller header
            },
            onChange: function (valuetext, inst) {

                var values = inst.getArrayVal(); //get valeus of selected items (as array)
                LastSentenceSelections = values; //save for switching the type of sentence

                //DisplaySentence('#Switch-Future-Sentence', '#Switch-Future-Word-', ".");
                DisplaySentence2(ScreenId.SwitchFuture);
            },
            onInit: function (event, inst) {
                lastValues = inst.getArrayVal();
                //alert(inst.getArrayVal());
            }
        });







    },



};
