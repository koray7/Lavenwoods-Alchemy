# Welcome to Lavenwoods Alchemy!

## App name: Lavenwoods Alchemy
Welcome to Lavenwoods Alchemy! If you're in search of a potion brewery, you've choosen the right shop! Within our shop, you can summon four mages, possessing different elemental sorcery! You can choose a mage, learn a little bit about them, and then brew a potion with their element! You can choose your potion name, the effects the potion contain, and then your favorite mage will synthesize your brew! You will be able to find your brew within your potion bag; you can drink your potion, edit your potion attributes, or dump it out! The possibilities of your potions are endless! Enjoy Lavenwoods Alchemy!


## Images of Lavenwoods Alchemy


## User stories
• As a user, I want to find Lavenwoods Alchemy and enter the shop.
• As a user, I want to be able to summon mages to help me brew my potion. 
• As a user, I want to be able to name my potion and create effects.
• As a user, I want to see my potion once its done.
• As a user, I want to be able to make another potion once I am done making one potion.

## MVP goals list
• Main page with clickable list of Mages
• Create Mage button
• View Potion bag button
• Going back button
• Click on mage: Brought to a page with information about that mage
  • POTION NAME
  • Text field
• RadioButton for predetermined potion element
  • Flame
  • Lightning
  • Frost
  • Mystery
• TextArea for custom potion effects
• “Create Potion” button
• Potion index page with list of potions you created
• Click on potion to “show” potion name and effects.
• Back to main page button

## Stretch Goals
• I want to be able to learn more about each mage before I brew my potion.
• I want a place where I can view the potions I've made.
• I want to be able to use different ingredients for my potion.
• I want to be able to create a potion from scratch without the help of a mage.
• I want to be able to combine elements.

## Database ERD diagrams


![Screen Shot 2022-01-21 at 3 02 51 PM](https://user-images.githubusercontent.com/95322104/150820966-1bc46ed4-943b-4981-a690-503f631a09f6.png)


## RESTful routing chart for each database resource

![Screen Shot 2022-01-24 at 10 22 34 AM](https://user-images.githubusercontent.com/95322104/150822426-94e23d33-615e-4986-b2de-151aa9c08cde.png)



Api ideas: On potion create page, wizard says “ Ok let’s get this potion started.  You know, I heard the weirdest thing the other day.  [Random fact api here]”Returns the plain text version of a random fact.
Request type:
GET https://ffa.aakhilv.me/text
