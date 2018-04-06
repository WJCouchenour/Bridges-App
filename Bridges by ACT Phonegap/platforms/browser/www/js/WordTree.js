//Row 1 Statements Present tense
var StateR1PresentKeys =['R11|I am', 'R12|You are', 'R13|He is', 'R14|She is'];
var StateR1PresentValues =['I am', 'You are', 'He is', 'She is'];
//Row 2 Statements Present Tense
var StateR2PresentIndex = ['R21|StateR2Present_Iam_Keys','R22|StateR2Present_Youare_Keys','R23|StateR2Present_Heis_Keys','R24|StateR2Present_Sheis_Keys']
var StateR2Present_Iam_Keys = ['R211|happy', 'R212|peaceful', 'R213|sad', 'R214|angry', 'R215|frustrated', 'R216|scared', 'R217|proud'];
var StateR2Present_Iam_Values = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Present_Youare_Keys = ['R221|happy', 'R222|peaceful', 'R223|sad', 'R224|angry', 'R225|frustrated', 'R226|scared', 'R227|proud'];
var StateR2Present_Youare_Values = ['hateful', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Present_Heis_Keys = ['R231|happy', 'R232|peaceful', 'R233|sad', 'R234|angry', 'R235|frustrated', 'R236|scared', 'R237|proud'];
var StateR2Present_Heis_Values = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Present_Sheis_Keys = ['R241|happy', 'R242|peaceful', 'R243|sad', 'R244|angry', 'R245|frustrated', 'R246|scared', 'R247|proud'];
var StateR2Present_Sheis_Values = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];

//Row 3 Statements Present Tense
//I am
var StateR3Present_Iamhappy_Keys = ['R311|about'];
var StateR3Present_Iamhappy_Values = ['about'];
var StateR3Present_Iampeaceful_Keys = ['R321|when', 'R322|because'];
var StateR3Present_Iampeaceful_Values = ['when', 'because'];
var StateR3Present_Iamsad_Keys = ['about', 'that', 'becasue'];
var StateR3Present_Iamangry_Keys = ['about', 'becasue', 'so'];
var StateR3Present_Iamfrustrated_Keys = ['about','when', 'that'];
var StateR3Present_Iamscared_Keys = ['that', 'of', 'becasue'];
var StateR3Present_Iamproud_Keys = ['about', 'that', 'when', 'of'];

//You are
var StateR3Present_Youarehappy_Keys = ['about'];
var StateR3Present_Youarepeaceful_Keys = ['when', 'because'];
var StateR3Present_Youaresad_Keys = ['about', 'that', 'because'];
var StateR3Present_Youareangry_Keys = ['about', 'becasue'];
var StateR3Present_Youarefrustrated_Keys = ['about', 'when', 'that'];
var StateR3Present_Youarescared_Keys = ['that', 'of', 'because'];
var StateR3Present_Youareproud_Keys = ['about', 'that', 'when'];

//He is
var StateR3Present_Heishappy_Keys = ['about'];
var StateR3Present_Heispeaceful_Keys = ['when', 'because'];
var StateR3Present_Heissad_Keys = ['about', 'that', 'becasue'];
var StateR3Present_Heisangry_Keys = ['about', 'becasue'];
var StateR3Present_Heisfrustrated_Keys = ['about', 'when', 'that'];
var StateR3Present_Heisscared_Keys = ['that', 'of'];
var StateR3Present_Heisproud_Keys = ['about', 'that', 'when'];

//She is
var StateR3Present_Sheishappy_Keys = ['about'];
var StateR3Present_Sheispeaceful_Keys = ['when', 'because'];
var StateR3Present_Sheissad_Keys = ['about', 'that', 'becasue'];
var StateR3Present_Sheisangry_Keys = ['about', 'becasue'];
var StateR3Present_Sheisfrustrated_Keys = ['about', 'when', 'that'];
var StateR3Present_Sheisscared_Keys = ['that', 'of'];
var StateR3Present_Sheisproud_Keys = ['about', 'that', 'when'];

//It is
//var StateR3Present_Itishappy_Keys = ['', '', '', '', '', '', ''];
var StateR3Present_Itispeaceful_Keys = ['when', 'because'];
var StateR3Present_Itissad_Keys = ['that'];
var StateR3Present_Itisangry_Keys = ['about', 'becasue'];
var StateR3Present_Itisfrustrating_Keys = ['when'];
//var StateR3Present_Itisscared_Keys = ['', '', '', '', '', '', ''];
var StateR3Present_Itisproud_Keys = ['about', 'that', 'when'];

//We are
var StateR3Present_Wearehappy_Keys = ['about'];
var StateR3Present_Wearepeaceful_Keys = ['when', 'because'];
var StateR3Present_Wearesad_Keys = ['about', 'that', 'becasue'];
var StateR3Present_Weareangry_Keys = ['about', 'becasue'];
var StateR3Present_Wearefrustrated_Keys = ['about', 'when', 'that'];
var StateR3Present_Wearescared_Keys = ['that', 'of'];
var StateR3Present_Weareproud_Keys = ['about', 'that', 'when'];

