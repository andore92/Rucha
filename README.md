# Rucha is a simple chat app made with bootstrap, jquery, sequelize, and socket.io located at https://shrouded-mesa-73983.herokuapp.com

Users can create their own accounts, their own chat rooms, and also join chatrooms created by other users.

To use the service, users must have a valid login that they create via the Register button on the landing page when they first load up the app.
When a user logs into the page, they are presented with an option to join any existing chatroom or create their own. 

By joining the chatroom, users can see which users are currently typing, along with all messages starting from the moment they join the room.
Users can navigate back to the home page by clicking "Rucha" at the top of the navbar.

For future implementation, the app should fix the major problems currently facing it.
-Messages are currently not saved, and will disappear if the page is refreshed

-The chatbox expands as more messages are added to it, however, the box does not automatically scroll as it expands, forcing users to do it manually

-There is currently no way to search all available rooms, allowing rooms to have a category and allowing searches by categories or name will fix this

-The session based login system times out after one hour or upon closing out the app currently, but when a time out does occur it does not re-direct users back to the login page

-Allowing rooms to have descriptions may increase the overall experience for users

-Social features that allow people to friend each other, track to their friends, see when they're online, and what rooms they're in
