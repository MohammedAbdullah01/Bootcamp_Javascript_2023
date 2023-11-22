/*
What Is JSON ?
    - Javascript Object Notation
    - Format For Sharing Data Between Server And Client 
    - JSON Drived From Javascript 
    - Alternative To XML 
    - File Extension Is .json

Why JSON ?
    - Esay To Use and Read 
    - Used By Most Programming Languages and Its Frameworks 
    - You Can Convert JSON Object To Js Object and Vice Versa


JSON VS XML
===============================================
= Text Based Format     =  Markup Language    =
= Lightweight           =  Heavier            =
= Dont Use Tags         =  Using Tags         =
= Shorter               =  Not Shorter        =
= Can Use Array         =  Cannot Use Arrays  =
= Not Support Comments  =  Support Commenrts  =
===============================================

JavaScript has a built in function for converting JSON strings into JavaScript objects:

JSON.parse()

JavaScript also has a built in function for converting an object into a JSON string:

JSON.stringify()
*/

///////////////////////// Example JSON /////////////////////////

// {
//     "quiz": {
//         "sport": {
//             "q1": {
//                 "question": "Which one is correct team name in NBA?",
//                 "options": [
//                     "New York Bulls",
//                     "Los Angeles Kings",
//                     "Golden State Warriros",
//                     "Huston Rocket"
//                 ],
//                 "answer": "Huston Rocket"
//             }
//         },
//         "maths": {
//             "q1": {
//                 "question": "5 + 7 = ?",
//                 "options": [
//                     "10",
//                     "11",
//                     "12",
//                     "13"
//                 ],
//                 "answer": "12"
//             },
//             "q2": {
//                 "question": "12 - 8 = ?",
//                 "options": [
//                     "1",
//                     "2",
//                     "3",
//                     "4"
//                 ],
//                 "answer": "4"
//             }
//         }
//     }
// }

///////////////////////// Example XML /////////////////////////:

// <?xml version="1.0" encoding="UTF-8"?>
// <breakfast_menu>
// <food>
//     <name>Belgian Waffles</name>
//     <price>$5.95</price>
//     <description>
//    Two of our famous Belgian Waffles with plenty of real maple syrup
//    </description>
//     <calories>650</calories>
// </food>
// <food>
//     <name>Strawberry Belgian Waffles</name>
//     <price>$7.95</price>
//     <description>
//     Light Belgian waffles covered with strawberries and whipped cream
//     </description>
//     <calories>900</calories>
// </food>
// <food>
//     <name>Berry-Berry Belgian Waffles</name>
//     <price>$8.95</price>
//     <description>
//     Belgian waffles covered with assorted fresh berries and whipped cream
//     </description>
//     <calories>900</calories>
// </food>
// <food>
//     <name>French Toast</name>
//     <price>$4.50</price>
//     <description>
//     Thick slices made from our homemade sourdough bread
//     </description>
//     <calories>600</calories>
// </food>
// <food>
//     <name>Homestyle Breakfast</name>
//     <price>$6.95</price>
//     <description>
//     Two eggs, bacon or sausage, toast, and our ever-popular hash browns
//     </description>
//     <calories>950</calories>
// </food>
// </breakfast_menu>