//They are
var StateR3Present_Theyarehappy_Keys = ['about'];
var StateR3Present_Theyarepeaceful_Keys = ['when', 'because'];
var StateR3Present_Theyaresad_Keys = ['about', 'that', 'becasue'];
var StateR3Present_Theyareangry_Keys = ['about', 'becasue'];
var StateR3Present_Theyarefrustrated_Keys = ['about', 'when', 'that'];
var StateR3Present_Theyarescared_Keys = ['that', 'of', 'so'];
var StateR3Present_Theyareproud_Keys = ['about', 'that'];



//Row 4 Statements Present Tense
//I am happy
var StateR4Present_Iamhappyabout_Keys = ['R411|the weather','R412|you','R413|dinner','R414|going out','R415|how I am behaving today','R416|making a new friend'];
var StateR4Present_Iamhappyabout_Values = ['the weather','you','dinner','going out','how I am behaving today','making a new friend'];

//I am peaceful
var StateR3Present_Iampeacefulwhen_Keys = ['it is quiet',
                                            'I am all alone',
                                            'I am with friends',
                                            'I am with my pet',
                                            'the music is playing',
                                            'I feel I can succeed',
                                            'I am in control'];
var StateR3Present_Iampeacefulbecasue_Keys = ['people are leaving me alone',
                                                'you forgave me',
                                                'people accept me for who I am',
                                                'I am with friends',
                                                'you have faith in me',
                                                'I made a friend',
                                                'I am in control'];

//I am sad
var StateR3Present_Iamsadabout_Keys = [''];
var StateR3Present_Iamsadthat_Keys = [''];
var StateR3Present_Iamsadbecasue_Keys = [''];

//I am angry
var StateR3Present_Iamangryabout_Keys = [''];
var StateR3Present_Iamangrybecasue_Keys = [''];
var StateR3Present_Iamangryso_Keys = [''];

//I am frustrated
var StateR3Present_Iamfrustratedabout_Keys = [''];
var StateR3Present_Iamfrustratedwhen_Keys = [''];
var StateR3Present_Iamfrustratedthat_Keys = [''];

//I am scared
var StateR3Present_Iamscaredthat_Keys = [''];
var StateR3Present_Iamscaredof_Keys = [''];
var StateR3Present_Iamscaredbecause_Keys = [''];

//I am proud
var StateR3Present_Iamproudabout_Keys = [''];
var StateR3Present_Iamproudthat_Keys = [''];
var StateR3Present_Iamproudwhen_Keys = [''];
var StateR3Present_Iamproudof_Keys = [''];



//Row 1 Statements Past tense

var StateR1PastKeys = ['R11|I was', 'R12|You were', 'R13|He was', 'R14|She was'];
var StateR1PastValues = ['I was', 'You were', 'He was', 'She was'];

//Row 2 Statements Past Tense
var StateR2PastIndex = ['R21|StateR2Present_Iwas_Keys','R22|StateR2Past_Youwere_Values','R23|StateR2Past_Hewas_Values','R24|StateR2Past_Shewas_Values'];

var StateR2Past_Iwas_Keys = ['R211|happy', 'R212|peaceful', 'R213|sad', 'R214|angry', 'R215|frustrated', 'R216|scared', 'R217|proud'];
var StateR2Past_Iwas_Values = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Past_Youwere_Keys = ['R221|happy', 'R222|peaceful', 'R223|sad', 'R224|angry', 'R225|frustrated', 'R226|scared', 'R227|proud'];
var StateR2Past_Youwere_Values = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Past_Hewas_Keys = ['R231|happy', 'R232|peaceful', 'R233|sad', 'R234|angry', 'R235|frustrated', 'R236|scared', 'R237|proud'];
var StateR2Past_Hewas_Values = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Past_Shewas_Keys = ['R241|happy', 'R242|peaceful', 'R243|sad', 'R244|angry', 'R245|frustrated', 'R246|scared', 'R247|proud'];
var StateR2Past_Shewas_Values = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];

//Row 1 Statements Future tense
var StateR1FutureKeys = ['I will be', 'You will be', 'He will be', 'She will be', 'It will be', 'We will be', 'They will be'];

//Row 2 Statements Future Tense
var StateR2Future_Iwillbe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Future_Youwillbe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Future_Hewillbe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Future_Shewillbe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Future_Itwillbe_Keys = ['peaceful', 'sad', 'angry', 'frustrating', 'proud'];
var StateR2Future_Wewillbe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Future_Theywillbe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];

//Row 1 Questions
var StateR1QuestionKeys = ['Will I be', 'Will you be', 'Will he be', 'Will she be', 'Will it be', 'Will we be', 'Will they be'];

//Row 2 Questions
var StateR2Question_WillIbe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Question_Willyoube_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Question_Willhebe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Question_WilShebe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Question_Willitbe_Keys = ['peaceful', 'sad', 'angry', 'frustrating', 'proud'];
var StateR2Question_Willwebe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
var StateR2Question_Willtheybe_Keys = ['happy', 'peaceful', 'sad', 'angry', 'frustrated', 'scared', 'proud'];
